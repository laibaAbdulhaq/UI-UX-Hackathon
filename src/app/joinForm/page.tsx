import React from "react";
const joinForm =()=> {
    return (
      <div className="w-[380px] h-[833px]  py-6  max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Become a Nike Member</h1>
        <p className="text-gray-400 text-sm mb-6 text-center">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
          <input
            type="text"
            name="dateOfBirth"
            placeholder="Date of Birth"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none "
            required
          />
          <p className="text-gray-400 text-xs text-center">
            Get a Nike Member Reward every year on your Birthday.
            </p>
          <select
            name="country"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-400"
            required
          >
            <option value=""  disabled selected hidden aria-label="Select a country"   >
             Select a country
            </option>
            <option value="Pakistan" className="text-black">Pakistan</option>
            <option value="USA" className="text-black">USA</option>
            <option value="UK" className="text-black">UK</option>

            
          </select>
          
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="hidden peer "
                required
              />
              <span className="border border-gray-300 p-2 px-14 cursor-pointer rounded-md  peer-checked:bg-blue-500 peer-checked:text-white text-gray-400">
                Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="hidden peer"
              />
              <span className=   
               "border border-gray-300 p-2 px-12 cursor-pointer rounded-md peer-checked:bg-blue-500 peer-checked:text-white text-gray-400">
                Female
                </span>
            </label>
          </div>
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              name="updates"
              className="w-4 h-4 text-gray-400 border-gray-300 focus:ring-black focus:ring-2 mr-2"
            />
            Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
          </label>
          <p className="text-xs text-gray-400">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="text-gray-400 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-400 underline">
              Terms of Use
            </a>
            .
          </p>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Join Us
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already a Member? <a href="/signinForm" className="text-black font-medium hover:underline">Sign In</a>.
        </p>
      </div>
    );
  }
  export default joinForm;
  