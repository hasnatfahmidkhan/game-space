import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Heading from "../../../Components/Heading/Heading";

const About = () => {
  return (
    <section className="pt-10 md:pt-20 px-4 space-y-15">
      {/* header of popular games  */}
      <div className="flex flex-col items-center gap-3 md:gap-5 text-center">
        <Heading icon={<FaInfoCircle />}>About Us</Heading>
        <p className="text-white/70 text-base md:text-lg max-w-4xl mx-auto">
          Game Space is a non-profit online game library built for gamers who
          love discovering both popular and indie titles in one vibrant,
          urban-themed space. It's designed for players who want clean, curated
          game info without paywalls or clutter. Browse detailed game profiles,
          support developers, and build your own wishlist—all ad-free.
        </p>
      </div>
    </section>
  );
};

export default About;
