import React, { useContext, useState } from "react";
import axios from "axios";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import VistorContext from "../../context/VistorContext";

const VisitorSignup = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    pass,
    setPass,
    phone,
    setPhone,
    confirmPass,
    setConfirmPass,
  } = useContext(VistorContext);

  const navigate = useNavigate();



  const handleRegister = async () => {
    try {
      if (!name || !email || !phone || !pass || !confirmPass) {
        return toast.error("All inputs are required :)");
      }

      if (pass.trim() !== confirmPass.trim()) {
        return toast.error("password should match");
      }

      if (pass.trim().length < 6) {
        return toast.error("Password must have 6 characters");
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        return toast.error("Enter a valid email address");
      }

      if (phone.trim().length !== 10) {
        return toast.error("Enter a valid mobile number");
      }

      await toast.promise(
        api.post("/users/register", {
          name,
          email,
          phone,
          password: pass,
        }),
        {
          loading: "Creating Account...",
          success: "Account Created Successfully :)",
          error: "Registration Failed :(",
        },
      );

      navigate("/visitor/login");
    } catch (err) {
      console.log(err.message || "Something went wrong");
    }
  };

  return (
    <div className="  flex   justify-center items-center h-[96vh]  mx-auto">
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
              onChange={(x) => setName(x.target.value)}
              type="text"
              placeholder="Billy Butcher"
              className="border  outline-0 px-4 py-3 "
              value={name}
            />
          </div>

          <div className="flex  gap-3 w-full items-center justify-center">
            <div className="flex flex-1 w-full flex-col gap-1">
              <label htmlFor="email-visitor">Email</label>
              <input
                onChange={(x) => setEmail(x.target.value)}
                type="text"
                placeholder="name@company.com"
                className="border flex-1 w-full px-4 py-3 outline-0 "
                value={email}
              />
            </div>

            <div className="flex gap-1 flex-1 flex-col">
              <label htmlFor="phone-visitor">Mobile Number</label>
              <input
                onChange={(x) => setPhone(x.target.value)}
                type="number"
                className="flex-1 w-full px-4 py-3 border outline-0"
                placeholder="1234567890"
                value={phone}
              />
            </div>
          </div>

          <div className="flex w-full gap-3">
            {" "}
            <div className="flex flex-col gap-1">
              <label htmlFor="pass-visitor">Password</label>
              <input
                onChange={(x) => setPass(x.target.value)}
                name="pass-visitor"
                type="Password"
                placeholder="******"
                className="border w-full flex-1 outline-0 px-4 py-3"
                value={pass}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPass-visitor">Confirm Password</label>
              <input
                onChange={(x) => setConfirmPass(x.target.value)}
                type="text"
                className="border w-full flex-1 outline-0 px-4 py-3 "
                placeholder="******"
                value={confirmPass}
              />
            </div>
          </div>

          <button
            onClick={handleRegister}
            className=" py-4 cursor-pointer my-4 bg-[#000000dd] text-white"
          >
            Register to Facility
          </button>

          <button onClick={()=>navigate("/")} className="px-6 mx-auto w-fit bg-black text-white text-sm py-1 cursor-pointer">
            BACK TO HOME
          </button>

          <div className="text-center">
            Already have a pass?{" "}
            <span
              onClick={() => navigate("/visitor/login")}
              className=" font-extrabold cursor-pointer"
            >
              Sign in here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorSignup;
