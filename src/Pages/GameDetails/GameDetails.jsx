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
import { Zap, Cpu, HardDrive, Users } from "lucide-react";
import { setWishList } from "../../Utility/localStorage";
import DetailsCardSkeleton from "../../Skeleton/DetailsCardSkeleton";

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
    return <DetailsCardSkeleton />;
  }

  return (
    <section data-aos="zoom-in">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8  p-4 md:p-6 border border-white/30 rounded-2xl">
        {/* title  */}
        <title>{game?.title}</title>
        {/* image  */}
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
                <img
                  className="h-full cursor-pointer"
                  src={image}
                  loading="lazy"
                />
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
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* content  */}
        <div className="w-full md:w-1/2 text-white/50 text-lg">
          {/* basic info  */}
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
          {/* Action btn  */}
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
      </div>

      <div
        className={`grid grid-cols-1  ${
          game?.platform.includes("PC") ? "sm:grid-cols-2" : "max-w-2xl"
        } gap-5 border border-white/30 rounded-xl p-6 mt-8`}
      >
        {/* Features Section */}
        {game?.features && game.features.length > 0 && (
          <div className="">
            <h3 className="text-2xl font-semibold text-info mb-4">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {game.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <Zap size={20} className="text-info shrink-0 mt-1" />
                  <span className="text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Requirements Section */}
        {game?.platform.includes("PC") && (
          <div>
            <h3 className="text-2xl font-semibold text-info mb-4">
              System Requirements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Minimum Requirements */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu size={24} className="text-warning" />
                  <h4 className="text-xl font-semibold text-warning">
                    Minimum
                  </h4>
                </div>
                <p className="text-white/70 text-sm whitespace-pre-wrap">
                  {game?.minSpecs}
                </p>
              </div>

              {/* Recommended Requirements */}
              <div className="bg-white/5 border border-success/20 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <HardDrive size={24} className="text-success" />
                  <h4 className="text-xl font-semibold text-success">
                    Recommended
                  </h4>
                </div>
                <p className="text-white/70 text-sm whitespace-pre-wrap">
                  {game?.recommendedSpecs}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GameDetails;
