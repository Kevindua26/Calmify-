import React, { useState, useEffect } from "react";
import "./input.css";
import Excellent from "../../assets/Excellent.png"
import Fair from "../../assets/Fair.png"
import Good from "../../assets/Good.png"
import Poor from "../../assets/Poor.png"
import Worst from "../../assets/Worst.png"
import { PiGreaterThanLight } from "react-icons/pi";


const Input = () => {
  const [thumbColor, setThumbColor] = useState("#25ba18");

  const colors = ["#ff4e3a", "#fe903b", "#ffde49", "#aef557", "#25ba18"];

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setThumbColor(colors[value]);
  };

  useEffect(() => {
    const moodRange = document.getElementById('mood-range');
    moodRange.style.setProperty('--thumb-color', thumbColor);
  }, [thumbColor]);

  return (
    <div>
      <div className="container mx-auto flex items-center">
        
       <div className="max-w-[70vw] flex flex-col mx-auto gap-10">
        <div className="image-container flex gap-5 montserrat">
        <div className="max-h-[35vh] flex flex-col justify-between">
        <img src={Worst} alt="Worst"></img>
        <h1 className="text-center font-semibold text-3xl">Worst </h1>
        </div>
        <div className="max-h-[35vh] flex flex-col justify-between">
        <img src={Poor} alt="Poor"></img>
        <h1 className="text-center font-semibold text-3xl">Poor </h1>

        </div>
        <div className="max-h-[35vh] flex flex-col justify-between">
        <img src={Fair} alt="Fair"></img>
        <h1 className="text-center font-semibold text-3xl">Fair </h1>

        </div >
        <div className="max-h-[35vh] flex flex-col justify-between">
        <img src={Good} alt="Good"></img>
        <h1 className="text-center font-semibold text-3xl">Good </h1>

        </div>
        <div className="max-h-[35vh] flex flex-col justify-between"> 
        <img src={Excellent} alt="Excellent"></img>
        <h1 className="text-center font-semibold text-3xl ">Excellent </h1>

        </div>
        </div>
       
        <input
          type="range"
          min={0}
          max={4}
          step={1}
          id="mood-range"
          className="w-[95%] mx-auto"
          onInput={handleInputChange}
        />
      </div>
      </div>
    </div>
  );
};

export default Input;
