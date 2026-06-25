import React from "react";

const About = () => {
  return (
    <div className="border max-w-[90rem] mx-auto">
      <div className="flex flex-col">
        <div className="w-fit border pr-180">
          <h4 className="text-7xl font-extrabold">About </h4>
          <p className="text-xl ">
            VISTRA is a digital solution designed to simplify visitor
            management. It helps organizations track visitor entries, manage
            approvals, enhance security, and maintain accurate records in one
            centralized platform.
          </p>
        </div>

        <div className="self-end">
          <h4 className="text-5xl font-bold">How it works </h4>
          <ol>
            <li>Visitor submit a visit request.</li>
            <li>Employee reviews and approves/rejects the request.</li>
            <li>Security verifies the approved pass at the gate.</li>
            <li>Admin monitors all activities and generates reports.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
