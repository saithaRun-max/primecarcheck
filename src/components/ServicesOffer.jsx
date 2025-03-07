import genral from "../assets/general.jpg";
import newCar from "../assets/newcar-ins.jpg";
import sellingCar from "../assets/sellingcar-inspe.jpg";
import service from "../assets/service-1.jpg";

const ServicesOffer = () => {
  return (
    <>
      <div className="bg-white flex-col md:px-40 h-full">
        <div className="md:pt-20 pt-10 ">
          <h2 className="text-4xl text-center font-bold text-[#0F774A]">
            Services that we <br className="md:hidden"/>Offer
          </h2>
        </div>
        <div className="pt-10 px-4 ">
          <p className="text-[#423C3C] text-lg font-base w-[380px] md:w-full ">
            Prime Car Check is a leading car inspection organization dedicated
            to providing comprehensive and reliable vehicle assessments. Our
            services encompass a wide range of detailed inspections designed to
            ensure your vehicle is in optimal condition.
          </p>
        </div>
        <div className="md:flex flex-row justify-between md:mt-14 mt-10 px-4">
          <div className="pt-5 md:pt-0">
            <img src={genral} className="md:w-[275px] md:h-[150px] w-[270px] h-[150px]" />
            <h2 className="text-[#0F774A] text-xl my-5 font-bold">
              New Car Inspection (PDI)
            </h2>
            <div className="h-[2px] w-[275px] bg-[#E4E4E4] ">
              <div className="h-[2px] bg-[#EE0D09] w-24 "></div>
              <button className="w-[380px] md:w-[275px] md:h-10 h-8 rounded-md mt-4 text-sm font-semibold text-[#ffffff] px-0 bg-[#FF0000]">
                Affordable Price Starting from ₹ 1499/-
              </button>
            </div>
          </div>
          <div className="pt-28 md:pt-0">
            <img src={service} className="md:w-[270px] md:h-[150px] w-[270px] h-[150px]" />
            <h2 className="text-[#0F774A] text-xl my-5 font-bold">
              Used Car Inspection
            </h2>
            <div className="h-[2px] w-[275px] bg-[#E4E4E4] ">
              <div className="h-[2px] bg-[#EE0D09] w-24 "> </div>
              <button className="w-[380px] md:w-[275px] md:h-10 h-8 rounded-md mt-4 text-sm font-semibold text-[#ffffff] px-0 bg-[#FF0000]">
                Affordable Price Starting from ₹ 1499/-
              </button>
            </div>
          </div>
          <div className="pt-28 md:pt-0">
            <img src={newCar} className="md:w-[270px] md:h-[150px] w-[270px] h-[150px]" />
            <h2 className="text-[#0F774A] text-xl my-5 font-bold">
              Selling Car Inspection
            </h2>
            <div className="h-[2px] w-[275px] bg-[#E4E4E4] ">
              <div className="h-[2px] bg-[#EE0D09] w-24 "></div>
              <button className="w-[380px] md:w-[275px] md:h-10 h-8 rounded-md mt-4 text-sm font-semibold text-[#ffffff] px-0 bg-[#FF0000]">
                Affordable Price Starting from ₹ 1499/-
              </button>
            </div>
          </div>
          <div className="pt-28 md:pt-0">
            <img src={sellingCar} className="md:w-[270px] md:h-[150px] w-[270px] h-[150px]" />
            <h2 className="text-[#0F774A] text-xl my-5 font-bold">
              General Checkup Inspection
            </h2>
            <div className="h-[2px] md:w-[275px] bg-[#E4E4E4] ">
              <div className="h-[2px] bg-[#EE0D09] w-24 "></div>
              <button className="w-[380px] md:w-[275px] md:h-10 h-8 rounded-md mt-4 text-sm font-semibold text-[#ffffff] px-0 bg-[#FF0000]">
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
