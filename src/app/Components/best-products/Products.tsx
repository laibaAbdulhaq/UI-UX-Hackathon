import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  return (
    <div>
       {/*best product heading */}
         <div className='px-4  sm:px-4 md:px-10  lg:px-12 xl:px-20  mt-20 sm:mt-24 lg-mt-40 '>
            <div className='flex items-center justify-between mb-4'>
               <h2 className='text-lg sm:text-xl lg:text-2xl font-normal mt-4'>
                Best of Air Max
                </h2>
           
           {/*arrows */}
          <div className='flex justify-end  lg:pl-[620px] cursor-pointer gap-1'>
              <div className="bg-slate-200 rounded-full p-2 sm:p-3 cursor-pointer hover:bg-slate-300">
              <ArrowLeft className="text-gray-500" />
          </div>

          <div className="bg-slate-200 rounded-full p-2 sm:p-3 cursor-pointer hover:bg-slate-300">
             <ArrowRight className="text-gray-500" />
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}
export default Products;
