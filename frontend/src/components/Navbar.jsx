import React from "react";
import { useContext } from "react";
import VistorContext from "../context/VistorContext";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ currentPage, setPage, navbar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="max-w-[90rem] my-2  mx-auto">
      <div className=" w-fit gap-4 rounded-full px-3 py-2.5 mx-auto bg-[#000] flex justify-between">
        {navbar.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              onClick={() => {
                navigate(item.path);
              }}
              className={`flex transition-all gap-1 items-center  duration-500 ease-in-out cursor-pointer w-fit px-4 py-1.5 text-lg font-bold rounded-full ${isActive ? "bg-white " : "bg-black text-white"}`}
            >
              {isActive && (
                <span className="material-symbols-outlined  ">{item.icon}</span>
              )}
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
