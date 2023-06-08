import Banner from "./banner";
import ProductCard from "./productCard";

export default async function Home() {
  const response = await fetch(
    "https://electronics-rtk-backend-zonaetmunna.vercel.app/api/products"
  );
  const products: Product[] = await response.json();

  /* const {data,error,isError}=useGetProductsQuery({});
  const products=data?.data.products; */

  return (
    <main className="">
      <Banner />
      <div className="grid grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}
