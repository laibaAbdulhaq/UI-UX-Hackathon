
import BestProducts from "./Components/best-products/BestProducts";
import Products from "./Components/best-products/Products";
import TopHeader from "./Components/TopHeader";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Feature from "./Components/Feature";
import GearUP from "./Components/gear-up/GearUp";
import GearUpProducts from "./Components/gear-up/GearUpProducts";
import DonotMiss from "./Components/DonotMiss";
import Essential from "./Components/Essential";
import Icons from "./Components/Icons";

export default function Home() {
  return (
    <div>
      <TopHeader/>
      <Hero/>
      <Products/>
      <BestProducts/>
      <Feature/>
      <GearUP/>
      <GearUpProducts/>
      <DonotMiss/>
      <Essential/>
      <Icons/>
      <Footer/>
    </div>
    
  );
}
