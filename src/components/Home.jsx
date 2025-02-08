import { data } from "./data.js";
import Slider from "react-slick";

const Home = () => {
  const additionals = {
    autoplay: true,
    autoplaySpeed: 300,
    initialSlide: 1,
  };

  return (
    <>
      <div className="w-full h-[620px] ">
        <Slider
          additionals
          className="w-full h-[620px] overflow-hidden"
          customPaging={(i) => {
            return (
              <div className="flex justify-between">
                <img
                  src={data[i]}
                  alt="img"
                  className="w-10 h-10 object-cover"
                />
              </div>
            );
          }
        
        }
        >
          <div className="">
            {data.map((item) => (
              <div className="">
                <img src={item} alt="" className="h-[620px] w-full" />
              </div>
            ))}
          </div>
        </Slider>
      </div>
    </>
  );
};
export default Home;
