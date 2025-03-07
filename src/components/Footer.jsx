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
    <div className="bg-[#081336] md:mt-4">
      <div className="grid md:grid-cols-12 grid-row-12 md:px-4 px-8">
        <div className="py-6 md:border-b md:border-r border-slate-600 flex md:pl-32 md:col-span-4 row-span-4 ">
          <TfiLocationPin className="text-4xl text-[#E00F19] mt-2" />
          <div className="ml-4 flex-col md:flex-row text-nowrap md:text-wrap ">
            <p className="text-lg text-white ">Address:</p>
            <p className="text-lg text-white ">
              Kukatpally, Hyderabad, Telangana.
            </p>
          </div>
        </div>
        <div className="md:border-b md:border-r border-slate-600 flex md:px-8 py-6 md:col-span-3 row-span-3 ">
          <GoMail className="text-4xl text-[#E00F19] mt-2" />
          <div className="ml-6">
            <p className="text-lg text-white">Email us :</p>
            <p className="text-lg text-white">primecarcheck@gmail.com</p>
          </div>
        </div>
        <div className="md:border-b md:border-r border-slate-600 flex md:px-8 py-6 md:pl-12 md:col-span-3 row-span-3 align-middle">
          <IoCallOutline className="text-4xl text-[#E00F19] mt-3" />
          <div className="ml-4">
            <p className="text-lg text-white">Call us on :</p>
            <p className="text-lg text-white ">
              +91 9000 784 833 <br />
              +91 7207 848 433
            </p>
          </div>
        </div>
        <div className="md:col-span-2 row-span-2 border-b border-slate-600"> </div>
      </div>
      <div className="grid md:grid-cols-12 grid-row-12 md:py-20 py-10 md:px-0 px-10 ">
        <div className="md:col-span-4 row-span-4 md:pl-36">
          <img src={logo} className="h-40 w-40 pb-8" />
          <p className="text-lg w-[360px] text-[#B2B9C5] ">
            Our comprehensive inspections guarantee safety, reliability, and
            performance, giving you peace of mind on every journey.
          </p>
        </div>
        <div className="md:col-span-2 row-span-2 md:pl-10 mt-10 md:mt-0">
          <h2 className="font-bold text-2xl text-white">Useful Links</h2>
          <ul className="pt-8 text-[#B2B9C5] ">
            <li className="text-base">Home</li>
            <li className="text-base pt-2">About Us</li>
            <li className="text-base pt-2">Services</li>
            <li className="text-base pt-2">Contact Us</li>
          </ul>
        </div>
        <div className="md:col-span-2 row-span-2 md:pl-10 mt-10 md:mt-0 ">
          <h2 className="font-bold text-2xl text-white">Our Services</h2>
          <ul className="pt-8 text-[#B2B9C5]">
            <li className="text-base ">New Car Inspection</li>
            <li className="text-base pt-2">Used Car Inspection</li>
            <li className="text-base pt-2">Selling Car Inspection</li>
            <li className="text-base pt-2">General Checkup</li>
          </ul>
        </div>
        <div className="md:col-span-2 row-span-2 md:pl-10 mt-10 md:mt-0">
          <h2 className="font-bold text-2xl text-white"> Social Links</h2>
          <ul className="pt-8 flex justify-stretch text-[#B2B9C5]">
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
      <div className="md:flex justify-between align-bottom text-center md:mx-32 mx-10 py-7 text-[#B2B9C5]">
        <div>
          <p className=" text-lg">
            <span className="text-center">&copy;</span> Copyright Prime Car
            Check 2024 . All right reserved.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-xl font-extrabold text-[#FFD700]">
            Created By Sai Tharun
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
