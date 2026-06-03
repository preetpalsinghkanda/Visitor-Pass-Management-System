import React, { useState } from "react";

const VisitorSettings = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="max-w-[90rem] mx-auto border justify-center flex-col flex items-start h-screen">
      <div className="max-w-[35rem] p-10 border mx-auto  flex flex-col gap-6">
        <div>
          <h3 className="text-5xl font-extrabold">Settings</h3>
          <p className="text-lg font-medium">
            Manage your profile and preferences.
          </p>
        </div>

        <div className=" flex flex-row items-start gap-8">
          <div className="flex justify-center items-center  flex-col gap-2">
            <div className="w-30 h-auto overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-fit"
                src="https://i.redd.it/t19z8g31axra1.jpg"
                alt=""
              />
            </div>
            <span className="text-sm cursor-pointer">CHANGE PHOTO</span>
          </div>
          <div>
            <h5 className="text-2xl font-bold">Profile Identity</h5>
            <hr className="my-3 border-[#0000003f]" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="visitor-full-name"
                  className="text-sm font-bold"
                >
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="border px-3 py-2 outline-0"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="visitor-display-name"
                  className="text-sm font-bold"
                >
                  DISPLAY NAME
                </label>
                <input type="text" className="border px-3 py-2 outline-0" />
              </div>

              <div className="flex gap-4 flex-row text-sm font-bold">
                Role :<span className="text-md font-medium">VISITOR</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-around">
          <button className="px-6 py-2 border">Discard Changes</button>
          <button className="px-6 py-2 border bg-black text-white">
            Save Changes
          </button>
        </div>
      </div>

      <div className="max-w-[32.5rem] py-6 border mx-auto w-full my-5 px-10">
        <h4 className=" text-xl font-bold">Preferences</h4>

        <div className="my-3 flex justify-between ">
          <div>
            <h5 className="text-md">Visit Notifications</h5>
            <p className="text-sm text-[#000000b5]">
              Get notified when your visit is approved or rejected
            </p>
          </div>
          <div class="relative inline-block w-11 h-5">
            <input
              checked
              id="switch-component"
              type="checkbox"
              checked={isChecked}
              onClick={() => {
                setIsChecked(!isChecked);
              }}
              class="peer appearance-none   w-11 h-5 bg-slate-100 rounded-full checked:bg-black cursor-pointer transition-colors duration-300"
            />
            <label
              for="switch-component"
              class={`absolute top-0 left-0 w-5 h-5 ${isChecked ? "bg-white" : "bg-black"}  rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer`}
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorSettings;
