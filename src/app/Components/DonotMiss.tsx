import React from 'react'

const DonotMiss = () => {
  return (
    <div className='w-[1344px] h-[977px]'>

        <h2 className='font-medium text-2xl pl-16'>Don't Miss</h2>
        <div className='flex  justify-center items-center w-[1344px] h-[700px]  px-16'>
            
        <img src="miss.png/"/>
        </div>
        <div className='flex flex-col mx-auto justify-center items-center text-center space-y-6  w-[1008px] h-177px'> 
            <h1 className='text-5xl font-bold'>
                FLIGHT ESSENTIAL
            </h1>
            <p className='font-sm px-52'>
                Your build-to-last, all week wears-but with style only Jordan Brand can deliver

            </p>

            <button className='bg-black text-white rounded-full px-3 py-1 font-medium'>Shop</button>
        </div>
      
    </div>
  )
}

export default DonotMiss;