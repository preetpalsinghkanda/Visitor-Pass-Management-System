import VistorContext from "./VistorContext";
import { useState } from "react";
import { useEffect } from "react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useRef } from "react";

function VistorProvider({ children }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [selectedImg, setSelectedImg] = useState(null);
  const fileInputRef = useRef(null);
  const [imgPreview, setImgPreview] = useState("");

  const [originaluser, setOriginalUser] = useState(null);

  const [heroPage, setHeroPage] = useState("Home");
  const [visitorPage, setVisitorPage] = useState("Dashboard");

  const date = new Date().toLocaleDateString();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [host, setHost] = useState("");
  const [company, setCompany] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const [employees, setEmployees] = useState([]);


  // getEmployees by useffect
  useEffect(() => {
    const getEmployees = async () => {
      try {
        const res = await api.get("/users/employees");
        setEmployees(res.data.employees);
      } catch (err) {
        console.log(err.message);
      }
    };

    getEmployees();
  }, []);

  //photo upload handle
  const handlePhotoUpload = async (x) => {
    const img = x.target.files[0];

    if (!img) return;

    setSelectedImg(img);

    //Preview Img

    setImgPreview(URL.createObjectURL(img));

    //Save Img of Profile

    const formData = new FormData();

    formData.append("photo", img);

    try {
      const photoRes = await api.put("/users/update-profile-photo", formData);

      setUser(photoRes.data.user);
      setOriginalUser(photoRes.data.user);

      toast.success("PROFILE PICTURE UPDATED");

      setImgPreview("");
      setSelectedImg(null);
    } catch (err) {
      toast.error(err.message || "UPLOAD FAIL");
    }
  };

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

  //handle logout for all
  const handleLogout = async () => {
    try {
      await api.post("/users/logout");

      toast.success("LOGOUT SUCCESS");

      switch (role) {
        case "visitor":
          navigate("/visitor/login");
          break;

        case "employee":
          navigate("/employee/login");
          break;

        case "admin":
          navigate("/admin/login");
          break;

        case "security":
          navigate("/security/login");
          break;

        default:
          navigate("/");
      }
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
        host,
        setHost,
        company,
        setCompany,
        visitDate,
        setVisitDate,
        purpose,
        setPurpose,
        checkBox,
        setCheckBox,
        visitTime,
        setVisitTime,
        employees,
        setEmployees,
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
        setSelectedImg,
        selectedImg,
        fileInputRef,
        imgPreview,
        email,
        handlePhotoUpload,
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
