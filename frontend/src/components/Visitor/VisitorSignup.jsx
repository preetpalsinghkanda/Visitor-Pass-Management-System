import React from "react";

const VisitorSignup = () => {
  return (
    <div className=" h-screen flex   justify-center items-center max-w-[90rem] mx-auto">
      <div className="max-w-150 visitor-register border border-[#0000003a]  self-center px-12 py-12 ">
        <div className="flex flex-col gap-3">
          <h3 className="text-5xl font-extrabold">Get your access pass</h3>
          <p className="font-medium text-[#000000c0] text-lg">
            Register to generate your digital credential for seamless entry into
            VISTOR secured facilities.
          </p>
        </div>

        <div className=" flex flex-col gap-3 pt-10 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullname-visitor">Full Name</label>
            <input
              type="text"
              placeholder="Billy Butcher"
              className="border  outline-0 px-4 py-3 "
            />
          </div>

          <div className="flex  gap-3 w-full items-center justify-center">
            <div className="flex flex-1 w-full flex-col gap-1">
              <label htmlFor="email-visitor">Email</label>
              <input
                type="text"
                placeholder="name@company.com"
                className="border flex-1 w-full px-4 py-3 outline-0 "
              />
            </div>

            <div className="flex gap-1 flex-1 flex-col">
              <label htmlFor="phone-visitor">Mobile Number</label>
              <input
                type="number"
                className="flex-1 w-full px-4 py-3 border outline-0"
                placeholder="1234567890"
              />
            </div>
          </div>

          <div className="flex w-full gap-3">
            {" "}
            <div className="flex flex-col gap-1">
              <label htmlFor="pass-visitor">Password</label>
              <input
                name="pass-visitor"
                type="Password"
                placeholder="******"
                className="border w-full flex-1 outline-0 px-4 py-3"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPass-visitor">Confirm Password</label>
              <input
                type="text"
                className="border w-full flex-1 outline-0 px-4 py-3 "
                placeholder="******"
              />
            </div>
          </div>

          <button className=" py-4 cursor-pointer my-4 bg-[#000000dd] text-white">
            Register to Facility
          </button>

          <div className="text-center">
            Already have a pass?{" "}
            <span className="font-extrabold cursor-pointer">Sign in here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorSignup;
