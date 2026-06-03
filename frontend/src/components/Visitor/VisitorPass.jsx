import React from "react";

const VisitorPass = () => {
  return (
    <div className=" flex h-screen justify-center items-center mx-auto max-w-[90rem]">
      <div className="border px-10 py-10 max-w-[37rem] ">
        <div className="flex flex-col gap-2">
          <h3 className="text-5xl font-extrabold">New Visit Request</h3>
          <p className="text-lg font-medium text-[#000000ab]">
            Initialize a secured intelligence-driven entry protocol.
          </p>
        </div>

        <div className=" my-8 flex flex-col gap-5">
          <div className="flex gap-6  ">
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="host-name " className="font-extrabold">
                HOST NAME
              </label>
              <div className="border flex px-2 py-2 items-center gap-2">
                <span class="material-symbols-outlined">person_search</span>
                <input
                  placeholder="Search employee..."
                  type="text"
                  className="flex-1 w-full border-0 text-lg outline-0"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="host-name" className="font-extrabold">
                COMPANY
              </label>
              <div className="border flex items-center gap-2 p-2">
                <span class="material-symbols-outlined">domain</span>
                <input
                  placeholder="VISTOR HQ - LONDON"
                  type="text"
                  className="flex-1 w-full border-0 text-lg outline-0"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="host-name" className="font-extrabold">
                SCHEDULE VISIT
              </label>
              <div className="border flex items-center gap-4 p-2">
                <span class="material-symbols-outlined">date_range</span>
                <input
                  type="date"
                  placeholder=""
                  className=" flex-1 text-lg w-full border-0 outline-0"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="host-name" className="font-extrabold">
                TIME
              </label>
              <div className="border flex items-center gap-4 p-2">
                <span class="material-symbols-outlined">schedule</span>
                <input
                  type="time"
                  className="flex-1 text-lg w-full border-0 outline-0"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="text-area" className="font-extrabold">PURPOSE OF VISIT</label>
            <textarea
              name="text-area"
              placeholder="Describe the intent of the meeting..."
              className="text-xl  max-h-25 px-3 py-2 min-h-25 border outline-0"
              id="text-area"
            ></textarea>
          </div>
        </div>

        <div className="flex gap-4 items-center ">
          <input type="checkbox" className="  h-7 w-7  " />
          <p className="text-sm">
            I confirm that the submitted visitor information is accurate and
            that all required access approvals have been obtained.
          </p>
        </div>

        <div className="my-4">
          <button className="border w-full py-3 bg-black text-white">
            SUBMIT REQUEST{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorPass;
