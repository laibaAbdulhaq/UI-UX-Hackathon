import React from 'react';
const Feature = () => {

  return (
    <div className='w-full xl-w-[1344px] mx-auto h-auto xl:h-[925px]'>

        {/*heading */} 
        <h2 className='font-medium text-xl sm:text-2xl pl-4 sm:pl-8 lg:pl-16 mb-4'>Feature</h2>

        {/*image */} 
        <div className='flex  justify-center w-full xl:w-[1344px] h-auto xl:h-[700px] px-4 md:px-10 lg:px-14 xl:px-16'>  
        <img src="feature.png/"
         alt="feature"/>
        </div>

        {/*paragraph */}
        <div className='flex flex-col justify-center items-center text-center space-y-2 w-full  h-[177px] px-4 sm:px-8 lg:px-16'> 
            <h1 className ='text-2xl sm:text-5xl lg:text-[48px] font-bold  tracking-tight'>
                STEP INTO WHAT FEELS GOOD
            </h1>
            
            <p className='text-base sm:text-lg leading-[24px] tracking-normal xl:w-[1008px]'>
                Cause everyone should know the felling of running in that perfect pair
            </p>

            {/*button */}
            <button className='bg-black text-white rounded-full px-8 py-3 font-medium'>
              Find Your Shoe
            </button>

        </div>
      
    </div>
  )
}
export default Feature;
