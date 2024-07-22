import React from "react";
import logo1 from "../assets/logo1.png";
import like from "../assets/like.png";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Tags from "../components/Tags";
import Profile from "../components/Profile";
import reelsData from "./data/reelsData.js";
import { Link } from "react-router-dom";
const Reels = () => {
  return (
    <div className="Reels">
      <div className="container mx-auto p-10 pl-14 ">
        <div className="Card-Container columns-4 gap-2">
          {reelsData.map(
            (
              reel,
              index //implicit return using parenthesis, if you are using {} return explicitly, cool
            ) => (
              <Link to={`/reels/${index}`}><div
                key={index}
                className="mb-10 max-w-[20vw] w-full h-fit border-b-2 rounded-xl break-inside-avoid"
              >
                <Card thumbnail={reel.thumbnail} />
                <Profile
                  profileImage={reel.profileImage}
                  profileName={reel.profileName}
                  likes={reel.likes}
                />
                <Tags tags={reel.tags} />
              </div></Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Reels;
