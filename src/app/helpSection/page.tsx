import React from "react";
import { Search } from "lucide-react";
import { FaMobileScreenButton } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";

const helpSection = () => {
    return (
      <div className="bg-white w-full xl:w-[1428px] xl:h-[1230px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-screen xl:w-[1440px] xl:h-[132px] ml-8  mx-auto">

          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            GET HELP
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center sm:items-center">
            
            <input
              type="text"
              placeholder="What can we help you with?" 
              className="w-full max-w-lg rounded-md border border-gray-500 px-4 py-2 shadow-sm focus:border-black focus:ring-black sm:mr-4"/>
            {/*<Search className="text-gray-300 my-4 sm:my-0 "/>*/}
          </div>
          
  
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3 ">
            {/* Column 1 */}
            <div className="xl:w-[939.75px] xl:h-[1042px] col-span-2 p-6 rounded-lg">

              <h3 className="text-2xl font-medium text-bold mb-4">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h3>

              <p>
                We want to make buying your favorite Nike shoes and gear online
                fast and easy, and we accept the following payment options:
              </p>
              <p className=" ml-5 mt-2">
                Visa, Mastercard, Diners Club, Discover
                American Express, Visa Electron, Maestro
                Apple Pay
              </p>
               <p className=" ml-5 mt-2 ">
                If you enter your PAN information at checkout, you'll be able
                to pay for ypur order with payTM or a local credit card or debit card.
                <br/> Apple Pay
               </p>
              <p className=" mt-4 ">
                <a href="/join" className="text-black underline font-semibold">
                Nike Members 
                </a>
                  can store multiple debit or credit cards in their
                profile for faster checkout. If you're not already a Member,
                <a href="/join" className="text-black underline font-semibold">
                  join us 
                </a>
                today.
              </p>
             
             {/*buttons */}
             <div className="mt-4 flex space-x-4">
              <button className="bg-black text-white rounded-full px-2 py-1 sm:px-6 sm:py-2">
                JOIN US
              </button>

              <button className="border bg-black text-white px-2 py-1 sm:px-6 sm:py-2 rounded-full">
                SHOP NIKE
              </button>
              </div>

              <h4 className="text-lg font-medium mt-6">FAQs</h4>

                 <p className="mt-2 font-medium">
                  Does my card need international purchases enabled?
                </p>
                <p className=" text-gray-900">
                  Yes, we recommend asking your bank to enable international purchases on your card.You will be notified at checkout
                  if international purchases need to be emabled.
                </p>
                <p className="mb-4">
                  Please note, some bank may charge
                <a href="/join" className="text-black underline font-semibold">
                  a small transaction fee
                </a>
                for international orders.
               </p>
                <p className="mt-2  font-medium">
                  Can I pay for my order with multiple methods?
                </p>
                <p className="mb-4 mt-1 text-gray-900 ">
                  No, payment for Nike orders can't be split between multiple payment methods.
                </p>
                <p className="mt-2  font-medium">Why don't I see Apple Pay as an option?</p>
                <p className="mb-4 mt-1 text-gray-900">You can use any accepted credit card to pay for SNKRS order.</p>
                <p className="mt-2  font-medium">Why I don't see Apple Pay as an oprion?</p>
                <p className="mb-4 mt-1 text-gray-900">To see Apple Pay as an option in the Nike App or on Nike.com,
                  You will need to use a compatible Apple device running the latest OS,
                  be signed in to your iCloud account and have asupported card in your Wallet.
                  Additionally, You'll need to use safari to use Apple Pay on Nike.com.
                </p>
                <p className="text-gray-900">Was this answer heplful?</p>
                <p className="flex  text-black text-2xl cursor-pointer">
                <IoIosThumbsUp/>
                <IoIosThumbsDown/>
                </p>
                <p className="text-gray-500 mt-1">RELATED</p>
                <p className="ml-5 py-4 underline text-black decoration-gray-400 ">
                      WHAT ARE NIKE'S DELIVERY OPTIONS?
                  <br/>HOW DO I GET FREE DELIVERY ON LINK ORDERS?
                </p>
            </div>
  
            {/* Column 2 */}
            <div className=" xl:w-[313.25px] xl:h-[1042px] text-center p-6 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900 text-bold mb-4">CONTACT US</h3>

              <ul className="space-y-4 text-gray-700">

                {/*contact part */}
              <FaMobileScreenButton className="text-5xl items-center text-black mx-auto"/>
                <li>
                  <strong> 000 800 919 0566 </strong> <br />
                   Products & Orders: 24 hours a day,<br/>
                   7 days a week
                   Company Info and Enquries:07:30 -<br/>
                    16:30, Monday - Friday
                </li>

                {/*message part */}
                <RiMessage2Fill className="text-5xl  text-black mx-auto"/>
                <li>
                   <strong>24 hours a day,</strong>  <br/>
                   7 days a week
                </li>

                {/*mail part */}
                 <IoIosMail className="text-5xl  text-black mx-auto"/>  
                <li>
                  <strong>We'll reply within</strong>
                  <br/>five buisness days
                </li>

                {/*location part */}
                <img src="/nike location.png" className="mx-auto"/>
                <li>
                  <strong>STORE LOCATOR:</strong><br/>
                   Find Nike retail stores near you.
                </li>

              </ul>

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default helpSection;
  