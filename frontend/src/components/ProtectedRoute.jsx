import React from "react";
import api from "../services/api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children , role }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [userRole , setUserRole] = useState("")

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res =  await api.get("/dashboard");

        setUserRole(res.data.user.role)

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

  if(userRole !== role){
    return <Navigate to="/" />
  }

  return children;
};

export default ProtectedRoute;
