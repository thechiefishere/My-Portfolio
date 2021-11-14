import React from "react";
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "../context";

const Header = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <header className="header">
      <h1 className="header-title">
        Toriola<span>John</span>
      </h1>
      <Navbar />
      <FaBars onClick={openSidebar} className="header-bars" />
      <Sidebar />
    </header>
  );
};

export default Header;
