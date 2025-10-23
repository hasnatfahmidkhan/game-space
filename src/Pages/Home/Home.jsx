// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import { FaArrowDown } from "react-icons/fa6";

const slides = [slide1, slide4, slide3];

const Home = () => {
  return (
    <div>
      <title>GameSpace - Home</title>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        // navigation={true}
        modules={[Navigation, Pagination, A11y, Autoplay]}
      >
        {slides.map((slide) => (
          <SwiperSlide className="">
            <img
              className="max-h-[750px] w-full object-center object-cover rounded-sm"
              src={slide}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center mt-3.5">
        <button
          onClick={() =>
            window.scrollTo({
              top: 200,
              behavior: "smooth",
            })
          }
          className="bg-white/10 hover:bg-white/5 w-12 h-12 rounded-full cursor-pointer animate-bounce  flex items-center justify-center"
        >
          <FaArrowDown color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default Home;
