/* import { Product } from "@/types/types";

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await fetch('https://electronics-rtk-backend-zonaetmunna.vercel.app/api/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data; // Return the retrieved data
    } catch (error) {
        console.log(error);
        return []; // Return an empty array or handle the error case appropriately
    }
} */