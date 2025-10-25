import { toast } from "react-toastify";

const Newsletter = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleNewsletter = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!emailPattern.test(email)) {
      toast.error("This email is valid!");
      return;
    } else {
      toast.success(
        "Subcribe successfully!.You'll now receive the latest gaming updates right in your inbox."
      );
      e.target.reset();
    }
  };
  return (
    <div className="border border-white/30 hover:border-sky-500 transition-colors duration-300 py-10 mt-20 mb-10 rounded-2xl">
      <div className="max-w-xl h-96 mx-auto flex flex-col items-center justify-center text-center">
        <div className="space-y-7">
          <h2 className="md:text-5xl font-semibold tracking-wide">
            GameSpace Weekly
          </h2>
          <p className="text-xl text-white/30 ">
            Your ultimate source for games updates, news releases, and pro tips
            - all in one place.
          </p>
          <form
            onSubmit={handleNewsletter}
            className="flex items-center gap-4 w-2/3 mx-auto"
          >
            <input
              required
              name="email"
              type="email"
              className="input forminp"
              placeholder="Enter your email"
            />
            <button className="btn btn-info">Netlify Me</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
