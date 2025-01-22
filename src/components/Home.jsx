import { useEffect, useRef, useState } from "react";
import Slider_1 from "../assets/image-2.jpg";
import Slider_2 from "../assets/image-4.jpg";
import Slider_3 from "../assets/image-6.jpg";

const Home = () => {
  const [carouselActiveItem, setcarouselActivetem] = useState(0);

  const carouselRef = useRef(null);
  const carouselImgSrc = [Slider_1, Slider_2, Slider_3];
  const imgWidth = 1070;
  const imgHeight = 200;

  const scrollItem = () => {
    setcarouselActivetem((preState) => {
      if (carouselImgSrc.length - 2 > preState) {
        return preState + 1;
      } else {
        return 0;
      }
    });
  };

  const autoPlay = () => {
    setInterval(scrollItem, 2000, []);
  };

  useEffect(() => {
    const play = autoPlay();
    return () => clearInterval(play);
  }, [autoPlay]);
  useEffect(() => {
    carouselRef.current?.scroll({ left: imgWidth * carouselActiveItem });
  }, [carouselActiveItem]);

  return (
    <>
      <div ref={carouselRef} className="carousel carousel-center w-full h-full -z-50 relative">
        {carouselImgSrc.map((imgSrc) => (
          <div key={imgSrc} className="carousel-item">
            <img
              className="w-full"
              width={imgWidth}
              height={imgHeight}
              src={imgSrc}
              alt="image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
