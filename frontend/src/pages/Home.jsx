import React from "react";
import homeImg from "../assets/home.png";
import { ReactTyped } from "react-typed";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png"

const Home = () => {
  return (
    <div className="Home w-screen h-screen py-4 relative">
      <img src={logo} alt="logo" className="absolute top-5 left-4 h-11 w-11"/>
      <div className="lg:container mx-auto w-full h-full rounded-lg flex md:w-full ">
        <div className="w-2/4 p-6 pt-36">
          <div className=" flex flex-col gap-9 h-full">
            <div className="pl-10 ">
              <h1 className="lg:text-[2.8rem] montserrat font-medium leading-[3.4rem] md:text-[2.4rem] ">
                Welcome to Happy Minds. A place to{" "}
                <br></br>
                <span className="text-yellow-400"><ReactTyped  strings={[
                    "relax your mind.",
                    "improve your habits.",
                    "play fun games.",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop/>
                </span>
              </h1>
            </div>
            <div className=" pl-10 ">
              <h1 className="text-2xl montserrat font-normal md:text-[1.3rem]">
                A platform where you can play Games, watch videos, complete
                tasks by defeating demons.
              </h1>
            </div>
            <div className="pl-10">
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
            </div>
          </div>
        </div>
        <div className=" w-2/4 ml-auto">
          <div className="lg:flex justify-center  h-full md:flex items-center ">
            <img className="w-full max-w-lg" src={homeImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
