import React, { useState } from "react";
import "./assets/css/Navbar.css";
import logo from "./assets/logo/logo.jpg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState("");

  const toggleMenu = () => {
    if (isOpen === "open") {
      setIsOpen("");
    } else {
      setIsOpen("open");
    }
    
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={isOpen}>
          <li>
            <HashLink to="/#1">
              <a href="#1">Home</a>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#2">
              <a href="#2">About</a>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#3">
              <a href="#3">Features</a>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#5">
              <a href="#5">FAQ</a>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#6">
              <a href="#6">Contact</a>
            </HashLink>
          </li>
          <li>
            <div className="checkbox" onClick={props.lightmode}>
              <input type="checkbox" />
              <span>DARK MODE</span>
            </div>
          </li>
        </ul>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`hamburger-menu ${isOpen}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
