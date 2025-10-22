import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-170px)] ">
      <form className="max-w-sm w-full ">
        <fieldset className="fieldset w-full bg-base-100 border-base-200 rounded-box shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] gap-4 backdrop-blur-md p-8">
          <h1 className="text-3xl text-center font-medium text-cyan-500">
            Login
          </h1>

          {/* Email  */}
          <div className="space-y-1">
            <label className="label text-sm">Email</label>
            <input
              required
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
                type="password"
                className="w-full input text-sm focus:outline-none focus:border-cyan-500 placeholder:text-xs placeholder:text-gray-500"
                placeholder="Enter your password"
              />
              <span className="cursor-pointer active:translate-y-0.5 transition-transform duration-300 absolute right-4 z-50">
                <FaEye size={22} />
              </span>
            </div>
          </div>

          <button className="btn btn-info mt-2">Login</button>
          <div>
            <div>
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to={"/register"} className="hover:underline">
                  create account
                </Link>
              </p>
            </div>
            <div className="divider text-sm text-gray-500">Or sign in with</div>
            {/* Google */}
            <button className="btn bg-white  w-full text-cyan-600 border-[#e5e5e5]">
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

export default Login;
