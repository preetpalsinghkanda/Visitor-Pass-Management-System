import React, { useContext, useState } from "react";
import VistorContext from "../../context/VistorContext";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const VisitorSettings = () => {
  const { handleLogout } = useContext(VistorContext);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const {
    user,
    setUser,
    name,
    phone,
    setPhone,
    handleDiscard,
    setOriginalUser,
    fileInputRef,
    handlePhotoUpload,
    imgPreview,
  } = useContext(VistorContext);

  const handleUpdateProfile = async () => {
    try {
      if (user.name.trim().length < 3) {
        return toast.error("NAME SHOULD BE VALID");
      }

      if (!/^\d{10}$/.test(user.phone)) {
        return toast.error("ENTER VALID PHONE NO");
      }

      const response = await toast.promise(
        api.put("/users/update", {
          name: user.name,
          phone: user.phone,
        }),

        {
          loading: "SAVING..",
          success: "PROFILE UPDATED",
          error: "UPDATE FAIL :(",
        },
      );

      setUser(response.data.user);
      setOriginalUser(response.data.user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="max-w-[90rem] mx-auto  justify-center flex-col flex items-start ">
      <div className="max-w-[35rem] px-10 py-7 my-2 border mx-auto  flex flex-col gap-6">
        <div>
          <h3 className="text-5xl font-extrabold">Settings</h3>
          <p className="text-lg font-medium">
            Manage your profile and preferences.
          </p>
        </div>

        <div className=" flex flex-row items-start gap-8">
          <div className="flex justify-center items-center  flex-col gap-2">
            <div className="w-30 h-34 border  overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={imgPreview ? imgPreview : user?.photo}
                alt=""
              />
              <input
                className="w-full h-full object-cover"
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                hidden
                accept="image/*"
              />
            </div>
            <span
              onClick={() => fileInputRef.current.click()}
              className="text-[10px] rounded-full px-1.5 border-r border-l cursor-pointer"
            >
              CHANGE PHOTO
            </span>
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
                  onChange={(x) => {
                    setUser({ ...user, name: x.target.value });
                  }}
                  value={user?.name}
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
                  PHONE NUMBER
                </label>
                <input
                  onChange={(x) => {
                    setUser({
                      ...user,
                      phone: x.target.value,
                    });
                  }}
                  value={user?.phone}
                  type="text"
                  className="border px-3 py-2 outline-0"
                />
              </div>

              <div className="flex gap-4 flex-row text-sm font-bold">
                Role :
                <span className="text-md uppercase font-medium">
                  {user?.role}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-around">
          <button
            onClick={handleDiscard}
            className="px-6 py-2 cursor-pointer border"
          >
            Discard Changes
          </button>
          <button
            onClick={handleUpdateProfile}
            className="px-6 py-2 cursor-pointer border bg-black text-white"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="max-w-[32.5rem] py-6 border mx-auto w-full my-4 px-10">
        <h4 className=" text-xl font-bold">Preferences</h4>

        <div className="my-3 flex justify-between ">
          <div>
            <h5 className="text-md">Visit Notifications</h5>
            <p className="text-sm text-[#000000b5]">
              Get notified when your visit is approved or rejected
            </p>
          </div>
          <div className="relative inline-block w-11 h-5">
            <input
              checked
              id="switch-component"
              type="checkbox"
              checked={isChecked}
              onClick={() => {
                setIsChecked(!isChecked);
              }}
              className="peer appearance-none   w-11 h-5 bg-slate-100 rounded-full checked:bg-black cursor-pointer transition-colors duration-300"
            />
            <label
              for="switch-component"
              className={`absolute top-0 left-0  w-5 h-5 ${isChecked ? "bg-white  " : "bg-black"}  rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer`}
            ></label>
          </div>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="text-sm mx-auto cursor-pointer flex font-extrabold items-center gap-2 py-2 bg-black px-6 text-white"
      >
        LOGOUT{" "}
        <span style={{ fontSize: "16px" }} class="material-symbols-outlined">
          logout
        </span>
      </button>
    </div>
  );
};

export default VisitorSettings;
