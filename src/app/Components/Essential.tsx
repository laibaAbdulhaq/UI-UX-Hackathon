import React from 'react';

const Essential = () => {
  return (
    <div className='w-full  max-w-[1344px] mx-auto px-4 sm:px-4 lg:px-1 py-10 mb-9 lg:mb-0 xl:mb-10'>
        {/*heading*/}
        <h2 className='font-medium text-xl sm:text-2xl pl-4 sm:pl-8 lg:pl-12 py-4 sm:py-6'>
          The Essential
        </h2>

        {/*images*/}
        <div className='flex justify-center items-center px-4 sm:px-8 lg:px-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 '>
                <img src='Frame (7).png' alt="essential 1" width="440px" height="540px" />
                <img src='Image (7).png' alt="essential 2" width="440px" height="540px"/>
                <img src='Image (8).png' alt="essential 3" width="440px" height="540px"/>
            </div>
        </div>
      </div>
  )
}
export default Essential;