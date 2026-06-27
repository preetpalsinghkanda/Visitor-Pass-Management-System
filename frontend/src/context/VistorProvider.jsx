import VistorContext from "./VistorContext";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function VistorProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      }}
    >
      {children}
    </VistorContext.Provider>
  );
}

export default VistorProvider;
