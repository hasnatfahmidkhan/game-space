import  { use } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import "../Register/register.css";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateProfileFunc, setAuthLoading } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    e.preventDefault();
    updateProfileFunc(name, photo)
      .then(() => {
        setAuthLoading(false);
        toast.success("Profile udpate successfull!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <section className="flex justify-center mt-10 md:mt-20">
      <form
        onSubmit={handleUpdateProfile}
        className="max-w-sm w-full border border-white/30 rounded-2xl"
      >
        <fieldset className="fieldset w-full bg-base-100 border-base-200 rounded-box shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] gap-4 backdrop-blur-md p-8">
          <div className="text-center space-y-2 ">
            <h1 className="text-2xl text-center font-medium text-info">
              Update your Profile
            </h1>
            <p className="text-sm text-gray-500 mt-2">Edit your name, photo.</p>
          </div>

          {/* Name  */}
          <div className="space-y-1">
            <label className="label text-sm">Name</label>
            <input
              required
              defaultValue={user?.displayName}
              name="name"
              type="text"
              className="input forminp"
              placeholder="Enter your name"
            />
          </div>

          {/* photo url  */}
          <div className="space-y-1">
            <label className="label text-sm">Photo URL</label>
            <input
              required
              defaultValue={user?.photoURL}
              name="photo"
              type="text"
              className="input forminp"
              placeholder="Enter your photo URL"
            />
          </div>
          <button
            type="submit"
            className="btn btn-info rounded-lg text-white mt-1"
          >
            Save
          </button>
          <div>
            <Link
              className="flex items-center gap-1 hover:underline text-info font-medium"
              to={"/profile"}
            >
              <FaArrowLeft size={15} />
              Bank to profile
            </Link>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default UpdateProfile;
