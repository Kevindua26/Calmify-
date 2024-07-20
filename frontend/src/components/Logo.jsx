import React from "react";
import logo1 from "../assets/logo1.png";

const Logo = () => {
  return (
    <div className="relative border">
      <img className="absolute top-4 left-4 w-32" src={logo1} alt="logo" />
    </div>
  );
};

export default Logo;
