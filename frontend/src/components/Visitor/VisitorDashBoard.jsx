import React, { useContext, useEffect, useState } from "react";
import VistorContext from "../../context/VistorContext";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const VisitorDashBoard = () => {
  const { date , time} = useContext(VistorContext);
const navigate = useNavigate()

  return (

    <div className=" max-w-[90rem]   mx-auto flex flex-col ">
      {/* Visior Navbar */}
      <div className="flex items-center justify-between  flex-row">
        <div className="text-4xl absolute top-2  items-center bg-black py-2 text-white px-5 rounded-full font-extrabold">
          VISTRA
        </div>
        
        <div className="w-fit absolute right-12 top- self-end py-1.5 my-2 px-4 rounded-full text-white bg-black flex items-center gap-4">
          <span className="material-symbols-outlined">
            notifications_unread
          </span>

          <div className="h-8 w-px bg-white/30"></div>

          <div className="flex flex-row-reverse items-center gap-3">
            <div className="h-10 w-10">
              <img
                className="h-full w-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0bbTPaE1UCqmXjfKZqoac55Olqn7fbGY_g&s"
                alt=""
              />
            </div>

            <div className="leading-none">
              <h5 className="font-bold text-lg">Billy Butcher</h5>
              <span className="text-sm">Guest Explorer</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-10 ml-10">
        <h2 className="text-4xl font-medium">
          Hi, <span className="text-5xl font-bold">Billy Butcher</span>
        </h2>
        <p className="text-xl text-[#0000008d]">
          Welcome to visitor portal.Manage your access and coordinate your
          facility visits seamlessly.
        </p>
      </div>

      <div className=" grid grid-cols-3 bg-[#000000] gap-6 self-end  text-white p-10  ">
        <div className="flex flex-1 px-6 place-items-center py-3 gap-2 rounded-lg flex-col  bg-white text-black">
          <div className="flex items-center gap-4 font-bold text-3xl">
            <span className=" material-symbols-outlined ">all_inbox</span>
            Total Pass
          </div>

          <span className="self-center text-5xl font-extrabold">7</span>
        </div>

        <div className="flex place-items-center bg-white flex-1 px-6 py-3 gap-2 rounded-lg flex-col    text-black">
          <div className="flex items-center gap-4 whitespace-nowrap font-bold text-3xl">
            <span class="material-symbols-outlined">pending_actions</span>
            Pending Pass
          </div>

          <span className="self-center text-5xl font-extrabold">2</span>
        </div>

        <div className="flex place-items-center flex-1 px-6 py-3 gap-2 rounded-lg flex-col  bg-white  text-black">
          <div className="flex items-center gap-4 whitespace-nowrap font-bold text-3xl">
            <span class="material-symbols-outlined">assignment_turned_in</span>
            Approved Pass
          </div>

          <span className="self-center text-5xl font-extrabold">4</span>
        </div>
      </div>

      <button onClick={()=>navigate("/visitor/pass")} className="cursor-pointer my-12  font-bold text-2xl  flex self-center items-center gap-2">
        Schedule a <span className="bg-black px-2 text-white">new</span> visit
        <span class="material-symbols-outlined">arrow_right_alt</span>
      </button>

      <div className="flex justify-between absolute bottom-10  w-full pr-25">
        <div className="flex    gap-4 text-xl">
          <p className="">{time}</p>
          <p className="">{date}</p>
        </div>

        <div>
          <button className="text-xl cursor-pointer text-red-600 flex items-center gap-3">
            Sign Out <span class="material-symbols-outlined">logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorDashBoard;
