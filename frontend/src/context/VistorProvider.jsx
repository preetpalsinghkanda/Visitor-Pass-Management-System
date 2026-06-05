import VistorContext from "./VistorContext";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function VistorProvider({ children }) {
  const [heroPage, setHeroPage] = useState("Home");
  const date = new Date().toLocaleDateString();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

//home Navbar
    const homeNavbar = [
    {
      name: "Home",
      path : "/",
      icon: "home",
    },
    {
      name: "",
      icon: "",
    },
    {
      name: "About",
      path : "/about",
      icon: "info",
    },
    {
      name: "",
      icon: "",
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

    return ()=> clearInterval(interval)
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
      }}
    >
      {children}
    </VistorContext.Provider>
  );
}

export default VistorProvider;
