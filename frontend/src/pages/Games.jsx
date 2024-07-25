import React from "react";
import simon from "../assets/simon.png";

const Games = () => {
  return (
    <div className="mt-5 flex gap-5 container mx-auto flex-wrap items-center justify-center h-[80vh]">
      <div className="card cursor-pointer  w-full max-w-[20vw] h-fit relative rounded-xl hover:bg-slate-400 border border-red-300">
        <div className="max-w-[20vw] h-fit rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-2 transition ease-in-out duration-500 relative">
          <img className="w-full" src={simon} alt="Game Image" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition ease-in-out duration-500 "></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <button className="bg-slate-300 text-black px-4 py-2 rounded montserrat font-semibold border border-black">
              Play Now
            </button>
          </div>
          <h1 className="text-center mt-1 text-2xl montserrat font-semibold">
            Simon Says Game
          </h1>
        </div>
      </div>
      <div className="card cursor-pointer  w-full max-w-[20vw] h-fit relative rounded-xl hover:bg-slate-400 border border-red-300">
        <div className="max-w-[20vw] h-fit rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-2 transition ease-in-out duration-500 relative">
          <img className="w-full" src={simon} alt="Game Image" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition ease-in-out duration-500 "></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <button className="bg-slate-300 text-black px-4 py-2 rounded montserrat font-semibold border border-black">
              Play Now
            </button>
          </div>
          <h1 className="text-center mt-1 text-2xl montserrat font-semibold">
            Simon Says Game
          </h1>
        </div>
      </div>
      <div className="card cursor-pointer  w-full max-w-[20vw] h-fit relative rounded-xl hover:bg-slate-400 border border-red-300">
        <div className="max-w-[20vw] h-fit rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-2 transition ease-in-out duration-500 relative">
          <img className="w-full" src={simon} alt="Game Image" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition ease-in-out duration-500 "></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <button className="bg-slate-300 text-black px-4 py-2 rounded montserrat font-semibold border border-black">
              Play Now
            </button>
          </div>
          <h1 className="text-center mt-1 text-2xl montserrat font-semibold">
            Simon Says Game
          </h1>
        </div>
      </div>
      <div className="card cursor-pointer  w-full max-w-[20vw] h-fit relative rounded-xl hover:bg-slate-400 border border-red-300">
        <div className="max-w-[20vw] h-fit rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-2 transition ease-in-out duration-500 relative">
          <img className="w-full" src={simon} alt="Game Image" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition ease-in-out duration-500 "></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <button className="bg-slate-300 text-black px-4 py-2 rounded montserrat font-semibold border border-black">
              Play Now
            </button>
          </div>
          <h1 className="text-center mt-1 text-2xl montserrat font-semibold">
            Simon Says Game
          </h1>
        </div>
      </div>
    </div>
    
  );
};

export default Games;
