import topCar from "../assets/topcar.jpg";
import simplifyselling from "../assets/simplifyselling.jpg";

const Maintence = () => {
  return (
    <>
      <div className="w-screen  bg-white px-32">
        <div className="py-16 flex justify-center">
          <h2 className="text-4xl font-bold text-[#0F774A]">
            Maintenance Report
          </h2>
        </div>
        <div className="flex">
        <div className=" w-[600px] flex-col justify-start">
          <figure>
            <img className="ml-8" src={topCar} alt="img" />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-[#0F774A]">
              Keep Your Car in Top Shape with Self-Check <br /> Reports
            </h2>

            <div className="h-[2px] bg-[#E3E3E3] w-[550px] mt-4">
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

        <div className=" w-[600px] flex-col justify-start">
          <figure>
            <img className="ml-8" src={simplifyselling} alt="img" />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-[#0F774A]">
            Simplify Selling Your Car with Detailed Reports
            </h2>

            <div className="h-[2px] bg-[#E3E3E3] w-[550px] mt-12">
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
