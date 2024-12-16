import React from 'react';
const DonotMiss = () => {
  return (
    <div className='w-full max-w-[1344px] h-auto sm:max-h-[977px] mx-auto px-4 sm:px-10 md:px-12'>

        {/*heading */}
        <h2 className='font-medium text-xl sm:text-2xl pl-1 sm:pl-1 '>Don't Miss</h2>

        <div className='flex  justify-center items-center w-full h-auto sm:h-[700px] px-1 sm:px-18  py-4 md:pb-48 lg:pb-0'>

         {/*image */}   
        <img src="miss.png/"
         alt="Dont't Miss"/>

         {/*paragraph */}
        </div>

        <div className='flex flex-col mx-auto justify-center items-center text-center space-y-6  w-full sm:max-w-[1008px] px-4 sm:px-16 h-auto max-h-[177px] md:pb-48 lg:pb-0'> 

            <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold'>
                FLIGHT ESSENTIAL
            </h1>
          
            <p className='text-sm sm:text-base px-4 sm:px-16  lg:px-32'>
                Your build-to-last, all week wears-but with style only Jordan Brand can deliver
            </p>
            
            {/*button */}
            <button className='bg-black text-white rounded-full px-4 py-2 text-sm sm:text-base font-medium'>
              Shop
            </button>

        </div>
      
    </div>
  )
}
export default DonotMiss;