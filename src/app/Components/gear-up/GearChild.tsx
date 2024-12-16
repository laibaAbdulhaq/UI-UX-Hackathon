import React from 'react'

const GearChild = (props:any) => {
    console.log(props)
  return (
    <div className='w-full  max-w-[666px] h-[477px] '>
        {/*child page */}
        <div className=" pt-10  w-[300px] h-[393px]  lg:-ml-20 xl:ml-0 px-3 sm:px-8  lg:px-1 " >
    {/* Product Image */}
    <div className="w-[300px] h-[300px] px-6 md:px-6 lg:px-14  xl:px-6  ">
      <img
        src={props.productImage}
        alt={props.productImage}
        className="bg-slate-300 border-0 object-cover gap-0"
      />
    </div>
  
    {/* Product Details */}
    <div className=" -my-10 lg:-my-20 xl:-my-10 px-6 md:px-6 lg:px-14  xl:px-6">
      <div className="text-black font-sm text-sm">{props.productName}</div>
      <div className="text-slate-400  ">{props.productFor}</div>
      <div className="text-black font-sm sm:px-52 sm:-my-24 md:px-52 md:-my-24 lg:px-0 xl:px-52 lg:my-0 xl:-my-20">
        {props.productPrice}</div>
    </div>
  </div>
</div>
  )
}
export default GearChild;







