import React from "react";
import "./Search.css";

import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="search-container">
      <h1 className="search-title">
        The best free stock photos, royalty free images & videos fetched by
        coding students.
      </h1>
      <div className="search-input-cont">
        <input
          type="text"
          placeholder="Search for free photos"
          className="search-input"
        ></input>
        <button className="search-bttn">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
