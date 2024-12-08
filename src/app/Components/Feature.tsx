import React from 'react'

const Feature = () => {
  return (
    <div className='w-[1344px] h-[925px]'>

        <h2 className='font-medium text-2xl pl-16'>Feature</h2>
        <div className='flex  justify-center items-center w-[1344px] h-[700px]  px-16'>
            
        <img src="feature.png/"/>
        </div>
        <div className='flex flex-col mx-auto justify-center items-center text-center space-y-6  w-[1008px] h-177px'> 
            <h1 className='text-5xl font-bold'>
                STEP INTO WHAT FEELS GOOD
            </h1>
            <p className='font-sm px-52'>
                Cause everyone should know the felling of running in that perfect pair

            </p>

            <button className='bg-black text-white rounded-full px-3 py-1 font-medium'>Find Your Shoe</button>
        </div>
      
    </div>
  )
}

export default Feature;
