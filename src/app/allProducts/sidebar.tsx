const Sidebar = () => {
  return (
    <div className=" w-[260px] mx-auto  p-4">
      <h2 className="font-bold text-lg mb-4">New(200)</h2>
      <div className="space-y-4">
        <div>
          <ul className="space-y-2 cursior-pointer">
            <li>Shoes</li>
            <li>Sport Bras</li>
            <li>Top & T-Shirts</li>
            <li>Hoodie & SweatShirts</li>
            <li>Jackets</li>
            <li>Trouser & Tights</li>
            <li>Shorts</li>
            <li>Tracksuits</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Scoks</li>
            <li>Accessories & Eqipments</li>
            
          </ul>
          <hr className="my-4 border-gray-300" />

          <h3 className="font-semibold">Gender</h3>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Men
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Women
          </label>

          <h3 className="font-semibold">Kids</h3>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Boys
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />Girls
          </label>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;

