import background from "../assets/pattern.png";
import carCheckingImg from "../assets/benefits.jpg";
import { MdCheckCircleOutline } from "react-icons/md";

const BenfitsOfService = () => {
  return (
    <>
      <div className="relative  bg-[#F2F3F8] mt-[780px] md:mt-28 ">
        <img src={background} className="md:h-[520px] h-[700px] w-full" />
      </div>
      <div className="relative z-50 md:-mt-[420px] -mt-[680px] ">
        <div className="flex-row md:flex justify-center md:justify-start  md:ml-44">
          <div className="">
            <div className="md:ml-40  mb-4 ">
              <h2 className="text-[#0F774A] font-bold text-4xl text-center ">
                Benefits of <br className="md:hidden" /> Inspection
              </h2>
            </div>
            <div className="flex-row mx-12 md:mx-0 md:ml-10 my-4">
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">Saftety Assurance</p>
              </div>
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">
                  Early Problem Detection
                </p>
              </div>
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">
                  Extended Vehicle Lifespan
                </p>
              </div>
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">Optimal Performance</p>
              </div>
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">
                  Compliance with Regulations
                </p>
              </div>
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">Resale Value</p>
              </div>
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">Peace of Mind</p>
              </div>{" "}
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">Insurance Benefits</p>
              </div>{" "}
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">Environmental Impact</p>
              </div>{" "}
              <div className="flex align-middle">
                <MdCheckCircleOutline className="text-[#4C4646] text-xl mr-2 mt-1" />
                <p className="text-[#4C4646] text-lg ">Detecting Recalls</p>
              </div>
            </div>
          </div>
          <div className="md:ml-40 md:mt-2 mx-4 md:mb-0 mb-28">
            <img
              src={carCheckingImg}
              className="md:h-[312px] md:w-[470px] w-[380px] h-[250px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BenfitsOfService;
