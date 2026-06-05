import React from "react";
import { useContext } from "react";
import VistorContext from "../context/VistorContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ currentPage, setPage, navbar }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[90rem] my-2 ">
      <div className=" w-fit gap-4 rounded-full px-3 py-2.5 mx-auto bg-[#000] flex justify-between">
        {navbar.map((item) => (
          <div
            onClick={() => {
              setPage(item.name);
              navigate(item.path);
            }}
            className={`flex transition-all gap-1 items-center  duration-500 ease-in-out cursor-pointer w-fit px-4 py-1.5 text-lg font-bold rounded-full ${currentPage === item.name ? "bg-white text-balck" : "bg-black text-white"}`}
          >
            {currentPage === item.name ? (
              <span className="material-symbols-outlined  ">{item.icon}</span>
            ) : (
              ""
            )}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
