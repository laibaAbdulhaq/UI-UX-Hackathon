import React from 'react'

const Footer = () => {
  return (
    <div>

<div className="bg-black text-white w-[1440px] h-[331px] mx-auto p-10 ">
  <div className="grid grid-cols-4 gap-8">
    
    {/* Find a Store*/}
    <div>
      <h3 className="font-medium mb-4">FIND A STORE</h3>
      <ul className="space-y-2">
        <li>BECOME A MEMBER</li>
        <li>SIGN UP FOR EMAIL</li>
        <li>SEND US FEEDBACK</li>
        <li>STUDENT DISCOUNTS</li>
      </ul>
    </div>
    
    {/* Get Help*/}
    <div>
      <h3 className="font-medium mb-4">GET HELP</h3>
      <ul className="space-y-2">
        <li>Order Status</li>
        <li>Delivery</li>
        <li>Returns</li>
        <li>Payment Options</li>
        <li>Contact Us On Nike.com Inquiries</li>
        <li>Contact Us On All Other Inquiries</li>
      </ul>
    </div>
    
    {/*About Nik */}
    <div>
      <h3 className="font-medium mb-4">ABOUT NIKE</h3>
      <ul className="space-y-2">
        <li>News</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>Sustainability</li>
      </ul>
    </div>
  

  {/* Footer Logo */}
  <div className=" mb-4 ">
  <ul className=' flex space-x-4 mx-20'>
      <li><img src="/twitter.png"/></li>
      <li><img src="/fb.png"/></li>
      <li><img src="/yt.png"/></li>
      <li><img src="/insta.png"/></li>
      </ul>
    </div>
    </div>

  {/* Footer Bottom */}
  <div className="bg-black w-[1372px] h-[63px]  flex justify-between items-center border- border-gray-700 pt-4 ">
    <p className="text-gray-500 ">India © 2023 Nike, Inc. All Rights Reserved</p>
    <div className="flex space-x-4 mx-20">
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

export default Footer



