import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import VistorContext from "../../context/VistorContext";

const EmployeeAllVisits = () => {
  const { setTotalRequest } = useContext(VistorContext);
  const navigate = useNavigate();
  const [visits, setVisits] = useState([]);

  // const [purpose, setPurpose] = useState(false);
  const [flipCard, setFlipCard] = useState(null);

  useEffect(() => {
    const getAllVisits = async () => {
      try {
        const res = await api.get("/employee/all-visits");

        setVisits(res.data.visits);
        setTotalRequest(res.data.visits.length);
      } catch (err) {
        console.log(err.message);
      }
    };

    getAllVisits();
  }, []);

  return (
    <div className="max-w-[90rem] flex flex-col  mx-auto h-[97vh]">
      <h1 className="text-4xl my-4 font-extrabold text-center">All VISITS</h1>
      <div className="flex justify-between my-6">
        <button
          onClick={() => navigate("/employee/dashboard")}
          className=" cursor-pointer items-center justify-between flex gap-2 px-2"
        >
          <span class="material-symbols-outlined">chevron_backward</span>BACK
        </button>
        <p className="bg-black text-white px-3 self-end">SEARCH - CTRL + F</p>
      </div>

      {visits.length === 0 ? (
        <div className="flex   justify-center items-center h-full">
          <h2 className="text-4xl font-medium">
            <span className="bg-black text-white px-4">Noooo</span> visits right
            now
          </h2>
        </div>
      ) : (
        <div className="flex flex-wrap gap-8   text-center justify-center items-center">
          {visits.map((visit) =>
            flipCard === visit._id ? (
              <div
                key={visit._id}
                className="h-full flex flex-col   w-85 min-h-55.25 border"
              >
                <h5 className="font-bold bg-black text-white">PURPOSE</h5>
                <hr className="" />
                <p className=" h-full p-2 text-start">{visit.purpose}</p>

                <button
                  onClick={() => setFlipCard(null)}
                  className="px-2 py-2 text-[red] self-end text-sm cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <div key={visit._id} className=" h-fit  flex   border ">
                <div className="pt-4">
                  <div className=" px-6">
                    <div className="flex gap-6">
                      <div className="border h-25 w-20">
                        <img
                          className="h-full w-full object-cover"
                          src={visit.visitor.photo}
                          alt=""
                        />
                      </div>

                      <div>
                        <h1 className="text-2xl font-bold">
                          {visit.visitor.name}
                        </h1>
                        <p className="text-center">{visit.company}</p>
                        <button
                          onClick={() => setFlipCard(visit._id)}
                          className="border cursor-pointer my-5 w-full text-md"
                        >
                          PURPOSE
                        </button>
                      </div>
                    </div>
                    <div>
                      <p>{visit.visitor.email}</p>
                      <p>+91 {visit.visitor.phone}</p>
                    </div>
                  </div>

                  <div className="flex px-6 mt-3 justify-between bg-black text-white">
                    <p className="">
                      {new Date(visit.visitDate).toLocaleDateString("en-IN", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <p className="">/</p>
                    <p>
                      {new Date(
                        `2026-06-30T${visit.visitTime}`,
                      ).toLocaleTimeString("en-IN", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                </div>

                <div className="border bg-black text-white  w-10 flex items-center justify-center">
                  <span className="rotate-270 font-extrabold uppercase whitespace-nowrap tracking-widest">
                    {visit.status}
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeeAllVisits;
