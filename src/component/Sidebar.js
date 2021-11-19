import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();

  return (
    <nav className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <FaTimes onClick={closeSidebar} className="sidebar-times" />
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink to="/" onClick={closeSidebar}>
            Home
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="about" onClick={closeSidebar}>
            About
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="projects" onClick={closeSidebar}>
            Projects
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="contact" onClick={closeSidebar}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
