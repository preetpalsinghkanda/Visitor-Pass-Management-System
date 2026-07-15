import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const iconName = [faFacebook, faInstagram, faTwitter, faEnvelope, faTelegram];

  return (
    <div className=" mt-40 mb-10 flex flex-col gap-20  max-w-[90rem] mx-auto">
      <div className="text-center flex justify-center flex-col items-center">
        <h1 className="text-7xl font-extrabold">VISTRA</h1>

        <div className=" flex gap-4 my-7">
          <Link to="/about">
            <span className="cursor-pointer hover:text-[#00000085]">
              About me
            </span>
          </Link>

          <Link></Link>

          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>FAQs</span>
          <span>Features</span>
        </div>
        <div className="flex gap-5 ">
          <section className="flex gap-3 cursor-pointer">
            {iconName.map((item) => {
              return (
                <span className="w-fit p-1 py-1.5 bg-[black]  rounded-full flex items-center justify-between">
                  <FontAwesomeIcon
                    icon={item}
                    className="text-3xl text-white"
                  />
                </span>
              );
            })}
          </section>
          <span className="flex items-center border-3 font-bold px-5 rounded-full">
            English
          </span>
        </div>
      </div>

      <p className="text-center ">
        Copyright <FontAwesomeIcon icon={faCopyright} /> Vistra, Inc.
      </p>
    </div>
  );
};

export default Footer;
