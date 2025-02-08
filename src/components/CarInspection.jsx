import InspectinImg from "../assets/primecarcheck2.jpg";
import gridBackground from "../assets/pattern.png";

const CarInspection = () => {
  return (
    <>
      <div className="relative -z-50 ">
        <img src={gridBackground} className="bg-[#F2F3F8] h-[580px] w-full " />
      </div>
      <div className="px-40 -mt-[460px] h-[480px] ">
        <div className=" relative">
          <div className="flex align-middle justify-center ">
            <div className="">
              <img src={InspectinImg} className="max-w-md  " />
            </div>
            <div className="ml-10 ">
              <h1 className="text-4xl ml-10 font-extrabold text-[#0F774A]">
                Best Car Inspection in Hyderabad
              </h1>
              <p className="pt-6 text-[#5E3C3C] text-lg w-[670px]">
                Prime Car Check is one of the leading car inspection services in
                Hyderabad, known for its comprehensive and meticulous approach
                to vehicle assessments. They offer a wide range of services,
                including detailed inspections of engine health, transmission,
                suspension, brakes, and overall vehicle safety, ensuring that
                every aspect of a car is thoroughly evaluated. Their team of
                highly skilled technicians utilizes advanced diagnostic tools
                and follows industry-standard protocols to provide accurate and
                reliable results.
              </p>
              <p className="pt-6 text-[#5E3C3C] text-lg  w-[670px]">
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
    </>
  );
};

export default CarInspection;
