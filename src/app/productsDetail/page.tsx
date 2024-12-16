import Image from "next/image";

export default function ProductDetails() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-10 flex flex-col lg:flex-row gap-8">
      
      {/* Product Image Section */}
      <div className="flex-1 flex justify-center ">
        <img
          src="/Rectangle.png"
          alt="Nike Air Force 1"
          className="object-contain w-full max-w-[400px] md:max-w-[500px] lg:max-w-[653px] h-auto xl:h-[653px]"/>
      </div>

      {/* Product Details Section */}
      <div className="flex-1 space-y-6 md:px-32 lg:px-2 xl:mt-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">Nike Air Force 1 PLT.AF.ORM</h1>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its
          "Inside out"-inspired construction, including unique layering and exposed foam
          accents, ups the ante on this timeless Jordan Brand silhouette. Details like
          the deco stitching on the Swoosh add coveted appeal, while the unexpected
          shading, rich mixture of materials, and aged midsole aesthetic give this release
          an artisan finish.
        </p>
        <div className="text-xl sm:text-2xl font-semibold">₹ 8,695.00</div>
        <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
