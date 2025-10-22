import React from "react";
import { Link } from "react-router";
import "./error.css";
import { FiHome } from "react-icons/fi";
const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-5 text-center">
      <img
        className="w-72 md:w-96 xl:w-lg mb-6"
        src="/not-found-page.gif"
        alt="page not found 404"
      />

      {/* heading  */}
      <h1 className="text-3xl md:text-5xl font-bold text-neutral-950">
        Opps! Page Not Found
      </h1>
      {/* subtext  */}
      <p className="text-gray-500  max-w-md mt-5">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track!
      </p>
      {/* home button  */}
      <Link className="flex items-center gap-2 shadow-md font-medium bg-green-600 hover:bg-green-700 my-6 text-white px-4 py-3 rounded-lg">
        <FiHome size={18}/>
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
