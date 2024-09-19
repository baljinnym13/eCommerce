import React from "react";

const LogIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[800px] gap-10">
      <img src="./logo.png" alt="logo" />
      <h2>Welcome Back</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          className="w-full max-w-xs input input-bordered"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-xs input input-bordered"
        />
        <button className="btn btn-wide bg-[#0166FF] text-white">Log in</button>
      </div>
      <div>
        <span>Don’t have account?</span>
      </div>
    </div>
  );
};

export default LogIn;
