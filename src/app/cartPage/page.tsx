import React from "react";
import Image from "next/image";


const cartPage =()=> {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold">Nike Cart</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold mb-4">Bag</h2>

            {/* Cart Item */}
            <div className="border rounded-lg p-4 mb-4 flex items-center">
              <Image
                src="/cartman.png" 
                alt="Product Image"
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-sm text-gray-500">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Size: L | Quantity: 1</p>
                <button className="text-red-500 text-sm mt-2">Remove</button>
              </div>
              <p className="font-bold">₹ 3,895.00</p>
            </div>



            <div className="border rounded-lg p-4 mb-4 flex items-center">
              <Image
                src="/men 97 se.png" 
                alt="Product Image"
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-semibold">
                  Nike Air Max 97 SE 
                </h3>
                <p className="text-sm text-gray-500">Men's Shoes</p>
                <p className="text-sm text-gray-500">Size: L | Quantity: 1</p>
                <button className="text-red-500 text-sm mt-2">Remove</button>
              </div>
              <p className="font-bold">₹ 3,895.00</p>
            </div>

            {/* Add more cart items as needed */}
          </div>

          {/* Summary */}
          <div className="border rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹ 20,890.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>₹ 20,890.00</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Member Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
export default cartPage;
