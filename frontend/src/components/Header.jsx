import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";

const Header = () => {
  return (
    <div className="Header flex items-center justify-between h-[10vh] px-10">
      <Link to={"/"}>
        <div className="flex items-center ">
          <img className=" w-32 inline" src={logo1} alt="logo" />
          {/* <span className="inline font-semibold">Calmify</span> */}
        </div>
      </Link>

      <div className="flex gap-8">
        <span>Home</span>
        <span>Mood</span>
        <span>Community</span>
        <span>Games</span>
        <span>Shorts</span>
      </div>
    </div>
  );
};

export default Header;
