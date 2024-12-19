import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, element }) => {
  const userRole = localStorage.getItem("role");

  if (!userRole || userRole !== role) {
    return <Navigate to="/signin" replace />;
  }

  return element;
};

export default ProtectedRoute;
