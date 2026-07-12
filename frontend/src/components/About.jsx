import React from "react";

const About = () => {
  return (
    <div className="border max-w-[90rem] mx-auto">
      <div className="text-center max ">
        <h1 className="text-4xl font-bold bg-black text-white py-2">
          SMART VISITOR MANAGEMENT SYSTEM
        </h1>
      </div>

      <div className="flex flex-col">
        <div className="w-fit border pr-180">
          <h4 className="text-7xl font-extrabold uppercase">About </h4>
          <p className="text-2xl ">
            VISTRA is a digital solution designed to simplify visitor
            management. It helps organizations track visitor entries, manage
            approvals, enhance security, and maintain accurate records in one
            centralized platform.
          </p>
        </div>
      </div>



      {/* why  */}
      <div>
        <div className="text-center mx-auto">
          <h2 className="text-4xl font-bold bg-black text-white py-2">
            WHY CHOOSE VISTRA?
          </h2>
        </div>

        <div className="border  flex flex-col gap-6">
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


    </div>
  );
};

export default About;
