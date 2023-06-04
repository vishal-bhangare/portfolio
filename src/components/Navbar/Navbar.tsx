import { useState } from "react";
import useMediaQuery from "../../common/useMediaQuery";
import "./Navbar.scss";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  activeLink: string;
  onChange: (value: string) => void;
}

const Navbar = ({ activeLink, onChange }: Props) => {
  const MQmatches = useMediaQuery("(min-width: 768px)");
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  // const [activeLink, setActiveLinkName] = useState("home");
  function setActiveLink(name: string) {
    onChange(name);
  }

  function toggleMobileNav() {
    setIsMobileNavVisible(!isMobileNavVisible);
    console.log(isMobileNavVisible);
  }
  const visibleBG = {
    background: "#111",
  };
  const inVisibleBG = {
    background: "transparent",
  };
  if (MQmatches) {
    return (
      <>
        <div className="navbar-container">
          <ul className="nav-list">
            <li className="nav-item ">
              <Link
                to="#home"
                onClick={() => {
                  setActiveLink("home");
                }}
                className={"nav-link" + (activeLink == "home" ? " active" : "")}
                smooth
              >
                Home
              </Link>
            </li>
            {/* <a className="nav-link active">Home</a> */}

            <li className="nav-item">
              <Link
                to="#about"
                onClick={() => {
                  setActiveLink("about");
                }}
                className={
                  "nav-link" + (activeLink == "about" ? " active" : "")
                }
                smooth
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#projects"
                onClick={() => {
                  setActiveLink("projects");
                }}
                className={
                  "nav-link" + (activeLink == "projects" ? " active" : "")
                }
                smooth
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#contact"
                onClick={() => {
                  setActiveLink("contact");
                }}
                className={
                  "nav-link" + (activeLink == "contact" ? " active" : "")
                }
                smooth
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mobile-navbar-container">
          <div
            className="mobile-navbar"
            style={isMobileNavVisible ? visibleBG : inVisibleBG}
          >
            <i
              className={
                "toggle-mobile-nav fa-regular " +
                (isMobileNavVisible && !MQmatches ? "fa-xmark" : "fa-bars")
              }
              onClick={toggleMobileNav}
            ></i>
          </div>
          <div className={isMobileNavVisible ? "mobile-navbar-content" : ""}>
            <ul className="nav-list">
              <li className="nav-item ">
                <Link
                  to="#home"
                  onClick={() => {
                    setActiveLink("home");
                  }}
                  className={
                    "nav-link" + (activeLink == "home" ? " active" : "")
                  }
                  smooth
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#about"
                  onClick={() => {
                    setActiveLink("about");
                  }}
                  className={
                    "nav-link" + (activeLink == "about" ? " active" : "")
                  }
                  smooth
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#projects"
                  onClick={() => {
                    setActiveLink("projects");
                  }}
                  className={
                    "nav-link" + (activeLink == "projects" ? " active" : "")
                  }
                  smooth
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#contact"
                  onClick={() => {
                    setActiveLink("contact");
                  }}
                  className={
                    "nav-link" + (activeLink == "contact" ? " active" : "")
                  }
                  smooth
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
};

export default Navbar;
