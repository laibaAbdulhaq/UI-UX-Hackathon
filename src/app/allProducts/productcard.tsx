interface ProductProps {
    id: number;
    productImage: string;
    productName: string;
    productFor: string;
    productColour: string;
    productPrice: string;
  }
  
  const Productcard= (props:any) => {
    console.log(props)

    return (
    
      <div className="w-full lg:w-[348px] lg:h-[533px]  sm:w-sm mx-auto md:p-4 lg:p-4  shadow-sm hover:shadow-md">
        <img
          src={props.productImage}
          alt={props.productName}
          className="w-full lg:w-[348px] lg:h-[348px]  object-cover mb-2"
        />
        <div className="sm:mt-0 md:pl-1 md:mt-4 md:mb-10 lg:pl-1 xl:mt-2 xl:pl-1 sm:px-16 ">
      <div className="text-black font-bold text-lg ">{props.productName}</div>
      <div className="text-slate-400  text-sm">{props.productFor}</div>
      <div className="text-slate-400  text-sm">{props.productColour}</div>
      <div className="text-black font-sm">
        {props.productPrice}</div>
    </div>
       
      </div>
      
    );
  };
  
  export default Productcard;
  