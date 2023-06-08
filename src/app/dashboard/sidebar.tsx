import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-100">
      <div className="flex items-center justify-center h-16 w-full border-b border-gray-300">
        <span className="font-bold text-xl">My Dashboard</span>
      </div>
      <div className="flex-grow overflow-y-auto">
        <nav className="flex flex-col mt-8">
          <Link href="/dashboard">
            <p className="mx-4 my-2 p-2 rounded-md hover:bg-gray-200">Dashboard</p>
          </Link>
          <Link href="/dashboard/categories">
            <p className="mx-4 my-2 p-2 rounded-md hover:bg-gray-200">Categories</p>
          </Link>
          <Link href="/dashboard/products">
            <p className="mx-4 my-2 p-2 rounded-md hover:bg-gray-200">Products</p>
          </Link>
          <Link href="/dashboard/customers">
            <p className="mx-4 my-2 p-2 rounded-md hover:bg-gray-200">
              Customers
            </p>
          </Link>
          <Link href="/dashboard/invoice">
            <p className="mx-4 my-2 p-2 rounded-md hover:bg-gray-200">
              Invoice
            </p>
          </Link>
          <Link href="/dashboard/makeAdmin">
            <p className="mx-4 my-2 p-2 rounded-md hover:bg-gray-200">
              Make-Admin
            </p>
          </Link>
          <Link href="/dashboard/messages">
            <p className="mx-4 my-2 p-2 rounded-md hover:bg-gray-200">
              Messages
            </p>
          </Link>
          <Link href="/dashboard/orders">
            <p className="mx-4 my-2 p-2 rounded-md hover:bg-gray-200">
              Orders
            </p>
          </Link>
        </nav>
      </div>
    </div>
  );
}
