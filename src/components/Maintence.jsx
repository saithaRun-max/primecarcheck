import topCar from "../assets/topcar.jpg";
import simplifyselling from "../assets/simplifyselling.jpg";

const Maintence = () => {
  return (
    <>
      <div className="w-screen  bg-white md:px-44 relative ">
        <div className="md:py-16 py-10 px-4 md:flex-col flex-row justify-center">
          <h2 className="md:text-4xl text-3xl font-bold text-[#0F774A] text-center">
            Maintenance Report
          </h2>
        </div>
        <div className="md:flex flex-row">
        <div className=" md:w-[600px] md:flex-col flex-row justify-start px-2">
          <figure>
            <img className="md:h-[320px] md:w-[570px] h-[220px] w-[390px]" src={topCar} alt="img" />
          </figure>

          <div className="py-4 px-2">
            <h2 className=" text-2xl font-bold text-[#0F774A]">
              Keep Your Car in Top Shape with  <br className="block md:hidden"/> Self-Check <br className="hidden md:block"/> Reports
            </h2>

            <div className="h-[2px] bg-[#E3E3E3] md:w-[550px] my-4 ">
              <div className="w-20 h-[2px] bg-[#EE0D09]"></div>
            </div>
            <p className="text-base text-[#212529]">
              {" "}
              <span className="font-bold">Track Maintenance History: </span>
              Maintain a detailed log of all maintenance activities, from oil
              changes to tire rotations, ensuring your vehicle is always
              road-ready.
            </p>

            <p className="text-base text-[#212529]">
              {" "}
              <span className="font-bold">Monitor Performance: </span>
              Document any changes in your vehicle’s performance, including fuel
              efficiency and handling, to detect early signs of wear and tear.
            </p>

            <p className="text-base text-[#212529]">
              {" "}
              <span className="font-bold">Schedule Inspections: </span>
              Set reminders for routine inspections and services to avoid
              unexpected breakdowns and costly inspections.
            </p>

            <p className="text-base text-[#212529]">
              {" "}
              <span className="font-bold">Generate Reports: </span>
              Create detailed reports that include information on engine
              performance, brake condition, and fluid levels, all easily
              accessible through our platform.
            </p>
          </div>
        </div>

        <div className=" md:w-[600px] md:flex-col md:justify-start flex-row mt-8 md:mt-0 md:ml-4 px-2">
          <figure>
            <img className="md:h-[320px] md:w-[570px] h-[220px] w-[390px]" src={simplifyselling} alt="img" />
          </figure>

          <div className="py-4 px-2">
            <h2 className=" text-2xl font-bold text-[#0F774A] ">
            Simplify Selling Your Car with Detailed Reports
            </h2>

            <div className="h-[2px] bg-[#E3E3E3] md:w-[550px] md:mt-12 my-4">
              <div className="w-20 h-[2px] bg-[#EE0D09]"></div>
            </div>
            <p className="text-base text-[#212529]">
              {" "}
              <span className="font-bold">Detailed Vehicle Overview: </span>
              Provide potential buyers with an in-depth report that includes the car’s service history, mileage, and current condition.
            </p>

            <p className="text-base text-[#212529]">
              {" "}
              <span className="font-bold">Transparent Transaction: </span>
              Build trust with prospective buyers by offering a transparent view of your vehicle's health, showcasing your commitment to honesty and reliability.
            </p>

            <p className="text-base text-[#212529]">
              {" "}
              <span className="font-bold">Competitive Edges: </span>
              Stand out in the market with a comprehensive report that highlights the strengths and recent maintenance of your vehicle, making it more appealing to buyers.
            </p>

            <p className="text-base text-[#212529]">
              {" "}
              <span className="font-bold">Hassle-Free Experience: </span>
              Our user-friendly platform ensures that creating and sharing vehicle condition reports is quick and straightforward, reducing the stress of selling your car.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Maintence;
