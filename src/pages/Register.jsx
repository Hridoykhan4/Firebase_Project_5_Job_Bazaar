import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthValue from "../hooks/useAuthValue";
const Register = () => {
  const { signInGoogle, createNewUserWithEmail, setUser } = useAuthValue();
  const nav = useNavigate()
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        setUser(result.user);
        nav('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { mailAddress, password } = data;
    createNewUserWithEmail(mailAddress, password)
      .then((result) => {
        setUser(result.user);
        nav('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-[80vh] flex items-center justify-center relative"
      >
        {/* Glass-like card */}
        <div className=" backdrop-blur-md shadow-xl rounded-xl p-8 w-96 border border-black/20 z-10 ">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

          {/* mail */}
          <div className="flex items-center  border  rounded-full px-4 py-2 mb-4">
            <FaUser className=" mr-2" />
            <input
              {...register("mailAddress", { required: true })}
              type="email"
              placeholder="Mail"
              className="bg-transparent w-full focus:outline-none"
            />
          </div>
          {errors.mailAddress && (
            <span className="my-1 text-red-400 block">
              This field is required
            </span>
          )}

          {/* Password */}
          <div className="flex items-center  border  rounded-full px-4 py-2 mb-4">
            <FaLock className=" mr-2" />
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="bg-transparent w-full focus:outline-none"
            />
          </div>
          {errors.password && (
            <span className="my-1 text-red-400 block">
              Password field is required
            </span>
          )}

          {/* Remember me & Forgot password */}
          <div className="flex justify-between items-center text-sm mb-4">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                {...register("rememberMe", { required: true })}
                type="checkbox"
                className="checkbox checkbox-xs"
              />
              <span>Remember me</span>
            </label>
          </div>
          {errors.rememberMe && (
            <span className="mb-2 text-red-400 block">
              Must checked the field
            </span>
          )}

          {/* Login button */}
          <button className="btn btn-block btn-neutral rounded-full">
            Register
          </button>

          {/* Register */}
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="font-semibold underline">
              Login
            </Link>
          </p>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="mx-auto btn mt-4 flex items-center justify-center border border-red-600 "
          >
            <span>Continue with Google</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
