import React from 'react'

const GearChild = (props:any) => {
    console.log(props)
  return (
    <div className='  w-[666px] h-[477px]'>

        <div className=" pt-10   w-[300px] h-[393px] px-8" >
    {/* Product Image */}
    <div className="w-[300px] h-[300px] px-6 ">
      <img
        src={props.productImage}
        alt={props.productImage}
        className="bg-slate-300 border-0 object-cover"
      />
    </div>
  
    {/* Product Details */}
    <div className=" -my-10 px-6 ">
      <div className="text-black font-sm text-sm">{props.productName}</div>
  
      <div className="text-slate-400  ">{props.productFor}</div>
  
      <div className="text-black font-sm px-52 -my-24 ">{props.productPrice}</div>
      
    </div>
  </div>
      
    </div>
  )
}

export default GearChild
