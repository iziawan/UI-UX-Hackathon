
import React from 'react';
import Image from 'next/image';
export default function Toppics() {
  return (
    <main className="w-full py-16 bg-gray-50">
   
      <div className="text-center px-4 md:px-16 lg:px-32">
        <h1 className="text-2xl md:text-4xl font-bold">Top picks for you</h1>
        <p className="mt-4 text-gray-600">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 px-4 md:px-16 lg:px-32">
        <div className="w-full h-auto flex justify-center">
         <Image
            src="/top-pics1.png"
            alt="Top Pick 1"
            className="w-full max-w-[300px] h-auto object-contain"
            height={250}
            width={350}
          />
        </div>
        <div className="w-full h-auto flex justify-center">
         <Image
            src="/top-pics2.png"
            alt="Top Pick 2"
            className="w-full max-w-[300px] h-auto object-contain"
            height={250}
            width={350}
          />
        </div>
        <div className="w-full h-auto flex justify-center">
         <Image
            src="/top-pics3.png"
            alt="Top Pick 3"
            className="w-full max-w-[300px] h-auto object-contain"
            width={250}
            height={350}
          />
        </div>
        <div className="w-full h-auto flex justify-center">
         <Image
            src="/top-pics4.png"
            alt="Top Pick 4"
            className="w-full max-w-[300px] h-auto object-contain"
            width={250}
            height={150}
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="#shop"
          className="text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
        >
          View More →
        </a>
      </div>
    </main>
  );
}





          
