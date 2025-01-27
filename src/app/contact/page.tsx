import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import Image from "next/image";
export default function Contact() {
  return (
    <main className="w-full">
     
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32"
        style={{ backgroundImage: "url(/shop-page.png)" }}
      >
        <div className="text-center text-white">
          <Image
            src="/llogo-shop.png"
            alt="logo"
            className="w-24 h-24 mx-auto mb-4"
            height={300}
            width={150}
          />
          <h1 className="text-4xl md:text-6xl text-black font-bold">Contact</h1>
          <div className="flex justify-center gap-4 mt-4 text-black">
            <span className="font-bold">Home</span>
            <span>|</span>
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-16 lg:px-32 flex flex-col lg:flex-row gap-16">
       
        <div className="lg:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-gray-600 mb-8">
            For more information about our products and services, please feel
            free to drop us an email. Our staff will always be there to help
            you out. Do not hesitate!
          </p>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <IoLocation className="text-2xl text-black" />
              <div>
                <h1 className="font-bold text-lg">Address</h1>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York, NY 10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MdPhone className="text-2xl text-black" />
              <div>
                <h1 className="font-bold text-lg">Phone</h1>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <GoClockFill className="text-2xl text-black" />
              <div>
                <h1 className="font-bold text-lg">Working Time</h1>
                <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>

     
        <div className="lg:w-1/2">
          <form className="w-full max-w-md mx-auto">
            <div className="mb-6">
              <label
                htmlFor="your-name"
                className="block text-sm font-bold text-black mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="your-name"
                name="your-name"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="register-email"
                className="block text-sm font-bold text-black mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="register-email"
                name="register-email"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-black mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-bold text-black mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="border-2 border-solid border-black rounded-xl py-3 px-14 font-semibold">
                Submit
      </button>
          </form>
        </div>
      </div>

     
      <div className="w-full bg-pink-50 py-12 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          <div>
            <h1 className="font-semibold text-xl md:text-2xl">Free Delivery</h1>
            <p className="text-gray-500 mt-2">
              For all orders $50 consecutor <br /> adipim scing elit
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl md:text-2xl">90 Days Return</h1>
            <p className="text-gray-500 mt-2">
              If good have problem consecutor <br /> adipim scing elit
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl md:text-2xl">Secure Payment</h1>
            <p className="text-gray-500 mt-2">
              100% sure payment <br /> consecutor adipim scing elit
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
