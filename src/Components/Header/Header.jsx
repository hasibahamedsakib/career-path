import React from "react";
import headerImg from "../../assets/All Images/Header.png";
const Header = () => {
  return (
    <div className="bg-[#f9f9ff]">
      <div className="container flex justify-between items-center flex-col md:flex-row">
        <div>
          <h1 className="md:text-7xl text-4xl font-semibold md:w-[570px] sm:w-full md:leading-[90px]">
            One Step <br /> Closer To Your <br />
            <span className="text-purple-400">Dream Job</span>
          </h1>
          <p className="text-slate-600 md:w-[500px] my-6 font-semibold">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-purple">Get Started</button>
        </div>
        <div className="sm:w-full">
          <img src={headerImg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
