import React from "react";
import Image from "next/image";
import { Package2 } from 'lucide-react';

const checkoutPage = () => {
  return (
    <div className="min-h-screen flex justify-center p-4">

      {/* Main Container */}
      <div className="p-6 md:p-8 w-full lg:w-[880px]">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">How would you like to get your order?</h1>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Left Section */}
          <div className="w-full lg:w-[440px]">
            <p className="text-gray-500 mb-4">
            Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address.
            Our courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of clearing custom (including sharing it with customs officals)
            for all the orders and returns. If your KYC does not match your shipping address,please click the link for more information.
            <a className="underline">Learn More</a>
            </p>
            <button className="flex pl-1 md:pl-1 lg:pl-1 gap-4 border border-black px-32 md:px-64 lg:px-80 py-2 lg:py-4 rounded-md hover:bg-gray-100 mb-6">
               <Package2/> Deliver It
            </button>

            {/* Form */}
            <form className="space-y-4">

              {/* Name and Address */}
              <h2 className="font-semibold mb-2">Enter your name and address:</h2>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-2 rounded-md focus:outline-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 rounded-md focus:outline-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Address Line 1"
                className="border p-2 w-full rounded-md"
                required
              />
              <p className="text-gray-400 text-xs pl-4">We do not ship to p.o boxes</p>
              <input
                type="text"
                placeholder="Address Line 2"
                className="border p-2 w-full rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className="border p-2 w-full rounded-md"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border p-2 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="border p-2 rounded-md"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
              <select 
              className="border p-2 w-full rounded-md"
              required
              >
                <option value="State">State/Territory</option>
              </select>
              <select
                name="country"
                className="border p-2 rounded-md"
                required
                >
               <option value="Pakistan" className="text-black">India</option>
               <option value="USA" className="text-black">USA</option>
               <option value="UK" className="text-black">UK</option>
             </select>
              </div>

              <label 
              className="flex items-center space-x-2 text-gray-600">
                <input
                   type="checkbox" 
                   />
                <span> Save the address to my profile</span>
              </label>

              <label className="flex items-center space-x-2 text-gray-600">
                <input 
                  type="checkbox" 
                  />
                <span>Make this my prefered address</span>
              </label>

              {/* Contact Information */}
              <h2 className="font-semibold mt-4">What's your contact information?</h2>
              <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full rounded-md"
                required
              />
              <p className="text-gray-400 text-xs pl-4">A confirmation email will be sent after the checkout</p>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 w-full rounded-md"
                required
              />
              <p className="text-gray-400 text-xs pl-4">A carrier might contact you to confirm delivery </p>

              {/* PAN */}
              <h2 className="font-semibold mt-4">What's your PAN?</h2>
              <input
                type="text"
                placeholder="PAN"
                className="border p-2 w-full rounded-md"
                required
              />
              <p className="text-gray-400 text-xs pl-4">Enter your PAN to enable payment with UPI, Net Banking or local card methods  </p>
              <label className="flex items-center space-x-2 text-gray-400 text-xs">
                <input 
                  type="checkbox"
                   />
                <span>Save PAN details to Nike Profile</span>
              </label>

              <label className="flex items-center space-x-2 text-gray-400 text-xs py-14">
                <input 
                  type="checkbox"
                   />
                <span>
                  I have read and consent to eShopWorld processing my information in 
                  accordance with the <a className="underline cursor-pointer">Privacy Statement</a> and 
                  <a className="underline cursor-pointer">Cookie Policy.</a> eShopWorld is a trusted Nike partner </span>
              </label>
            </form>

            {/* Continue Button */}
            <button className="bg-gray-400 text-white w-full py-2 rounded-full">  
              Continue
            </button>
          <div >
            <hr className="my-4 border-gray-300" />
            <p className="text-gray-400 hover:text-black font-semibold cursor-pointer">Delivery</p>
            <hr className="my-4 border-gray-300" />
            <p className="text-gray-400 hover:text-black font-semibold cursor-pointer">Shipping</p>
            <hr className="my-4 border-gray-300" />
            <p className="text-gray-400 hover:text-black font-semibold cursor-pointer">Billing</p>
            <hr className="my-4 border-gray-300" />
            <p className="text-gray-400 hover:text-black font-semibold cursor-pointer">Payment</p>
            </div>
          </div>

          {/* Right Section order summary */}
          <div className="w-full lg:w-[320px] lg:-mt-14 px-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="text-gray-600 flex justify-between mb-4 ">
              <span>Subtotal</span>
               <span>₹ 20,890.00</span>
               </div>

               <div className="text-gray-600 flex justify-between mb-8 ">
              <span>Delivery/Shipping</span>
               <span>Free</span>
               </div>
               <hr className="my-4 border-gray-300" />
               <div className="text-gray-600 flex justify-between mb-8">
              <span className="font-bold"> Total</span> 
              <span>₹ 20,890.00</span>
              </div>
              <hr className="my-4 border-gray-300" />
              <p className="text-gray-900 text-xs">(The total reflects the price of your order, including all duties and taxes)</p>
              <p className="md:text-lg font-semibold mt-10">
                Arrives Mon, 27 Mar - Wed, 12 Apr
              </p>
            

            {/* Product Images */}
            <div className="flex items-center gap-4 mt-4">
              <Image
                src="/cartman.png"
                alt="Nike Shirt"
                width={100}
                height={100}
                className="md:w-[208px] md:h-[208px] object-cover rounded"
              />
              <div >
                <p className="text-lg">Nike Dri-FIT ADV TechKnit</p>
                <div className="text-sm text-gray-400">
                <p>Qty 1 </p> 
                <p> Size L</p>
                <p>₹ 3,895.00</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src="/men 97 se.png"
                alt="Nike Shoes"
                width={100}
                height={100}
                className="md:w-[208px] md:h-[208px] object-cover rounded"
              />
              <div >
                <p className="text-lg">Nike Air Max 97 SE</p>
                <div className=" text-gray-400 text-sm">
                <p>Qty 1</p> 
                 <p>Size UK 8</p>
                <p>₹16,995.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkoutPage;
