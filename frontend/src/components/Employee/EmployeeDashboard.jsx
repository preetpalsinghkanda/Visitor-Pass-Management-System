import React, { useContext } from "react";
import VistorContext from "../../context/VistorContext";

const EmployeeDashboard = () => {

  const{handleLogout} = useContext(VistorContext)

  return (
    <div className="max-w-[90rem] mx-auto border ">
      <div>
        <div className="flex justify-between items-center">
          <div className="">
            <h4 className="text-5xl font-extrabold">Security Control Hub</h4>
            <p>Here's an overview of your visitor pipeline.</p>
          </div>
          <button onClick={handleLogout} className="text-md  cursor-pointer text-red-600 flex items-center gap-3">
            Log Out
            <span class="material-symbols-outlined text-md">logout</span>
          </button>
        </div>

        <div className="grid grid-cols-4  gap-10 my-6">
          <div className="border flex flex-col justify-between px-10 gap-6 py-6">
            <div className="flex gap-5">
              <span class="material-symbols-outlined">group</span>
              <h5>TOTAL REQUEST</h5>
            </div>
            <span className=" self-end text-5xl font-bold">142</span>
          </div>

          <div className="border flex flex-col justify-between px-10 py-6">
            <div className="flex gap-5">
              <span class="material-symbols-outlined">person_check</span>
              <h5>APPROVED</h5>
            </div>
            <span className=" self-end text-5xl font-bold">142</span>
          </div>

          <div className="border flex flex-col justify-between px-10 py-6">
            <div className="flex gap-5">
              <span class="material-symbols-outlined">person_cancel</span>
              <h5>REJECTED</h5>
            </div>
            <span className=" self-end text-5xl font-bold">04</span>
          </div>

          <div className="border flex flex-col justify-between px-10 py-6">
            <div className="flex gap-5">
              <span class="material-symbols-outlined">pending_actions</span>
              <h5>PENDING</h5>
            </div>
            <span className=" self-end text-5xl font-bold">04</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h4 className="text-3xl font-bold">Action Required</h4>
            <span className="border  bg-black text-white px-6 py-1">
              02 - New request
            </span>
          </div>

          <div className="border ">
            <div className="  justify-between px-10 py-6 flex items-center">
              <div className="flex gap-6 items-center">
                <div className="h-25  w-20 overflow-hidden">
                  <img
                    className="h-full w-full object-cover "
                    src="https://i.pinimg.com/736x/b9/92/68/b992685259ab442fa2b5f746eca506e4.jpg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <h5 className="text-3xl font-extrabold">Dr. Sarah Chen</h5>
                    <span>Visitor - London</span>
                  </div>
                  <div className="flex items-center justify-center gap-8">
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined">schedule</span>
                      <span className="text-lg font-medium">11:11 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined">
                        calendar_today
                      </span>
                      <span className="text-lg font-medium">
                        Fri, May 29 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span>lightliger02@gmail.com</span>
                <span>+91 0000000000</span>
              </div>

              <div>
                <span className="border px-6 py-1 bg-[#000000a2] text-white cursor-pointer">
                  View Purpose
                </span>
              </div>

              <div className="flex flex-col ">
                <button className=" cursor-pointer bg-black text-white font-bold px-8 py-1.5">
                  APPROVE ENTRY
                </button>
                <button className=" cursor-pointer font-bold px-8 py-1.5">
                  DECLINE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
