import React from "react";

const Success = () => {
  return (
    <div className=" max-w-[90rem] my-30 mx-auto flex gap-6 justify-around py-20">
      <div className=" w-full flex flex-col justify-center items-center border-r-3 border-l-3">
        <span className="text-[10rem] font-bold">10M+</span>
        <h4 className="text-lg font-medium">SAFE ENTRIES MANAGED</h4>
      </div>
      <div className=" w-full flex flex-col items-center justify-center border-r-3 border-l-3">
        <span className="text-[10rem] font-bold">99.9%</span>
        <h4 className="text-lg font-medium">THREAT DETECTION RATE</h4>
      </div>
      <div className=" w-full flex flex-col items-center justify-center border-r-3 border-l-3">
        <span className="text-[10rem] font-bold ">24/7</span>
        <h4 className="text-lg font-medium">GLOBAL SURVEILLANCE</h4>
      </div>
    </div>
  );
};

export default Success;
