import React from "react";
import Logo from "../assets/primecarcheck_logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white h-[120px] transition-transform toast-bottom translate-y-6 delay-1000">
        <div className="navbar-start flex align-middle ml-2">
          <div className="mr-2">
            <img src={Logo} className="h-[75px] w-[125px]" />
          </div>
          <h1 className="text-4xl text-[#0f774a] font-semibold">
            {"HYDERABAD"}
          </h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">
            <h2 className="text-black  hover:text-[#EE0D09] active:text-[#EE0D09] font-bold text-lg mr-4">Home</h2>
            <h2 className="text-black hover:text-[#EE0D09] active:text-[#EE0D09] font-bold text-lg mr-4">About US</h2>
            <h2 className="text-black hover:text-[#EE0D09] active:text-[#EE0D09] font-bold text-lg mr-4">SERVICES</h2>
            <h2 className="text-black hover:text-[#EE0D09] active:text-[#EE0D09] font-bold text-lg mr-4">CONTACT US</h2>

            
          </ul>
        </div>
        <div className="mr-6">
          <a className="btn btn-wide rounded-none bg-red-600 text-white text-base border-0  hover:bg-red-700 ">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
