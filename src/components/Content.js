//React Imports
import React, { useState } from "react";

//Local Imports
import Audio from "./Instructions/Audio";
import VideoInstructions from "./Instructions/VideoInstructions";

//Global Styles

const stylesOnSelectorClick = {
  opacity: 1,
  borderBottom: "2px solid black",
};

const Content = () => {
  //State to handle video component
  const [videoComponentDeterminor, setVideoComponentDeterminor] =
    useState("video");

  //State to store Selector styles onClick
  const [selectorOpacity, setSelectorOpacity] = useState(false);
  const [selectorAudioOpacity, setSelectorAudioOpacity] = useState(false);

  //Function to add under line on click
  const handleVideoOnClickSelector = () => {
    setSelectorOpacity(true);
    setVideoComponentDeterminor("video");
  };

  //Function to add under line on click
  const handleAudioOnClickSelector = () => {
    setSelectorAudioOpacity(true);
    setVideoComponentDeterminor("audio");
  };

  //Function to switch between different videos
  const handleSwitchVideoComponent = () => {
    switch (videoComponentDeterminor) {
      case "audio":
        return <Audio />;
      case "video":
        return <VideoInstructions />;
      default:
        return <Audio />;
    }
  };

  return (
    <div className="content-main">
      {/* Beginning of the Video Component  */}
      <div className="content-video">
        <div className="video">{handleSwitchVideoComponent()}</div>
      </div>

      {/* End of the Video Component  */}

      {/* Beginning of the Content selectors */}
      <div className="content-selectors">
        {/* Beginning of Video Content Selector  */}

        <div
          className="content-selector"
          onClick={handleVideoOnClickSelector}
          style={stylesOnSelectorClick}
        >
          <div className="content-selector-number">
            <div>
              <h1>1</h1>
            </div>
          </div>
          <div className="content-selector-info">
            <h1 className="content-selector-head">Video Adz</h1>
            <p className="content-selector-description">Consume Video Ads?</p>
          </div>
        </div>

        {/* End of Content Selector  */}

        {/* Beginning of Content Selector  */}

        <div
          className="content-selector"
          onClick={handleAudioOnClickSelector}
          style={selectorAudioOpacity ? stylesOnSelectorClick : {}}
          // style={{ backgroundColor: "greenyellow" }}
        >
          <div className="content-selector-number">
            <h1>2</h1>
          </div>
          <div className="content-selector-info">
            <h1 className="content-selector-head">Audio Adz</h1>
            <p className="content-selector-description">Listen and Earn?</p>
          </div>
        </div>

        {/* End of Content Selector  */}

        {/* Beginning of Content Selector  */}

        <div className="content-selector">
          <div className="content-selector-number">
            <h1>3</h1>
          </div>
          <div className="content-selector-info">
            <h1 className="content-selector-head">Survey</h1>
            <p className="content-selector-description">Fill Answers</p>
          </div>
        </div>
        {/* End of Content Selector  */}
      </div>
      {/* End of the Content selectors */}
    </div>
  );
};

export default Content;
