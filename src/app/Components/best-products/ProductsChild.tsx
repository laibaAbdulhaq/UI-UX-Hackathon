import React from 'react'

const ProductsChild = (props:any) => {
    console.log(props)
  return (
    <div className=" pt-10   w-[441.36px] h-[510.36px]" >
    {/* Product Image */}
    <div className="w-[441.36px] h-[441.36px] px-16 ">
      <img
        src={props.productImage}
        alt={props.productImage}
        className="bg-slate-300 border-0 object-cover"
      />
    </div>
  
    {/* Product Details */}
    <div className=" -my-28 px-16 ">
      <div className="text-black font-bold">{props.productName}</div>
  
      <div className="text-slate-400  ">{props.productFor}</div>
  
      <div className="text-black font-medium px-64 -my-12 ">{props.productPrice}</div>
    </div>
  </div>
  
  )
}

export default ProductsChild;
