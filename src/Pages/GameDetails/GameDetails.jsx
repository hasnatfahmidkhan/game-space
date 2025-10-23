import { useParams } from "react-router";
import useGameData from "../../Hooks/useGameData";
import { useEffect, useState, useRef } from "react";
import GameDetailsCard from "../../Components/GameDetailsCard/GameDetailsCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaStar } from "react-icons/fa6";

const GameDetails = () => {
  const { games, loading } = useGameData("/data.json");
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // get the game
  useEffect(() => {
    const filteredGame = games.find((g) => g.id == id);
    setGame(filteredGame);
  }, [games, id]);

  if (loading) {
    return <p>Loadding....</p>;
  }

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-6 border border-white/30 rounded-2xl">
      {/* title  */}
      <title>{game?.title}</title>
      <div className="w-full md:w-1/2 space-y-5 rounded-2xl overflow-hidden">
        {/* Swiper for big image  */}
        <Swiper
          loop={true}
          spaceBetween={10}
          // navigation={true}
          autoplay={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="h-52 md:h-64 lg:h-72 xl:h-80 2xl:h-96 rounded-2xl"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
        </Swiper>

        {/* swiper for small image  */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-28 md:h-40"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full h-96 md:w-1/2 text-white/50 text-lg">
        <div className="space-y-2">
          {/* title and release date  */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl text-info font-semibold">
              {game?.title}
            </h2>
            <p>
              <span>Release On: </span>
              <span>{game?.releaseDate}</span>
            </p>
          </div>

          {/* price and ratings */}
          <div className="flex items-center gap-4 text-xl font-medium text-info">
            <p>
              <span>Price: </span>
              <span>{game?.price}</span>
            </p>
            <p className="flex items-center gap-1">
              <span>Ratings: </span>
              <span className="flex items-center gap-1 ">
                <FaStar />
                {game?.ratings}
              </span>
            </p>
          </div>

          {/* description  */}
          <div>
            <p className="font-light">{game?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
