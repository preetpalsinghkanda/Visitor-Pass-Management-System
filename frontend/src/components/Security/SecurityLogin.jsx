import React from "react";

const SecurityLogin = () => {
  return (
    <div className=" max-w-[90rem] mx-auto h-screen justify-center items-center flex-col flex">
      <div className=" max-w-[30rem] border py-15 h-fit justify-center flex flex-col items-center text-center px-15  ">
        <div className=" w-full">
          <h3 className="text-3xl font-bold">Operator Auth</h3>
          <p className="text-lg">Insert credentials to unlock gate control.</p>
        </div>

        <div className="slef-start text-start  w-full flex flex-col gap-4 my-8">
          <div className="flex flex-col">
            <label htmlFor="security-id">OPERATOR ID</label>
            <div className="border px-5 py-3 flex gap-3">
              <span class="material-symbols-outlined">badge</span>
              <input
                placeholder="VSEC0000"
                type="text"
                className=" text-lg w-full outline-0 border-0"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="security-key">ACCESS KEY</label>
            <div className="border px-5 py-3 flex gap-3">
              <span class="material-symbols-outlined">lock_open</span>
              <input
                placeholder="******"
                type="text"
                className="text-lg w-full outline-0 border-0"
              />
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 justify-center border w-full py-4 bg-[#000000dd] text-white">
          UNLOCK GATE{" "}
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </button>

        <div className="border w-full my-8 border-[#0000002b]"></div>
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <div className="text-sm flex items-center gap-3 font-bold">
            <span class="material-symbols-outlined">qr_code_scanner</span>Scan
            Terminal Access Code
          </div>
          <span className="text-sm text-[#000000b5]">
            {" "}
            Unauthorized access is monitored and logged.
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 flex  w-full justify-between px-20">
        <div className="flex gap-6">
          <span class="material-symbols-outlined">support_agent</span>
          <span class="material-symbols-outlined">language</span>
        </div>
        <div className="text-end text-sm">
          <h5 className="px-3">VISTRA CORE V4.2.0 </h5>
          <span className="bg-black text-white px-3">
            PROTOCOL : SECURE LOGIN
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecurityLogin;
