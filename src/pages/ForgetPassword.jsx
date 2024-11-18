import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(location)
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-md p-10 border">
        <h2 className="text-2xl font-semibold text-center">Reset Password</h2>
        <form className="card-body" onSubmit={handleResetPassword}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Reset Password</button>
          </div>
        </form>
        <button className="btn btn-outline mt-4" onClick={() => navigate(-1)}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
