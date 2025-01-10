import genral from "../assets/general.jpg";
import newCar from "../assets/newcar-ins.jpg";
import sellingCar from "../assets/sellingcar-inspe.jpg";
import service from "../assets/service-1.jpg";

const ServicesOffer = () => {
  return (
    <>
      <div className="bg-white flex-col px-40 h-full">
        <div className="pt-52">
          <h2 className="text-4xl text-center   font-bold text-[#0F774A]">
            Services that we Offer
          </h2>
        </div>
        <div className="py-10">
          <p className="text-[#423C3C] text-lg font-base ">
            Prime Car Check is a leading car inspection organization dedicated
            to providing comprehensive and reliable vehicle assessments. Our
            services encompass a wide range of detailed inspections designed to
            ensure your vehicle is in optimal condition.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <img src={genral} className="" />
            <h2 className="text-[#0F774A] text-xl my-5 font-bold">
              New Car Inspection (PDI)
            </h2>
            <div className="h-[2px] w-[275px] bg-[#E4E4E4] ">
              <div className="h-[2px] bg-[#EE0D09] w-24 "></div>
              <button className="w-full h-10 rounded-md mt-4 text-sm font-semibold text-[#ffffff] px-0 bg-[#FF0000]">
                Affordable Price Starting from ₹ 1499/-
              </button>
            </div>
          </div>
          <div>
            <img src={service} className="h-[157px]" />
            <h2 className="text-[#0F774A] text-xl my-5 font-bold">
              Used Car Inspection
            </h2>
            <div className="h-[2px] w-[275px] bg-[#E4E4E4] ">
              <div className="h-[2px] bg-[#EE0D09] w-24 "></div>
              <button className="w-full h-10 rounded-md mt-4 text-sm font-semibold text-[#ffffff] px-0 bg-[#FF0000]">
                Affordable Price Starting from ₹ 1499/-
              </button>
            </div>
          </div>
          <div>
            <img src={newCar} className="" />
            <h2 className="text-[#0F774A] text-xl my-5 font-bold">
              Selling Car Inspection
            </h2>
            <div className="h-[2px] w-[275px] bg-[#E4E4E4] ">
              <div className="h-[2px] bg-[#EE0D09] w-24 "></div>
              <button className="w-full h-10 rounded-md mt-4 text-sm font-semibold text-[#ffffff] px-0 bg-[#FF0000]">
                Affordable Price Starting from ₹ 1499/-
              </button>
            </div>
          </div>
          <div>
            <img src={sellingCar} className="" />
            <h2 className="text-[#0F774A] text-xl my-5 font-bold">
              General Checkup Inspection
            </h2>
            <div className="h-[2px] w-[275px] bg-[#E4E4E4] ">
              <div className="h-[2px] bg-[#EE0D09] w-24 "></div>
              <button className="w-full h-10 rounded-md mt-4 text-sm font-semibold text-[#ffffff] px-0 bg-[#FF0000]">
                Affordable Price Starting from ₹ 1499/-
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesOffer;
