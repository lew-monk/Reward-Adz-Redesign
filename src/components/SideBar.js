//React Imports
import React, { useState } from "react";

//Local Imports
import Logo from "../Images/Group 3.svg";

const activeStyles = {
  backgroundColor: "#fff",
  color: "black",
  borderRadius: "2rem",
  margin: 0,
};

const SideBar = ({ setComponent }) => {
  //State to handle Active Link
  const [homeActive, setHomeACtive] = useState(true);
  const [getStartedActive, setGetStartedActive] = useState(false);
  const [contentActive, setContentActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  //State to toggle ClassNames for burger menu
  const [menuBurgerToggled, setMenuBurgerTogggled] = useState(false);

  //Function to handle Home button click
  const handleHomeActiveLink = () => {
    setComponent("home");
    setContentActive(false);
    setGetStartedActive(false);
    setAboutActive(false);
    setContactActive(false);
    setHomeACtive(true);
  };

  //Function to handle Get Started button click
  const handleGetStartedActiveLink = () => {
    setComponent("getStarted");
    setContentActive(false);
    setHomeACtive(false);
    setAboutActive(false);
    setContactActive(false);
    setGetStartedActive(true);
  };

  //Function to handle Home button click
  const handleContentActiveLink = () => {
    setComponent("content");
    setGetStartedActive(false);
    setHomeACtive(false);
    setAboutActive(false);
    setContactActive(false);
    setContentActive(true);
  };

  //Function to handle About button click
  const handleAboutActiveLink = () => {
    setComponent("about");
    setGetStartedActive(false);
    setHomeACtive(false);
    setContactActive(false);
    setContentActive(false);
    setAboutActive(true);
  };

  //Function to handle Home button click
  const handleContactActiveLink = () => {
    setComponent("contact");
    setGetStartedActive(false);
    setHomeACtive(false);
    setAboutActive(false);
    setContentActive(false);
    setContactActive(true);
  };

  //Function to handle Menu burger Click
  const handleMenuClick = (target) => {
    menuBurgerToggled
      ? setMenuBurgerTogggled(false)
      : setMenuBurgerTogggled(true);
  };

  return (
    <div className="side-main">
      {/* Beginning of the Navigation Panel */}

      {/* Beginning of the Image */}

      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>

      {/* Burger Menu  */}
      <div
        className={menuBurgerToggled ? "burger-menu change" : "burger-menu"}
        onClick={handleMenuClick}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {/* Burger Menu  */}

      {/* End of the Image */}

      <div
        className={
          menuBurgerToggled
            ? "side-content display-flex-helper"
            : "side-content"
        }
      >
        {/* Beginning of the Navigation Links */}

        <div className="side-nav" onClick={handleMenuClick}>
          <div onClick={handleHomeActiveLink} className="link">
            <div style={homeActive ? activeStyles : {}}>
              <p>Home</p>
            </div>
          </div>
          <div className="link" onClick={handleGetStartedActiveLink}>
            <div style={getStartedActive ? activeStyles : {}}>
              <p>Get Started</p>
            </div>
          </div>
          <div className="link" onClick={handleContentActiveLink}>
            <div style={contentActive ? activeStyles : {}}>
              <p>Content</p>
            </div>
          </div>
        </div>

        <div className="secondary-nav" onClick={handleMenuClick}>
          <div className="link">
            <div
              onClick={handleAboutActiveLink}
              style={aboutActive ? activeStyles : {}}
            >
              <p style={{ padding: "0.5rem 1rem", margin: "0rem" }}>About</p>
            </div>
          </div>
          <div className="link ">
            <div
              onClick={handleContactActiveLink}
              style={contactActive ? activeStyles : {}}
            >
              <p style={{ padding: "0.5rem 1rem", margin: "0rem" }}>Contact</p>
            </div>
          </div>
        </div>

        {/* End of the Navigation Links */}
      </div>

      {/* Beginning of the Navigation Panel */}
    </div>
  );
};

export default SideBar;
