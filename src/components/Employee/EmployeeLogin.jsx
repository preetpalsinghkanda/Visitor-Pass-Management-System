import React from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployeeLogin = () => {
  return (
    <div className="max-w-[90rem] h-screen  mx-auto flex justify-end items-center">
      <div className="max-w-[30rem] px-15 border w-full py-15 h-fit">
        <div className=" flex flex-col gap-2">
          <h4 className="text-4xl font-extrabold">Employee Login</h4>
          <p className="text-lg font-[500]">
            Access your dashboard and security management tools.
          </p>
        </div>

        <div className="flex justify-center my-7 cursor-pointer">
          <span className="border px-8 text-lg font-bold py-1.5 mx-auto ">
            <FontAwesomeIcon icon={faGoogle} /> Google
          </span>
        </div>

        <div className="relative">
          <hr />
          <span className="flex-nowrap absolute bg-white px-4  left-1/2 -translate-x-1/2 -top-3">
            OR CREDENTIALS
          </span>
        </div>

        <div className=" my-8 flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="">Corporate Email</label>
            <input
              type="text"
              placeholder="name@vistra.com"
              className="py-3 px-4 border outline-0"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="*******"
              className="py-3  items-center px-4 border outline-0"
            />
          </div>
        </div>
        <button className="cursor-pointer border bg-[#000000dd] text-white w-full py-3">
          Sign In to WorkSpace
        </button>
      </div>
    </div>
  );
};

export default EmployeeLogin;
