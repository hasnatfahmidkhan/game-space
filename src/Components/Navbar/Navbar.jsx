import { use } from "react";
import Container from "../Container/Container";
import MyLink from "../MyLink/MyLink";
import "./navbar.css";
import AuthContext from "../../Context/AuthContext";
import userImage from "../../assets/user.png";
const Navbar = () => {
  const { user, signOutFunc } = use(AuthContext);
  const handleSignOut = async () => {
    await signOutFunc();
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
        <MyLink to={"/news"}>News</MyLink>
      </li>
      {user ? (
        <>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
          <li>
            <button onClick={handleSignOut} className={"text-base font-medium"}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <MyLink to={"/login"} className={"lg:hidden"}>
              Login
            </MyLink>
          </li>
          <li>
            <MyLink to={"/register"} className={"lg:hidden"}>
              Register
            </MyLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <Container className={"navbar"}>
        <div className="navbar-start">
          <a className="text-3xl text-[#06b6d4] font-semibold">Game space</a>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="w-10 h-10 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 rounded-full lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rotate-180 text-white"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow divide-y divide-gray-200 gap-1"
            >
              {links}
            </ul>
          </div>
          {/* desktop nav  */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal items-center gap-1">
              {links}
              {user && user.emailVerified ? (
                <div className="flex items-center justify-center gap-1">
                  <li>
                    <MyLink to={"/profile"} className={"h-12 w-12"}>
                      {user.photoURL ? (
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={user.photoURL}
                        />
                      ) : (
                        <img src={userImage} className="h-full w-full" />
                      )}
                    </MyLink>
                  </li>
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
                    <MyLink to={"/login"} className={"authButton"}>
                      Login
                    </MyLink>
                  </li>
                  <li>
                    <MyLink className={"authButton"} to={"/register"}>
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
