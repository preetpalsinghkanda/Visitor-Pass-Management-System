import React, { useContext, useEffect, useState } from "react";
import VistorContext from "../../context/VistorContext";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

const VisitorDashBoard = () => {
  const { date, time, handleLogout, user, imgPreview } =
    useContext(VistorContext);
  const navigate = useNavigate();

  const [total, setTotal] = useState({
    totalPass: 0,
    totalApproved: 0,
    totalPending: 0,
    totalRejected: 0,
    totalCompleted: 0,
  });

  useEffect(() => {
    const getTotal = async () => {
      try {
        const res = await api.get("/users/total");

        setTotal(res.data.total);
      } catch (err) {
        toast.error("FAILED TO FETCH");
      }
    };

    getTotal();
  }, []);

  return (
    <div className=" max-w-[90rem]   mx-auto flex flex-col ">
      {/* Visior Navbar */}
      <div className="flex items-center justify-between  flex-row">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="text-4xl  cursor-pointer absolute top-2  items-center  py-2 text-black px-5 rounded-full font-extrabold"
        >
          VISTRA
        </div>

        <div className="w-fit  absolute right-12 top- self-end py-1.5 my-2 px-4 rounded-full text-white bg-black flex items-center gap-4">
          <span className="material-symbols-outlined">
            notifications_unread
          </span>

          <div className="h-8 w-px bg-white/30"></div>

          <div
            onClick={() => navigate("/visitor/settings")}
            className="flex cursor-pointer flex-row-reverse items-center gap-3"
          >
            <div className="h-10 w-10">
              <img
                className="h-full w-full object-cover rounded-full"
                src={imgPreview ? imgPreview : user?.photo}
                alt=""
              />
            </div>

            <div className="leading-none">
              <h5 className="font-bold text-lg">{user?.name}</h5>
              <span className="text-[10px] uppercase">
                {user?.role} Explorer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-10 ml-10">
        <h2 className="text-4xl font-bold">
          Heyyy, <span className="text-5xl font-bold">{user?.name}</span>
        </h2>
        <p className="text-xl text-[#0000008d]">
          Welcome to visitor portal manage your access and coordinate your
          facility visits seamlessly.
        </p>
      </div>

      <div className=" grid grid-cols-3 w-full bg-[#000000] gap-6 self-end  text-white p-12  ">
        <div className="flex flex-1 px-6 gap-6 place-items-start py-3  rounded-lg flex-col  bg-white text-black">
          <div className="flex items-center gap-4 font-bold  text-4xl">
            <span
              style={{ fontSize: "30px" }}
              className=" material-symbols-outlined "
            >
              local_activity
            </span>
            Total Pass
          </div>

          <span className="self-center italic text-7xl font-extrabold">
            {total.totalPass}
          </span>
        </div>
        <div className="flex place-items-start bg-white flex-1 px-6 py-3 gap-6 rounded-lg flex-col    text-black">
          <div className="flex items-center gap-4 whitespace-nowrap font-bold text-4xl">
            <span
              style={{ fontSize: "30px" }}
              class="material-symbols-outlined"
            >
              pending_actions
            </span>
            Pending Pass
          </div>

          <span className="self-center italic text-7xl font-extrabold">
            {total.totalPending}
          </span>
        </div>
        <div className="flex place-items-start flex-1 px-6 py-3 gap-6 rounded-lg flex-col  bg-white  text-black">
          <div className="flex items-center gap-4 whitespace-nowrap font-bold text-4xl">
            <span
              style={{ fontSize: "30px" }}
              class="material-symbols-outlined"
            >
              assignment_turned_in
            </span>
            Approved Pass
          </div>

          <span className="self-center italic text-7xl font-extrabold">
            {total.totalApproved}
          </span>
        </div>

        <div className="flex place-items-start flex-1 px-6 py-3  gap-6 rounded-lg flex-col bg-white text-black">
          <div className="flex items-center gap-4 whitespace-nowrap font-bold text-4xl">
            <span
              style={{ fontSize: "30px" }}
              class="material-symbols-outlined"
            >
              task_alt
            </span>
            Completed Visit
          </div>
          <span className="self-center italic text-7xl font-extrabold">
            {total.totalCompleted}
          </span>
        </div>

        <div className="flex place-items-start flex-1 px-6 py-3 gap-6 rounded-lg flex-col bg-white text-black">
          <div className="flex items-center gap-4 whitespace-nowrap font-bold text-4xl">
            <span
              style={{ fontSize: "30px" }}
              class="material-symbols-outlined"
            >
              disabled_by_default
            </span>
            Rejected Pass
          </div>

          <span className="self-center italic text-7xl font-extrabold">
            {total.totalRejected}
          </span>
        </div>

        <div
          onClick={() => navigate("/visitor/pass")}
          className="flex justify-center cursor-pointer items-center gap-4 place-items-center bg-white text-black  flex-col"
        >
          <button className="cursor-pointer  font-bold text-3xl  flex self-center items-center gap-2">
            Schedule a <span className="bg-black px-2 text-white">new</span>
            visit
          </button>
          <span
            style={{ fontSize: "40px", fontWeight: "700" }}
            class="material-symbols-outlined"
          >
            arrow_right_alt
          </span>
        </div>
      </div>

      {/* <hr className="border border-black w-40 mx-auto" /> */}

      <div className="flex justify-between absolute bottom-10  w-full pr-25">
        <div className="flex    gap-4 text-xl">
          <p className="">{time}</p>
          <p className="">{date}</p>
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="text-xl  cursor-pointer text-red-600 flex items-center gap-3"
          >
            Sign Out <span class="material-symbols-outlined">logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorDashBoard;
