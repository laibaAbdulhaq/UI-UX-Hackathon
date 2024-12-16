import React from "react";
import Productcard from "./productcard";


const Productdata = () => {
    const Product =[
        { 
            id: 1,
            productImage:"/id 1.png",
            productName: "Nike Air Force 1 Mid 07",
            productFor: "Men's Shoes",
            productColour: "1 Colour",
            productPrice: "₹10.795.00",
        },
        {
            id: 2,
            productImage:"/id 2.png",
            productName: "Nike Court Vision Low Next Nature",
            productFor: "Men's Shoes",
            productColour: "1 Colour",
            productPrice: "₹4995.00",
        },
        {
            id: 3,
            productImage:"/id 3.png",
            productName: "Nike Air Force 1 PLT.AF.ORM",
            productFor: "Womem's Shoes",
            productColour: "1 Colour",
            productPrice: "₹8 695.00",
        },
        {
            id: 4,
            productImage:"/id 4.png",
            productName: "Nike Air Force 1 React",
            productFor: "Men's Shoes",
            productColour: "1 Colour",
            productPrice: "₹13.995",
        },
        {
            id: 5,
            productImage:"/id 5.png",
            productName: "Air Jordan 1 Elevate Low",
            productFor: "Womem's Shoes",
            productColour: "1 Colour",
            productPrice: "₹11 895.00",
        },
        {
            id: 6,
            productImage:"/id 6.png",
            productName: "Nike Standard Issue",
            productFor: "Womem's Basketball Jersey",
            productColour: "1 Colour",
            productPrice: "₹2 895.00",
        },
        {
            id: 7,
            productImage:"/id 7.png",
            productName: "Nike Dunk Low Retro SE",
            productFor: "Womem's Shoes",
            productColour: "1 Colour",
            productPrice: "₹9 695.00",
        },
        {
            id: 8,
            productImage:"/id 8.png",
            productName: "Nike Dri-FIT UV Hyverse",
            productFor: "Men's Short-Sleeve Graphic Fitness Top",
            productColour: "1 Colour",
            productPrice: "₹2 495.00",
        },
        {
            id: 9,
            productImage:"/id 9.png",
            productName: "Nike Court Vision Low",
            productFor: "Men's Shoes",
            productColour: "1 Colour",
            productPrice: "₹5 695.00",
        },
        {
            id: 10,
            productImage:"/id 10.png",
            productName: "Nike Dri-FIT Ready",
            productFor: "Mens Short Sleeve Fitness Top",
            productColour: "3 Colour",
            productPrice: "₹2 495.00",
        },
        {
            id: 11,
            productImage:"/id 11.png",
            productName: "Nike One Leak Protection:Period",
            productFor: "Womem's Mid-Rise 18cm (approx.) Biker Shorts",
            productColour: "2 Colour",
            productPrice: "₹13.995",
        },


    ]

    return (
        <div className= "container mx-auto  px-4 sm:px-6 lg:px-8">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-12'>
            {Product.map((items:any)=>(
                <Productcard
                id={1}
                productImage={items.productImage}
                productName={items.productName}
                productFor={items.productFor}
                productColour={items.productColour}
                productPrice={items.productPrice}
                />
            ))}
            </div>
        </div>

    )
}
export default Productdata;