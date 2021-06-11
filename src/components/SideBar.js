//React Imports
import React, { useState } from "react";

//Local Imports
import Logo from "../Images/Group 3.svg";

const activeStyles = {
  backgroundColor: "#fff",
  color: "black",
  padding: "0.4rem 2rem",
  borderRadius: "2rem",
  margin: 0,
};

const SideBar = ({ setComponent }) => {
  //State to handle Active Link
  const [homeActive, setHomeACtive] = useState(false);
  const [getStartedActive, setGetStartedActive] = useState(false);
  const [contentActive, setContentActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

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

  return (
    <div className="side-main">
      {/* Beginning of the Navigation Panel */}

      {/* Beginning of the Image */}

      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>

      {/* End of the Image */}

      <div className="side-content">
        {/* Beginning of the Navigation Links */}

        <div className="side-nav">
          <div onClick={handleHomeActiveLink} className="link">
            <div style={homeActive ? activeStyles : {}}>Home</div>
          </div>
          <div className="link" onClick={handleGetStartedActiveLink}>
            <div style={getStartedActive ? activeStyles : {}}>Get Started</div>
          </div>
          <div className="link" onClick={handleContentActiveLink}>
            <div style={contentActive ? activeStyles : {}}>Content</div>
          </div>
        </div>

        <div className="secondary-nav">
          <div className="link">
            <div
              onClick={handleAboutActiveLink}
              style={aboutActive ? activeStyles : {}}
            >
              About us
            </div>
          </div>
          <div className="link ">
            <div
              className="link"
              onClick={handleContactActiveLink}
              style={contactActive ? activeStyles : {}}
            >
              Contact
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
