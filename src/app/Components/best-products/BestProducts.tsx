import React from 'react'
import ProductsChild from './ProductsChild'

const BestProducts = () => {
    const product= [
        {
            productImage:"/nike women.png",
            productName: "Nike Air Max Pulse",
            productFor: "Womem's Shoes",
            productPrice: "₹13.995",

        },
        {
            productImage:"/nike men.png",
            productName: "Nike Air Max Pulse",
            productFor:"Men's Shoes",
            productPrice: "₹13.995",

        },
        {
            productImage:"/men 97 se.png",
            productName: "Nike Air Max 97 SE",
            productFor: "Men's Shoes",
            productPrice: "₹16.995",

        },
    ]
  return (
   /*parent best product*/
        <div className= "container mx-auto  px-4 sm:px-6 lg:px-8">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-12'>
            {product.map((items:any)=>(
                <ProductsChild
                productImage={items.productImage}
                productName={items.productName}
                productFor={items.productFor}
                productPrice={items.productPrice}
                />
            ))}
            </div>
        </div>
  )
}
export default BestProducts;
