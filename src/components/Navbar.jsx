import React from "react";
import Logo from "../assets/primecarcheck_logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="bg-white h-[90px] box-border flex align-middle">
        <div className=" flex align-middle p-6 pl-14">
          <div className="">
            <img src={Logo} className="h-[75px] w-[125px]" />
          </div>
          <h1 className="text-4xl text-[#0f774a] font-semibold mt-4  ml-3">
            {"HYDERABAD"}
          </h1>
        </div>
        <div className="ml-80 mt-12">
          <div className="flex align-middle">
            <div className="text-[#EE0D09]  hover:text-[#EE0D09] active:text-[#EE0D09] font-bold text-lg  flex-col align-middle">
              Home
              <div className="h-[2px] w-6 bg-[#EE0D09]"></div>
            </div>

            <h2 className="text-black hover:text-[#EE0D09] active:text-[#EE0D09] font-bold text-lg ml-6">
              About US
            </h2>
            <h2 className="text-black hover:text-[#EE0D09] active:text-[#EE0D09] font-bold text-lg ml-6">
              SERVICES
            </h2>
            <h2 className="text-black hover:text-[#EE0D09] active:text-[#EE0D09] font-bold text-lg ml-6">
              CONTACT US
            </h2>
          </div>
        </div>
        <div className="mt-8 ml-20">
          <button className="h-12 px-8 bg-red-600 text-white font-bold border-0  hover:bg-red-700 text-base ">
            <a >
              BOOK A SCHEDULE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
