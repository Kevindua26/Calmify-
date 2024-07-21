import React from "react";
import logo1 from "../assets/logo1.png";
import like from "../assets/like.png";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Tags from "../components/Tags";
import Profile from "../components/Profile";
const Reels = () => {
  const reelsData = [
    {
      thumbnail:
        "https://i.pinimg.com/236x/8f/c2/32/8fc232133bbaacf1b47aacaab8a4838b.jpg",
      profileImage:
        "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
      profileName: "Lisha",
      likes: 100,
      tags: ["#calm", "#peace", "#anime"],
    },
    {
      thumbnail:
        "https://i.pinimg.com/videos/thumbnails/originals/29/05/e3/2905e3a4d4606618bda59d593407812a.0000000.jpg",
      profileImage:
        "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
      profileName: "Lisha",
      likes: 100,
      tags: ["#calm", "#peace", "#anime"],
    },
    {
        thumbnail:
          "https://i.pinimg.com/736x/7d/5a/8d/7d5a8d33e9f9784c7d53485abcbd520d.jpg",
        profileImage:
          "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
        profileName: "Lisha",
        likes: 100,
        tags: ["#calm", "#peace", "#anime"],
      },
      {
        thumbnail:
          "https://i.pinimg.com/videos/thumbnails/originals/29/05/e3/2905e3a4d4606618bda59d593407812a.0000000.jpg",
        profileImage:
          "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
        profileName: "Lisha",
        likes: 100,
        tags: ["#calm", "#peace", "#anime"],
      },
      {
        thumbnail:
          "https://i.pinimg.com/236x/1d/0c/84/1d0c8477698aea5e66df66d9ba6c38ca.jpg",
        profileImage:
          "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
        profileName: "Lisha",
        likes: 100,
        tags: ["#calm", "#peace", "#anime"],
      },
      {
        thumbnail:
          "https://i.pinimg.com/236x/1d/0c/84/1d0c8477698aea5e66df66d9ba6c38ca.jpg",
        profileImage:
          "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
        profileName: "Lisha",
        likes: 100,
        tags: ["#calm", "#peace", "#anime"],
      },
      {
        thumbnail:
          "https://i.pinimg.com/236x/1d/0c/84/1d0c8477698aea5e66df66d9ba6c38ca.jpg",
        profileImage:
          "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
        profileName: "Lisha",
        likes: 100,
        tags: ["#calm", "#peace", "#anime"],
      },
      {
        thumbnail:
          "https://i.pinimg.com/736x/90/01/88/900188f8bf6de5e2ce3bb50bf56ab6fd.jpg",
        profileImage:
          "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
        profileName: "Lisha",
        likes: 100,
        tags: ["#calm", "#peace", "#anime"],
      },
      {
        thumbnail:
          "https://i.pinimg.com/736x/7d/5a/8d/7d5a8d33e9f9784c7d53485abcbd520d.jpg",
        profileImage:
          "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
        profileName: "Lisha",
        likes: 100,
        tags: ["#calm", "#peace", "#anime"],
      },
      {
        thumbnail:
          "https://i.pinimg.com/videos/thumbnails/originals/29/05/e3/2905e3a4d4606618bda59d593407812a.0000000.jpg",
        profileImage:
          "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285",
        profileName: "Lisha",
        likes: 100,
        tags: ["#calm", "#peace", "#anime"],
      },
      
  ];
  return (
    <div className="Reels">
      <Logo />
      <div className="container mx-auto mt-14  p-10 pl-14 ">
        <div className="Card-Container columns-4 gap-2">
          {reelsData.map(
            (
              reel,
              index //implicit return using parenthesis, if you are using {} return explicitly
            ) => (
              <div key={index} className="mb-10 max-w-[20vw] w-full h-fit border-b-2 rounded-xl break-inside-avoid">
                <Card thumbnail={reel.thumbnail} />
                <Profile
                  profileImage={reel.profileImage}
                  profileName={reel.profileName}
                  likes={reel.likes}
                />
                <Tags tags={reel.tags} />
              </div>
            )
          )}
        </div>

        {/* 
        <div className="card w-full max-w-[20vw] h-fit">
        <div class="max-w-[20vw] h-fit rounded-xl overflow-hidden shadow-lg">
          <img
            className="w-full cursor-pointer"
            src="https://i.pinimg.com/videos/thumbnails/originals/29/05/e3/2905e3a4d4606618bda59d593407812a.0000000.jpg"
            alt=""
          />
        </div>

        <div className="flex gap-3 mt-2 w-full items-center max-w-[20vw]">
          <div className="w-10 h-8 rounded-full  overflow-hidden flex justify-center">
            <img
              className="w-full cursor-pointer"
              src="https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/295319685_360221382954934_4867433556313988669_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=3uEobPNXSKEQ7kNvgHOMriM&_nc_ht=scontent.fdel3-2.fna&oh=00_AYBnTFPFm3twWg43DCEQkDf2BhA2crYY3NRXu00I2_vOmA&oe=66A15285"
              alt="profile"
            />
          </div>
          <div className="max-w-[20vw] flex justify-between items-center w-full">
            <div className="hover:underline cursor-pointer">Lisha</div>
            <div className=" flex justify-center items-center gap-1">
              {" "}
              <div>100</div>
              <div className="cursor-pointer">
                <img className="w-4" src={like} alt="like" />
              </div>
            </div>
          </div>
        </div> */}

        {/* <Tags /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Reels;
