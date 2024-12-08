import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';


const TopHeader = () => {
  return (
    <div className=" bg-white  ">
  {/*-- Top Header */}
  <div className=" h-[36px] w-[1440px]  mx-auto flex justify-between items-center px-10 bg-slate-50">

  <img src="/nike frame.png" alt="Nike Logo" className="h-[24px] w-[24px] " />

    <p className="text-sm ml-56 bg-white rounded">Skip to main content</p>
    
    <div className=" md:flex px-24 text-sm">
      <Link href="#" className="hover:underline">Find a Store</Link>
      <span className="mx-2">|</span>
      <Link href="/HelpSection" className="hover:underline">Help</Link>
      <span className="mx-2">|</span>
      <Link href="/Join" className="hover:underline">Join Us</Link>
      <span className="mx-2">|</span>
      <Link href="/LoginForm" className="hover:underline"> Sign In</Link>
    </div>
    
  
  </div>

  {/* Main Header*/} 
  <div className="h-[60px] w-[1440px] mx-auto flex justify-between items-center px-7 border-t border-b">
  
    <img src="/nike logo.png" alt="Nike Logo" className="h-[78.47px] w-[78.47px] p" />

    {/* Navigation Links*/}
    <nav className="flex space-x-6">
      <Link href="" className="text-sm font-medium text-gray-700 hover:text-black">New & Featured</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">Men</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">Women</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">Kids</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">Sale</Link>
      <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">SNKRS</Link>
    </nav>

    {/*  Search & Icons*/}
    <div className="flex items-center space-x-4   ">
        
        <div className='relative '>

      <input
        type="text"
        placeholder="Search"
        className=" bg-slate-100 rounded-full  px-2 py-1 text-sm mr-48 focus:outline-none w-[180px] h-[40px] pl-28"/>
      
     <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500">
      <Search /> 
    </div>    
    
    </div>

    <div className='flex absolute pl-48'>
    <img src="/heart.png"/>
    <img src="/Auto Layout Horizontal.png"/>

    </div>
   
      </div>

    </div>

    </div>
  )
}

export default TopHeader;





