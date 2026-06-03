import VistorContext from "./VistorContext";
import { useState } from "react";
import { useEffect } from "react";

function VistorProvider({ children }) {
  const [heroPage, setHeroPage] = useState("Home");

  const date = new Date().toLocaleDateString();

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <VistorContext.Provider value={{ heroPage, setHeroPage, date, time }}>
      {children}
    </VistorContext.Provider>
  );
}

export default VistorProvider;
