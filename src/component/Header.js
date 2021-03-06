import React from "react";
import { FaBars, FaTwitter, FaGithubSquare } from "react-icons/fa";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Header = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <h1 className="header-title">
          Toriola<span>John</span>
        </h1>
      </Link>
      <Navbar />
      <FaBars onClick={openSidebar} className="header-bars" />
      <Sidebar />
      <div className="header-socials">
        <a href="https://github.com/thechiefishere">
          <FaGithubSquare className="header-socials-git" />
        </a>
        <a href="twitter.com/JohnToriola">
          <FaTwitter className="header-socials-twitter" />
        </a>
      </div>
    </header>
  );
};

export default Header;
