import VistorContext from "./VistorContext";
import { useState } from "react";
import { useEffect } from "react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function VistorProvider({ children }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [originaluser, setOriginalUser] = useState(null);

  const [heroPage, setHeroPage] = useState("Home");
  const [visitorPage, setVisitorPage] = useState("Dashboard");

  const date = new Date().toLocaleDateString();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //home Navbar
  const homeNavbar = [
    {
      name: "Home",
      path: "/",
      icon: "home",
    },
    {
      name: "",
      icon: "",
    },
    {
      name: "About",
      path: "/about",
      icon: "info",
    },
    {
      name: "",
      icon: "",
    },
  ];

  //visitor navbar

  const visitorNavbar = [
    {
      name: "Dashboard",
      path: "/visitor/dashboard",
      icon: "home",
    },
    {
      name: "Pass",
      path: "/visitor/pass",
      icon: "id_card",
    },
    {
      name: "Visits",
      path: "/visitor/visits",
      icon: "list_alt",
    },

    {
      name: "Settings",
      path: "/visitor/settings",
      icon: "settings",
    },
  ];

  //user

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  //use effects

  const currentUser = async () => {
    try {
      const res = await api.get("/dashboard");

      setUser(res.data.user);
      setOriginalUser(res.data.user);
      setRole(res.data.user.role);
    } catch (err) {
      setUser(null);
      setRole("");
    }
  };

  useEffect(() => {
    currentUser();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/users/logout");

      toast.success("LOGOUT SUCCESS");

      navigate("/visitor/login");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  const handleDiscard = () => {
    setUser({ ...originaluser });
    toast.success("DISCARD CHANGES");
  };

  return (
    <VistorContext.Provider
      value={{
        heroPage,
        setHeroPage,
        date,
        time,
        user,
        setUser,
        role,
        setRole,
        homeNavbar,
        visitorPage,
        setVisitorPage,
        visitorNavbar,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        pass,
        setPass,
        confirmPass,
        setConfirmPass,
        handleLogout,
        handleDiscard,
      }}
    >
      {children}
    </VistorContext.Provider>
  );
}

export default VistorProvider;
