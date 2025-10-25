import { use, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa6";
import "../Register/register.css";
const Login = () => {
  const { singInFunc, googleSignInFunc, setAuthLoading } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await singInFunc(email, password);
      e.target.reset();
      setAuthLoading(false);
      toast.success("Login successfully!");
      navigate(navigation.state || "/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // google sign in
  const handleGoogleSignIn = async () => {
    try {
      await googleSignInFunc();
      setAuthLoading(false);
      toast.success("Sign in succesfully!");
      navigate(navigation.state || "/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleForgetPassword = () => {
    navigate("/auth/forget-password", { state: emailRef.current.value });
  };
  
  return (
    <section className="flex items-center justify-center h-[calc(100vh-170px)] ">
      <form onSubmit={handleLogin} className="max-w-sm w-full ">
        <fieldset className="fieldset w-full bg-base-100 border border-white/50 rounded-box gap-4 p-8">
          <h1 className="text-3xl text-center font-medium text-info">Login</h1>

          {/* Email  */}
          <div className="space-y-1">
            <label className="label text-sm">Email</label>
            <input
              ref={emailRef}
              required
              name="email"
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
                name="password"
                type={showPassword ? "text" : "password"}
                className="input forminp"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer active:translate-y-0.5 transition-transform duration-300 absolute right-4 z-50"
              >
                {showPassword ? <FaEye size={22} /> : <FaEyeSlash size={24} />}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="cursor-pointer hover:underline"
              >
                Forget Password?
              </button>
            </p>
          </div>

          <button type="submit" className="btn btn-info mt-2">
            Login
          </button>
          <div>
            <div>
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to={"/auth/register"} className="hover:underline">
                  create account
                </Link>
              </p>
            </div>
            <div className="divider text-sm text-gray-500">Or sign in with</div>
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
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

export default Login;
