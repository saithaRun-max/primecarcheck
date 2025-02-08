import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { SiGoogleearthengine } from "react-icons/si";
import { SiMoneygram } from "react-icons/si";
import { GiLaurelsTrophy } from "react-icons/gi";
import whatwecheck from "../assets/whatwecheck.jpg";
import { TbBounceRight } from "react-icons/tb";

const WhyChoose = () => {
  return (
    <>
      <div className="h-[700px] w-[1520px] bg-[#EE0D09]">
        <div className="mx-44 pt-24 flex">
          <div>
            <div className="">
              <h2 className="text-4xl text-white font-bold">
                Why Chose Us ____
              </h2>
            </div>
            <p className="w-[540px] font-normal text-lg text-white py-8">
              Prime Car Check is a trusted car inspection company dedicated to
              providing thorough and reliable vehicle assessments. Our expert
              team ensures your car is in optimal condition, giving you peace of
              mind and enhancing your vehicle's longevity.
            </p>
            <div className="mt-3">
              <div className="flex ">
                <AiOutlineSafetyCertificate className="text-5xl text-white" />

                <h3 className="text-2xl font-bold text-white ml-6 mt-1">
                  Certified Reporting Expert's
                </h3>
              </div>
              <div className="w-[420px] h-[0.5px] my-4 bg-gray-400"></div>
              <div className="flex ">
                <SiGoogleearthengine className="text-5xl text-white" />

                <h3 className="text-2xl font-bold text-white ml-6 mt-1">
                  Fast And Quality Reporting
                </h3>
              </div>
              <div className="w-[420px] h-[0.5px] my-4 bg-gray-400"></div>
              <div className="flex ">
                <SiMoneygram className="text-5xl text-white" />

                <h3 className="text-2xl font-bold text-white ml-6 mt-1">
                  Best Prices in Town
                </h3>
              </div>
              <div className="w-[420px] h-[0.5px] my-4 bg-gray-400"></div>
              <div className="flex ">
                <GiLaurelsTrophy className="text-5xl text-white" />

                <h3 className="text-2xl font-bold text-white ml-6 mt-1">
                  Awarded Car Inspection
                </h3>
              </div>
            </div>
          </div>
          <div className="ml-8">
            <div>
              <h2 className="text-4xl text-white font-bold">
                What We Check ____
              </h2>
            </div>
            <p className="w-[520px] font-normal text-lg text-white pt-4 ">
              Your Vehicle inspection partner
            </p>
            <div className="flex mt-14">
              <img src={whatwecheck} className="h-[410px] w-[270px]" />
              <div className="ml-20">
                <div className="flex ">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Mechanical Functions
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Electrical Functions
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Suspension Functions
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Test Drive
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">Tyres</p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Exterior
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Interior
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Paint Check
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Air conditioner Function
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Under body Check
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Damages Check
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Chassis Frame Check
                  </p>
                </div>
                <div className="flex pt-1">
                  <TbBounceRight className="text-2xl text-white" />
                  <p className="font-normal text-lg text-white ml-3">
                    Repairs Check
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChoose;
