import React from "react";

const SecurityScannedVisit = ({ visit }) => {
  return (
    <div className="fixed  flex-col inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-10">
      <div className=" sm:min-w-120  flex flex-col gap-6">
        <div className="bg-white  justify-between gap-4 flex flex-col  p-6   shadow-lg">
          <div className="flex  items-center sm:flex-row flex-col gap-6">
            <div className="h-45 w-35">
              <img
                className="h-full w-full object-cover"
                src={visit.visitor.photo}
                alt=""
              />
            </div>

            <div className="flex  flex-col gap-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-extrabold text-[#00000096]">
                  NAME
                </label>
                <p className="text-3xl font-black">JK kulkarni </p>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-sm text-[#00000096] font-extrabold">
                  COMPANY
                </label>
                <p className="text-2xl font-black">Visitor - HQ</p>
              </div>

              <div className="flex items-center gap-4">
                <label className="font-extrabold text-[#00000096] text-sm">
                  VISIT TIME
                </label>
                <p className="font-black text-lg">10:45 PM</p>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-sm font-extrabold text-[#00000096]">
                  VISIT DATE
                </label>
                <p className="uppercase font-black">FRI, 04 mar 2026 </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-6 items-center">
            <span className="text-lg font-extrabold text-[#000000b2]">
              HOST
            </span>
            <p className="font-black italic  text-lg ">SECURITY GARD</p>
          </div>
        </div>

        <div className="w-full sm:flex-row flex-col gap-4 flex justify-around">
          <button className="cursor-pointer   bg-white sm:w-50 text-[red] py-2 px-6 font-extrabold">
            REJECT ENTRY
          </button>
          <button className="cursor-pointer w-full bg-white sm:w-50 text-[#0d00ff] py-2 px-6 font-extrabold">
            APPROVE ENTRY
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityScannedVisit;
