import React from "react";
import "./Header.css";
import Search from "../search/Search";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

export default function Header({ onQuery }) {
  return (
    <div className="header-container">
      <div className="header-navbar">
        <img src={logo} className="header-logo"></img>
        <button className="header-button">Random</button>
      </div>
      <p className="header-author">Photo by Karolina Grabowska</p>
      <Search onQuery={onQuery} />

    </div>
  );
}
