import React from "react";
import "./Search.css";

// import { FaSearch } from "react-icons/fa";
import SearchBar from "../SearchBar";


export default function Search({ onQuery}) {
  return (
    <div className="search-container">
      <h1 className="search-title">
        The best free stock photos, royalty free images & videos fetched by
        coding students.
      </h1>
      <div className="search-input-cont">
        <SearchBar onQuery={onQuery} />
      </div>
    </div>
  );
}
