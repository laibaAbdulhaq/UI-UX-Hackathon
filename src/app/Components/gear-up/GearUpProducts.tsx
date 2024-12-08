import React from 'react'
import GearChild from './GearChild'

const GearUpProducts = () => {
    const product= [
        {
            id:1,
            productImage:"/men gear.png",
            productName: "Nike Dri-FIT ADV TechKnit Ultra",
            productFor: "Womem's Short-Sleeve Running Top",
            productPrice: "₹3895",

        },
        {
            id:2,
            productImage:"/men shorts.png",
            productName: "Nike Dri-FIT Challenger",
            productFor:"Men's 18cm (approx.)2-in-1 Versatile Shorts",
            productPrice: "₹2495",

        },
        {
            id:3,
            productImage:"/men pants.png",
            productName: "Nike Dri-FIT ADV Run Devision",
            productFor: "Women's Long-Sleeve Running Top",
            productPrice: "₹9295",

        },
        { 
            id:4,
            productImage:"/women gear.png",
            productName: "Nike Fast",
            productFor: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            productPrice: "₹3795",

        },
    ]
    

  return (
    <div>
        <div className='container flex flex-row   pb-12 space-x-1' >
            {product.map((items:any)=>(
                <GearChild
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

export default GearUpProducts
