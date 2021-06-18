import React from "react";

//Local Imports
import FullLogo from "../Images/rewardadz-blue2.svg";
import GooglePlay from "../Images/Layer 2.png";
import CallingSvg from "../Images/Iconly-Two-tone-Calling.svg";
import ChatSvg from "../Images/Iconly-Two-tone-Chat.svg";
import FaceBook from "../Images/facebook.svg";
import Twitter from "../Images/twitter.svg";
import Instagram from "../Images/instagram.svg";
import LinkedIn from "../Images/linkedin.svg";

const About = () => {
  return (
    //Beginning of the About Component
    <div className="about-main">
      {/* Beginning of the Columns Section  */}

      <div className="columns-container">
        {/* Beginning of the First Column  */}
        <div className="column">
          <div className="logo-full">
            <img src={FullLogo} alt="Logo" />
          </div>
          <div className="google-play">
            <img src={GooglePlay} alt="Google Play" />
          </div>
          <div className="help-center">
            {/* Beginning of the Call Action  */}

            <div className="calling">
              <div className="call-icon">
                <img src={CallingSvg} alt="Call Icon" />
              </div>
              <div className="call-text">
                <p>Help Center</p>
              </div>
            </div>

            {/* Beginning of the Call Action  */}

            {/* Beginning of the Chat Action  */}
            <div className="calling">
              <div className="call-icon">
                <img src={ChatSvg} alt="Chat Icon" />
              </div>
              <div className="call-text">
                <p>Language English</p>
              </div>
            </div>
            {/* End of the Chat Action  */}
          </div>
        </div>

        {/* End of the First Column  */}

        {/* Beginning of the First Column  */}
        <div className="column">
          <div className="column-header">
            <h1>About Us</h1>
          </div>
          <div className="column-links">
            <div>Community</div>
            <div>Countries</div>
            <div>Careers</div>
            <div>Press</div>
            <div>Blog</div>
            <div>Contacts</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
        {/* End of the First Column  */}

        {/* Beginning of the First Column  */}
        <div className="column">
          <div className="column-header">
            <h1>Our Products</h1>
          </div>
          <div className="column-links">
            <div>RewardAdz Publishers</div>
            <div>RewardAdz Market</div>
          </div>
        </div>
        {/* End of the First Column  */}
      </div>
      {/* End of the Columns Section  */}

      {/* Beginning of Social Links  */}
      <div className="social-links-container">
        <div className="legal">
          <div>
            &copy; 2021 RewardAdz Technology KENYA • LegalCookie Declaration
          </div>
        </div>
        <div className="social-links">
          <img src={FaceBook} alt="Facebook" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
        </div>
      </div>

      {/* End of Social Links  */}
    </div>
    //End of the About Component
  );
};

export default About;
