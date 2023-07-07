import React, { useEffect, useState } from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import "./MenuNav.css";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(localStorage.getItem("active"));

  useEffect(() => {
    localStorage.setItem("active", activeItem);
  }, [activeItem]); // Specify isActive as the dependency

  return (
    <div className="navigation">
      <ul>
        <li>
          <Link
            to="/"
            className={`menu ${activeItem === "home" ? "active" : ""}`}
            onClick={() => setActiveItem("home")}
          >
            <Icon left>home</Icon>Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`menu ${activeItem === "about" ? "active" : ""}`}
            onClick={() => setActiveItem("about")}
          >
            <Icon left>info_outline</Icon>About
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            className={`menu ${activeItem === "news" ? "active" : ""}`}
            onClick={() => setActiveItem("news")}
          >
            <Icon left>dvr</Icon>News
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`menu ${activeItem === "contact" ? "active" : ""}`}
            onClick={() => setActiveItem("contact")}
          >
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
