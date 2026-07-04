import React from "react";
import meetingImg from "../../assets/meeting.webp";
import { useContext, useState } from "react";
import VistorContext from "../../context/VistorContext";
import api from "../../services/api";
import { useEffect } from "react";
import toast from "react-hot-toast";
import {
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  EmailIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

const VisitorVisits = () => {
  const [myVisits, setMyVisits] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [selectedVisit, setSelectedVisit] = useState(null);

  const [selectedVisitShare, setSelectedVisitShare] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const shareUrl = selectedVisit?.qrImage;
  const qrTitle = "MY VISIT QR PASS :)";

  useEffect(() => {
    const getMyVisits = async () => {
      try {
        const res = await api.get("/visits/my");
        console.log(res.data);
        setMyVisits(res.data.visits);
      } catch (err) {
        console.log(err.message);
      }
    };

    getMyVisits();
  }, []);

  const handleQrPass = async (visitId) => {
    try {
      const res = await api.get(`/visits/pass/${visitId}`);
      setSelectedVisit(res.data.visit);
      setOpenMenu(null);
    } catch (err) {
      toast.error(err.message || "NO PASS");
    }
  };

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

          {/* <div className="flex gap-6">
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
          </div> */}
        </div>
        <div className="mr-25">
          <img
            src={meetingImg}
            alt=""
            className="grayscale h-full w-full object-fit"
          />
        </div>
      </div>

      <div className="flex   flex-col">
        <h5 className="text-3xl font-bold">Visit History</h5>
        <div className=" flex flex-col">
          <table className="w-full table-fixed  border-zinc-800 text-left">
            <thead>
              <tr className="border-b text-center border-zinc-800">
                <th className="p-4 w-1/5">Date</th>
                <th className="p-4 w-1/5">Host</th>
                <th className="p-4 w-1/5">Company</th>
                <th className="p-4 w-1/5">Status</th>
                <th className="p-4  w-1/5">Actions</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {myVisits
                .slice(0, loadMore ? myVisits.length : 1)
                .map((visit) => (
                  <tr className="border-b  border-zinc-800">
                    <td className="p-4 ">
                      {new Date(visit.visitDate).toLocaleDateString("en-IN")}
                    </td>
                    <td className="p-4">{visit.host?.name}</td>
                    <td className="p-4">{visit.company}</td>

                    <td className="p-4">
                      <span className=" bg-black tracking-widest  px-3 py-1 text-[13px] uppercase text-white">
                        {visit.status}
                      </span>
                    </td>

                    <td className="p-4 relative">
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === visit._id ? null : visit._id)
                        }
                        className="cursor-pointer"
                      >
                        <span class="material-symbols-outlined">more_vert</span>
                      </button>

                      {/* menu box  */}

                      {openMenu === visit._id && (
                        <div className="absolute -right-5 -bottom-3 flex flex-col px-5 py-5 justify-center items-center  bg-black gap-2">
                          <button
                            onClick={() => handleQrPass(visit._id)}
                            className="cursor-pointer w-full font-bold bg-white text-black"
                          >
                            VIEW QR
                          </button>

                          <button
                            onClick={async () => {
                              await handleQrPass(visit._id);
                              setSelectedVisitShare(true);
                            }}
                            className=" cursor-pointer w-full px-3 font-bold bg-white text-black"
                          >
                            SHARE QR
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* load more or less */}

          {loadMore ? (
            <button
              onClick={() => setLoadMore(false)}
              className="bg-black mt-4 cursor-pointer text-white px-6 py-2 self-center"
            >
              Show Less History
            </button>
          ) : (
            <button
              onClick={() => setLoadMore(true)}
              className="bg-black mt-4 cursor-pointer text-white px-6 py-2 self-center"
            >
              Load More History
            </button>
          )}
        </div>
      </div>

      {/* model box */}

      {selectedVisit && (
        <div className="fixed inset-0 flex-col bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="bg-white h-105">
            <div className="bg-white  w-100 px-10 py-3">
              <img
                className="h-full w-full object-fit py-4 "
                src={selectedVisit.qrImage}
                alt=""
              />
            </div>
            <p className="text-center">SHOW QR AT THE SECURITY GATE</p>
          </div>

          <button
            onClick={() => setSelectedVisit(null)}
            className="text-[white] cursor-pointer bg-black px-6 my-5"
          >
            CLOSE
          </button>
        </div>
      )}

      {selectedVisitShare && (
        <div>
          <div className="bg-white  w-50 px-10 py-3">
            <img
              className="h-full w-full object-fit py-4 "
              src={selectedVisit?.qrImage}
              alt=""
            />
          </div>

          <div className="flex gap-3 justify-center ">
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={60} round />
            </WhatsappShareButton>

            <EmailShareButton url={shareUrl}>
              <EmailIcon size={60} round />
            </EmailShareButton>

            <TelegramShareButton url={shareUrl}>
              <TelegramIcon size={60} round />
            </TelegramShareButton>

            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={60} round />
            </TwitterShareButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorVisits;
