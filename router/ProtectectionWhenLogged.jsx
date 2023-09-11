import React from "react";
import { Navigate } from "react-router-dom";

const ProtectionWhenLogged = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("user"));
  let role = user?.role

  if (!role) return <Navigate to={"/"} />;
  return children
};

export default ProtectionWhenLogged;