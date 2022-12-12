import React,{useState} from 'react'
import { Link ,NavLink } from 'react-router-dom';
import './App.css';
import CustomRoutes from './components/router/Router';
import Header from "./components/header/Header";

function App() {
  const [searchInput, setSearchInput] = useState('Nature');

  return (
    <>
    {/* HEADER */}
    <Header onQuery={setSearchInput} />
      <div className='navigaton_Links'>
      <NavLink  to="/">Home</NavLink>
      <br />
      <NavLink  to="/images">Images</NavLink>
      <br />
      <NavLink  to="/video">Video</NavLink>
      </div>

    {/* ROUTER */}
    <CustomRoutes search={searchInput}/>

    {/* TheDEVS */}
    </>
  );
}

export default App;
