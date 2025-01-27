
import React from 'react';
import Image from 'next/image';

export default function Sofa() {
  return (
    <main className="w-full bg-[#FFF9E5] flex justify-center items-center py-16">
 
      <div className="w-[90%] max-w-7xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Asgaard sofa 1.png"
            width={600} 
            height={600}
            alt="Asgaard Sofa, a modern and elegant furniture piece"
            className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-4">
          <p className="text-lg text-gray-700">New Arrivals</p>
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Asgaard Sofa
          </h1>
          <button className="border-2 border-black py-3 px-8 font-semibold hover:bg-black hover:text-white transition">
            Order Now
          </button>
        </div>
      </div>
    </main>
  );
}
