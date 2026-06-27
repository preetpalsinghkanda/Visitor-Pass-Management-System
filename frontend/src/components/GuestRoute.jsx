import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../services/api";
import Loading from "./Loading";

const GuestRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/dashboard");

        setRole(res.data.user.role);

        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (isAuth) {
    switch (role) {
      case "admin":
        return <Navigate to="/admin/dashboard" />;
      case "visitor":
        return <Navigate to="/visitor/dashboard" />;
      case "employee":
        return <Navigate to="/employee/dashboard" />;
      case "security":
        return <Navigate to="/security/dashboard" />;
      default:
        return <Navigate to="/" />;
    }
  }

  return children;
};

export default GuestRoute;
