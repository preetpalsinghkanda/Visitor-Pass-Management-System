import React from "react";
import visitorImg from "../../assets/Experience/visitor.webp";
import employeeImg from "../../assets/Experience/employee.webp";
import securityImg from "../../assets/Experience/security.webp";
import adminImg from "../../assets/Experience/admin.webp";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[90rem] mx-auto flex flex-col ">
      <div className="flex flex-col gap-3">
        <h1 className="text-7xl font-extrabold">Select Experience</h1>
        <p className="text-2xl">
          Unified intelligence for the modem enterprise.
        </p>
      </div>

      <div className=" grid grid-rows-1 grid-cols-4 gap-4 my-8">
        <div className=" flex flex-col border-l-4 pl-4 gap-8 ">
          <div className="">
            <span className="font-medium text-2xl">01 / VISITOR</span>
            <h4 className="text-3xl font-extrabold">Enter Visitor Portal</h4>
          </div>

          <div className=" h-90">
            <img className="h-full h-full object-fit" src={visitorImg} alt="" />
          </div>

          <button
            onClick={() => navigate("/visitor/dashboard")}
            className="flex border-r-2 border-t-2 w-fit text-2xl items-center gap-2 cursor-pointer px-5 py-1 "
          >
            Enter<span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>

        <div className=" flex flex-col gap-8 border-l-4 pl-4">
          <div className="">
            <span className="font-medium text-2xl">02 / EMPLOYEE</span>
            <h4 className="text-3xl font-extrabold">Employee Intelligence</h4>
          </div>

          <div className=" h-90">
            <img
              className="h-full h-full object-fit"
              src={employeeImg}
              alt=""
            />
          </div>

          <button
            onClick={() => navigate("/employee/dashboard")}
            className="flex border-r-2 border-t-2 w-fit text-2xl items-center gap-2 cursor-pointer px-5 py-1 "
          >
            Enter<span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>

        <div className=" flex flex-col gap-8 border-l-4 pl-4">
          <div className="">
            <span className="font-medium text-2xl">03 / TACTICAL </span>
            <h4 className="text-3xl font-extrabold">Security Terminal</h4>
          </div>

          <div className="mx-auto h-90">
            <img
              className="h-full h-full object-fit"
              src={securityImg}
              alt=""
            />
          </div>

          <button
            onClick={() => navigate("/security/dashboard")}
            className="flex border-t-2 border-r-2 w-fit text-2xl items-center gap-2 cursor-pointer px-5 py-1 "
          >
            Enter<span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>

        <div className=" flex flex-col gap-8 border-l-4 pl-4  ">
          <div className="">
            <span className="font-medium text-2xl">04 / GLOBAL</span>
            <h4 className="text-3xl font-extrabold">Global Administration</h4>
          </div>

          <div className="mx-auto h-90">
            <img className="h-full h-full object-fit" src={adminImg} alt="" />
          </div>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="flex w-fit border-t-2 border-r-2 text-2xl items-center gap-2 cursor-pointer px-5 py-1 "
          >
            Enter<span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
      <button
        onClick={() => navigate("/")}
        className="border cursor-pointer bg-black text-white px-6  self-center py-2"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Experience;
