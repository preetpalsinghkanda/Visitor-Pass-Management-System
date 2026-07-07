import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

const AdminVisits = () => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const adminAllVisits = async () => {
      try {
        const res = await api.get("/admin/all-visits");
        setVisits(res.data.visits);
      } catch (err) {
        toast.error(err.message || "UNABLE TO FETCH");
      }
    };

    adminAllVisits();
  }, []);

  return (
    <div className="border w-full">
      <div className="flex  items-center w-fit border  flex-col gap-6">
        <div className="flex gap-6">
          <div className="h-45 w-35">
            <img
              className="h-full w-full object-cover"
              // src={visit.visitor.photo}
              alt=""
            />
          </div>

          <div className="flex  flex-col gap-4">
            <div className="flex items-center gap-4">
              <label className="text-sm font-extrabold text-[#00000096]">
                NAME
              </label>
              <p className="text-3xl font-black">{}</p>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-sm text-[#00000096] font-extrabold">
                COMPANY
              </label>
              <p className="text-2xl font-black">{}</p>
            </div>

            <div className="flex items-center gap-4">
              <label className="font-extrabold text-[#00000096] text-sm">
                VISIT TIME
              </label>
              <p className="font-black text-lg">
                {new Date(`2026-01-01T${12}`).toLocaleTimeString("en-IN", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: "true",
                })}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-sm font-extrabold text-[#00000096]">
                VISIT DATE
              </label>
              <p className="uppercase font-black">
                {new Date().toLocaleDateString("en-IN", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-sm text-[#00000096] font-extrabold">
                HOST
              </label>
              <p className="font-black text-lg"></p>
            </div>
          </div>
        </div>

        <div className="border w-full">
          <h5 className="text-sm bg-black text-white text-center font-extrabold tracking-wider py-1">
            CONTACT DETAILS
          </h5>
          <div className="my-2 gap-3 flex flex-col">
            <div className="flex items-center gap-4">
              <label className="text-sm text-[#00000096] font-extrabold">
                PHONE NO
              </label>
              <p className="text-lg font-black">9876543210</p>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm text-[#00000096] font-extrabold">
                EMAIL ID
              </label>
              <p className="text-lg font-black">lightliger2@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminVisits;
