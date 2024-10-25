import React from "react";

const Login = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
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
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center" htmlFor="">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="" className="text-salmonPink">
            Forgot Password
          </a>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-salmonPink text-white py-2 hover:bg-salmonPinkLight hover:text-black font-bold text-lg rounded-md"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Don't Have an Account?</span>
        <button className="text-salmonPink ml-2" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
