import React from "react";
import { Link } from "react-router";
import "./error.css";
import { FiHome } from "react-icons/fi";
import Lottie from "lottie-react";
import errorPage from "../../assets/Error 404 Page.json";
const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-5 text-center">
      <Lottie animationData={errorPage} loop={true} />
      {/* heading  */}
      <h1 className="text-3xl md:text-5xl font-bold">Opps! Page Not Found</h1>
      {/* subtext  */}
      <p className="text-gray-500  max-w-md mt-5">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track!
      </p>
      {/* home button  */}
      <Link className="flex items-center gap-2 shadow-md font-mediumbg-white/10 border border-white/30 transition-transform duration-200 hover:bg-white/5 active:scale-95 px-4 py-3 rounded-lg my-5">
        <FiHome size={18} />
        Back to Home
      </Link>

      {/* footer note  */}
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Game Space. All right reserved
      </p>
    </section>
  );
};

export default ErrorPage;
