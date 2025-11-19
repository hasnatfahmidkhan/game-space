import { use } from "react";
import AuthContext from "../../Context/AuthContext";
import userImage from "../../assets/user.png";
import { useNavigate } from "react-router";
const Profile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center mt-10 md:mt-20 ">
      <div className="card border border-white/30 w-96 items-center p-10 gap-5">
        <figure className="w-24 h-24 bg-white/90 p-0.5 rounded-full overflow-hidden">
          <img
            className="w-full h-full rounded-full"
            src={user.photoURL || userImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = userImage;
            }}
            alt="Shoes"
          />
        </figure>

        <div>
          <div className="text-center space-y-2 text-white/50">
            <h2 className="">{user.email}</h2>
            <h2 className=" text-xl">{user.displayName}</h2>
          </div>
        </div>
        <button
          onClick={() => navigate("/auth/update-profile")}
          type="button"
          className="btn btn-info text-white"
        >
          Update Profile
        </button>
      </div>
    </section>
  );
};

export default Profile;
