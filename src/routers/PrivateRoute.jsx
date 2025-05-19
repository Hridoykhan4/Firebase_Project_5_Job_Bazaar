import { Navigate, useLocation } from "react-router-dom";
import useAuthValue from "../hooks/useAuthValue";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { loading, user } = useAuthValue();

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (!user) {
    return <Navigate state={pathname} to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
