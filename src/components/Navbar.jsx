import React from "react";
import { useContext } from "react";
import VistorContext from "../context/VistorContext";

const Navbar = () => {
  const { heroPage, setHeroPage } = useContext(VistorContext);
  return (
    <div className="max-w-[90rem] ">
      <div className=" max-w-[34rem] rounded-full px-3 py-2.5 mx-auto bg-[#000] flex justify-between">
        <div
          className={`flex cursor-pointer w-fit px-4 py-1.5 text-lg font-bold rounded-full ${heroPage === "home" ? "bg-white text-balck" : "bg-black text-white"}`}
        >
          {heroPage === "home" ? (
            <span class="material-symbols-outlined">home</span>
          ) : (
            ""
          )}
          Home
        </div>
        <div className="flex cursor-pointer w-fit px-4 py-1.5  text-lg font-bold rounded-full items-center gap-1 bg-white ">
         
          <span className=" text-[black] material-symbols-outlined">
            home_work
          </span>
          Industries
        </div>
        <div className="flex cursor-pointer w-fit px-4 py-1.5  text-lg font-bold rounded-full items-center gap-1 bg-white ">
          {" "}
          <span class="material-symbols-outlined ">info</span> About
        </div>
        <div className="flex  cursor-pointer w-fit px-4 py-1.5 text-lg font-bold rounded-full bg-white items-center gap-1">
          <span class="material-symbols-outlined">chat</span>Support
        </div>
      </div>
    </div>
  );
};

export default Navbar;
