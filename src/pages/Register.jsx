import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthValue from "../hooks/useAuthValue";
const Register = () => {
  const { createNewUserWithEmail, setUser } = useAuthValue();

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-[80vh] flex items-center justify-center relative"
    >
      {/* Glass-like card */}
      <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-8 w-96 border border-white/20 z-10 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* mail */}
        <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4">
          <FaUser className="text-white mr-2" />
          <input
            {...register("mailAddress", { required: true })}
            type="email"
            placeholder="Mail"
            className="bg-transparent w-full focus:outline-none placeholder-white text-white"
          />
        </div>
        {errors.mailAddress && (
          <span className="my-1 text-red-400 block">
            This field is required
          </span>
        )}

        {/* Password */}
        <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4">
          <FaLock className="text-white mr-2" />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="bg-transparent w-full focus:outline-none placeholder-white text-white"
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
          <Link to="/auth/login" className="text-white font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
