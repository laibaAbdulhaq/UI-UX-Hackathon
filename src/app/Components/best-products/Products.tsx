import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  return (
    <div>
         <div>
        <div className='flex items-start px-16 mt-40  gap-80 '>
               <h2 className='text-2xl font-normal  mt-4 '>Best of Air Max</h2>

          <div className='flex pl-[620px] cursor-pointer gap-1'>
              <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
              <ArrowLeft className="text-gray-500" />
           </div>

          <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
             <ArrowRight className="text-gray-500" />
             </div>

             </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
