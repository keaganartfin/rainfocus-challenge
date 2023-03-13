import React, { useEffect, useState } from "react";
import {
  RainFocusLogo,
  SmallSummitLogo,
  HamburgerIcon,
} from "../assets/images/index";

import Lists from "./Lists";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileNavOpen, setShowMobileNavOpen] = useState(false);

  useEffect(() => {
    window.innerWidth > 768 ? setShowMobileNav(false) : setShowMobileNav(true);
  }, []);
  const handleClick = () => {
    setShowMobileNavOpen(!showMobileNavOpen);
  };
  const pageTheme = document.body.classList;
  const [theme, setTheme] = useState(true);

  const themeToggle = () => {
    theme ? pageTheme.add("darkTheme") : pageTheme.remove("darkTheme");
    setTheme(!theme);
  };

  return (
    <nav className="navbar">
      {showMobileNav ? (
        <div className="sidebar">
          <div className="leftNavbarContainer">
            <div className="iconMenu ">
              <div className="topSubMenu">
                <div onClick={handleClick} className="topSubIcon hamBars">
                  <HamburgerIcon fill={theme ? "000" : "#38BDF8"} />
                </div>
                <a href="/" className="topSubIcon">
                  <RainFocusLogo />
                </a>
                <a href="/" className="topSubIcon">
                  <SmallSummitLogo />
                </a>
              </div>
              <div className="bottomSubMenu">
                <div onClick={themeToggle} className="userProfile toggleTheme">
                  FL
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "navbarMenu rightNavbarContainer" +
              (showMobileNavOpen ? " show" : " hide")
            }
          >
            <h3>RainFocus Summit</h3>
            <p>Lehl, UT &#8226; December 15th</p>
            <label>
              <input
                className="search"
                type="text"
                placeholder="Search"
                name="Search"
              />
            </label>
            <Lists theme={theme} />
          </div>
        </div>
      ) : (
        <div className="sidebar">
          <div className="leftNavbarContainer">
            <div className="iconMenu ">
              <div className="topSubMenu">
                <a href="/" className="topSubIcon">
                  <RainFocusLogo />
                </a>
                <a href="/" className="topSubIcon">
                  <SmallSummitLogo />
                </a>
              </div>
              <div className="bottomSubMenu">
                <div onClick={themeToggle} className="userProfile toggleTheme">
                  FL
                </div>
              </div>
            </div>
          </div>
          <div className="navbarMenu rightNavbarContainer">
            <h3>RainFocus Summit</h3>
            <p>Lehl, UT &#8226; December 15th</p>
            <label className="searchLabel">
              <input
                className="search"
                type="text"
                placeholder="Search"
                name="Search"
              />
            </label>
            <Lists theme={theme} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
