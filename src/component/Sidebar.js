import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();

  return (
    <nav className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <FaTimes onClick={closeSidebar} className="sidebar-times" />
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="about" onClick={closeSidebar}>
            About
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="projects" onClick={closeSidebar}>
            Projects
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="contact" onClick={closeSidebar}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
