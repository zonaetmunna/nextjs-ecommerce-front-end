"use client";
import Link from "next/link";

export default function SeconedNavbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 shadow-lg border-gray-200 border-t-0">
      <div className="flex items-center">{/* select category */}</div>

      <div className="flex items-center space-x-4">
        <Link href="/">
          <p className="px-2 py-1 rounded-md hover:bg-gray-200">Home</p>
        </Link>
        <Link href="/contact">
          <p className="px-2 py-1 rounded-md hover:bg-gray-200">Contact</p>
        </Link>
        <Link href="/blogs">
          <p className="px-2 py-1 rounded-md hover:bg-gray-200">Blog</p>
        </Link>
        <Link href="/products">
          <p className="px-2 py-1 rounded-md hover:bg-gray-200">Product</p>
        </Link>
      </div>
    </nav>
  );
}
