import { Link } from 'react-router-dom';
import './App.css';
import CustomRoutes from './components/router/Router';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
    <h1>Plexfull</h1>
    {/* HEADER */}
    <Link to="/">Home</Link>
    <br/>
    <Link to="/images">Images</Link>
    <br/>
    <Link to='/video'>Video</Link>

    {/* SEARCH */}
    <SearchBar/>
    {/* ROUTER */}
    <CustomRoutes/>
    </>
  );
}

export default App;
