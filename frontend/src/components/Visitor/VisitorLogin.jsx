import React from "react";
import idcardImg1 from "../../assets/idcard1.webp";
import idcardImg2 from "../../assets/idcard2.webp";
import idcardImg3 from "../../assets/idcard3.webp";

const VisitorLogin = () => {
  return (
    <div className=" mx-auto max-w-[90rem] flex items-center justify-between h-screen">
      <div className=" max-w-[35rem] px-15 py-15">
        <div className="flex flex-col gap-4  ">
          <h3 className="text-6xl font-extrabold">Welcome back.</h3>
          <p className="font-bold text-[]">
            Access your digital credential for seamless entry into VISTOR
            secured facilities.
          </p>
        </div>

        <div className=" flex flex-col gap-3 pt-10 ">
          <div className="flex flex-col">
            <label htmlFor="email-visitor">Email</label>
            <input type="text" placeholder="name@company.com" className="border px-4 py-3 outline-0 " />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pass-visitor">Password</label>
            <input type="Password" placeholder="******" className="border outline-0 px-4 py-3" />
          </div>
          <button className=" py-4 my-4 bg-[#000000dd] text-white">
            Sign in to Facility
          </button>

          <div className="text-center">
            New visitor ?{" "}
            <span className="font-extrabold">Signup for an access pass </span>
          </div>
        </div>
      </div>

      <div className=" self-start mr-30 flex">
        <img
          src={idcardImg1}
          className=" relative bottom-20 "
          alt=""
        />
        <img src={idcardImg2} className="relative bottom-30" alt="" />
        <img src={idcardImg3} alt="" />
      </div>
    </div>
  );
};

export default VisitorLogin;
