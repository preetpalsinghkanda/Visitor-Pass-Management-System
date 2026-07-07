import React from "react";

const AdminCreate = () => {
  return (
    <div className="gap-8 flex-col flex justify-center items-center">

      <h4 className="text-black text-4xl font-bold">CREATE ACCESS ID</h4>
      

      <div className="  px-6 py-5 gap-2 flex flex-col">
        <div className="bg-white  px-6 py-5 gap-2 flex flex-col">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold">NAME</label>
          <input type="text " placeholder="Lionel Messi" className=" text-lg  outline-0 p-2" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold text-sm">EMAIL</label>
          <input type="text" placeholder="lionelmessi@gmail.com" className=" text-lg p-2 outline-0 " />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold text-sm"> PASSWORD</label>
          <input type="text" placeholder="******" className=" text-lg p-2 outline-0" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold text-sm">PHONE</label>
          <input type="text"  placeholder="9876543210" className=" text-lg p-2 outline-0" />
        </div>

        <select className="border p-2 outline-0">
          <option value="">SELECT ROLE</option>
          <option value="employee">Employee</option>
          <option value="security">Security</option>
        </select>
        </div>

         <div className="flex my-4 gap-6 justify-around">
        <button className="font-bold flex-1 cursor-pointer text-xl py-2 px-6 bg-white text-[red]">CANCEL</button>
        <button className="font-bold text-xl flex-1 py-2 px-6 bg-white text-[blue] cursor-pointer">CREATE</button>
      </div>
      </div>

     
    </div>
  );
};

export default AdminCreate;
