import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "./App.scss";
import { useState } from "react";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";

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
      />
      <Home
        activeLink={activeLink}
        onChange={(value: string) => setActiveLink(value)}
      />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
