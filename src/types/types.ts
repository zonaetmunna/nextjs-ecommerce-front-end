// ------------------account-------------//
export interface IAuthInitState {
  user: IAuthData | null;
  isLoading: true | false;
  isError: true | false;
  error: string | null;
  status: "idle" | "pending" | "success" | "error";
}

// auth login interface
export interface IAuthData {
  _id: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  role: string;
  status?: string;
  imageURL?: string;
  token: string;
}

// types signup data
export interface ISignUpData {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  phone?: string;
  role?: string;
  status?: string;
  profileImage?: string;
}
export interface ILoginData {
  email: string;
  password: string;
}

interface IAuthTotalData {
  data: IAuthData[] | null;
  isLoading: true | false;
  isError: true | false;
  error: string | null;
  status: "idle" | "pending" | "success" | "error";
}

// products
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  image: string;
  otherImages: string[];
  category: string;
  price: number;
  stock: number;
  rating: number;
  brand: string;
  color: string[];
  size: string[];
  quantity: number;
}

export interface IResponseProduct {
  data: {
    count: number;
    totalPage: number | null;
    products: IProduct[];
  };
  message: string;
  error: boolean;
  token: string | null;
}

export interface IResponseProductSingle {
  data: IProduct;
  message: string;
  error: boolean;
  token: string | null;
}

export interface IQueryParams {
  category?: ICategory | string;
  search?: string;
  page?: number;
  limit?: number;
  price?: number; // Example: '0-50'
  rating?: number;
  brand?: string;
  color?: string;
  size?: string;
}

// cart
export interface ICartState {
  cart: IProduct[];
  shippingOption: string;
  shippingCost: number;
  discountCode: string;
  subtotal: number;
  total: number;
  billingAddress: IBillingAddress;
}

export interface IBillingAddress {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  country?: string;
  city?: string;
  zip?: number;
}

// ----------wishlist-------//
export interface IWishlistState {
  wishlist: IProduct[];
}

// --------------category--------------//
export interface ICategory {
  _id?: string;
  name: string;
  imageUrl: string;
}

export interface IResponseCategories {
  error: boolean;
  data: {
    count: number;
    totalPage: number | null;
    categories: ICategory[];
  };
  message: string;
  token: string | null;
}

export interface IResponseCategorySingle {
  error: boolean;
  data: ICategory;
  message: string | null;
  token: string | null;
}

// blogs
export interface IBlog {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
}
