import React from "react";
import logo1 from "../assets/logo1.png";
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={"/"}>
      <img className="absolute top-4 left-4 w-32" src={logo1} alt="logo" />
    </Link>
  );
};

export default Logo;
