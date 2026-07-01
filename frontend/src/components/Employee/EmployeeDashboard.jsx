import React, { useContext } from "react";
import { useState } from "react";
import VistorContext from "../../context/VistorContext";
import { useEffect } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(VistorContext);
  const [purposeModel, setPurposeModel] = useState(null);

  const [visits, setVisits] = useState([]);

  const [request, setRequest] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  // useEffect

  useEffect(() => {
    getRequest();
    handleEmployeePendingVisits();
  }, []);

  // const FormateDate = ;

  const getRequest = async () => {
    try {
      const res = await api.get("/employee/request");

      setRequest(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleEmployeePendingVisits = async () => {
    try {
      const res = await api.get("/employee/visits/pending");
      setVisits(res.data.visits);
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  const handleApproveVisit = async (id) => {
    try {
      await api.put(`/employee/approve/${id}`);

      toast.success("VISIT APPROVED");

      await handleEmployeePendingVisits();
      await getRequest();
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  const handleRejectVisit = async (id) => {
    try {
      await api.put(`/employee/reject/${id}`);

      toast.success("VISIT REJECTED");
      await handleEmployeePendingVisits();
      await getRequest();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-[90rem] mx-auto  my-3">
      <div>
        <div className="flex justify-between items-center">
          <div className="">
            <h4 className="text-5xl font-extrabold">Security Control Hub</h4>
            <p>Here's an overview of your visitor pipeline.</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-md  cursor-pointer text-red-600 flex items-center gap-3"
          >
            Log Out
            <span className="material-symbols-outlined text-md">logout</span>
          </button>
        </div>

        <div className="grid grid-cols-4  gap-10 my-6">
          <div className="border flex flex-col justify-between px-10 gap-6 py-6">
            <div className="flex gap-5">
              <span className="material-symbols-outlined">group</span>
              <h5>TOTAL REQUEST</h5>
            </div>
            <span className=" self-end text-5xl font-bold">
              {String(request.total).padStart(2, "0")}
            </span>
          </div>

          <div className="border flex flex-col justify-between px-10 py-6">
            <div className="flex gap-5">
              <span className="material-symbols-outlined">person_check</span>
              <h5>APPROVED</h5>
            </div>
            <span className=" self-end text-5xl font-bold">
              {String(request.approved).padStart(2, "0")}
            </span>
          </div>

          <div className="border flex flex-col justify-between px-10 py-6">
            <div className="flex gap-5">
              <span className="material-symbols-outlined">person_cancel</span>
              <h5>REJECTED</h5>
            </div>
            <span className=" self-end text-5xl font-bold">
              {String(request.rejected).padStart(2, "0")}
            </span>
          </div>

          <div className="border flex flex-col justify-between px-10 py-6">
            <div className="flex gap-5">
              <span className="material-symbols-outlined">pending_actions</span>
              <h5>PENDING</h5>
            </div>
            <span className=" self-end text-5xl font-bold">
              {String(request.pending).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6  ">
          <div className="flex justify-between items-center">
            <h4 className="text-3xl font-bold">Action Required</h4>
            <span className="border  bg-black text-white px-6 py-1">
              {String(request.pending).padStart(2, "0")} - New request
            </span>
          </div>

          <div className=" flex flex-col gap-2    ">
            {visits.map((visit) => (
              <div className=" border  justify-between px-10 py-6 flex items-center">
                <div className="flex gap-6 items-center">
                  <div className="h-25  w-20 overflow-hidden">
                    <img
                      className="h-full w-full object-cover "
                      src={visit.visitor.photo}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div>
                      <h5 className="text-3xl font-extrabold">
                        {visit.visitor.name}
                      </h5>
                      <span>{visit.company}</span>
                    </div>
                    <div className="flex items-center justify-center gap-8">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          schedule
                        </span>
                        <span className="text-lg font-medium">
                          {new Date(
                            `2026-06-29T${visit.visitTime}`,
                          ).toLocaleTimeString("en-IN", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: "true",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          calendar_today
                        </span>
                        <span className="text-lg font-medium">
                          {new Date(visit.visitDate).toLocaleDateString(
                            "en-IN",
                            {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span>{visit.visitor.email}</span>
                  <span>+91 {visit.visitor.phone}</span>
                </div>

                <div>
                  <span
                    onClick={() => setPurposeModel(visit)}
                    className="border px-6 py-1 bg-[#000000a2] text-white cursor-pointer"
                  >
                    View Purpose
                  </span>
                </div>

                <div className="flex flex-col ">
                  <button
                    onClick={() => handleApproveVisit(visit._id)}
                    className=" cursor-pointer bg-black text-white font-bold px-8 py-1.5"
                  >
                    APPROVE ENTRY
                  </button>
                  <button
                    onClick={() => handleRejectVisit(visit._id)}
                    className=" cursor-pointer font-bold px-8 py-1.5"
                  >
                    DECLINE
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => navigate("/employee/all-visits")}
              className="border items-center flex gap-2 cursor-pointer w-fit self-center px-6 bg-black text-white py-1"
            >
              VIEW ALL VISITS{" "}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                east
              </span>
            </button>
          </div>
        </div>
      </div>

      {purposeModel && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="bg-white gap-4 flex flex-col  p-6  w-130 h-80 shadow-lg">
            <div className="flex justify-between">
              <span>PURPOSE</span>
              <button
                onClick={() => setPurposeModel(null)}
                className="cursor-pointer self-end text-white bg-black px-2"
              >
                Close
              </button>
            </div>

            <div className="border bg-black text-white h-full px-2 py-4 ">
              <p>{purposeModel.purpose}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
