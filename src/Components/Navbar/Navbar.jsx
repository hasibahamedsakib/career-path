import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#f9f9ff]">
      <nav className="flex justify-between items-center container sticky top-0">
        <Link to="/">
          <h1 className="text-4xl font-semibold text-black">
            Career<span className="text-red-400">Path</span>
          </h1>
        </Link>
        <div className="space-x-8 text-gray-800 font-semibold">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/applied-jobs"
          >
            Applied Jobs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </div>
        <button className="btn-purple">Star Applying</button>
      </nav>
    </div>
  );
};

export default Navbar;
