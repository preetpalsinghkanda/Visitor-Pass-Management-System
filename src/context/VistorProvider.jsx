import VistorContext from "./VistorContext";
import { useState } from "react";

function VistorProvider({ children }) {
  const [heroPage, setHeroPage] = useState("home");

  return (
    <VistorContext.Provider value={{ heroPage, heroPage }}>
      {children}
    </VistorContext.Provider>
  );
}

export default VistorProvider;
