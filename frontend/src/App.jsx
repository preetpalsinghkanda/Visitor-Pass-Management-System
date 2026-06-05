import React, { useContext } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Industries from "./components/Industries";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Success from "./components/Success";
import Selfie from "./components/Selfie";
import Experience from "./components/Experience/Experience";
import AdminLogin from "./components/Admin/AdminLogin";
import EmployeeLogin from "./components/Employee/EmployeeLogin";
import VisitorLogin from "./components/Visitor/VisitorLogin";
import SecurityLogin from "./components/Security/SecurityLogin";
import VisitorDashBoard from "./components/Visitor/VisitorDashBoard";
import VisitorPass from "./components/Visitor/VisitorPass";
import VisitorSettings from "./components/Visitor/VisitorSettings";
import VisitorVisits from "./components/Visitor/VisitorVisits";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import SecurityDashboard from "./components/Security/SecurityDashboard";
import VisitorSignup from "./components/Visitor/VisitorSignup";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import VistorContext from "./context/VistorContext";
import About from "./components/About";

const App = () => {
  const { heroPage, setHeroPage, homeNavbar } = useContext(VistorContext);
  return (
    <div className="">
      <Toaster />
      <Navbar currentPage={heroPage} setPage={setHeroPage} navbar={homeNavbar} />
      <Routes>
       
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Industries />
              <Success />
              <Mission />
              <Selfie />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="/visitor/signup" element={<VisitorSignup />} />
        <Route path="/visitor/login" element={<VisitorLogin />} />
        <Route path="/visitor/dashboard" element={<VisitorDashBoard />} />
        <Route path="/visitor/settings" element={<VisitorSettings />} />
        <Route path="/visitor/pass" element={<VisitorPass />} />

        {/* <AdminLogin/> */}
        {/* <EmployeeLogin/> */}

        {/* <VisitorLogin/> */}
        {/* <SecurityLogin/> */}

        {/* <VisitorDashBoard/> */}

        {/* <VisitorPass/ */}

        {/* <VisitorSettings/> */}

        {/* <VisitorVisits/> */}
        {/* <EmployeeDashboard/> */}

        {/* <SecurityDashboard/> */}

        {/* <VisitorSignup /> */}
      </Routes>
    </div>
  );
};

export default App;
