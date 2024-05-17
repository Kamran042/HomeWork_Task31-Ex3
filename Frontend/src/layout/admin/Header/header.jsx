import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__loqo">
        <h1>Logo</h1>
      </div>
      <div className="Header__right">
        <ul>
          <li>
            <Link to="">Dashbord </Link>
          </li>
          <li>
            <Link to="add">Add Product </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
