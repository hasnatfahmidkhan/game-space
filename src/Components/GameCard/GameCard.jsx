import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router";
const GameCard = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/game-details/${game.id}`)}
      className="cursor-pointer card bg-base-800 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-white/30 hover:border-info/50 group"
    >
      <figure className="relative h-52 overflow-hidden">
        <img
          className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover object-center"
          src="https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg"
          alt={game.title}
        />
      </figure>
      <div className="card-body">
        {/* title  */}
        <h2 className="card-title text-info">{game.title}</h2>

        {/* subtitle  */}
        <div className="space-y-0.5">
          <p className=" text-white/40">By {game.developer}</p>
        </div>

        <div className="card-actions justify-between items-center pt-2">
          {/* rating  badge  */}
          <div>
            <span className="badge badge-warning gap-1">
              <FaStar />
              {game.ratings}
            </span>
          </div>

          {/* multiplayer badge  */}
          <div>
            <span className="badge badge-success gap-1">
              {game.multiplayer ? "Multiplayer" : "Signleplayer"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
