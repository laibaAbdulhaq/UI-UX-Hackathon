import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const cartPage =()=> {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-4 sm:px-8 md:px-0 lg:mr-80 xl:mr-96">
      {/* Header */}
      <header className="bg-slate-200 w-full md:w-[700px] lg:w-[650px] xl:w-[717.33px] mx-auto py-4 shadow-md">
        <div className="px-4">
          <h1 className="text-lg sm:text-xl text-center sm:text-left font-semibold">Free Delivery</h1>
          <p className="text-sm sm:text-base text-center sm:text-left">Applies to orders of ₹ 14 000.00 or more 
            <a className="underline">View details</a>
          </p>
        </div>
      </header>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-0 xl:px-20 py-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 lg:w-[717.33px]">
            <h2 className="text-xl font-semibold mb-4 pl-4">Bag</h2>

            {/* Cart Item 1 */}
            <div className="p-4 mb-4 flex flex-col sm:flex-row items-center sm:items-start">
              <Image
                src="/cartman.png" 
                alt="Product Image"
                width={150}
                height={150}/>
              <div className="mt-2 sm:mt-0 sm:ml-4 flex-1 sm:text-left">
                <h3 className="text-sm font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-sm text-gray-500">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <div className=" flex justify center text-sm text-gray-500 gap-20">
                <span >Size L</span> 
                 <span >Quantity 1</span>
                 </div>
               <div className="flex justify-center sm:justify-start gap-4 py-8" > <Heart/> <Trash2/></div>
              </div>
              <p className="font-bold mt-4 sm:mt-0 sm:pb-24">MRP: ₹ 3,895.00</p>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Cart Item 2 */}
            <div className="p-4 mb-4 flex flex-col sm:flex-row items-center sm:items-start">
              <Image
                src="/men 97 se.png" 
                alt="Product Image"
                width={150}
                height={150}/>
              <div className=" mt-2 sm:mt-0 sm:ml-4 flex-1 text-center sm:text-left">
                <h3 className="text-sm font-semibold">
                  Nike Air Max 97 SE 
                </h3>
                <p className="text-sm text-gray-500">Men's Shoes</p>
                <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <div className=" flex justify center text-sm text-gray-500 gap-20">
                <span >Size 8</span> 
                 <span >Quantity 1</span>
                 </div>
                <div className="flex justify-center sm:justify-start gap-4 py-8"> <Heart/> <Trash2/></div>
              </div>
              <p className="font-bold mt-4 sm:mt-0 sm:pb-24">MRP: ₹ 3,895.00</p>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:mt-[-110px]">
          <div className=" px-4  ">
            <h2 className="text-xl font-semibold mb-8 ">Summary</h2>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹ 20,890.00</span>
            </div>
            <div className="flex justify-between mb-8">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex justify-between font-bold text-lg mb-8">
              
              <span>Total</span>
              <span>₹ 20,890.00</span>
            </div>
            <hr className="my-4 border-gray-300" />
            <button className="w-full bg-black rounded-full text-white py-2 ">
              <Link href= "/checkoutPage"> Member Checkout </Link>
            </button>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}
export default cartPage;
