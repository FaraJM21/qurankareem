import React from "react";
import { Navigate } from "react-router-dom";

function NoPage() {
  return <Navigate to={"/"} />;
}

export default NoPage;
