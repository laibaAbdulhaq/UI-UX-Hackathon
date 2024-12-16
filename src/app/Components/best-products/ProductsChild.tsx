import React from 'react';

                        /*product child*/
const ProductsChild = (props:any) => {
    console.log(props)
  return (
    <div className="w-full  sm:w-sm mx-auto md:p-4 lg:p-4" >
    {/* Product Image */}
    <div className="w-full h-[300px] overflow-hidden">
      <img
        src={props.productImage}
        alt={props.productImage}
        className=" bg-slate-300  object-cover"
      />
    </div>
  
    {/* Product Details */}
    <div className="sm:mt-0 md:pl-1 md:mt-4 md:mb-10 lg:pl-1 xl:mt-2 xl:pl-1 sm:px-16 ">
      <div className="text-black font-bold text-lg ">{props.productName}</div>
      <div className="text-slate-400  text-sm">{props.productFor}</div>
      <div className="text-black font-medium px-56 -my-11 mb-8  md:-my-11 md:px-64 lg:-my-10 lg:px-52 xl:-my-11 xl:px-72">
        {props.productPrice}</div>
    </div>
  </div>
  )
}
export default ProductsChild;
