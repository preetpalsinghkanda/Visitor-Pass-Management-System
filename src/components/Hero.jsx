import React from "react";
import visitorSelfie from "../assets/home-background-min.webp";
import cards from "../assets/cards.webp";
import meeting from "../assets/meeting.webp";

const Hero = () => {
  return (
    <div className=" h-screen font-Quicksand">
      <div className="[font-family:'Mozilla_Headline',sans-serif] max-w-[90rem] w-full mx-auto  ">
        <h1 class=" text-[300px] font-extrabold">VISTRA</h1>
        <p className="relative bottom-20 text-3xl">
          The future of enterprise access. Intelligence woven into every entry.
        </p>

        <button className=" cursor-pointer shadow-[0_0px_15px_rgba(0,0,0,0.50)]  px-7 py-2 text-3xl bg-[#111111] text-[#FFFFFF]">
          ENTER PORTAL
        </button>
      </div>

      <div className="max-w-[90rem]  w-full mx-auto  flex justify-between my-50 py-4">
        <div className="  [font-family:'Mozilla_Headline',sans-serif]   max-w-[55rem] ">
         <div className=" flex flex-col h-full items-center">
  <div className="max-w-4xl">
    <h2 className="text-6xl font-bold">
      <span className="block">
        Stop{" "}
        <span className="px-4 text-white bg-black">
          Unauthorized Entry
        </span>
      </span>
      in Your Office Instantly
    </h2>

    <p className="text-2xl font-medium my-4 text-black/70">
      Smart Visitor Management System for Secure, Paperless & Real Time
      Entry Tracking built for modern Indian businesses.
    </p>
  </div>

  <div className=" mt-8 h-110 w-auto">
    <img src={meeting} className="h-full w-full object-cover" alt="" />
  </div>
</div>
        </div>

        <div className="h-180 ">
          <img src={cards} className="h-full w-full object-cover " alt="" />
        </div>
      </div>

      <div className="border h-screen hidden">
        <img
          src={visitorSelfie}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
