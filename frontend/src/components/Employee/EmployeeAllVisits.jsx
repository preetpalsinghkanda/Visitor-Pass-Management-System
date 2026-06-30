import React from "react";

const EmployeeAllVisits = () => {
  return (
    <div className="max-w-[90rem] flex flex-col  mx-auto h-[97vh]">
      <h1 className="text-4xl my-4 font-extrabold text-center">All VISITS</h1>
      <div className="flex justify-between my-6">
        <button className=" cursor-pointer items-center justify-between flex gap-2 px-2">
          <span class="material-symbols-outlined">chevron_backward</span>BACK
        </button>{" "}
        <p className="bg-black text-white px-3 self-end">SEARCH - CTRL + F</p>
      </div>

<div className="flex flex-wrap gap-8  text-center justify-center items-center">
      <div className=" h-fit  flex   ">
        <div className="pt-4">
          <div className=" px-6">
            <div className="flex gap-6">
              <div className="border h-25 w-20">
                <img src="" alt="" />
              </div>

              <div>
                <h1 className="text-2xl font-bold">Jk Kul Karni</h1>
                <p className="text-center">Visitor -HQ</p>
                <button className="border my-5 w-full text-md">PURPOSE</button>
              </div>
            </div>
            <div>
              <p>lightliger2@gmail.com</p>
              <p>+91 9874563210</p>
            </div>
          </div>

          <div className="flex px-6 mt-3 justify-between bg-black text-white">
            <p className="">Fri, 29 may 2026</p>
            <p className="">/</p>
            <p>11:40 PM</p>
          </div>
        </div>

        <div className="border bg-black text-white  w-10 flex items-center justify-center">
          <span className="rotate-270 whitespace-nowrap tracking-widest">
            PENDING
          </span>
        </div>
      </div>
     </div>


    </div>
  );
};

export default EmployeeAllVisits;
