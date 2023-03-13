import React, { useState } from "react";
import Lists from "./Lists";
import {
  RainFocusLogo,
  SmallSummitLogo,
  HamburgerIcon,
} from "../assets/images/index";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [showMobileNavOpen, setShowMobileNavOpen] = useState('hide');

  const handleClick = () => {
    if (showMobileNavOpen === "hide") {
      setShowMobileNavOpen("slideIn");
    } else {
      setShowMobileNavOpen("slideOut");
      setTimeout(() => {
        setShowMobileNavOpen('hide')
      }, 500)
    }
  };
  const pageTheme = document.body.classList;
  const [theme, setTheme] = useState(true);

  const themeToggle = () => {
    theme ? pageTheme.add("darkTheme") : pageTheme.remove("darkTheme");
    setTheme(!theme);
  };

  return (
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
      <div className={"navbarMenu rightNavbarContainer " + showMobileNavOpen}>
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
  );
};

export default Navbar;
