import React from "react";

const Heading = ({ icon, children }) => {
  return (
    <h2 className="flex flex-col items-center justify-center gap-4 text-3xl md:text-5xl text-info font-bold">
      <div className="bg-info/10 p-4 rounded-full">{icon}</div>
      {children}
    </h2>
  );
};

export default Heading;
