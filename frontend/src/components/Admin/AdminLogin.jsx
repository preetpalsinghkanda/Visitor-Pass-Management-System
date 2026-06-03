import React from "react";

const AdminLogin = () => {
  return (
    <div className=" max-w-[90rem]  flex justify-center  mx-auto ">
      <div className=" flex justify-center h-fit flex-col bg-white px-12 py-10 max-w-[30rem] w-full ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-4xl font-bold">VISTRA</h2>
          <p className="text-xl">ADMIN TERMINAL ACCESS</p>
        </div>

        <div className="w-full flex flex-col  mb-8 my-3">
          <div>
            {" "}
            <label
              htmlFor="admin-mail"
              className="bg-white relative top-3 left-8"
            >
              Admin Identifier
            </label>
            <input
              type="text"
              name="admin-mail"
              className="w-full px-4 border outline-0 py-3 text-xl"
            />
          </div>
          <div>
            <label
              htmlFor="admin-pass"
              className="bg-white relative top-3 left-8"
            >
              Access Key
            </label>
            <input
              type="password"
              name="admin-pass"
              className="w-full px-4 border outline-0 py-3 text-xl"
            />
          </div>
        </div>
        <button className="border cursor-pointer bg-[#000000dd] text-white py-3 px-4 text-lg">
          INITIALIZE HANDSHAKE
        </button>

        <span className="text-[#00000077] text-end my-6">Secure Node 402</span>
      </div>
    </div>
  );
};

export default AdminLogin;
