import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";
import MyLink from "../MyLink/MyLink";

const Footer = () => {
  return (
    <footer className="mt-10 rounded-2xl text-base p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="mx-auto flex w-10/12 flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Brand / Logo */}
        <Link
          to={"/"}
          className="text-3xl text-info font-semibold flex items-end"
        >
          <img src="/logo.png" className="w-10" />
          <span id="logo">AME SPACE</span>
        </Link>

        {/* Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/games"}>Games</MyLink>
          </li>
          <li>
            <MyLink to={"/mywishlist"}>My Wishlists</MyLink>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4 ">
          <a
            href="https://www.facebook.com/hasnatfahmidkhan"
            target="_blank"
            className="transition-transform duration-200 hover:scale-110 hover:text-info"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hasnatfahmid/"
            target="_blank"
            className="transition-transform duration-200 hover:scale-110 hover:text-info"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/hasnatfahmidkhan"
            target="_blank"
            className="transition-transform duration-200 hover:scale-110 hover:text-info"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px w-full bg-gray-200"></div>

      {/* Bottom text */}
      <p className="text-center text-sm text-white/80">
        © {new Date().getFullYear()} Game spcae. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
