import { data } from "./data.js";
import Slider from "react-slick";

const Home = () => {
  const additionals = {
    autoplay: true,
    autoplaySpeed: 300,
    initialSlide: 1,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="w-full h-[620px] ">
        <Slider additionals className="w-full h-[620px] overflow-hidden">
          <div className="">
            <div className="">
              <img
                src={data[0]}
                alt=""
                className="h-[620px] w-full object-fit md:object-cover"
              />
            </div>
            <div className="">
              <img
                src={data[1]}
                alt=""
                className="h-[620px] w-full object-fit md:object-cover"
              />
            </div>{" "}
            <div className="">
              <img
                src={data[2]}
                alt=""
                className="h-[620px] w-full object-fit md:object-cover"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default Home;
