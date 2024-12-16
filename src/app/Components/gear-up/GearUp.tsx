import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import GearChild from './GearChild';

const GearUP = () => {

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
    <div>
         <div>
        <div className=' items-start px-8 sm:px-14 mt-40 w-[1344px]  '>
               <h2 className='text-2xl font-semibold mt-4'>Gear Up</h2>
              
           {/*for large screens (laptop) */}

          {/*shop men */}
            <div className='hidden lg:block'>
            <div className='  flex flex-row px-60'>
              <h4 className='xl:ml-44'>Shop Men's</h4>
              <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
              <ArrowLeft className="text-gray-500" />
              </div>
             <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
             <ArrowRight className="text-gray-500" />
             </div>

            {/*shop women */}
          <div className=' flex flex-row px-20 '></div>
             <h4 className='lg:ml-40 xl:ml-80 '>Shop Women's</h4>
              <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
              <ArrowLeft className="text-gray-500" />
              </div>
             <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
             <ArrowRight className="text-gray-500" />
            </div>
          </div>
        </div>

          <div className='hidden lg:block'>
           <div className='container flex flex-row pb-12 space-x-1' >
            {product.map((items:any)=>(
                <GearChild
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
  </div>
  )
}
export default GearUP;









