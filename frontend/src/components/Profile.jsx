import React from "react";
import like from "../assets/like.png";

const Profile = ({profileImage,likes,profileName}) => {
  return (
    <div className="flex gap-3 mt-2 w-full items-center max-w-[20vw]">
      <div className="w-10 h-8 rounded-full overflow-hidden flex justify-center">
        <img
          className="w-full cursor-pointer"
          src={profileImage}
          alt="profile"
        />
      </div>
      <div className="max-w-[20vw] flex justify-between items-center w-full ">
        <div className="hover:underline cursor-pointer">{profileName}</div>
        <div className="flex justify-center items-center gap-1">
          <div>{likes}</div>
          <div className="cursor-pointer">
            <img className="w-4" src={like} alt="like" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
