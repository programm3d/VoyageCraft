import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) =>
  useAuth().currentUser ? children : <Navigate to="/login" />;

export default PrivateRoute;
