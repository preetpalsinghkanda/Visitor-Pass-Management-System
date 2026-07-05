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
import { Route, Routes, useLocation } from "react-router-dom";
import VistorContext from "./context/VistorContext";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import EmployeeAllVisits from "./components/Employee/EmployeeAllVisits";
import SecurityScannedVisit from "./components/Security/SecurityScannedVisit";

const App = () => {
  const location = useLocation();

  const {
    heroPage,
    setHeroPage,
    homeNavbar,
    visitorPage,
    setVisitorPage,
    visitorNavbar,
  } = useContext(VistorContext);

  //show Home navbar
  const showHomeNavbar =
    location.pathname === "/" || location.pathname === "/about";

  // show visitor Navbar
  const showVisitorNavbar =
    location.pathname === "/visitor/dashboard" ||
    location.pathname === "/visitor/settings" ||
    location.pathname === "/visitor/pass" ||
    location.pathname === "/visitor/visits";

  return (
    // <>
    //   <Toaster />

    //   {showHomeNavbar && (
    //     <Navbar
    //       currentPage={heroPage}
    //       setPage={setHeroPage}
    //       navbar={homeNavbar}
    //     />
    //   )}

    //   {showVisitorNavbar && (
    //     <Navbar
    //       currentPage={visitorPage}
    //       setPage={setVisitorPage}
    //       navbar={visitorNavbar}
    //     />
    //   )}

    //   <Routes>
    //     {/* home routes  */}
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //           <Hero />
    //           <Industries />
    //           <Success />
    //           <Mission />
    //           <Selfie />
    //           <Footer />
    //         </>
    //       }
    //     />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/experience" element={<Experience />} />

    //     {/* visitor routes  */}

    //     <Route
    //       path="/visitor/signup"
    //       element={
    //         <GuestRoute>
    //           <VisitorSignup />
    //         </GuestRoute>
    //       }
    //     />
    //     <Route
    //       path="/visitor/login"
    //       element={
    //         <GuestRoute>
    //           <VisitorLogin />
    //         </GuestRoute>
    //       }
    //     />
    //     <Route
    //       path="/visitor/dashboard"
    //       element={
    //         <ProtectedRoute role={"visitor"}>
    //           <VisitorDashBoard />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/visitor/settings"
    //       element={
    //         <ProtectedRoute role={"visitor"}>
    //           <VisitorSettings />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/visitor/pass"
    //       element={
    //         <ProtectedRoute role={"visitor"}>
    //           <VisitorPass />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/visitor/visits"
    //       element={
    //         <ProtectedRoute role={"visitor"}>
    //           {" "}
    //           <VisitorVisits />
    //         </ProtectedRoute>
    //       }
    //     />

    //     {/* employee routes   */}

    //     <Route
    //       path="/employee/dashboard"
    //       element={
    //         <ProtectedRoute role={"employee"}>
    //           <EmployeeDashboard />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/employee/login"
    //       element={
    //         <GuestRoute>
    //           {" "}
    //           <EmployeeLogin />{" "}
    //         </GuestRoute>
    //       }
    //     />
    //     <Route
    //       path="/employee/all-visits"
    //       element={
    //         <ProtectedRoute role={"employee"}>
    //           <EmployeeAllVisits />
    //         </ProtectedRoute>
    //       }
    //     />

    //     {/* security routes  */}
    //     <Route
    //       path="/security/dashboard"
    //       element={
    //         <ProtectedRoute role={"security"}>
    //           <SecurityDashboard />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/security/login"
    //       element={
    //         <GuestRoute>
    //           <SecurityLogin />
    //         </GuestRoute>
    //       }
    //     />

    //     {/* admin  */}

    //     <Route
    //       path="/admin/login"
    //       element={
    //         <GuestRoute>
    //           <AdminLogin />
    //         </GuestRoute>
    //       }
    //     />
    //     <Route
    //       path="/admin/dashboard"
    //       element={
    //         <ProtectedRoute role={"admin"}>
    //           {/* <AdminLogin />    should be admin dashboard */}
    //         </ProtectedRoute>
    //       }
    //     />
    //   </Routes>
    // </>
    <>
    <SecurityDashboard />
    <SecurityScannedVisit/>
    </>
  );
};

export default App;
