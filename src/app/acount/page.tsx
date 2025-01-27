import React from 'react'
import Image from 'next/image'
export default function Acount() {
  return (
    <main className="w-full">
     
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32"
        style={{ backgroundImage: "url(/shop-page.png)" }}
      >
         <div className="mt-16">
          <Image
            src="/llogo-shop.png"
            alt="logo-image"
            className="w-24 h-24 ml-7 mt-8"
            height={96}
            width={96}
          />
          <h1 className="text-4xl md:text-6xl text-black font-semibold">My Account</h1>
          <div className="flex justify-center gap-4 mt-4 text-black">
            <span className="font-bold">Home</span>
            <span>|</span>
            <span>Shop</span>
          </div>
        </div>
      </div>

      
      <div className="w-full py-16 px-4 md:px-16 lg:px-32 flex flex-col lg:flex-row gap-16">
        
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-8">Log In</h1>
          <form className="w-full max-w-md">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Username or Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm">
                Remember Me
              </label>
            </div>
            <button className="border-2 border-solid border-black rounded-xl py-3 px-14 font-semibold">
                login
      </button>
            <p className="text-sm text-center mt-4 underline cursor-pointer">
              Lost your password?
            </p>
          </form>
        </div>

    
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-8">Register</h1>
          <form className="w-full max-w-md">
            <div className="mb-6">
              <label
                htmlFor="register-email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="register-email"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Your personal data will be used to support your experience
              throughout this website, manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-bold">Privacy Policy</span>.
            </p>
            <button className="border-2 border-solid border-black rounded-xl py-3 px-14 font-semibold">
                Register
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

  

