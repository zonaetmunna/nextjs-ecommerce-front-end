"use client";

import { logOut } from "@/features/auth/authSlice";
import { RootState } from "@/features/store";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  // user from redux
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  console.log(user);
  console.log(user?._id);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleButtonClick = () => {
    setShowLinks(!showLinks); // Toggle the visibility of links
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <nav
      onClick={() => setShowLinks(false)}
      className="flex items-center justify-between p-4 bg-gray-100 text-dark"
    >
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="w-10 h-10" /> */}
        <Link href="/" className="ml-2 text-lg font-semibold">
          My App
        </Link>
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
        {!user?.email && (
          <Link href="/login" className="mx-2">
            Login
          </Link>
        )}

        {user?.role === "admin" && (
          <Link href="/dashboard" className="mx-2">
            Admin Dashboard
          </Link>
        )}

        {user?.role === "user" && (
          <div className="relative">
            <button
              onClick={handleButtonClick}
              className="mx-2 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <VscAccount size={20} />
              {showLinks && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Settings
                  </Link>
                  <button
                    className="block px-4 py-2 text-gray-600 hover:text-gray-800"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              )}
            </button>
          </div>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button className="p-2 rounded-md bg-gray-200" onClick={toggleMenu}>
          <FaBars className="w-5 h-5" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          <a href="#" className="text-white">
            Link 1
          </a>
          <a href="#" className="text-white">
            Link 2
          </a>
          <a href="#" className="text-white">
            Link 3
          </a>
        </div>
      )}
    </nav>
  );
}
