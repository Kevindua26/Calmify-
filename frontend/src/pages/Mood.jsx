import React from "react";
import Input from "../components/Mood/Input";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaLongArrowAltRight } from "react-icons/fa";

const Mood = () => {
  return (
    <div className="Mood pt-10">
      <h1 className="text-center font-semibold montserrat text-4xl mb-14">
        What's your mood today ?
      </h1>

      <Input />
      <Link to={"/tasks"} className="bottom-6 absolute right-5">
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

export default Mood;
