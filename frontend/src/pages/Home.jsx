import React from "react";
import homeImg from "../assets/home.png";
import { ReactTyped } from "react-typed";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home w-screen h-screen py-4 relative flex flex-col md:flex-row">
      <img
        src={logo}
        alt="logo"
        className="absolute top-5 left-4 h-11 w-11 z-10"
      />

      {/* Mobile view */}
      <div className="w-full flex flex-col items-center md:hidden">
        <div className="flex justify-center">
          {" "}
          <img src={homeImg} alt="home" className="w-[95%] h-auto" />
        </div>

        <div className="p-6 text-center -mt-20">
          <h1 className="text-[2rem] font-medium leading-[2.5rem]">
            Welcome to Happy Minds. A place to <br />
            <span className="text-yellow-400">
              <ReactTyped
                strings={[
                  "relax your mind.",
                  "improve your habits.",
                  "play fun games.",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <h2 className="text-xl font-normal mt-4">
            A platform where you can play Games, watch videos, complete tasks by
            defeating demons.
          </h2>
          <Button
            sx={{
              marginTop: "2rem",
              color: "black",
              border: "2px solid black",
              ":hover": {
                backgroundColor: "light-gray",
                border: "2px solid black",
                boxShadow:
                  "inset 0 -100px 0 rgba(41, 41, 41, .05), 0 4px 6px 0 rgba(0, 0, 0, .1), 0 1px 10px 0 rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .1);",
              },
            }}
            variant="outlined"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex w-full h-full">
        <div className="w-2/4 p-6 pt-36 flex flex-col gap-9 lg:pl-20">
          <div className="pl-10">
            <h1 className="lg:text-[2.8rem] font-medium leading-[3.4rem] md:text-[2.4rem]">
              Welcome to Happy Minds. A place to <br />
              <span className="text-yellow-400">
                <ReactTyped
                  strings={[
                    "relax your mind.",
                    "improve your habits.",
                    "play fun games.",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </h1>
          </div>
          <div className="pl-10">
            <h2 className="text-2xl font-normal md:text-[1.3rem]">
              A platform where you can play Games, watch videos, complete tasks
              by defeating demons.
            </h2>
          </div>
          <div className="pl-10">
            <Link to={"/character"}>
              <Button
                sx={{
                  color: "black",
                  border: "2px solid black",
                  ":hover": {
                    backgroundColor: "light-gray",
                    border: "2px solid black",
                    boxShadow:
                      "inset 0 -100px 0 rgba(41, 41, 41, .05), 0 4px 6px 0 rgba(0, 0, 0, .1), 0 1px 10px 0 rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .1);",
                  },
                }}
                variant="outlined"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-2/4 ml-auto flex justify-center items-center">
          <img className="w-full max-w-lg" src={homeImg} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
