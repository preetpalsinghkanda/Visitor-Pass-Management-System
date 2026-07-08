import React, { useContext, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import AdminCreate from "./AdminCreate";
import AdminVisits from "./AdminVisits";
import VistorContext from "../../context/VistorContext";

const AdminDashboard = () => {
  const { handleLogout } = useContext(VistorContext);
  const [selectedBtn, setSelectedBtn] = useState("dashboard");

  const sampleData = [
    { month: "JAN", visits: 40 },
    { month: "FEB", visits: 63 },
    { month: "MAR", visits: 55 },
    { month: "APR", visits: 81 },
    { month: "MAY", visits: 95 },
    { month: "JUN", visits: 72 },
  ];

  return (
    <div className="max-w-[90rem]  mx-auto flex  px-4 py-4">
      <div className=" flex flex-col justify-center py-6  w-fit px-10 ">
        <p className="text-6xl font-extrabold">VISTRA</p>
        <ul className=" flex flex-col text-center gap-10 my-8 text-2xl w-fit font-bold ">
          <li
            onClick={() => setSelectedBtn("dashboard")}
            className={` ${selectedBtn === "dashboard" ? "bg-white border text-black" : "bg-black text-white"}  px-6 py-3 cursor-pointer`}
          >
            DASHBOARD
          </li>
          <li
            onClick={() => setSelectedBtn("create")}
            className={`${selectedBtn === "create" ? "bg-white border text-black" : "bg-black text-white "} px-6 py-3 cursor-pointer`}
          >
            CREATE
          </li>
          <li
            onClick={() => setSelectedBtn("visit")}
            className={` ${selectedBtn === "visit" ? "bg-white text-black border" : "bg-black text-white"} px-6 py-3 cursor-pointer`}
          >
            VISITS
          </li>
          <li
            onClick={() => setSelectedBtn("visitor")}
            className={` ${selectedBtn === "visitor" ? "bg-white text-black border" : "bg-black text-white"} px-6 py-3 cursor-pointer`}
          >
            VISITORS
          </li>
          <li
            onClick={() => setSelectedBtn("employee")}
            className={` ${selectedBtn === "employee" ? "bg-white text-black border" : "bg-black text-white"} px-6 py-3 cursor-pointer`}
          >
            EMPLOYEES
          </li>
          <li
            onClick={() => setSelectedBtn("security")}
            className={`${selectedBtn === "security" ? "bg-white border text-black" : "bg-black text-white"} px-6 py-3 cursor-pointer`}
          >
            SECURITIES
          </li>
          <li>
            <button onClick={handleLogout} className="text-[red] cursor-pointer">LOG OUT</button>
          </li>
        </ul>
      </div>

      <div className="border w-full flex items-center justify-center">
        {selectedBtn === "dashboard" && (
          <div className=" flex flex-col items-start w-full">
            <div className="flex w-full">
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

            <div className="w-full border  p-6 shadow mt-8">
              <h2 className="text-2xl font-bold mb-4">MONTHLY VISITS</h2>

              <LineChart width={1000} height={450} data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#000"
                  strokeWidth={3}
                />
              </LineChart>
            </div>
          </div>
        )}

        {selectedBtn === "create" && <AdminCreate />}

        {selectedBtn === "visit" && <AdminVisits />}
      </div>
    </div>
  );
};

export default AdminDashboard;
