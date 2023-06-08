"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 text-dark">
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10" /> */}
        <h1 className="ml-2 text-lg font-semibold">My App</h1>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-md bg-gray-200 focus:bg-white focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
  <Link href="/cart">

      <FaShoppingCart className="w-5 h-5" />
   
  </Link>
  <Link href="/wishlist">
    
      <FaHeart className="w-5 h-5" />
    
  </Link>
  <Link href="/login">
   
      <FaUser className="w-5 h-5" />
   
  </Link>
</div>

      <div className="md:hidden flex items-center">
        <button
          className="p-2 rounded-md bg-gray-200"
          onClick={toggleMenu}
        >
          <FaBars className="w-5 h-5" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          <a href="#" className="text-white">Link 1</a>
          <a href="#" className="text-white">Link 2</a>
          <a href="#" className="text-white">Link 3</a>
        </div>
      )}
    </nav>
  );
}
