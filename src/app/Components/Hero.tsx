import React from 'react'
import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
  return (
    <div>
    {/*web greeting */}
    <div className="h-auto max-w-full max-h-[44px] w-[1440px] mx-auto flex flex-col justify-center items-center px-4 py-4 bg-slate-50">
        <p className="text-xs md:text-sm font-bold ">
          Hello Nike App
        </p>
        <p className="text-xs md:text-sm text-gray-600 text-center ">
          Download the app to access everything Nike. 
          <a href="#" className="text-blue-600 underline">
            Get Your Great
          </a>
        </p>
    </div>
    
    {/*image */}
     <div className='flex  justify-center items-center w-full  max-w-[1344px] md:h-[500px] lg:h-[700px] pt-2 md:pb-28 lg:pb-48 xl:pb-10'>
        <img src="/hero img.png"
        alt='hero image'
        className='w-full max-w-[90%] md:[80%] lg:max-w[70%] object-cover'/>
     </div>
     
     {/*paragraph */}
     <div className = "flex flex-col mx-auto justify-center items-center text-center w-full  md:w-[80%] lg-w-[1008px] h-[229px] space-y-4 md:space-y-6 pt-16 md:py-4 lg:py-8" >
      <p className='text-xs md:text-sm'>
        First Look
      </p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        NIKE AIR MAX PULSE
      </h1>
      <p className='text-xs md:text-base lg:text-lg px-4 md:px-12 lg:px-20'>
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse 
        designed to push you past your limits and help you go to the max.
      </p>
      
      {/*buttons */}
      <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
      <button className='text-white bg-black rounded-full px-6 py-2 md:px-8 text-sm md:text-base'>
        Notify Me
      </button>
      <button className='text-white bg-black rounded-full px-6 py-2 md:px-8 text-sm md:text-base'>
       <Link href="/allProducts">Shop Air Max </Link> 
      </button>
      </div>
    </div>
  </div>
  )
}
export default Hero;