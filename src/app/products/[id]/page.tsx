import { Product } from "@/types/types";

type Params = {
  params: {
    id: string;
  };
};

export default async function ProductDetails({ params: { id } }: Params) {
  // const navigation = useNavigation();
  // const { id } = navigation.query;
  const response = await fetch(
    `https://electronics-rtk-backend-zonaetmunna.vercel.app/api/products/${id}`
  );
  const data: Product = await response.json();

  return (
    <div>
      <div>{data._id}</div>
      <div>{data.name}</div>
      <div>{data.model}</div>
    </div>
  );
}
