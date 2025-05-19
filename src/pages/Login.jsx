import { FaUser, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthValue from "../hooks/useAuthValue";
const Login = () => {
  const { logInUser, setUser } = useAuthValue();

  const { state } = useLocation();

  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => {
        setUser(result.user);
        nav(state ? state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[80vh] flex items-center shadow-xl justify-center relative"
    >
      {/* Glass-like card */}
      <div className="bg-white/10 backdrop-blur-md  rounded-xl p-8 w-96 border border-black/30 z-10 ">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Mail */}
        <div className="flex items-center  border rounded-full px-4 py-2 mb-4">
          <FaUser className=" mr-2" />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="bg-transparent w-full focus:outline-none "
          />
        </div>

        {/* Password */}
        <div className="flex items-center  border  rounded-full px-4 py-2 mb-4">
          <FaLock className=" mr-2" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="bg-transparent w-full focus:outline-none "
          />
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex justify-between items-center text-sm mb-4">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Login button */}
        <button className="btn btn-block btn-neutral rounded-full">
          Login
        </button>

        {/* Register */}
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/auth/register" className=" font-semibold underline">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
