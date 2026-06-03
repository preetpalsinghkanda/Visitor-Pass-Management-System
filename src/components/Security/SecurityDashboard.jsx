import React, { useContext } from "react";
import VistorContext from "../../context/VistorContext";

const SecurityDashboard = () => {
  const { date, time } = useContext(VistorContext);
  return (
    <div className="max-w-[90rem] h-screen  mx-auto justify-center flex">
      <div className=" flex  px-4 py-10 flex-col gap-8 items-center">
        <div className="flex flex-col justify-center gap-2 items-center">
          <h3 className="text-4xl font-extrabold">QR Scanner</h3>
          <p className="text-md px-10 text-[#000000a9] font-medium text-center">
            Verify visitor passes and manage entry/exit.
          </p>
        </div>

        <div className="flex text-xl flex-col justify-center items-center">
          <span>{date}</span>
          <span>{time}</span>
        </div>

        <div className="items-center flex  flex-col">
          <div className="border-5 h-60 w-60 rounded-3xl justify-center items-center flex">
            <span
              style={{ fontSize: "100px", color: "#838590" }}
              className="material-symbols-outlined"
            >
              qr_code_scanner
            </span>
          </div>

          <span className="text-2xl">or</span>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="border outline-0 px-6 py-2"
              placeholder="VISTRA-1-AFKYT..."
            />
            <button className="bg-black cursor-pointer text-white py-2 ">
              MANUAL TRIGGER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
