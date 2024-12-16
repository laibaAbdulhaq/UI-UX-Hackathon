import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

const TopHeader = () => {

  return (
     <div className=" bg-white ">

       {/*-- Top Header */}
      <div className="h-[36px] w-full max-w-[1440px] mx-auto flex justify-between items-center px-4 lg:px-10 bg-slate-50">

       <img src="/nike frame.png" 
        alt="Nike Logo"
        className="h-[24px] w-[24px]"/>

        {/*back to home page link */}
        <Link href="/" className="text-sm  bg-white rounded cursor-pointer hover:underline hidden md:block">Skip to main content</Link>

        {/*navigation links */}
         <div className="hidden  md:flex   space-x-4  pr-10  text-sm">
          <Link href="/productsDetail" className="hover:underline ">Find a Store</Link>
            <span>|</span>
          <Link href="/helpSection" className="hover:underline">Help</Link>
            <span>|</span>
          <Link href="/joinForm" className="hover:underline">Join Us</Link>
            <span>|</span>
          <Link href="/signinForm" className="hover:underline"> Sign In</Link>
         </div>
  
      </div>

      {/* Main Header*/} 
      <div className="h-[60px] w-full  max-w-[1440px] mx-auto flex justify-between items-center px-2 lg:px-7 border-t border-b">
       <img src="/nike logo.png" alt="Nike Logo" className="h-[78.47px] w-[78.47px]"/>

    {/* Navigation Links*/}
      <nav className="hidden md:flex  space-x-6">
         <Link href="" className="text-sm  font-medium  text-gray-700 hover:text-black hover:underline">New & Featured</Link>
         <Link href="#" className="text-sm  font-medium  text-gray-700 hover:text-black hover:underline">Men</Link>
         <Link href="#" className="text-sm  font-medium text-gray-700 hover:text-black hover:underline">Women</Link>
         <Link href="#" className="text-sm  font-medium text-gray-700 hover:text-black hover:underline">Kids</Link>
         <Link href="#" className="text-sm  font-medium text-gray-700 hover:text-black hover:underline">Sale</Link>
        <Link href="#" className="text-sm  font-medium text-gray-700 hover:text-black hover:underline">SNKRS</Link>
      </nav>

    {/*  Search & Icons*/}
      <div className="flex items-center lg:px-10 space-x-4">
        <div className='relative'>
      <input
        type="text"
        placeholder="Search"
        className=" bg-slate-100 rounded-full px-4 py-1 text-sm focus:outline-none w-[140px] md:w-[180px] h-[40px] pl-10"/>
      
       <div className="absolute top-1/2 left-4  transform -translate-y-1/2 text-gray-500">
          <Search/> 
       </div>    
      </div>

       <div className='flex items-center  w-full h-full'>
         <Link href="/cartPage" legacyBehavior>
          <img src="/Auto Layout Horizontal.png" alt="cart" className='cursor-pointer'/>
         </Link >
          <img src="/heart.png" alt="wishlist" className='cursor-pointer '/>
        </div>
      </div>

    {/* Mobile Menu */}
      <div className="md:hidden">
      
          <Sheet>
            <SheetTrigger> 
            <Menu size={24} className="cursor-pointer mb-[88px]"/>
            </SheetTrigger>
            <SheetContent side="left"className="w-5/ h-[100vh] bg-white overflow-hidden">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">Home</Link>
                   </SheetTitle>
              </SheetHeader>

              <div className="space-y-4 mt-4">
                {/* Main Links */}
                <Link href="#" className="block text-sm hover:underline">
                  New & Featured
                </Link>
                <Link href="#" className="block text-sm hover:underline">
                  Men
                </Link>
                <Link href="#" className="block text-sm hover:underline">
                  Women
                </Link>
                <Link href="#" className="block text-sm hover:underline">
                  Kids
                </Link>
                <Link href="#" className="block text-sm hover:underline">
                  Sale
                </Link>
                <Link href="#" className="block text-sm hover:underline">
                  SNKRS
                </Link>

                {/* Utility Links */}
                
                <Link href="/productsDetail" className="block text-sm hover:underline">
                  Find a Store
                </Link>
                <Link href="/helpSection" className="block text-sm hover:underline">
                  Help
                </Link>
                <Link href="/joinForm" className="block text-sm hover:underline">
                  Join Us
                </Link>
                <Link href="/signinForm" className="block text-sm hover:underline">
                  Sign In
                </Link>
              </div>
            </SheetContent>
          </Sheet>
       </div>
      </div>
    </div>
  )
}
export default TopHeader;





