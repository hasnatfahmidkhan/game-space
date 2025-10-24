import { use } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();

  if (user && user.email) {
    return children;
  }

  return <Navigate to={"/auth/login"} state={location.pathname} />;
};

export default PrivateRoute;
