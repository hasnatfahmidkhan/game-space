import { use, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";

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
            <h1 className="text-2xl text-center font-medium text-cyan-500">
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
              className="w-full input text-sm focus:outline-none focus:border-cyan-500 placeholder:text-xs placeholder:text-gray-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="btn bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white mt-1"
          >
            {emailSent ? "Sending" : "Send reset link"}
          </button>
          <div>
            <Link
              className="flex items-center gap-1 hover:underline text-cyan-600 font-medium"
              to={"/auth/login"}
            >
              <FaArrowLeft size={15} />
              Bank to login
            </Link>
          </div>
        </fieldset>
      </form>
    </section>
    // <div className="flex items-center justify-center h-[calc(100vh-170px)] ">
    //   <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
    //     <div className="text-center px-5 pt-5">
    //       <h1 className="text-2xl font-bold">Forget password?</h1>
    //       <p className="text-sm text-gray-500 mt-2">
    //         Enter your registered email address and we'll send you a link to
    //         reset your password.
    //       </p>
    //     </div>
    //     <form onSubmit={handlePasswordReset}>
    //       <fieldset className="fieldset">
    //         {/* Email  */}
    //         <div className="space-y-1">
    //           <label className="label text-sm">Email</label>
    //           <input
    //             required
    //             type="email"
    //             className="w-full input text-sm focus:outline-none focus:border-cyan-500 placeholder:text-xs placeholder:text-gray-500"
    //             placeholder="Enter your email"
    //           />
    //         </div>

    //         <button className="btn bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white mt-4">
    //           {emailSent ? "Sending" : "Send reset link"}
    //         </button>
    //       </fieldset>
    //     </form>
    //     <div>
    //       <Link
    //         className="flex items-center gap-1 hover:underline text-cyan-600 font-medium"
    //         to={"/auth/login"}
    //       >
    //         <FaArrowLeft size={15} />
    //         Bank to login
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ForgetPassword;
