"use client";
import { signupUser } from "@/features/auth/authSlice";
import { AppDispatch } from "@/features/store";
import { ISignUpData } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpData>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: ISignUpData) => {
    const signUpData = {
      firstName: data.firstName,
      email: data.email,
      password: data.password,
    };
    // Handle signup logic here
    dispatch(signupUser(signUpData));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.firstName && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Signup
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login">
            <p className="text-blue-500 hover:underline">Go to Login</p>
          </Link>
        </p>
      </div>
    </div>
  );
}
