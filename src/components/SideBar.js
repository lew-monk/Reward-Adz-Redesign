import React from "react";

//Local Imports
import Logo from "../Images/Group 3.svg";

const SideBar = ({ setComponent }) => {
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
          <div className="link">Get Started</div>
          <div className="link" onClick={() => setComponent("content")}>
            Contents
          </div>
          <div className="link">Products</div>
          <div className="link">Download</div>
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
