import React from "react";

const VisitorSettings = () => {
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
            <span className="text-sm">CHANGE PHOTO</span>
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
              <button className="px-6 py-2 border bg-black text-white">Save Changes</button>
            </div>

      </div>

      <div className="max-w-[35rem] border mx-auto">
        <h4>Preferences</h4>
      </div>
    </div>
  );
};

export default VisitorSettings;
