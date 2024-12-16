import React from 'react';

const Icons = () => {
  return (
    
  <div className="grid grid-cols-2  md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-2 mb-72 sm:mb-8 px-10 sm:px-16 lg:px-20 w-full max-w-[880px] h-[192px] mx-auto ">
   
     {/* icons*/}
    <div>
      <h3 className="font-medium mb-4">Icons</h3>
      <ul className="space-y-2">
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    
    {/* shoes*/}
    <div>
      <h3 className="font-medium mb-4">Shoe</h3>
      <ul className="space-y-2">
        <li>ALL Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running</li>
      </ul>
    </div>
    
    {/*clothing */}
    <div>
      <h3 className="font-medium mb-4">Clothing </h3>
      <ul className="space-y-2">
        <li>All Clothing</li>
        <li>Modest Waer</li>
        <li>Hoodie & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>

    {/*kid's shoes*/}
    <div>
      <h3 className="font-medium mb-4">Kids</h3>
      <ul className="space-y-2">
        <li>Infant & Toddler Shoes</li>
        <li>Kid's Shoes</li>
        <li>Kid's Jordan Shoes</li>
        <li>Kid's BasketBall Shoes</li>
      </ul>
    </div>
  </div>
  )
}
export default Icons
