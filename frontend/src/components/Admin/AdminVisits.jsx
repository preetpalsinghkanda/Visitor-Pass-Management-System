import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import AdminUnderConstruction from "./AdminUnderConstruction";

const AdminVisits = () => {
  const [visits, setVisits] = useState([]);

  const handleDeleteVisit = async (id) => {
    try {
      const res = await api.delete(`/admin/visit/${id}`);
      toast.success(res.data.message);

      setVisits((previous) => previous.filter((visit) => visit._id !== id));
    } catch (err) {
      toast.error(err.message || "DELETE FAIL");
    }
  };

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
    <div className="w-full  flex">
      {visits.length === 0 ? (
        <img
          className="w-full"
          alt=""
          class="iFOUS5"
          draggable="true"
          fetchpriority="high"
          loading="auto"
          elementtiming="closeup-image-main-MainPinImage"
          src="https://i.pinimg.com/originals/94/65/aa/9465aa857fcc2e525e748c1dfece7aaa.gif"
        />
      ) : (
        <div className="w-full h-fit grid grid-cols-2 max-h-[95.8vh] overflow-y-auto">
          {visits.map((visit) => (
            <div
              key={visit._id}
              className="flex  items-center  justify-between   mx-auto mb-6 flex-col gap-6"
            >
              <div className="flex py-2 w-full  justify-around gap-6 px-2 ">
                <div className="h-45 w-35 ">
                  <img
                    className="h-full w-full object-cover"
                    src={visit.visitor.photo}
                    alt=""
                  />
                </div>

                <div className="-rotate-90 relative h-fit left-0 top-20 ">
                  <p className="tracking-widest font-extrabold uppercase">
                    {visit.status}
                  </p>
                </div>

                <div className="flex  flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <label className="text-sm  font-extrabold text-[#00000096]">
                      NAME
                    </label>
                    <p className="text-3xl whitespace-nowrap font-black">
                      {visit.visitor.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="text-sm text-[#00000096] font-extrabold">
                      COMPANY
                    </label>
                    <p className="text-2xl font-black">{visit.company}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="font-extrabold text-[#00000096] text-sm">
                      VISIT TIME
                    </label>
                    <p className="font-black uppercase text-lg">
                      {new Date(
                        `2026-01-01T${visit.visitTime}`,
                      ).toLocaleTimeString("en-IN", {
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
                      {new Date(visit.visitDate).toLocaleDateString("en-IN", {
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
                    <p className="font-black text-lg">{visit.host.name}</p>
                  </div>
                </div>
              </div>

              <div className="border w-full ">
                <h5 className="text-sm bg-black text-white text-center font-extrabold tracking-wider py-1">
                  CONTACT DETAILS
                </h5>
                <div className="my-2 gap-3 flex px-2 flex-col">
                  <div className="flex items-center gap-4">
                    <label className="text-sm text-[#00000096] font-extrabold">
                      PHONE NO
                    </label>
                    <p className="text-lg font-black">{visit.visitor.phone}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="text-sm text-[#00000096] font-extrabold">
                      EMAIL ID
                    </label>
                    <p className="text-lg font-black">{visit.visitor.email}</p>
                  </div>
                </div>
              </div>

              <div className="border w-full flex justify-around text-xl font-bold">
                <button
                  onClick={() => handleDeleteVisit(visit._id)}
                  className="text-[#e32a2ae6] cursor-pointer "
                >
                  DELETE
                </button>
                {/* <button className="text-[#23d423e4] cursor-pointer">APPROVE</button>
            <button className="text-[#0606b6cb] cursor-pointer">REJECT</button> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminVisits;
