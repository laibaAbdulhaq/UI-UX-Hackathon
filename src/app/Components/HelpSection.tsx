import React from "react";

const HelpSection = () => {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            GET HELP
          </h2>
          <div className="mt-6 flex justify-center">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full max-w-lg rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
  
          <div className="mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8">
            {/* Column 1 */}
            <div className="col-span-2 border border-gray-300 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h3>
              <p className="text-gray-700">
                We want to make buying your favorite Nike shoes and gear online
                fast and easy, and we accept the following payment options:
              </p>
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                <li>Visa, Mastercard, Diners Club, Discover</li>
                <li>American Express, Visa Electron, Maestro</li>
                <li>Apple Pay</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Nike Members can store multiple debit or credit cards in their
                profile for faster checkout. If you're not already a Member,{' '}
                <a href="/join" className="text-black underline">
                  join us today.
                </a>
              </p>
              <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                JOIN US
              </button>
              <button className="ml-4 mt-4 border border-black text-black px-6 py-2 rounded hover:bg-gray-200">
                SHOP NIKE
              </button>
              <h4 className="text-lg font-medium text-gray-900 mt-6">FAQs</h4>
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                <li>Does my card need international purchases enabled?</li>
                <li>Can I pay for my order with multiple methods?</li>
                <li>Why don't I see Apple Pay as an option?</li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div className="border border-gray-300 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">CONTACT US</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Phone:</strong> 0800 919 0566 <br />
                  Products & Orders: 24 hours a day, 7 days a week
                </li>
                <li>
                  <strong>Live Chat:</strong> 24 hours a day, 7 days a week
                </li>
                <li>
                  <strong>Store Locator:</strong> Find Nike retail stores near
                  you.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HelpSection;
  