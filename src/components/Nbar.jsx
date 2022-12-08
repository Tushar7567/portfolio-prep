import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

const Nbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <BrowserRouter>
      <nav className="navigation pad-lr">
          <a className="link-text heading-size" href="/#home" >Portfo<span className="lio-color" >lio</span></a>
            <div className="navigation-menu" >
            <ul>
            <li>
              <a href="/#home" className={
                  activeLink === "home" ? "active link-text-nav" : "link-text-nav"
                }
                onClick={() => onUpdateActiveLink("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className={
                  activeLink === "about" ? "active link-text-nav" : "link-text-nav"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
              About
              </a>
            </li>
            <li>
              <a href="/#project" className={
                  activeLink === "project"
                    ? "active link-text-nav"
                    : "link-text-nav"
                }
                onClick={() => onUpdateActiveLink("project")}>
              Project
              </a>
            </li>
            <li>
              <a href="/#skills" className={
                  activeLink === "skills" ? "active link-text-nav" : "link-text-nav"
                }
                onClick={() => onUpdateActiveLink("skills")}>
                Technology
              </a>
            </li>
            {/* <li>
              <a href="/#team" className={
                  activeLink === "team" ? "active link-text-nav" : "link-text-nav"
                }
                onClick={() => onUpdateActiveLink("team")}>
                Team
              </a>
            </li> */}
            <li>
              <a href="/#contact"  className={
                  activeLink === "contact"
                    ? "active link-text-nav"
                    : "link-text-nav"
                }
                onClick={() => onUpdateActiveLink("contact")}>
                Contact
              </a>
            </li>
          </ul>
          </div>
      </nav>
    </BrowserRouter>
  )
}

export default Nbar;
