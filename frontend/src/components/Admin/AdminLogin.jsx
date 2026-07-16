import React, { useContext } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import VistorContext from "../../context/VistorContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const { email, setEmail, pass, setPass } = useContext(VistorContext);

  const handleAdminLogin = async () => {
    try {
      if (!email || !pass) {
        return toast.error("BOTH INPUTS ARE REQUIRED");
      }

      await toast.promise(
        api.post("/users/login", {
          email,
          password: pass,
          role: "admin",
        }),
        {
          loading: "ACCESSING TERMINAL...",
          success: "WELCOME ADMIN",
          error: "INVALID ADMIN CRED...",
        },
      );

      navigate("/admin/dashboard");
    } catch (err) {
      console.log(err.message);
      
    }
  };

  return (
    <div className=" max-w-[90rem]  shadow-2xl w-fit flex justify-center  mx-auto ">
      <div className=" flex justify-center h-fit flex-col bg-white px-12 py-10 max-w-[30rem] w-full ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-4xl font-bold">VISTRA</h2>
          <p className="text-xl">ADMIN TERMINAL ACCESS</p>
        </div>

        <div className="w-full flex flex-col  mb-8 my-3">
          <div>
            <label
              htmlFor="admin-mail"
              className="bg-white relative top-3 left-8"
            >
              Admin Identifier
            </label>
            <input
            placeholder="admin@gmail.com"
              onChange={(x) => setEmail(x.target.value)}
              value={email}
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
            placeholder="******"
              value={pass}
              onChange={(x) => setPass(x.target.value)}
              type="password"
              name="admin-pass"
              className="w-full px-4 border outline-0 py-3 text-xl"
            />
          </div>
        </div>
        <button
          onClick={handleAdminLogin}
          className="border cursor-pointer bg-[#000000dd] text-white py-3 px-4 text-lg"
        >
          INITIALIZE HANDSHAKE
        </button>

        <button onClick={()=> navigate("/")} className="text-white bg-black w-fit  mx-auto my-2 px-6 py-1 text-sm cursor-pointer">BACK TO HOME</button>

        <span className="text-[#00000077] text-end my-6">Secure Node 402</span>
      </div>
    </div>
  );
};

export default AdminLogin;
