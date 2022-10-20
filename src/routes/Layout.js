import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <>
      <Header />
      <Sidebar/>
      <Outlet />
    </>
  );
}

export default Layout;
