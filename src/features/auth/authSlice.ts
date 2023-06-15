import { IAuthData, IAuthInitState, ILoginData, ISignUpData } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: IAuthInitState = {
    user: null,
    isLoading: false,
    isError: false,
    error: "",
    status: "idle",
  };

  
  export const signupUser = createAsyncThunk<IAuthData, ISignUpData>(
    "auth/signupUser",
    async (SignUpData, { rejectWithValue }) => {
      try {
        // const response = await axios.post('/signup', userData);
        const response = await axios.post(`http://localhost:5004/api/v1/auth/signup`, SignUpData)
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        console.log(response.data.data)
        return response.data.data;
  
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  export const loginUser = createAsyncThunk<IAuthData, ILoginData>(
    "auth/loginUser",
    async (LoginData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`http://localhost:5004/api/v1/auth/login`, LoginData);
        // const response = await httpReq.post('/auth/login', LoginData)
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        console.log(response.data.data);
        console.log(response.data);
        return response.data.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      logOut: (state) => {
        state.user = null
      },
      subscribedUser: (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      }
  
    },
    extraReducers: (builder) => {
      builder
        .addCase(signupUser.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.error = null;
        })
        .addCase(signupUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.error = null;
        })
        .addCase(signupUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message as string;
        })
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message as string;
        })
    }
  });
  
  export const { logOut, subscribedUser } = authSlice.actions;
  export default authSlice.reducer;