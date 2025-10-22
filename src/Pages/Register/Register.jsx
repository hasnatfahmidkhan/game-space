import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { tr } from "motion/react-client";

const Register = () => {
  const { SignUpFunc, updateProfileFunc } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("");

  // regex for validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordLenghtPattern = /^.{8,}$/;
  const passwordCasePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  const passwordSpecialPattern = /^(?=.*[@$!%*?&]).+$/;

  const passWordValidtion = () => {
    if (!emailPattern.test(email)) {
      setError("This is not valid email!");
      return false;
    }
    if (!passwordLenghtPattern.test(password)) {
      setError("Password at least 8 character or longer!");
      return false;
    }
    if (!passwordCasePattern.test(password)) {
      setError(
        "Password must have one upper case and one lower case character!"
      );
      return false;
    }
    if (!passwordSpecialPattern.test(password)) {
      setError("Password must have at least one character!");
      return false;
    }
    return true;
  };

  // handleRegister
  const handleRegister = async (e) => {
    e.preventDefault();

    //password validation func
    if (!passWordValidtion()) {
      return;
    }
    setError("");

    try {
      const userCredential = await SignUpFunc(email, password);
      const currentUser = userCredential.user;
      console.log(currentUser);
      const updateProfile = await updateProfileFunc(name, photo);
      console.log(updateProfile);
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <section className="flex items-center justify-center h-[calc(100vh-170px)] ">
      <form onSubmit={handleRegister} className="max-w-sm w-full ">
        <fieldset className="fieldset w-full bg-base-100 border-base-200 rounded-box shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] gap-4 backdrop-blur-md p-8">
          {/* Register title  */}
          <h1 className="text-3xl text-center font-medium text-cyan-500">
            Register
          </h1>

          {/* Name  */}
          <div className="space-y-1">
            <label className="label text-sm">Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full input text-sm focus:outline-none focus:border-cyan-500 placeholder:text-xs placeholder:text-gray-500"
              placeholder="Enter your name"
            />
          </div>

          {/*  Photo URL */}
          <div className="space-y-1">
            <label className="label text-sm"> Photo URL</label>
            <input
              required
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              type="text"
              className="w-full input text-sm focus:outline-none focus:border-cyan-500 placeholder:text-xs placeholder:text-gray-500"
              placeholder="Enter your photo url"
            />
          </div>

          {/* Email  */}
          <div className="space-y-1">
            <label className="label text-sm">Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full input text-sm focus:outline-none focus:border-cyan-500 placeholder:text-xs placeholder:text-gray-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password  */}
          <div className="space-y-1">
            <label className="label text-sm">Password</label>
            <div className="flex items-center relative">
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="w-full input text-sm focus:outline-none focus:border-cyan-500 placeholder:text-xs placeholder:text-gray-500"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer active:translate-y-0.5 transition-transform duration-300 absolute right-4 z-50"
              >
                {showPassword ? <FaEye size={22} /> : <FaEyeSlash size={24} />}
              </span>
            </div>
          </div>

          {/* Error  */}
          <div>{error && <p className="text-sm text-red-500">{error}</p>}</div>

          {/* register btn  */}
          <button className="btn btn-info">Register</button>

          <div>
            <div>
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link to={"/login"} className="hover:underline">
                  login
                </Link>
              </p>
            </div>
            <div className="divider text-sm text-gray-500">Or sign in with</div>
            {/* Google */}
            <button className="btn bg-white w-full text-cyan-600 border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
