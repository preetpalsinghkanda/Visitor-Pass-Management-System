import React from "react";

const AdminDashboard = () => {
  return (
    <div className="max-w-[90rem]  mx-auto flex  px-4 py-4">
      <div className=" flex flex-col justify-center  w-fit px-10 ">
        <p className="text-6xl font-extrabold">VISTRA</p>
        <ul className=" flex flex-col text-center gap-10 my-8 text-2xl w-fit font-bold ">
          <li className="bg-black text-white px-6 py-3 cursor-pointer">
            DASHBOARD
          </li>
          <li className="bg-black text-white px-6 py-3 cursor-pointer">
            VISITS
          </li>
          <li className="bg-black text-white px-6 py-3 cursor-pointer">
            VISITORS
          </li>
          <li className="bg-black text-white px-6 py-3 cursor-pointer">
            EMPLOYEES
          </li>
          <li className="bg-black text-white px-6 py-3 cursor-pointer">
            SECURITIES
          </li>
        </ul>
      </div>

      <div className="border flex items-start w-full">
        <div className="border flex flex-col gap-4 flex-1 w-fit px-6 py-2">
          <span className="flex gap-20 text-7xl font-extrabold justify-between">
            20
            <span class="material-symbols-outlined">call_made</span>
          </span>
          <p className="text-lg font-bold text-end">ALL VISITS</p>
        </div>
        <div className="border flex flex-col gap-4 flex-1 w-fit px-6 py-2">
          <span className="flex gap-20 text-7xl font-extrabold justify-between">
            20
            <span class="material-symbols-outlined">call_made</span>
          </span>
          <p className="text-lg font-bold text-end">ALL VISITS</p>
        </div>
        <div className="border flex flex-col gap-4 flex-1 w-fit px-6 py-2">
          <span className="flex gap-20 text-7xl font-extrabold justify-between">
            20
            <span class="material-symbols-outlined">call_made</span>
          </span>
          <p className="text-lg font-bold text-end">ALL VISITS</p>
        </div>
        <div className="border flex-1 w-fit gap-4 flex flex-col px-6 py-2">
          <span className="flex gap-20 text-7xl font-extrabold justify-between">
            20
            <span class="material-symbols-outlined">call_made</span>
          </span>
          <p className="text-lg font-bold text-end">ALL VISITS</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
