
import React from 'react'

export default function Instagram() {
  return (
    <main
      className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] relative bg-cover bg-center flex items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32"
      style={{ backgroundImage: "url(/instagram.png)" }}
    >
      <div className="mt-32 sm:mt-40 md:mt-48 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
          Our Instagram
        </h1>
        <p className="text-black mt-4 sm:mt-6 text-lg sm:text-xl ml-0 sm:ml-10">
          Follow our store on Instagram
        </p>
        <button className="w-40 sm:w-48 h-12 sm:h-14 bg-pink-400 text-white rounded-full mt-8 sm:mt-10 ml-0 sm:ml-10">
          Follow Us
        </button>
      </div>
    </main>
  )
}

