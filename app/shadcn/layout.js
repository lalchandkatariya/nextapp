import React from "react";
import Navbar from "./navbar";

const Rootlayout = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <div className="mt-16 flex justify-center">
        <Navbar />
      </div>
      <div className="flex justify-center mt-32 container">{children}</div>
    </div>
  );
};

export default Rootlayout;
