import InspectinImg from "../assets/primecarcheck2.jpg";
import gridBackground from "../assets/pattern.png";

const CarInspection = () => {
  return (
    <>
      <div className="relative -z-50 ">
        <img
          src={gridBackground}
          className="bg-[#F2F3F8] md:h-[620px] h-[1010px] w-full "
        />
      </div>
      <div className=" md:px-40 md:-mt-[540px] -mt-[930px] px-2 pb-6">
        <div className=" relative">
          <div className="flex-row md:flex md:align-middle md:justify-center ">
            <div className="px-1">
              <img
                src={InspectinImg}
                className="md:h-[310px] md:w-[470px] h-[250px] w-[380px] "
              />
            </div>
            <div>
              <div className="md:ml-10  md:w-[650px]">
                <h1 className="text-4xl  md:ml-8 md:font-extrabold font-bold text-center text-[#0F774A]">
                  Best Car Inspection <br className="md:hidden" />
                  in Hyderabad
                </h1>
                <p className="pt-6 text-[#5E3C3C] text-lg  md:overflow-hidden">
                  Prime Car Check is one of the leading car inspection services
                  in Hyderabad, known for its comprehensive and meticulous
                  approach to vehicle assessments. They offer a wide range of
                  services, including detailed inspections of engine health,
                  transmission, suspension, brakes, and overall vehicle safety,
                  ensuring that every aspect of a car is thoroughly evaluated.
                  Their team of highly skilled technicians utilizes advanced
                  diagnostic tools and follows industry-standard protocols to
                  provide accurate and reliable results.
                </p>
                <p className="pt-6 text-[#5E3C3C] text-lg   md:overflow-hidden">
                  With a strong commitment to customer satisfaction, Prime Car
                  Check not only helps car owners and buyers make informed
                  decisions but also ensures the longevity and performance of
                  their vehicles. Their reputation for excellence and
                  professionalism makes them the go-to choice for anyone seeking
                  the best car inspection in Hyderabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarInspection;
