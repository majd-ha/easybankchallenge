import React from "react";
import bgdesk from "../assets/bg-intro-desktop.svg";
import mokups from "../assets/image-mockups.png";
export default function Deskbg() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute -top-24 -right-32 max-sm:right-0  ">
        <img src={bgdesk} alt="" className=" w-full h-full " />
      </div>
      <div className="absolute -top-28 -right-36  max-sm:right-0  ">
        <img
          src={mokups}
          alt=""
          className="w-4/5 h-11/12 object-cover mx-auto "
        />
      </div>
    </div>
  );
}
