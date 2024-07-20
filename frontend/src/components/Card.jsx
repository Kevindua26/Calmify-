import React from "react";

const Card = ({thumbnail}) => {
  return (
    <div className="card w-full max-w-[20vw] h-fit">
      <div className="max-w-[20vw] h-fit rounded-xl overflow-hidden shadow-lg">
        <img
          className="w-full cursor-pointer"
          src={thumbnail}
          alt="Reel Thumbnail"
        />
      </div>
    </div>
  );
};

export default Card;
