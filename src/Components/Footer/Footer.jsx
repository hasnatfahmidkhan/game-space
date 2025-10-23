import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-10 rounded-2xl text-base p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="mx-auto flex w-10/12 flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Brand / Logo */}
        <Link to={"/"} className="text-2xl text-[#06b6d4] font-semibold">
          Game space
        </Link>

        {/* Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <li className="cursor-pointer transition-colors hover:text-gray-200">
            Home
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-200">
            Services
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-200">
            About
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-200">
            Contact
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4 ">
          <a
            href="#"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="transition-transform duration-200 hover:scale-110"
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
