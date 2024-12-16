import Sidebar from "./sidebar";
import ProductCard from "./productcard";
import ProductData from "./productdata";


const allProducts = () => {
  return (
    <div className="flex flex-row" >
        <Sidebar/>
        <div className="w-[1092px]">
       <ProductData/>
       </div>
    

      

     
    </div>
  );
};

export default allProducts;
