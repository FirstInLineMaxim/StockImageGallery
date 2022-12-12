import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import CustomRoutes from './components/router/Router';
import SearchBar from './components/SearchBar';
import Header from "./components/header/Header";

function App() {
  const [searchInput, setSearchInput] = useState('Nature');

  return (
    <>
    <h1>Plexfull</h1>
    {/* HEADER */}
    <Header />
      <Link to="/">Home</Link>
      <br />
      <Link to="/images">Images</Link>
      <br />
      <Link to="/video">Video</Link>

    {/* SEARCH */}
    <SearchBar onQuery={setSearchInput}/>
    {/* ROUTER */}
    <CustomRoutes search={searchInput}/>
    </>
  );
}

export default App;
