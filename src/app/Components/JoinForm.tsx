const JoinForm =()=> {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Become a Nike Member</h1>
        <p className="text-gray-600 text-sm mb-6 text-center">
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
            type="date"
            name="dob"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            required
          />
          <select
            name="country"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            required
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-2"
                required
              />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-2"
              />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
          </div>
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              name="updates"
              className="w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-2 mr-2"
            />
            Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
          </label>
          <p className="text-xs text-gray-600">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="text-black underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-black underline">
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
          Already a Member? <a href="#" className="text-black font-medium">Sign In</a>.
        </p>
      </div>
    );
  }
  export default JoinForm;
  