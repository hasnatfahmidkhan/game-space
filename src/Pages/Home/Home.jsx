
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import { FaArrowDown, FaGamepad } from "react-icons/fa6";
import FeaturedGames from "../../Components/FeaturedGames/FeaturedGames";
import { Link } from "react-router";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
  return (
    <div>
      <title>GameSpace - Home</title>
      <Banner></Banner>

      <FeaturedGames />
      <div className="flex justify-center pt-10">
        <Link to={'/games'} className="btn btn-info">
          <FaGamepad size={20}/>
          All Games
        </Link>
      </div>
    </div>
  );
};

export default Home;
