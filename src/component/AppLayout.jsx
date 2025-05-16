import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import RightSidebarButtons from "../pages/RightSidebarButtons";


const AppLayout = () => {
  return (
    <div>
      
      <Navbar />
      <RightSidebarButtons />
      <div className="pt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
