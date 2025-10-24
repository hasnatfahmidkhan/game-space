import React, { useEffect, useState } from "react";
import { getWishList, removeFromWishList } from "../../Utility/localStorage.js";
import Lottie from "lottie-react";
import empty from "../../assets/empty-box.json";
import { AnimatePresence, motion } from "motion/react";
import useGameData from "../../Hooks/useGameData";
import { FaStar } from "react-icons/fa6";

const MyWishList = () => {
  const { games } = useGameData("/data.json");
  const [wishlist, setWishlist] = useState([]);
  const [sortWish, setSortWish] = useState("none");

  // filtered the wishlist
  useEffect(() => {
    const wishlistId = getWishList();
    const filteredWish = games.filter((game) => wishlistId.includes(game.id));
    setWishlist(filteredWish);
  }, [games]);

  const handleRemove = (id) => {
    // remove from localStorage
    removeFromWishList(id);

    // for ui update
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };
  console.log(wishlist);
  if (sortWish === "rating-asc") {
    wishlist.sort((a, b) => a.ratings - b.ratings);
  } else if (sortWish === "rating-dsc") {
    wishlist.sort((a, b) => b.ratings - a.ratings);
  }

  return (
    <section>
      <title>My Wishlist</title>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-semibold">MyWishList</h2>
        {/* sort  */}
        <div>
          <select
            value={sortWish}
            onChange={(e) => setSortWish(e.target.value)}
            className="select focus-within:border-sky-500 w-fit focus-within:outline-none"
          >
            <option value="none" disabled>
              Sort by ratings
            </option>
            <option value="rating-asc">Low - High</option>
            <option value="rating-dsc">High - Low</option>
          </select>
        </div>
      </div>

      <div className="py-5 space-y-5">
        {wishlist.length === 0 ? (
          <div className="flex flex-col md:items-center">
            <p className="text-gray-500 text-center">
              No games added to Mywishlist yet.
            </p>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="w-md"
            >
              <Lottie animationData={empty} loop={true} />
            </motion.div>
          </div>
        ) : (
          <AnimatePresence>
            {wishlist.map((game) => (
              <motion.div
                layout
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                key={game.id}
                className="w-full bg-white/5 shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row  md:items-start gap-4 p-4 border border-white/30 hover:border-sky-500 transition-colors duration-300"
              >
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="w-full md:w-60 h-40 object-cover rounded-xl"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-info">{game.title}</h3>
                  <p className="text-white/30">{game.category}</p>
                  <p className="text-lg font-semibold text-success ">
                    ${game.price.toLocaleString()}
                  </p>
                  <p className="space-x-2 text-white/30">
                    Platform:{" "}
                    {game?.platform?.map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </p>
                  <p className=" flex items-center gap-1 text-warning">
                    <FaStar />
                    {game.ratings}
                  </p>
                </div>
                <button
                  className="btn bg-white/5 border hover:border-white/10 text-white rounded-xl"
                  onClick={() => handleRemove(game.id)}
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default MyWishList;
