import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="font-bold text-lg mb-4">Miya's Fashion</h2>
            <p>High-quality shirts, pants, and jerseys at affordable prices.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-lg mb-4">Quick Links</h2>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold text-lg mb-4">Contact Us</h2>
            <p>Email: support@miya-fashion.com</p>
            <p>Phone: +880 1234 567890</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-200">Facebook</a>
              <a href="#" className="hover:text-gray-200">Instagram</a>
              <a href="#" className="hover:text-gray-200">Twitter</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-green-400 pt-4">
          &copy; {new Date().getFullYear()} Miya's Fashion. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;