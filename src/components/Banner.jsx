import React from "react";
import bannerImg from "../assets/bag-1.jpg"; // apnar image path

const Banner = () => {
  return (
    <div
      className="relative h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Miya's Fashion
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover Premium Bags at Affordable Prices
        </p>
        <button className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;