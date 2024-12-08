
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const GearUP = () => {
  return (
    <div>
         <div>
        <div className=' items-start px-16 mt-40   w-[1344px]  '>
               <h2 className='text-2xl font-normal  mt-4 '>Gear Up</h2>
              
           
          {/*shop men */}

            <div className='flex flex-row px-60'>
              <h4 className='ml-44'>Shop Men's</h4>
              <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
              <ArrowLeft className="text-gray-500" />
              </div>

             <div className="bg-slate-200 rounded-full p-3 cursor-pointer hover:bg-slate-300">
             <ArrowRight className="text-gray-500" />
             </div>

              {/*shop women */}
            

          <div className='flex flex-row px-20 '></div>
            
             <h4 className='ml-80'>Shop Women's</h4>
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

export default GearUP;
