import React from "react";

const Register = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border focus:outline-none focus:border-gray-600"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border focus:outline-none focus:border-gray-600"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border focus:outline-none focus:border-gray-600"
            type="text"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4 pt-8">
          <button
            type="submit"
            className="w-full bg-salmonPink text-white py-2 hover:bg-salmonPinkLight hover:text-black font-bold text-lg rounded-md"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already Have an Account?</span>
        <button className="text-salmonPink ml-2" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
