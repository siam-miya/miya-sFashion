import React from "react";
import aboutImg from "../assets/bag-2.jpg"; // apnar image

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-green-600 mb-12">
          About Us
        </h1>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={aboutImg}
              alt="About Miya's Fashion"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to Miya's Fashion
            </h2>
            <p className="text-gray-700 mb-4">
              We provide high-quality and stylish bags at affordable prices.
              Our goal is to deliver premium fashion products with excellent
              customer service.
            </p>
            <p className="text-gray-700">
              We believe in quality, trust, and long-term relationships with our
              customers. Your satisfaction is our priority.
            </p>
          </div>
        </div>

        {/* Section 2 - Features */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-green-600">Quality</h3>
            <p>Premium materials and long-lasting durability.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-green-600">Affordable</h3>
            <p>Best price guaranteed for everyone.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-green-600">Fast Delivery</h3>
            <p>Quick and secure nationwide shipping.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
export default About;
