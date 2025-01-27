

import React from 'react'
import Image from 'next/image'
export default function Blog() {
  return (
    <main className='w-full bg-gray-50 py-16'>
      <div className='w-[90%] max-w-7xl mx-auto'>
       
        <div className='text-center mb-16'>
          <h1 className='text-3xl md:text-4xl font-bold text-black'>Our Blogs</h1>
          <p className='mt-4 text-gray-500'>
            Find a bright idea to suit your taste with our great selection.
          </p>
        </div>

     
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='w-full h-[250px]'>
           <Image
              src='/blog1.png'
              alt='Blog 1'
              className='w-full h-full object-cover rounded-lg'
              width={350}
              height={250}
            />
          </div>
          <div className='w-full h-[250px]'>
           <Image
              src='/blog2.png'
              alt='Blog 2'
              className='w-full h-full object-cover rounded-lg'
              width={350}
              height={250}
            />
          </div>
          <div className='w-full h-[250px]'>
           <Image
              src='/blog3.png'
              alt='Blog 3'
              className='w-full h-full object-cover rounded-lg'
              width={350}
              height={250}
            />
          </div>
        </div>

 
        <div className='flex justify-center mt-12'>
          <a
            href='#shop'
            className='text-black font-medium underline hover:no-underline hover:text-gray-800 transition'
          >
            View More →
          </a>
        </div>
      </div>
    </main>
  )
}

