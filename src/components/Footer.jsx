import { TfiLocationPin } from "react-icons/tfi";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import logo from "../assets/primecarcheck_logo.png";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialGooglePlusCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-[#081336] ">
      <div className="grid grid-cols-12">
        <div className="py-6 border-b border-r border-slate-600 flex pl-32 col-span-4">
          <TfiLocationPin className="text-4xl text-[#E00F19] mt-2" />
          <div className="ml-4">
            <p className="text-lg text-white">Address:</p>
            <p className="text-lg text-white ">
              Kukatpally, Hyderabad, Telangana.
            </p>
          </div>
        </div>
        <div className="border-b border-r border-slate-600 flex px-8 py-6 col-span-3">
          <GoMail className="text-4xl text-[#E00F19] mt-2" />
          <div className="ml-6">
            <p className="text-lg text-white">Email us :</p>
            <p className="text-lg text-white">primecarcheck@gmail.com</p>
          </div>
        </div>
        <div className="border-b border-r border-slate-600 flex px-8 py-6 pl-12 col-span-3 align-middle">
          <IoCallOutline className="text-4xl text-[#E00F19] mt-3" />
          <div className="ml-4">
            <p className="text-lg text-white">Call us on :</p>
            <p className="text-lg text-white ">
              +91 9000 784 833 <br />
              +91 7207 848 433
            </p>
          </div>
        </div>
        <div className="col-span-2 border-b border-slate-600"></div>
      </div>
      <div className="grid grid-cols-12 py-20 ">
        <div className="col-span-4 pl-36">
          <img src={logo} className="h-40 w-40 pb-8" />
          <p className="text-lg w-[360px] text-[#B2B9C5] ">
            Our comprehensive inspections guarantee safety, reliability, and
            performance, giving you peace of mind on every journey.
          </p>
        </div>
        <div className="col-span-2 pl-10">
          <h2 className="font-bold text-2xl text-white">Useful Links</h2>
          <ul className="pt-8 text-[#B2B9C5] ">
            <li className="text-base">Home</li>
            <li className="text-base pt-2">About Us</li>
            <li className="text-base pt-2">Services</li>
            <li className="text-base pt-2">Contact Us</li>
          </ul>
        </div>
        <div className="col-span-2 pl-10">
          <h2 className="font-bold text-2xl text-white">Our Services</h2>
          <ul className="pt-8 text-[#B2B9C5]">
            <li className="text-base ">New Car Inspection</li>
            <li className="text-base pt-2">Used Car Inspection</li>
            <li className="text-base pt-2">Selling Car Inspection</li>
            <li className="text-base pt-2">General Checkup</li>
          </ul>
        </div>
        <div className="col-span-2 pl-10">
          <h2 className="font-bold text-2xl text-white"> Social Links</h2>
          <ul className="pt-8 flex justify-between text-[#B2B9C5]">
            <li>
              <PiFacebookLogoBold className="text-4xl" />
            </li>
            <li className="text-base">
              <TiSocialLinkedinCircular className="text-4xl" />
            </li>
            <li className="text-base">
              <TiSocialTwitterCircular className="text-4xl" />
            </li>
            <li className="text-base">
              <TiSocialGooglePlusCircular className="text-4xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-700 w-10/12 mx-auto h-0.5"></div>
      <div className="flex justify-between align-bottom text-center mx-32 py-7 text-[#B2B9C5]">
        <div>
          <p className=" text-lg">
            <span className="text-center">&copy;</span> Copyright Prime Car
            Check 2024 . All right reserved.
          </p>
        </div>
        <div>
          <p className="text-lg">Created by Sai Tharun</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
