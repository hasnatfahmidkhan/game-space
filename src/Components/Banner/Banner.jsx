import React from "react";
import useGameData from "../../Hooks/useGameData";
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
const Banner = () => {
  const { games, loading } = useGameData("/banner.json");
  const { images } = games;

  console.log(images);
  if (loading) {
    return <div className="skeleton h-[750px] w-full"></div>;
  }
  return (
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
      {images?.map((slide) => (
        <SwiperSlide className="">
          <img
            className="max-h-[750px] w-full object-center object-cover rounded-sm"
            src={slide}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
