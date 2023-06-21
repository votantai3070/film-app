import React from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import "./MenuNav.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">
            <Icon left>home</Icon>Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Icon left>info_outline</Icon>About
          </Link>
        </li>
        <li>
          <Link to="/news">
            <Icon left>dvr</Icon>News
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
