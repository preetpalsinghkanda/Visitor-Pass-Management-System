import React from "react";
import corporateImg from "../assets/industries/corporate.webp";
import schoolImg from "../assets/industries/school.webp";
import hospitalImg from "../assets/industries/hospital.webp";
import hotelImg from "../assets/industries/hotel.webp";
import factoryImg from "../assets/industries/factory.webp";

const Industries = () => {
  return (
    <div className="max-w-[90rem]    mx-auto">
      <div className="flex flex-col gap-20">
        <div className="gap-3 flex flex-col">
          <h3 className="text-5xl font-black">
            Built for{" "}
            <span className="bg-black text-white px-3">Every Workplace</span> in
            India
          </h3>
          <p className="text-xl">
            Whether you're a startup or an enterprise, if you have visitors, we
            have the solution.
          </p>
        </div>

        <div className="grid grid-cols-5 grid-rows-1 gap-4 ">
          <div className="w-fit   flex flex-col  bg-black  py-4 px-3 gap-4">
            <div className="  px-4 flex justify-center">
              <img
                className="h-full brightness-0 invert object-fit"
                src={corporateImg}
                alt=""
              />
            </div>
            <div className=" flex gap-2 text-white justify-center flex-col text-center ">
              <h4 className="text-3xl font-extrabold">Corporate Offices</h4>
              <p className="text-lg text-[#ffffffba] ">
                Control access, impress clients, log every guest professionally.
              </p>
            </div>
          </div>

          <div className="w-fit  flex flex-col  bg-black   py-4 px-3 gap-4">
            <div className="  px-4 flex justify-center">
              <img
                className="h-full brightness-0 invert object-fit"
                src={schoolImg}
                alt=""
              />
            </div>
            <div className=" flex gap-2 text-white justify-center flex-col text-center ">
              <h4 className="text-3xl font-extrabold">Schools & Colleges</h4>
              <p className="text-lg text-[#ffffffba] ">
                Know who enters your campus. Keep students safe, always.
              </p>
            </div>
          </div>

          <div className="w-fit  justify-around  flex flex-col  bg-black py-4 px-3 gap-4">
            <div className="  px-4 flex justify-center">
              <img
                className="h-full brightness-0 invert object-fit"
                src={hospitalImg}
                alt=""
              />
            </div>
            <div className=" flex gap-3 text-white justify-center flex-col text-center ">
              <h4 className="text-3xl font-extrabold">Hospitals & Clinics</h4>
              <p className="text-lg text-[#ffffffba] ">
                Manage patient attendants, restrict ward access, ensure hygiene
                protocols.
              </p>
            </div>
          </div>

          <div className="w-fit  justify-around flex flex-col  bg-black  py-4 px-3 gap-4">
            <div className="  px-4 flex justify-center">
              <img
                className="h-full brightness-0 invert  object-fit"
                src={factoryImg}
                alt=""
              />
            </div>
            <div className=" flex gap-4 text-white justify-center flex-col text-center ">
              <h4 className="text-3xl font-extrabold">
                Factories & Warehouses
              </h4>
              <p className="text-lg text-[#ffffffba] ">
                Vendor & contractor management with safety compliance
                documentation.
              </p>
            </div>
          </div>

          <div className="w-fit justify-between flex flex-col  bg-black  py-4 px-3 gap-4">
            <div className="  px-4 flex mx-auto">
              <img
                className="h-full brightness-0 invert  object-fit"
                src={hotelImg}
                alt=""
              />
            </div>
            <div className=" flex gap-2 text-white justify-center flex-col text-center ">
              <h4 className="text-3xl font-extrabold ">
                Hotels & Residential Societies
              </h4>
              <p className="text-lg text-[#ffffffba] ">
                Manage guests, deliveries, and service staff with secure and
                seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
