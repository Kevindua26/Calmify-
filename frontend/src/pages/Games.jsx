import React from "react";
import simon from "../assets/simon.png";
import { Link } from "react-router-dom";
import flappy from "../assets/flappy.png";



const Games = () => {
  return (
    <div className="mt-5 flex gap-16 container mx-auto flex-wrap items-center justify-center h-[80vh] w-[100%]">
      <div className="card cursor-pointer  w-full max-w-[20vw] h-fit relative rounded-xl hover:bg-slate-400 border border-red-300">
        <div className="max-w-[20vw] h-fit rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-2 transition ease-in-out duration-500 relative">
          <img className="w-full" src={simon} alt="Game Image" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition ease-in-out duration-500 "></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <Link to={"/simon"}>
              <button className="bg-slate-300 text-black px-4 py-2 rounded montserrat font-semibold border border-black">
                Play Now
              </button>
            </Link>
          </div>
          <h1 className="text-center mt-1 text-2xl montserrat font-semibold">
            Simon Says 
          </h1>
        </div>
      </div>
      <div className="card cursor-pointer  w-full max-w-[20vw] h-[53vh] relative rounded-xl hover:bg-slate-400 border border-red-300">
        <div className="max-w-[20vw] h-full rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-2 transition ease-in-out duration-500 relative">
          <img className="h-[85%]" src="https://lh3.googleusercontent.com/d_3YE0yBqfuRGLOgq_KyYb9sRtOZPyZUsqm8bxRU_dwkSZEmVpL7-hs8kq5WlPTzF1HCegRYLDfJ9k41jaxZXLh_" alt="Game Image" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition ease-in-out duration-500 "></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <Link to={"/flappy"}><button className="bg-slate-300 text-black px-4 py-2 rounded montserrat font-semibold border border-black">
              Play Now
            </button></Link>
          </div>
          <div className="h-[15%] flex justify-center items-end pb-1">
          <h1 className="text-center  text-2xl montserrat font-semibold">
            Flappy Bird 
          </h1></div>
        </div>
      </div>
      <div className="card cursor-pointer  w-full max-w-[20vw] h-fit relative rounded-xl hover:bg-slate-400 border border-red-300">
        <div className="max-w-[20vw] h-fit rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-2 transition ease-in-out duration-500 relative">
          <img className="w-full" src="https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/dd44a203a7d758226e290304fdbcd82d.png" alt="Game Image" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition ease-in-out duration-500 "></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <Link to={"/colormatch"}><button className="bg-slate-300 text-black px-4 py-2 rounded montserrat font-semibold border border-black">
              Play Now
            </button></Link>
          </div>
          <h1 className="text-center mt-1 text-2xl montserrat font-semibold">
            Match the Color
          </h1>
        </div>
      </div>
      {/* <div className="card cursor-pointer  w-full max-w-[20vw] h-fit relative rounded-xl hover:bg-slate-400 border border-red-300">
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
      </div> */}
    </div>
  );
};

export default Games;
