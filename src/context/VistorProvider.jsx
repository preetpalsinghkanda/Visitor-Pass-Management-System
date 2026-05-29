import VistorContext from "./VistorContext";
import { useState } from "react";

function VistorProvider({ children }) {
  const [heroPage, setHeroPage] = useState("Home");

  return (
    <VistorContext.Provider value={{ heroPage, setHeroPage }}>
      {children}
    </VistorContext.Provider>
  );
}

export default VistorProvider;
