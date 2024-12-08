import React from 'react'
import Image from 'next/image';



const Hero = () => {
  return (
    <div>

    <div className="h-[44px] w-[1440px] mx-auto flex flex-col justify-center items-center px-4    bg-slate-50">
        <p className="text-sm font-bold ">Hello Nike App</p>
        <p className="text-sm text-gray-600">
          Download the app to access everything Nike. <a href="#" className="text-blue-600 underline">Get Your Great</a>
        </p>
    </div>

    <div className='flex  justify-center items-center  w-[1344px] h-[700px]  px-16 '>
        <img src="/hero img.png"/>
    </div>

    <div className=' flex flex-col mx-auto justify-center items-center text-center w-[1008px] h-[229px] space-y-6 pt-32 '>
      <p className='text-sm'>First Look</p>
      <h1 className="text-5xl font-bold">NIKE AIR MAX PULSE</h1>
      <p className='px-52'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse 
        designed to push you past your limits and help you go to the max.
      </p>

      <div className='flex flex-row gap-6'>
      <button className='text-white bg-black rounded-full px-3 py-1'>Notify Me</button>
      <button className='text-white bg-black rounded-full px-3 py-1'>Shop Air Max</button>
      </div>

    </div>
    </div>
  )
}
export default Hero;