import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { LuLoaderCircle } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa6";
import "./register.css";
const Register = () => {
  const {
    SignUpFunc,
    updateProfileFunc,
    emailVerificationFunc,
    setUser,
    googleSignInFunc,
    setAuthLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isWaitingForVerfication, setIsWaitingForVerfication] = useState(false);
  // regex for validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordLenghtPattern = /^.{8,}$/;
  const passwordCasePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  const passwordSpecialPattern = /^(?=.*[@$!%*?&]).+$/;

  // password validation
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

  // email verification
  const checkVerificationStatus = async (user, intervalId) => {
    await user.reload();

    try {
      if (user.emailVerified) {
        clearInterval(intervalId);
        setIsWaitingForVerfication(false);
        setUser(user);
        toast.success("Verification Successfull.");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
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
      // console.log(currentUser);

      // update profile
      await updateProfileFunc(name, photo);

      // email verfication
      await emailVerificationFunc();

      // verification start
      setIsWaitingForVerfication(true);
      swal(
        "Verification email sent!",
        "Please check your email and click the verification link. This page will automatically redirect once verified.",
        "info"
      );
      // check every 3 second is email is verified or not
      const verificationInterval = setInterval(() => {
        checkVerificationStatus(currentUser, verificationInterval);
      }, 3000);

      // stop interval after 10 minutes
      setTimeout(() => {
        clearInterval(verificationInterval);
        if (!currentUser.emailVerified) {
          setIsWaitingForVerfication(false);
          toast.warning(
            "Verification timeout! please login after verfication your email."
          );
        }
      }, 600000);
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    } finally {
      setAuthLoading(false);
    }
  };

  // google sign in
  const handleGoogleSignIn = async () => {
    try {
      await googleSignInFunc();
      setAuthLoading(false);
      toast.success("Sign in succesfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="flex items-center justify-center h-[calc(100vh-170px)] ">
      <form onSubmit={handleRegister} className="max-w-sm w-full ">
        <fieldset
          disabled={isWaitingForVerfication}
          className="fieldset w-full border border-white/50 rounded-box gap-4 p-8"
        >
          {/* Register title  */}
          <h1 className="text-3xl text-center font-medium text-info">
            Register
          </h1>

          {/* Name  */}
          <div className="space-y-1">
            <label className="label text-sm ">Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="input forminp"
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
              className="input forminp"
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
              className="input forminp"
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
                className="input forminp"
                placeholder="Enter your password"
              />
              <span
                onClick={() =>
                  !isWaitingForVerfication && setShowPassword(!showPassword)
                }
                className={`transition-transform duration-300 absolute right-4 z-50 ${
                  isWaitingForVerfication
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer active:translate-y-0.5"
                }`}
              >
                {showPassword ? <FaEye size={22} /> : <FaEyeSlash size={24} />}
              </span>
            </div>
          </div>

          {/* Error  */}
          <div>{error && <p className="text-sm text-red-500">{error}</p>}</div>

          {/* verfication loading  */}
          <div className="">
            {isWaitingForVerfication && (
              <p className="flex items-center justify-center text-sm text-blue-600 gap-1 bg-blue-100 px-4 py-3 rounded-lg s">
                <LuLoaderCircle className="w-4 h-4 animate-spin"></LuLoaderCircle>
                Waiting for email verfication...
              </p>
            )}
          </div>

          {/* register btn  */}
          <button className="btn btn-info">Register</button>

          <div>
            <div>
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link to={"/auth/login"} className="hover:underline">
                  login
                </Link>
              </p>
            </div>
            <div className="divider text-sm text-gray-500">Or sign in with</div>
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              disabled={isWaitingForVerfication}
              className="btn w-full bg-white/10 hover:bg-white/5 text-info border-white/30 hover:border-sky-400"
            >
              <FaGoogle />
              Login with Google
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
