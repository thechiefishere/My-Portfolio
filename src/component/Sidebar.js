import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();

  return (
    <nav className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <FaTimes onClick={closeSidebar} className="sidebar-times" />
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="home">Home</a>
        </li>
        <li className="sidebar-list-item">
          <a href="about">About</a>
        </li>
        <li className="sidebar-list-item">
          <a href="projects">Projects</a>
        </li>
        <li className="sidebar-list-item">
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
