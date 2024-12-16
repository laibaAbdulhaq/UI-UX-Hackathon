import React from 'react';

const Footer = () => {
  return (
    <div>

<div className="bg-black text-white w-full h-auto md:h[331px] mx-auto p-4 md:p-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Find a Store*/}
    <div>
      <h3 className="font-medium mb-4 text-base md:text-sm">FIND A STORE</h3>
      <ul className="space-y-2 text-sm md:text-base">
        <li>BECOME A MEMBER</li>
        <li>SIGN UP FOR EMAIL</li>
        <li>SEND US FEEDBACK</li>
        <li>STUDENT DISCOUNTS</li>
      </ul>
    </div>
    
    {/* Get Help*/}
    <div>
      <h3 className="font-medium mb-4 text-base md:text-sm">GET HELP</h3>
      <ul className="space-y-2 text-sm md:text-base">
        <li>Order Status</li>
        <li>Delivery</li>
        <li>Returns</li>
        <li>Payment Options</li>
        <li>Contact Us On Nike.com Inquiries</li>
        <li>Contact Us On All Other Inquiries</li>
      </ul>
    </div>
    
    {/*About Nike */}
    <div>
      <h3 className="font-medium mb-4 text-base md:text-sm">ABOUT NIKE</h3>
      <ul className="space-y-2 text-sm md:text-base">
        <li>News</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>Sustainability</li>
      </ul>
    </div>
  

  {/* Footer Logo */}
  <div className="flex justify-center md:justify-start mb-4 ">
  <ul className=' flex space-x-4 '>
      <li><img src="/twitter.png" className='w-6 h-6 md:w-8 md:h-8'/></li>
      <li><img src="/fb.png" className='w-6 h-6 md:w-8 md:h-8' /></li>
      <li><img src="/yt.png"className='w-6 h-6 md:w-8 md:h-8' /></li>
      <li><img src="/insta.png" className='w-6 h-6 md:w-8 md:h-8' /></li>
      </ul>
    </div>
    </div>

  {/* Footer Bottom */}
  <div className="bg-black w-full h-auto md:h-[63px]    flex flex-col md:flex-row justify-between items-center border- border-gray-700 mt-8 pt-4 px:4 md:px-10">
    <p className="text-gray-500 text-xs md:text-sm  ">Pakistan © 2023 Nike, Inc. All Rights Reserved</p>
    <div className="flex flex-wrap justify-center space-x-4 mt-2 md:mt-0 md:mr-20 text-xs md:text-sm">
      <span>Guides</span>
      <span>Terms of Sale</span>
      <span>Terms of Use</span>
      <span>Nike Privacy Policy</span>
    </div>
  </div>
</div>
</div>
  )
}
export default Footer;



