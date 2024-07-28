import React, { useState } from "react";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import male from "../assets/male.png";
import female from "../assets/female.png";

const Character = () => {

  const [selectedGender,setSelectedGender] = useState(null);
  const handleCardClick = (gender) => {
    setSelectedGender(gender);
  }

  // function toggleBorder(element) {
  //   console.log(element);
  //   element.classList.toggle("border-2");
  // }
  return (
    <div className="Character ">
      <div className="relative">
      <h1 className="text-center font-semibold text-[2.5rem] montserrat">
        What's your official gender ?
      </h1>
      <div className="box w-3/4 mx-auto  flex flex-col justify-center h-[90vh]">
        <div className={`card-character cursor-pointer  ${selectedGender === 'male' ? 'border-2' : 'border'} mb-5 w-3/4 h-[40vh] overflow-hidden border border-amber-800 mx-auto flex rounded-3xl`} onClick={()=> handleCardClick('male')}>
          <div className="h-full w-2/4 px-7 py-5 font-semibold text-3xl text-amber-700 montserrat flex flex-col justify-between">
            <h1>I am Male</h1>
            <IoMdMale className="text-amber-500" />
          </div>
          <div className="h-full w-2/4 ">
            <img className="h-auto" src={male} alt="male character"></img>
          </div>
        </div>
        <div className={`card-character ${selectedGender === "female"?"border-2":"border"} cursor-pointer w-3/4 h-[40vh] max-h-fit overflow-hidden border border-amber-800 mx-auto flex rounded-3xl`} onClick={()=> handleCardClick('female')}>
          <div className="h-full w-2/4 px-7 py-5 font-semibold text-3xl text-amber-700 montserrat flex flex-col justify-between">
            <h1>I am Female</h1>
            <IoMdFemale className="text-amber-500" />
          </div>
          <div className="h-full w-2/4 ">
            <img
              className="h-auto rounded-md"
              src={female}
              alt="male character"
            ></img>
          </div>
        </div>
      </div>
      </div>
      <Link to={"/mood"} className="bottom-6 absolute right-5">
              <Button 
                sx={{
                 
                  color: "black",
                  border: "2px solid black",
                  ":hover": {
                    color:"white",
                    backgroundColor: "#b45309",
                    border: "2px solid brown",
                    
                    boxShadow:
                      "inset 0 -100px 0 rgba(41, 41, 41, .05), 0 4px 6px 0 rgba(0, 0, 0, .1), 0 1px 10px 0 rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .1);",
                  },
                }}
                variant="outlined"
              >
                Continue  &nbsp;<FaLongArrowAltRight />

              </Button>
            </Link>
    </div>
  );
};

export default Character;
