import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";

const Header = () => {
  return (
    <div className="Header flex items-center justify-between h-[10vh] px-10">
      <Link to={"/"}>
        <div className="flex items-center montserrat ">
          <img className=" w-12 inline" src={Logo} alt="logo" />
          <span className="inline font-semibold text-2xl  pt-1">Calmify</span>
        </div>
      </Link>

      <div className="flex gap-8 montserrat">
        <Link to={"/"} className="font-semibold">Home</Link>
        <Link to={"/mood"}>Mood</Link>
        <Link to={"/tasks"} >Tasks</Link>
        <Link to={"/games"}>Games</Link>
        <Link to={"/reels"}>Shorts</Link>
      </div>
    </div>
  );
};

export default Header;
