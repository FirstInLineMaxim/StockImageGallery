import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import CustomRoutes from './components/router/Router';
import Header from "./components/header/Header";

function App() {
  const [searchInput, setSearchInput] = useState('Nature');

  return (
    <>
    {/* HEADER */}
    <Header onQuery={setSearchInput} />
      <Link to="/">Home</Link>
      <br />
      <Link to="/images">Images</Link>
      <br />
      <Link to="/video">Video</Link>


    {/* ROUTER */}
    <CustomRoutes search={searchInput}/>
    </>
  );
}

export default App;
