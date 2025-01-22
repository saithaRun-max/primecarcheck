import background from "../assets/pattern.png";
import carCheckingImg from "../assets/benefits.jpg";
import { MdCheckCircleOutline } from "react-icons/md";

const BenfitsOfService = () => {
  return (
    <>
      <div className="relative -z-50 bg-[#F2F3F8] ">
        <img src={background} className="" />
      </div>
      <div className=" -mt-[620px] ">
        <div className="flex mx-52">
          <div className="">
            <div className="ml-28 mb-4">
              <h2 className="text-[#0F774A] font-bold text-4xl ">
                Benefits of Inspection
              </h2>
            </div>
            <div>
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
          <div className="ml-40">
          <img src={carCheckingImg} className="h-[312px] w-[470px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BenfitsOfService;
