import React,{useRef} from 'react'

export default function SearchBar({ onQuery }) {
  const search = useRef()

  //saves input value
  function handleChange(e){
      search.current = e.target.value
  }
  function searchQuery(){
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
    <input type="text" placeholder="Search Here" onChange={(e)=> handleChange(e)} onKeyDown={(e)=>handleKeypress(e)} ></input>
    <button onClick={searchQuery}>Search</button>
    </>
  )
}
