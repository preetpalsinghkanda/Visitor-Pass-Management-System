import React, { useContext } from "react";
import VistorContext from "../../context/VistorContext";
import toast from "react-hot-toast";
import api from "../../services/api"

const VisitorPass = () => {
  const {
    host,
    setHost,
    company,
    setCompany,
    setVisitDate,
    visitDate,
    visitTime,
    setVisitTime,
    purpose,
    setPurpose,
    employees,
    setEmployees,
    checkBox,
    setCheckBox,
  } = useContext(VistorContext);

  const handleVisitSubmit = async () => {
    try {
      if ( !host || !company || !visitDate || !visitTime || !purpose) {
        return toast.error("ALL INPUTS ARE REQUIRED");
      }

      if (purpose.trim().length < 10) {
        return toast.error("PURPOSE SHOULD BE VALID");
      }

      if (!checkBox) {
        return toast.error("ACCEPT THE DECLARATION");
      }

      await toast.promise(
        api.post("/visits", {
          host,
          company,
          visitTime,
          purpose,
          visitDate,
        }),
        {
          loading: "SUBMITTING REQUEST...",
          success: "VISIT REQUEST CREATED",
          error: "REQUEST FAILED",
        },
      );

      setHost("");
      setCompany("");
      setVisitDate("");
      setVisitTime("");
      setPurpose("");
      setCheckBox(false);
    } catch (err) {
      console.log(err.response)
      toast.error(err.message || "SOMETHING WENT WRONG");
    }
  };

  return (
    <div className=" flex  justify-center items-center mx-auto max-w-[90rem] ">
      <div className="border px-10 py-10 max-w-[37rem] my-2 ">
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
                <select
                  className="outline-0 flex-1 text-[]"
                  name=""
                  value={host}
                  onChange={(x) => setHost(x.target.value)}
                  id=""
                >
                  <option value="">Select Employee... </option>
                  {employees.map((employee) => (
                    <option key={employee._id} value={employee._id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
                {/* <input
                  placeholder="Search employee..."
                  type="text"
                  className="flex-1 w-full border-0 text-lg outline-0"
                /> */}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label htmlFor="host-name" className="font-extrabold">
                COMPANY
              </label>
              <div className="border flex items-center gap-2 p-2">
                <span class="material-symbols-outlined">domain</span>
                <input
                  value={company}
                  onChange={(x) => setCompany(x.target.value)}
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
                  value={visitDate}
                  type="date"
                  placeholder=""
                  className=" flex-1 text-lg w-full border-0 outline-0"
                  onChange={(x) => setVisitDate(x.target.value)}
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
                  value={visitTime}
                  type="time"
                  className="flex-1 text-lg w-full border-0 outline-0"
                  onChange={(x) => setVisitTime(x.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="text-area" className="font-extrabold">
              PURPOSE OF VISIT
            </label>
            <textarea
              value={purpose}
              name="text-area"
              placeholder="Describe the intent of the meeting..."
              className="text-xl  max-h-25 px-3 py-2 min-h-25 border outline-0"
              id="text-area"
              onChange={(x) => setPurpose(x.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="flex gap-4 items-center ">
          <input
            type="checkbox"
            checked={checkBox}
            onChange={(x) => setCheckBox(x.target.checked)}
            className="  h-7 w-7  "
          />
          <p className="text-sm">
            I confirm that the submitted visitor information is accurate and
            that all required access approvals have been obtained.
          </p>
        </div>

        <div className="my-4">
          <button onClick={handleVisitSubmit} className="border cursor-pointer w-full py-3 bg-black text-white">
            SUBMIT REQUEST{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorPass;
