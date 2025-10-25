import { Link, useParams } from "react-router";
import useGameData from "../../Hooks/useGameData";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./customswiper.css";
// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { MdInstallDesktop } from "react-icons/md";
import { setWishList } from "../../Utility/localStorage";

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
    <section className="flex flex-col md:flex-row gap-4 md:gap-8  p-4 md:p-6 border border-white/30 rounded-2xl">
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
          className="h-52 md:h-64 lg:h-72 xl:h-80 2xl:h-96 border border-white/30 rounded-2xl"
        >
          {game?.images?.map((image) => (
            <SwiperSlide>
              <img className="h-full cursor-pointer" src={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* swiper for small image  */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "20px",
          }}
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-28 md:h-40"
        >
          {game?.images?.map((image) => (
            <SwiperSlide>
              <img
                className="h-full object-cover cursor-pointer rounded-2xl border border-white/30"
                src={image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full md:w-1/2 text-white/50 text-lg">
        <div className="space-y-4">
          {/* title and release date  */}
          <h2 className="text-3xl md:text-5xl text-info font-semibold">
            {game?.title}
          </h2>

          <div className="divider"></div>
          <p>
            <span>Release On: </span>
            <span>{game?.releaseDate}</span>
          </p>

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

          <div className="divider"></div>

          {/* description  */}
          <div>
            <p className="font-light">{game?.description}</p>
          </div>

          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-3">
            <p>Develop by: {game?.developer}</p>
            <p>Publisher: {game?.publisher}</p>
            <p>Multiplayer: {game?.multiplayer ? "Yes" : "No"}</p>
            <p>Catergory: {game?.category}</p>
            <p>SubCategory: {game?.category}</p>
            <p className="space-x-2">
              Platform:{" "}
              {game?.platform?.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="pt-5 flex items-center justify-end gap-4">
          <Link
            to={game?.downloadLink}
            target="_blank"
            className="btn btn-success btn-outline text-white"
          >
            <MdInstallDesktop />
            Install Now
          </Link>
          <button
            onClick={() => setWishList(game?.id)}
            className="btn btn-info text-white"
          >
            <LuClipboardList />
            Add to wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
