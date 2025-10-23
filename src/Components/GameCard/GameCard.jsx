import { FaStar } from "react-icons/fa6";
import { motion } from "motion/react";
import { Link } from "react-router";
const GameCard = ({ game }) => {
  // console.log(game)

  return (
    <>
      <motion.div className="card bg-base-800 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-white/30 hover:border-info/50 group">
        <figure className="relative h-52 overflow-hidden">
          <img
            className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover object-center"
            src="https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg"
            alt={game.title}
          />

          {/* rating  badge  */}
          <div className="absolute top-3 left-3">
            <span className="badge badge-warning gap-1">
              <FaStar />
              {game.ratings}
            </span>
          </div>

          {/* category badge  */}
          <div className="absolute top-3 right-3">
            <span className="badge badge-info gap-1">{game.category}</span>
          </div>

          {/* multiplayer badge  */}
          <div className="absolute bottom-3 left-3">
            <span className="badge badge-success gap-1">
              {game.multiplayer ? "Multiplayer" : "Signleplayer"}
            </span>
          </div>
        </figure>
        <div className="card-body">
          {/* title  */}
          <h2 className="card-title text-info opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {game.title}
          </h2>

          {/* subtitle  */}
          <div className="space-y-0.5">
            <p className=" text-white/40">By {game.developer}</p>
            <p className=" text-info">{game.subCategory}</p>
          </div>

          <div className="flex items-center gap-3 text-white/30 py-3">
            {game.platform.map((platform) => (
              <div>{platform}</div>
            ))}
          </div>

          <div className="card-actions justify-between">
            <div>
              <p className="text-info font-bold text-xl">{game.price}</p>
              <p className="text-white/30">
                {new Date(game.releaseDate).getFullYear()}
              </p>
            </div>
            <div>
              <Link
                to={`/game-details/${game.id}`}
                className="btn btn-info text-white/90"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GameCard;
