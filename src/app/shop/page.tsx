import React from "react";
import Image from "next/image";
export default function Shop() {
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
          <h1 className="text-6xl  font-semibold">Shop</h1>
          <div className="text-black mt-1 ml-6">
            <span className="font-bold mr-20 absolute mt-4">home </span>{" "}
            <span className="ml-14 absolute mt-4">shop</span>
          </div>
        </div>
      </div>

      <div className="h-auto bg-pink-100 flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4 md:mb-0">
          <Image
            src="/vector.png"
            alt="filter"
            className="w-5 h-6"
            height={250}
            width={350}
          />
          <span className="text-sm md:text-base">Filter</span>
          <Image
            src="/vector (2).png"
            alt="grid"
            className="w-5 h-6"
            height={250}
            width={350}
          />
          <Image
            src="/vector (1).png"
            alt="list"
            className="w-5 h-6"
            height={250}
            width={350}
          />
          <span className="hidden md:inline-block text-5xl text-gray-200">
            |
          </span>
          <p className="text-sm md:text-base">Showing 1-18 of 32 results</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <p className="text-sm md:text-base">Show</p>
            <button className="ml-2 w-12 h-8 bg-pink-50 text-gray-600 rounded-sm text-sm md:text-base">
              16
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-sm md:text-base">Sort by</p>
            <button className="ml-2 w-24 h-8 bg-pink-50 text-gray-600 rounded-sm text-sm md:text-base">
              Default
            </button>
          </div>
        </div>
      </div>

      <div className="h-full w-full">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/shop90.png"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image10.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Shooting Stars
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className=" object-center w-full h-full block"
                    src="/iamge9.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Neptune
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover 
           object-center w-full
            h-full block"
                    src="/shop93.png"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image11.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image12.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Shooting Stars
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image13.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Neptune
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image14.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image15.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image16.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image17.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image18.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image19.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image20.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image21.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative  rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/image22.jpeg"
                    width={350}
                    height={250}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The 400 Blows
                  </h2>
                  <p className="mt-1 font-bold text-black text-2xl">
                    Rs. 258,200.00
                  </p>
                </div>
              </div>
              <div className="relative flex justify-center items-center gap-5 mt-12 sm:mt-16 lg:mt-24 px-4">
                <button className="h-10 w-10 sm:h-12 sm:w-12 bg-yellow-200 rounded-md flex justify-center items-center">
                  1
                </button>
                <button className="h-10 w-10 sm:h-12 sm:w-12 bg-pink-100 rounded-md flex justify-center items-center">
                  2
                </button>
                <button className="h-10 w-10 sm:h-12 sm:w-12 bg-pink-100 rounded-md flex justify-center items-center">
                  3
                </button>
                <button className="h-12 w-24 sm:w-28 sm:h-14 bg-pink-100 rounded-lg flex justify-center items-center">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-auto bg-pink-50 py-8">
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
  );
}
