import { Link } from "react-router-dom";
import "./App.css";
import CustomRoutes from "./components/router/Router";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Link to="/">Home</Link>
      <br />
      <Link to="/images">Images</Link>
      <br />
      <Link to="/video">Video</Link>

      {/* SEARCH */}

      {/* ROUTER */}
      <CustomRoutes />
    </>
  );
}

export default App;
