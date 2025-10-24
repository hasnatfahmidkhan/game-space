import { useState } from "react";
import GameCard from "../../Components/GameCard/GameCard";
import useGameData from "../../Hooks/useGameData";
import { BounceLoader } from "react-spinners";
import GameCardSkeleton from "../../Skeleton/GameCardSkeleton";
import Lottie from "lottie-react";
import noGameFound from "../../assets/no-game-found.json";
const Games = () => {
  const { games, loading } = useGameData("/data.json");
  const [searchLoading, setSearchLoading] = useState(false);
  const [sortgame, setSortgame] = useState("none");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearchLoading(true);
    setSearch(e.target.value);

    setTimeout(() => {
      setSearchLoading(false);
    }, 800);
  };

  // search games
  const terms = search.trim().toLowerCase();
  const searchedGames = terms
    ? games.filter((game) => game.title.toLowerCase().includes(search))
    : games;

  const displayGames = [...searchedGames];
  if (sortgame === "rating-asc") {
    displayGames.sort((a, b) => a.ratings - b.ratings);
  } else if (sortgame === "rating-dsc") {
    displayGames.sort((a, b) => b.ratings - a.ratings);
  }

  return (
    <section>
      <div className="py-12 text-center space-y-2">
        <h1 className="text-4xl font-bold text-info">Explore All Games</h1>
        <p className="text-2xl  text-white/50">
          Browse our collection of exciting games and find your next favorite.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-white/80">
          All Games{" "}
          <span className="text-xs font-normal tracking-wide">
            ({games.length} games found)
          </span>
        </h2>

        <div className="flex items-center gap-5">
          {/* sort  */}
          <div>
            <select
              value={sortgame}
              onChange={(e) => setSortgame(e.target.value)}
              className="select focus-within:border-sky-500 w-fit focus-within:outline-none"
            >
              <option value="none" disabled>
                Sort by ratings
              </option>
              <option value="rating-asc">Low - High</option>
              <option value="rating-dsc">High - Low</option>
            </select>
          </div>

          {/* search  */}
          <div>
            <label className="input border border-white/30 focus-within:border-sky-500 outline-none group transition-colors duration-75">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={handleSearch}
                value={search}
                className="focus:outline-none"
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>
        </div>
      </div>

      {/* all game card  */}
      {searchLoading ? (
        <div className="flex items-center justify-center h-96">
          <BounceLoader color="#0ca5e9" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-7">
          {loading ? (
            <GameCardSkeleton count={displayGames.length} />
          ) : displayGames?.length === 0 ? (
            <div className="flex items-center justify-center col-span-full pt-10">
              <Lottie animationData={noGameFound} loop={true} />
            </div>
          ) : (
            displayGames.map((game) => <GameCard key={game.id} game={game} />)
          )}
        </div>
      )}
    </section>
  );
};

export default Games;
