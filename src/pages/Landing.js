import React from "react";
import eventImage from "../assets/event.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row flex-wrap-reverse items-center justify-between content-center mx-auto text-center bg-secondarypurple">
      <div className="flex flex-col self-center w-72 ml-48 mt-16 mb-20">
        <img src={eventImage} alt="Event" />
      </div>
      <div className="flex flex-col self-center w-auto mr-48 mt-16 font-semibold">
        <h1 className="text-6xl text-purpledark">Imagine if</h1>
        <h1 className="text-6xl  text-transparent  bg-clip-text bg-gradient-to-r  from-envitedpurple to-envitedpink">
          Snapchat
        </h1>
        <h1 className="text-6xl text-purpledark">had events.</h1>
        <p className="font-light mt-2">
          Easily host and share events with your friends
          <br /> across any social media.
        </p>
        <button
          className="text-purple3 bg-gradient-to-r  from-envitedpurple to-envitedpink my-6 px-10 py-2 rounded"
          onClick={() => navigate("/create")}
        >
          🎉 Create my event
        </button>
      </div>
    </div>
  );
};

export default Landing;
