import { FaInfoCircle } from "react-icons/fa";
import Heading from "../../Components/Heading/Heading";
import SubHeading from "../../Components/SubHeading/SubHeading";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaDiscord, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
const faqs = [
  {
    question: "How can I submit my game?",
    answer:
      "You can submit your game through our contact form by selecting 'Game Submission' as the subject. Please include your game title, platforms, a short description, screenshots or trailer links, and a download/store link.",
  },
  {
    question: "Is GameHub free and do I need an account?",
    answer:
      "Yes, GameHub is a free, non-profit project. You can browse most games without an account, but you’ll need to sign up or use Google login to save a wishlist, manage your profile, and access some protected features.",
  },
  {
    question: "Why do I need to log in to view some pages?",
    answer:
      "Pages like Game Details, My Profile, and Wishlist are protected to keep your data secure and to prevent misuse of developer resources. Logging in lets us personalize your experience and safely store your favorites.",
  },
  {
    question: "How long does it take to get a response?",
    answer:
      "We typically respond to general inquiries within 24–48 hours on business days. For game submissions and feature requests, we may take 3–5 business days to review.",
  },
  {
    question: "What game genres do you feature?",
    answer:
      "We feature games across a wide range of genres, including action, FPS, RPG, strategy, sports, racing, puzzle, casual, indie, and more. Our focus is on quality and player engagement.",
  },
  {
    question: "Can I report bugs or issues?",
    answer:
      "Yes! Use the 'Bug Report' option in our contact form to report any issues. Please provide as much detail as possible, including your device, browser, screenshots (if possible), and steps to reproduce the bug.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Currently, GameHub is available as a responsive web experience that works on mobile, tablet, and desktop browsers. A dedicated mobile app is planned for a future update.",
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      agreeTerms: false,
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <div className="heading_container">
        <Heading icon={<FaInfoCircle />}>Get in Touch</Heading>
        <SubHeading>
          Got feedback, found a bug, or want to feature your game on GameHub?{" "}
          <br /> Use the form below and we’ll get back to you as soon as we can
        </SubHeading>
      </div>

      <div className="max-w-2xl mx-auto py-20">
        {/* Success Message */}
        {submitted && (
          <div className="alert alert-success mb-6 bg-green-900/30 border border-green-500/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-green-400">
              Thank you! We'll get back to you soon.
            </span>
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-white/70 hover:border-info rounded-xl p-6"
        >
          <fieldset className="fieldset space-y-3.5">
            <div className="space-y-1">
              <label className="label">Name</label>
              <input
                type="text"
                className="input forminp"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <label className="label">Email</label>
              <input
                type="email"
                className="input forminp"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <label className="label">Select Category</label>
              <select
                className="select w-full"
                {...register("subject", {
                  required: "Please select a subject",
                })}
              >
                <option value="">Select a category</option>
                <option value="feedback">Feedback</option>
                <option value="bug">Bug Report</option>
                <option value="game">Game Submission</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="space-y-1">
              <label className="label">Message</label>
              <textarea
                placeholder="Tell us what's on your mind..."
                className="textarea textarea-bordered bg-base-800 border-base-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none h-32 w-full"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              />
              {errors.message && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button className="btn btn-neutral">Send Message</button>
          </fieldset>
        </form>
      </div>
      {/* stay connected  */}
      <div className="pt-6 border-t border-base-700">
        <h3 className="text-center text-white font-bold mb-4">
          Stay Connected
        </h3>
        <div className="flex justify-center gap-4">
          {/* Discord */}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-sm bg-base-700 border-base-600 hover:bg-[#5865F2] text-white transition-all"
            title="Join our Discord"
          >
            <FaDiscord size={24} />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-sm bg-base-700 border-base-600 hover:bg-black text-white transition-all"
            title="Follow us on X"
          >
            <FaXTwitter size={24} />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-sm bg-base-700 border-base-600 hover:bg-red-600 text-white transition-all"
            title="Subscribe on YouTube"
          >
            <FaYoutube size={24} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-sm bg-base-700 border-base-600 hover:bg-pink-600 text-white transition-all"
            title="Follow us on Instagram"
          >
            <FaInstagram size={26} />
          </a>
        </div>
      </div>
      {/* Faq  */}
      <div className="w-full max-w-2xl mt-20 mx-auto px-4">
        <div className="bg-base-800 rounded-lg border border-white/70 hover:border-info p-8">
          <h2 className="text-3xl font-bold text-info mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="join join-vertical w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow join-item border border-base-700"
              >
                <input
                  type="radio"
                  name="accordion-faq"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-white font-semibold bg-base-700 hover:bg-base-600">
                  {faq.question}
                </div>
                <div className="collapse-content bg-base-800 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
