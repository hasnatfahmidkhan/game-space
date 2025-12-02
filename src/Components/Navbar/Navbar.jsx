import { use } from "react";
import Container from "../Container/Container";
import MyLink from "../MyLink/MyLink";
import "./navbar.css";
import AuthContext from "../../Context/AuthContext";
import userImage from "../../assets/user.png";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { user, signOutFunc, authLoading, setUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Sign out successfully!");
        setUser(null);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // Public links (visible to all users)
  const publicLinks = [
    { to: "/", label: "Home" },
    { to: "/games", label: "Games" },
  ];

  // Protected links (visible only to logged-in users)
  const protectedLinks = [{ to: "/mywishlist", label: "My Wishlists" }];

  // Auth links (visible only to logged-out users)
  const authLinks = [
    { to: "/auth/login", label: "Login" },
    { to: "/auth/register", label: "Register" },
  ];

  // Combine links based on user status
  const navLinks = user ? [...publicLinks, ...protectedLinks] : publicLinks;

  // Phone links - includes auth links for mobile when user is not logged in
  const phoneLinks = user
    ? [...publicLinks, ...protectedLinks]
    : [...publicLinks, ...authLinks];

  // Reusable link renderer
  const renderLinks = (links, className = "") => {
    return links.map((link) => (
      <li key={link.to} className={className}>
        <MyLink to={link.to}>{link.label}</MyLink>
      </li>
    ));
  };

  return (
    <nav className="bg-base-300 shadow-md">
      <Container className={"navbar"}>
        <div className="navbar-start">
          <Link
            to={"/"}
            className="text-2xl md:text-3xl text-info font-semibold flex items-end"
          >
            <img src="/logo.png" className="w-10" alt="Logo" />
            <span id="logo">AME SPACE</span>
          </Link>
        </div>

        <div className="navbar-center">
          {/* Desktop nav */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal items-center gap-1">
              {renderLinks(navLinks, "pb-2")}
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          {/* Mobile dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="w-10 h-10 flex items-center justify-center border-2 border-info rounded-full lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rotate-180 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-40 p-2 shadow divide-y divide-dashed divide-gray-400 gap-3"
            >
              {renderLinks(phoneLinks, "pb-2")}
              {user && (
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-lg font-medium text-red-400"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Desktop auth section */}
          <div className="hidden lg:flex">
            <ul>
              {user ? (
                <div>
                  {authLoading ? (
                    <ClockLoader color="#32d2c8" />
                  ) : (
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">
                        <img
                          className="h-12 w-12 rounded-full object-cover"
                          src={user.photoURL || userImage}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = userImage;
                          }}
                          alt={user.displayName}
                        />
                        <IoIosArrowDown size={18} />
                      </div>
                      <ul
                        tabIndex="-1"
                        className="dropdown-content menu menu-lg font-medium bg-base-100 border border-gray-500 hover:border-info transition-all duration-300 rounded-box z-1 w-52 p-2 shadow-sm"
                      >
                        <li>
                          <MyLink to={"/profile"}>Profile</MyLink>
                        </li>
                        <li>
                          <button
                            onClick={handleSignOut}
                            className="text-red-400"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  {authLinks.map((link) => (
                    <li key={link.to}>
                      <MyLink to={link.to} className="authButton">
                        {link.label}
                      </MyLink>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
