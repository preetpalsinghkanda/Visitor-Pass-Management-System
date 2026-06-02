import React from "react";
import meetingImg from "../../assets/meeting.webp";

const VisitorVisits = () => {
  return (
    <div className="max-w-[90rem] mx-auto  flex flex-col gap-6">
      <div>
        <h3 className="text-6xl font-extrabold">My Visits</h3>
        <p className="font-medium text-2xl text-[#000000bb]">
          Manage your scheduled appointments, access digital security passes.
        </p>
      </div>

      <div className=" flex justify-between">
        <div>
          <h4 className="text-3xl font-bold">Upcoming Visits</h4>
          <div className="flex gap-6">
            <div className="">
              <div className="border  px-10 py-6  my-6">
                <div className="flex items-center gap-6 justify-between">
                  <h4 className="text-3xl">Dr. Elias Vance</h4>{" "}
                  <span className=" bg-black px-4 py-1 text-sm text-white">
                    Confirmed
                  </span>
                </div>
                <p className="text-xl">Principal Investigator, Sector 7 lab</p>

                <div className="flex justify-between my-4">
                  <div className="flex items-center  w-fit gap-4 ">
                    <span className=" material-symbols-outlined">
                      date_range
                    </span>
                    <div>
                      <span>Date</span>
                      <p>Oct 24, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center  w-fit gap-4">
                    <span class="material-symbols-outlined">schedule</span>
                    <div>
                      <span>Time</span>
                      <p>09:00 AM IST</p>
                    </div>
                  </div>
                </div>

                <div className=" my-4 flex gap-4">
                  <button className="flex justify-center gap-2 py-2 flex-1 items-center border ">
                    <span class="material-symbols-outlined">qr_code_2</span>View
                    QR Pass
                  </button>
                  <button className="flex flex-1 gap-2 justify-center items-center border ">
                    <span class="material-symbols-outlined">share</span>
                    Share
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="border  px-10 py-6  my-6">
                <div className="flex items-center gap-6 justify-between">
                  <h4 className="text-3xl">Dr. Elias Vance</h4>{" "}
                  <span className=" bg-black px-4 py-1 text-sm text-white">
                    Confirmed
                  </span>
                </div>
                <p className="text-xl">Principal Investigator, Sector 7 lab</p>

                <div className="flex justify-between my-4">
                  <div className="flex items-center  w-fit gap-4 ">
                    <span className=" material-symbols-outlined">
                      date_range
                    </span>
                    <div>
                      <span>Date</span>
                      <p>Oct 24, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center  w-fit gap-4">
                    <span class="material-symbols-outlined">schedule</span>
                    <div>
                      <span>Time</span>
                      <p>09:00 AM IST</p>
                    </div>
                  </div>
                </div>

                <div className=" my-4 flex gap-4">
                  <button className="flex justify-center gap-2 py-2 flex-1 items-center border ">
                    <span class="material-symbols-outlined">qr_code_2</span>View
                    QR Pass
                  </button>
                  <button className="flex flex-1 gap-2 justify-center items-center border ">
                    <span class="material-symbols-outlined">share</span>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-25">
          <img
            src={meetingImg}
            alt=""
            className="grayscale h-full w-full object-fit"
          />
        </div>
      </div>

      <div className="flex  flex-col">
        <h5 className="text-3xl font-bold">Visit History</h5>
        <div className=" flex flex-col">
          <table className="w-full  border-zinc-800 text-left">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="p-4">Date</th>
                <th className="p-4">Host</th>
                <th className="p-4">Company</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="p-4">29/01/2026</td>
                <td className="p-4">Billy Butcher</td>
                <td className="p-4">Vistar - London</td>

                <td className="p-4">
                  <span className="rounded-full bg-black px-3 py-1 text-xs text-white">
                    Confirmed
                  </span>
                </td>

                <td className="p-4">
                  <button className="cursor-pointer">
                    <span class="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <button className="bg-black my-6 text-white px-6 py-2 self-center">
            Load More History
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorVisits;
