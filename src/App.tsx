import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "./App.scss";
import { useState } from "react";

const App = () => {
  const [activeLink, setActiveLinkName] = useState("home");
  function setActiveLink(name: string) {
    setActiveLinkName(name);
    console.log(name);
  }
  return (
    <BrowserRouter>
      <Navbar
        activeLink={activeLink}
        onChange={(value: string) => setActiveLink(value)}
      ></Navbar>
      <Home
        activeLink={activeLink}
        onChange={(value: string) => setActiveLink(value)}
      ></Home>
      <About></About>
    </BrowserRouter>
  );
};

export default App;
