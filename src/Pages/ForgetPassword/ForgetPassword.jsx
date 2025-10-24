import { use, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";
import "../Register/register.css";
const ForgetPassword = () => {
  const { resetPasswordFunc, setAuthLoading } = use(AuthContext);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  // password reset
  const handlePasswordReset = (e) => {
    e.preventDefault();
    setEmailSent(true);
    const email = e.target.email.value;
    resetPasswordFunc(email)
      .then(() => {
        setAuthLoading(false);
        setEmailSent(false);
        toast.success("Sent you a mail, Please check your inbox!");
        e.target.reset();
        navigate("/auth/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <section className="flex items-center justify-center h-[calc(100vh-170px)] ">
      <form onSubmit={handlePasswordReset} className="max-w-sm w-full ">
        <fieldset className="fieldset w-full bg-base-100 border-base-200 rounded-box shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] gap-4 backdrop-blur-md p-8">
          <div className="text-center space-y-2 ">
            <h1 className="text-2xl text-center font-medium text-info">
              Forget password?
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Enter your registered email address and we'll send you a link to
              reset your password.
            </p>
          </div>

          {/* Email  */}
          <div className="space-y-1">
            <label className="label text-sm">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input forminp"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="btn btn-info rounded-lg text-white mt-1"
          >
            {emailSent ? "Sending" : "Send reset password"}
          </button>
          <div>
            <Link
              className="flex items-center gap-1 hover:underline text-info font-medium"
              to={"/auth/login"}
            >
              <FaArrowLeft size={15} />
              Bank to login
            </Link>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default ForgetPassword;
