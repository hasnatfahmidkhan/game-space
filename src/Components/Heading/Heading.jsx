import React from "react";

const Heading = ({ icon, children }) => {
  return (
    <h2 className="flex items-center justify-center gap-4 text-3xl md:text-5xl text-info font-bold">
      {icon}
      {children}
    </h2>
  );
};

export default Heading;
