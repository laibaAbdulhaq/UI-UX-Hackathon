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
        <div>
            <div className='container flex flex-row   pb-12 space-x-1' >
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
