import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive ? "text-[#06b6d4]" : ""
        } ${className} text-base md:text-lg font-medium`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
