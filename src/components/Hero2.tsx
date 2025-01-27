import React from 'react';
import Image from 'next/image';
export default function Hero2() {
  return (
    <main className="min-h-screen bg-pink-50 flex items-center px-4 md:px-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
       
        <div className="flex flex-col items-center md:items-start space-y-6">
         <Image
            src="/table-hero2.png"
            alt="Table"
            className="w-3/4 md:w-2/3 object-contain"
            height={150}
            width={350}
          />
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-4xl font-semibold text-black">
              Side Table
            </p>
            <a
              href="#shop"
              className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
            >
              View More →
            </a>
          </div>
        </div>

  
        <div className="flex flex-col items-center md:items-end space-y-6">
         <Image
            src="/sofa-hero2.png"
            alt="Sofa"
            className="w-3/4 md:w-2/3 object-contain"
            width={150}
            height={350}
          />
          <div className="text-center md:text-center">
            <p className="text-2xl md:text-4xl font-semibold text-black">
              Sofa Table
            </p>
            <a
              href="#shop"
              className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
            >
              View More →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}




