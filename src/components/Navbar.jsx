import React from "react";
import Logo from "../assets/primecarcheck_logo.png";
import { SiPlatformdotsh } from "react-icons/si";

const Navbar = () => {
  return (
    <div>
      <div className="bg-white h-[90px] box-border flex align-middle">
        <div className=" flex align-middle md:p-6 p-4 md:pl-14">
          <div className="">
            <img
              src={Logo}
              className="md:h-[75px] h-[60px]  md:w-[125px] w-[100px]"
            />
          </div>
          <h1 className="md:text-4xl text-3xl text-[#0f774a] font-semibold mt-4  ml-3">
            {"HYDERABAD"}
          </h1>
        </div>
        <div>
          <div className="md:ml-80 md:mt-12">
           
            <div className="md:flex md:align-middle hidden md:visible">
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
        </div>
        <div>
        <div className="inline-block md:hidden mt-10 ml-16">
              <SiPlatformdotsh className="text-2xl" />
            </div>
        <div className="md:mt-8 md:ml-20 hidden md:inline-block">
          <button className="h-12 px-8 bg-red-600 text-white font-bold border-0  hover:bg-red-700 text-base rounded-sm ">
            <a>BOOK A SCHEDULE</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
