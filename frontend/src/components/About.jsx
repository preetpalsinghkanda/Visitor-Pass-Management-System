import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className=" max-w-[90rem] mx-auto">
      <div className="text-center max ">
        <h1 className="text-4xl font-bold bg-black text-white py-2">
          SMART VISITOR MANAGEMENT SYSTEM
        </h1>
      </div>

      <div className="flex flex-col w-full  ">
        <div className=" my-8  flex w-full justify-around items-center ">
          <h4 className="text-7xl font-extrabold uppercase">About </h4>
          <p className="text-2xl  max-w-2xl">
            VISTRA is a digital solution designed to simplify visitor
            management. It helps organizations track visitor entries, manage
            approvals, enhance security, and maintain accurate records in one
            centralized platform.
          </p>
        </div>
      </div>

      <div>
        <div className="text-center mx-auto ">
          <h2 className="uppercase font-bold bg-black text-white text-4xl ">
            How it works
          </h2>
        </div>

        <div className=" flex flex-col py-10 gap-10 max-w-200 mx-auto">
          <div className="flex self-start flex-col gap-2 ">
            <div className="flex flex-row gap-4 items-center ">
              <div className="w-18 h-18 rounded-full bg-black">
                <div className=" w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center ">
                  <span className="text-3xl font-extrabold text-black">1</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold">VISITOR</h4>
            </div>
            <p className="text-3xl font-bold">
              Submit a <span className="bg-black text-white px-3">visit</span>{" "}
              request.
            </p>
            <p className="text-xl max-w-120">
              Create a visitor request by selecting the employee, purpose, and
              preferred visit date and time.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-row-reverse gap-4 items-center ">
              <div className="w-18 h-18 rounded-full bg-black">
                <div className=" w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center ">
                  <span className="text-3xl font-extrabold text-black">2</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold uppercase">Employee</h4>
            </div>
            <p className="text-3xl font-bold">
              Review <span className="bg-black text-white px-3">&</span>{" "}
              Approve{" "}
            </p>
            <p className="text-xl max-w-120 text-end">
              Review the visitor request and approve or reject it based on the
              visit details.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 items-center ">
              <div className="w-18 h-18 rounded-full bg-black">
                <div className=" w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center ">
                  <span className="text-3xl font-extrabold text-black">3</span>
                </div>
              </div>
              <h4 className="text-2xl uppercase font-bold">Security</h4>
            </div>
            <p className="text-3xl font-bold flex gap-2">
              {" "}
              <span className="bg-black text-white px-3">Verify</span>Visitor
            </p>
            <p className="text-xl max-w-120">
              Verify the approved visitor using the visitor pass or QR code
              before granting entry.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-row-reverse gap-4 items-center ">
              <div className="w-18 h-18 rounded-full bg-black">
                <div className=" w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center ">
                  <span className="text-3xl font-extrabold text-black">4</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold">Check-In</h4>
            </div>
            <p className="text-3xl font-bold flex gap-2">
              Record<span className="bg-black text-white px-3">Entry</span>
            </p>
            <p className="text-xl max-w-120 text-end">
              Check the visitor into the system and automatically record the
              entry time.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 items-center ">
              <div className="w-18 h-18 rounded-full bg-black">
                <div className=" w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center ">
                  <span className="text-3xl font-extrabold text-black">5</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold">Check-Out</h4>
            </div>
            <p className="text-3xl font-bold flex gap-2">
              Record<span className="bg-black text-white px-3">Exit</span>
            </p>
            <p className="text-xl max-w-120">
              Record the visitor's exit time and complete the visit history.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-center mx-auto w-full">
          <h2 className="text-4xl font-bold bg-black text-white py-2 ">
            OUR MISSION
          </h2>
        </div>

        <p className="text-center mx-auto mt-12 mb-8 font-extrabold text-6xl">
          Securing the modern workplace.
        </p>
        <p className="text-2xl my-6 mx-auto text-center max-w-3xl">
          We bridge the gap between upcompromising security and seamless
          hospitality. SecurePass redefines how enterprise environments manage
          access through intelligent, invisible technology
        </p>
      </div>

      {/* why  */}
      <div>
        <div className="text-center mx-auto">
          <h2 className="text-4xl font-bold bg-black text-white py-2">
            WHY CHOOSE VISTRA?
          </h2>
        </div>

        <div className="  flex flex-col gap-6">
          <div className="flex items-center justify-around">
            <ul className="text-3xl font-medium self-start gap-3  list-disc pl-10 py-3 flex flex-col">
              <li>Digital visitor registration</li>
              <li>Fast approval process</li>
              <li>Secure and safest opetion ever</li>
              <li>Role based access control</li>
            </ul>

            <p className="text-7xl font-extrabold">KEY FEATURES</p>
          </div>

          <div className="flex flex-row-reverse justify-around items-center">
            <ul className="text-3xl font-medium self-end  gap-3 py-3  text-left list-disc flex flex-col ">
              <li>Real time visitor tracking</li>
              <li>Complete visit history</li>
              <li>Powerful admin DASHBOARD</li>
              <li>Eco Friendly solution (Fully Online (Paper less))</li>
            </ul>
            <p className="text-7xl font-extrabold"> BENEFITS</p>
          </div>
        </div>
      </div>

      <div className="bg-black flex flex-col text-white py-20 my-10">
        <p className="text-center font-extrabold mx-auto text-5xl">
          Join the future of facility access.
        </p>
        <p className="text-2xl text-center my-10 max-w-180 mx-auto">
          Scale your security operations with the industry standard for visitor
          management. Request a personal walkthrough of the SecurePass
          ecosystem.
        </p>

        <button
          onClick={() => navigate("/experience")}
          className="bg-white uppercase cursor-pointer text-black font-extrabold px-6 text-2xl mx-auto self-center"
        >
          experience
        </button>
      </div>
    </div>
  );
};

export default About;
