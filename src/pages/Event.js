import React from "react";
import Cake from "../assets/cake.png";

const Event = () => {
  return (
    <div className="flex flex-row flex-wrap-reverse items-center justify-between content-center mx-auto text-center bg-secondarypurple">
      <div className="flex flex-col self-center w-auto ml-48 mt-16 font-semibold">
        <h1 className="text-5xl">Birthday Bash</h1>
        <p className="font-light float-left mt-2">Hosted by Elysia</p>
        <h1 className="text-xl">18th August to 20th August</h1>
        <p className="font-light mt-2">Street Name</p>
      </div>
      <div className="flex flex-col self-center w-72 mr-48 mt-16 ">
        <img src={Cake} alt="Cake" />
      </div>
    </div>
  );
};

export default Event;
