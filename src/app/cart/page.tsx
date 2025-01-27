import React from 'react'
import Image from 'next/image'
import { FaTrash } from "react-icons/fa";
export default function Cart() {
  return (
    <main className="h-full w-full">
    <div
      className="w-full h-[500] relative bg-cover bg-center flex  items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32]"
      style={{ backgroundImage: "url(/shop-page.png)" }}
    >
      <div className="mt-16">
        <Image
          src="/llogo-shop.png"
          alt="logo-iamge"
          className="w-24 h-24 ml-7 mt-8"
          height={250}
          width={350}
        />
        <h1 className="text-6xl  font-semibold">Cart</h1>
        <div className="text-black mt-1 ml-6">
          <span className="font-bold mr-20 absolute mt-4">home </span>{" "}
          <span className="ml-14 absolute mt-4">cart</span>
        </div>
      </div>
    </div>

    
    <div className="min-h-full w-full p-5 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1">
          <div className="bg-pink-50 rounded-lg shadow-md p-4 flex justify-between items-center text-center">
            <span className="font-semibold text-gray-800">Product</span>
            <span className="font-semibold text-gray-800">Price</span>
            <span className="font-semibold text-gray-800">Quantity</span>
            <span className="font-semibold text-gray-800">Subtotal</span>
          </div>

          {/* Product row */}
          <div className="flex flex-col md:flex-row items-center justify-between  h-[500px]  mt-4 p-4 rounded-lg shadow-md gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/Asgaard sofa 1.png"
                alt="Asgaard Sofa"
                width={80}
                height={80}
                className="w-20 h-20 object-cover bg-[rgb(243,232,197)] rounded-md"
              />
              <span className="font-medium text-gray-800">Asgaard Sofa</span>
            </div>
            <span className="text-gray-800">Rs.250,000</span>
            <button className="w-16 h-10 border border-gray-400 text-gray-800 rounded-md text-center">
              1
            </button>
            <span className="text-gray-800">Rs.250,000</span>
            <FaTrash className="text-red-500 cursor-pointer hover:text-red-600" />
          </div>
        </div>

        {/* Cart summary */}
        <div className="bg-pink-50 rounded-lg shadow-md p-6 max-w-md w-96 h-96">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Cart Total</h1>
          <div className="flex justify-between mt-4">
            <span className="text-gray-800">Subtotal</span>
            <span className="text-gray-500">Rs.250,000</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-800">Total</span>
            <span className="text-gray-600 font-medium">Rs.250,000</span>
          </div>
          <button className="w-full mt-6 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition">
            Check Out
          </button>
        </div>
      </div>
      {/* other section */}
     < div className="w-full h-auto bg-pink-50 py-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left px-4 md:px-12 mt-8 md:mt-16">
              <h1 className="font-semibold text-2xl md:text-4xl">
                Free Delivery
              </h1>
              <p className="text-gray-400 font-semibold mt-4 text-sm md:text-base">
                For all orders $50 consecutor <br /> adipim scing elit
              </p>
            </div>

            <div className="text-center md:text-left px-4 md:px-12 mt-8 md:mt-16">
              <h1 className="font-semibold text-2xl md:text-4xl">
                90 Days Return
              </h1>
              <p className="text-gray-400 font-semibold mt-4 text-sm md:text-base">
                If good have problem consecutor <br /> adipim scing elit
              </p>
            </div>

            <div className="text-center md:text-left px-4 md:px-12 mt-8 md:mt-16">
              <h1 className="font-semibold text-2xl md:text-4xl">
                Secure Payment
              </h1>
              <p className="text-gray-400 font-semibold mt-4 text-sm md:text-base">
                100% sure payment <br /> consecutor adipim scing elit
              </p>
            </div>
          </div>
        </div>
    
    
    
     
















    </div>
     </main>
  )
}
