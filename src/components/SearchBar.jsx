import React, { useRef, useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";


export default function SearchBar({ onQuery }) {
  const [autoSearch,setAutoSearch]=useState()
  const [incompleteWord,setIncompleteWord]=useState()

  const search = useRef('Nature')
  useEffect(() => {
    fetch(`https://api.datamuse.com/words?sp=${incompleteWord}??`).then(data => data.json()).then(data => setAutoSearch(data))
  }, [incompleteWord])


  //saves input value
  function handleChange(e) {
    setIncompleteWord(e.target.value)
    search.current = e.target.value
  }
  function searchQuery() {
    //setSearchInput in App.js
    onQuery(search.current)
  }

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      searchQuery();
    }
  };

  return (
    <>
      <input type="text" placeholder="Search for free photos" className="search-input" onChange={(e) => handleChange(e)} onKeyDown={(e) => handleKeypress(e)} ></input>
      <button className="search-bttn" onClick={searchQuery}>
          <FaSearch />
        </button>
    </>
  )
}
