import React from "react";
import { useContext } from "react";
import VistorContext from "../context/VistorContext";

const Navbar = () => {
  const { heroPage, setHeroPage } = useContext(VistorContext);
  return (
    <div className="max-w-[90rem] my-2 ">
      <div className=" w-fit gap-4 rounded-full px-3 py-2.5 mx-auto bg-[#000] flex justify-between">
        <div onClick={()=>setHeroPage("Home")} className={`flex transition-all   duration-500 ease-in-out cursor-pointer w-fit px-4 py-1.5 text-lg font-bold rounded-full ${heroPage === "Home" ? "bg-white text-balck" : "bg-black text-white"}`}
        >
          {heroPage === "Home" ? (
            <span class="material-symbols-outlined">home</span>
          ) : (
            ""
          )}
          Home
        </div>

        <div onClick={()=> setHeroPage("Industries")}
          className={`transition-all   duration-500 ease-in-out flex cursor-pointer w-fit px-4 py-1.5  text-lg font-bold rounded-full items-center gap-1 ${heroPage === "Industries" ? "bg-white text-black" : "bg-black text-white"} `}
        >
          {heroPage === "Industries" ? (
            <span className=" text-[black] material-symbols-outlined">
              home_work
            </span>
          ) : (
            ""
          )}
          Industries
        </div>

        <div onClick={()=>setHeroPage("About")}
          className={`flex  ease-in-out transition-all duration-500 cursor-pointer w-fit px-4 py-1.5  text-lg font-bold rounded-full items-center gap-1 ${heroPage === "About" ? "bg-white text-black" : "text-white bg-black"} `}
        >
          {heroPage === "About" ? (
            <span class="material-symbols-outlined ">info</span>
          ) : (
            ""
          )}
          About
        </div>

        <div onClick={()=> setHeroPage("Support")}
          className={`flex transition-all
             duration-500 ease-in-out   cursor-pointer w-fit px-4 py-1.5 text-lg font-bold rounded-full ${heroPage === "Support" ? "bg-white text-black" : "text-white bg-black"} items-center gap-1`}
        >
          {heroPage === "Support" ? (
            <span class="material-symbols-outlined">chat</span>
          ) : (
            ""
          )}
          Support
        </div>


      </div>
    </div>
  );
};

export default Navbar;
