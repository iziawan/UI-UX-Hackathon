
import React from 'react';
import Image from 'next/image';

export default function Blog() {
  return (
    <main className="min-h-screen w-full">
      {/* Header Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32"
        style={{ backgroundImage: "url(/shop-page.png)" }}
      >
        <div className="text-center mt-16 md:mt-20">
          <Image
            src="/llogo-shop.png"
            alt="logo-image"
            className="mx-auto"
            height={100}
            width={100}
          />
          <h1 className="text-4xl md:text-6xl font-semibold">Blog</h1>
          <div className="flex justify-center space-x-4 text-black mt-2">
            <span className="font-bold">Home</span>
            <span className="font-bold">Shop</span>
          </div>
        </div>
      </div>

      {/* Blog Images Section */}
      <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 mt-10 space-y-8">
        {[1, 2, 3].map((num) => (
          <div key={num} className="w-full max-w-4xl">
            <Image
              src={`/blog${num}.png`}
              alt={`Blog ${num}`}
              className="object-cover rounded-md"
              height={500}
              width={800}
            />
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <div className="flex flex-col items-center mt-10 px-4 sm:px-8 md:px-16 lg:px-32 md:flex-row md:justify-between">
        <div className="w-full md:w-1/3">
          <label
            htmlFor="password"
            className="block text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full h-12 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
          />
          {/* Categories Section */}
          <div className="flex flex-col gap-4 mt-8">
            <h2 className="text-2xl font-semibold">Categories</h2>
            {["Crafts", "Design", "Handmade", "Crafts", "Wood"].map((category, idx) => (
              <p key={idx} className="text-gray-400">
                {category}
              </p>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mt-10 md:mt-0 md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 1, 2].map((num, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <Image
                  src={`/blog${num}.png`}
                  alt={`Blog ${num}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold">Explore new ways of decorating</p>
                  <span className="text-gray-400">03 Aug 2022</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-pink-50 py-12 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            { title: "Free Delivery", desc: "For all orders $50" },
            { title: "90 Days Return", desc: "If goods have a problem" },
            { title: "Secure Payment", desc: "100% secure payment" },
          ].map((feature, idx) => (
            <div key={idx}>
              <h1 className="font-semibold text-xl md:text-2xl">{feature.title}</h1>
              <p className="text-gray-500 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
