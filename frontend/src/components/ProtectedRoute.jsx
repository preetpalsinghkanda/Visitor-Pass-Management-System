import React from "react";
import api from "../services/api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/dashboard");

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

  if (!isAuth) {
    return <Navigate to="/visitor/login" />;
  }

  return children;
};

export default ProtectedRoute;
