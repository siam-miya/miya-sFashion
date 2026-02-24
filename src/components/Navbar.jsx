import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = ({cartCount}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
            Miya's Fashion
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
           <Link to={"/"}>Home</Link>
           <Link to={"/about"}>About</Link>
           <Link className="relative" to={"/cart"}>Cart
              {cartCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}</Link>
           <Link to={"/contact"}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-green-500">
          <a href="#" className="block px-3 py-2 rounded hover:bg-green-600">Home</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-green-600">Products</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-green-600">About</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-green-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
