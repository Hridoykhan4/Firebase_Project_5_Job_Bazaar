import useAuthValue from "../hooks/useAuthValue";

const PrivateRoute = ({ children }) => {
  const { loading } = useAuthValue();

  if (loading) {
    return <h1>Loading</h1>;
  }

  return children;
};

export default PrivateRoute;
