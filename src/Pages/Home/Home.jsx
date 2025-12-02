import { FaGamepad } from "react-icons/fa6";
import { Link } from "react-router";
import Banner from "../../Components/Banner/Banner";
import "../Register/register.css";
import FeaturedGames from "./FeaturedGames/FeaturedGames";
import Newsletter from "./Newsletter/Newsletter";
const Home = () => {
  return (
    <div>
      <title>GameSpace - Home</title>
      <Banner></Banner>

      <FeaturedGames />
      <div className="flex justify-center pt-10">
        <Link to={"/games"} className="btn btn-info text-white">
          <FaGamepad size={20} />
          All Games
        </Link>
      </div>
      {/* News letter */}
      <Newsletter />
    </div>
  );
};

export default Home;
