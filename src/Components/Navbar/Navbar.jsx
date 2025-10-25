import { use } from "react";
import Container from "../Container/Container";
import MyLink from "../MyLink/MyLink";
import "./navbar.css";
import AuthContext from "../../Context/AuthContext";
import userImage from "../../assets/user.png";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { Link } from "react-router";

const Navbar = () => {
  const { user, signOutFunc, authLoading, setUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Sign out succesfully!");
        setUser(null);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const links = (
    <>
      <li>
        <MyLink to={"/"}>Home</MyLink>
      </li>
      <li>
        <MyLink to={"/games"}>Games</MyLink>
      </li>
      <li>
        <MyLink to={"/mywishlist"}>My Wishlists</MyLink>
      </li>
    </>
  );
  return (
    <nav className="bg-base-300 shadow-md">
      <Container className={"navbar"}>
        <div className="navbar-start">
          <Link
            to={"/"}
            className="text-3xl text-info font-semibold flex items-end"
          >
            <img src="/logo.png" className="w-10" />
            <span id="logo">AME SPACE</span>
          </Link>
        </div>
        <div className="navbar-end ">
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
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-40 p-2 shadow divide-y divide-gray-200 gap-1 "
            >
              {links}
              {user ? (
                <>
                  <li>
                    <MyLink to={"/profile"}>Profile</MyLink>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className={"text-base font-medium"}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <MyLink to={"/auth/login"} className={"lg:hidden"}>
                      Login
                    </MyLink>
                  </li>
                  <li>
                    <MyLink to={"/auth/register"} className={"lg:hidden"}>
                      Register
                    </MyLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* desktop nav  */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal items-center gap-1">
              {links}
              {user && user?.emailVerified ? (
                <div className="flex items-center justify-center gap-1">
                  {authLoading ? (
                    <ClockLoader color="#32d2c8" />
                  ) : (
                    <li>
                      <MyLink to={"/profile"}>
                        <img
                          className="h-12 w-12 rounded-full object-cover"
                          src={user.photoURL || userImage}
                          onError={(e) => {
                            e.target.onerror = null; // prevent the infinite loop
                            e.target.src = userImage; // set default image
                          }}
                          alt={user.displayName}
                        />
                      </MyLink>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={handleSignOut}
                      className={"authButton text-lg font-medium"}
                    >
                      Logout
                    </button>
                  </li>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4">
                  <li>
                    <MyLink to={"/auth/login"} className={"authButton"}>
                      Login
                    </MyLink>
                  </li>
                  <li>
                    <MyLink className={"authButton"} to={"/auth/register"}>
                      Register
                    </MyLink>
                  </li>
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
