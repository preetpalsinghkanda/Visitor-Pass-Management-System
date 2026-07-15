import React from "react";
import girlImg from "../assets/girlImg.png";

const Contact = () => {
  return (
    <div className=" max-w-[90rem]  flex items-center-safe h-[96vh] w-full mx-auto">
      <div className="flex  gap-18 w-full ">
        <img className="h-120" src={girlImg} alt="" />
        <div className=" flex flex-col gap-5 justify-center">
          <div className="flex flex-col gap-5 justify-center">
            <h5 className="text-6xl font-medium">Say Hello!</h5>
            <p className="text-xl pr-14">
              I would love to hear from you! If you'd like to suggest a new
              feature, request something to be added, or want to share any
              feedback, please don't hesitate to get in touch. Your ideas and
              suggestions are always welcome and help make the experience even
              better.
            </p>
          </div>
          <a href="mailto:preetpalsinghkanda@gmail.com">
            <button className="border cursor-pointer w-fit px-12 text-2xl py-1 rounded-full">
              Say Hey!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
