import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success(`Logged in as ${result.user?.email}`);
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast.success(`Logged in as ${result.user?.email}`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // console.log("show pass", showPassword);
  };

  return (
    <div className="flex justify-center items-center pb-10">
      <Helmet>
        <title>Login | Career Compass</title>
      </Helmet>

      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-md p-10 border">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <div className="border-b-[1px] mt-8"></div>

        <form onSubmit={handleSubmit} className="card-body ">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline"
            type="button"
          >
            <FcGoogle /> Login with Google
          </button>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>


                  {/* password */}
                  <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <button
                className="btn btn-sm absolute right-2 top-2"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-md">Login</button>
          </div>
        </form>
        <p className="2xl:font-semibold text-center">
          {`Don't Have An Account? `}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
