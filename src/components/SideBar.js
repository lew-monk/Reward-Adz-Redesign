//React Imports
import React, { useState } from "react";

//Local Imports
import Logo from "../Images/Group 3.svg";

const SideBar = ({ setComponent }) => {
  //State to set Display style for embedded links
  const [displayStyle, setDisplayStyle] = useState("none");

  //Function to toggle embedded links
  const handleToggleDisplay = () => {
    if (displayStyle == "none") {
      setDisplayStyle("flex");
      return;
    }
    setDisplayStyle("none");
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
          <div onClick={() => setComponent("home")} className="link">
            Home
          </div>
          <div className="link" onClick={() => setComponent("instructions")}>
            Get Started
          </div>
          <div className="link" onClick={handleToggleDisplay}>
            Content
            <div style={{ display: displayStyle }}>
              <ul>
                <li
                  className="embedded-link"
                  onClick={() => setComponent("audio")}
                >
                  Audio Adz
                </li>
                <li className="embedded-link">Video Adz</li>
                <li className="embedded-link">Survery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="secondary-nav">
          <div className="link">About us</div>
          <div className="link ">
            <p className="contact">Contact</p>
          </div>
        </div>

        {/* End of the Navigation Links */}
      </div>

      {/* Beginning of the Navigation Panel */}
    </div>
  );
};

export default SideBar;
