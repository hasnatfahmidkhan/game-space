import { use } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();

  if (!(user && user.emailVerified)) {
    return <Navigate to={"/auth/login"} state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;
