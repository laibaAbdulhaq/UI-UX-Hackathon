import React from 'react'
import GearChild from './GearChild'
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const GearUpProducts = () => {
    const product= [
        {
            id:1,
            productImage:"/men gear.png",
            productName: "Nike Dri-FIT ADV TechKnit Ultra",
            productFor: "Womem's Short-Sleeve Running Top",
            productPrice: "₹3895",

        },
        {
            id:2,
            productImage:"/men shorts.png",
            productName: "Nike Dri-FIT Challenger",
            productFor:"Men's 18cm (approx.)2-in-1 Versatile Shorts",
            productPrice: "₹2495",

        },
        {
            id:3,
            productImage:"/men pants.png",
            productName: "Nike Dri-FIT ADV Run Devision",
            productFor: "Women's Long-Sleeve Running Top",
            productPrice: "₹9295",

        },
        { 
            id:4,
            productImage:"/women gear.png",
            productName: "Nike Fast",
            productFor: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            productPrice: "₹3795",

        },
    ]
    
  return (
    <div className="block lg:hidden">
    <div className="container flex flex-col space-y-12">
      {/*for small and medium screens mobile and tablet*/}
      {/* Shop Men's Section */}
      <div className="space-y-">
        <div className="flex justify-between items-center px-8 sm:px-14">
          <h4 className="text-lg font-semibold">Shop Men's</h4>
          <div className="flex space-x-1">
            <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
              <ArrowLeft className="text-gray-500" />
            </div>
            <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
              <ArrowRight className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:flex-row gap-6">
          {product.slice(0, 2).map((items: any) => (
            <GearChild
              key={items.id}
              productImage={items.productImage}
              productName={items.productName}
              productFor={items.productFor}
              productPrice={items.productPrice}
            />
          ))}
        </div>
      </div>

      {/* Shop Women's Section */}
      <div className="space-y-">
        <div className="flex justify-between items-center px-8 sm:px-14">
          <h4 className="text-lg font-semibold">Shop Women's</h4>
          <div className="flex space-x-1">
            <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
              <ArrowLeft className="text-gray-500" />
            </div>
            <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
              <ArrowRight className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.slice(2, 4).map((items: any) => (
            <GearChild
              key={items.id}
              productImage={items.productImage}
              productName={items.productName}
              productFor={items.productFor}
              productPrice={items.productPrice}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GearUpProducts;






