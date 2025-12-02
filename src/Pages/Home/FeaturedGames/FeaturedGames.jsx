import { FaGamepad } from "react-icons/fa6";
import useGameData from "../../../Hooks/useGameData";
import GameCardSkeleton from "../../../Skeleton/GameCardSkeleton";
import GameCard from "../../../Components/GameCard/GameCard";

const FeaturedGames = () => {
  const { games, loading } = useGameData("/popular.json");
  // console.log(games, loading);
  return (
    <section className="pt-10 md:pt-20 px-4 space-y-15">
      {/* header of popular games  */}
      <div className="flex flex-col items-center gap-3 md:gap-5 text-center">
        <h2 className="flex items-center justify-center gap-4 text-3xl md:text-5xl text-info font-bold">
          <FaGamepad />
          Popular Games
        </h2>
        <p className="text-white/70 text-base md:text-lg">
          Discover the most played and highly rated games across all platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {loading ? (
          <GameCardSkeleton />
        ) : (
          games.map((game, index) => (
            <GameCard aosDelay={index * 20} key={game.id} game={game} />
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedGames;
