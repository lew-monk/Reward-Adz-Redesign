//React Imports
import React, { useState, createRef } from "react";

//Package Imports
import { motion, AnimatePresence } from "framer-motion";
import Player from "react-player";

//Local Imports
import GooglePlay from "../Images/google-play-white.svg";
import myVideo from "../assets/videos/Ronnie Rewardadz Promo-1.m4v";
import Poster from "../assets/videos/rewards-promo.png";

const Home = ({ ready }) => {
  //States to control Mobile Instructions
  const [informatioOneDisplay, setInformationOneDisplay] = useState(false);
  const [informatioTwoDisplay, setInformationTwoDisplay] = useState(false);
  const [informatioThreeDisplay, setInformationThreeDisplay] = useState(false);

  //State to set Filter on the video
  const [filter, setFilter] = useState({});

  //State to render the information Pop up
  const [infoPopUp, setInfoPopUp] = useState(false);

  //State the number of seconds played
  const [playedSeconds, setPlayedSeconds] = useState(0);

  //State to control the Main cta display
  const [ctaDisplay, setCtaDisplay] = useState(false);

  //State to Pause Video
  const [playVideo, setPlayVideo] = useState(true);

  //Create a ref to for the video
  const ref = createRef();

  //Function to handle video progress and Pop ups
  const handleVideoProgress = (progress) => {
    setPlayedSeconds(progress.playedSeconds);

    if (playedSeconds >= 6 && playedSeconds <= 7) {
      setInfoPopUp(true);
    }
    //Mobile Information Pop Up Controll
    if (playedSeconds >= 7 && playedSeconds <= 8) {
      setInformationTwoDisplay(false);
      setInformationThreeDisplay(false);
      setInformationOneDisplay(true);
      setPlayVideo(false);
    }
    if (playedSeconds >= 14 && playedSeconds <= 15) {
      setInformationOneDisplay(false);
      setInformationThreeDisplay(false);
      setInfoPopUp(true);
      setInformationTwoDisplay(true);
      setPlayVideo(false);
    }
    if (playedSeconds >= 21 && playedSeconds <= 22) {
      setInformationOneDisplay(false);
      setInformationTwoDisplay(false);
      setInfoPopUp(true);
      setInformationThreeDisplay(true);
      setPlayVideo(false);
    }
    if (playedSeconds > 28) {
      setInformationOneDisplay(false);
      setInformationTwoDisplay(false);
      setInformationThreeDisplay(false);
    }
    if (playedSeconds >= 44 && playedSeconds <= 46) {
      setInfoPopUp(false);
    }
    if (playedSeconds > 25) {
      setFilter({ filter: "blur(5px)" });
      setCtaDisplay(true);
    }

    if (playedSeconds > 55) {
      setFilter({});
    }
  };
  //
  const handleVideoEnd = () => {
    setFilter({});
  };

  //Function to handle video Pause for Instruction One
  const handleFirstInstructionPause = () => {
    setPlayVideo(true);
    setInfoPopUp(false);
  };

  //Function to handle loading state
  const handleHomeVideoBuffer = () => {
    ready();
  };

  return (
    // Beginning of the Introduction Video
    <div className="landing-main">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        exit={{ x: "-100vw" }}
        className="home-main"
      >
        {/* Beginning of the Video Section */}

        <div className="video1">
          <Player
            style={filter}
            ref={ref}
            url={myVideo}
            height="100%"
            width="100%"
            playing={playVideo}
            // controls
            onReady={handleHomeVideoBuffer}
            onProgress={(played) => handleVideoProgress(played)}
            config={{
              file: {
                attributes: {
                  poster: Poster,
                },
              },
            }}
            onEnded={handleVideoEnd}
          />
        </div>

        {/* Beginning of the Video Section */}

        {infoPopUp && (
          <AnimatePresence>
            <motion.div
              className="info-block-one"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              exit={{ x: "100vw" }}
            >
              <div className="info">
                {/* Beginning First Information Block */}

                {/* Beginning of Web Block  */}
                <div className="web-block">
                  <motion.div
                    className="info-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="header">
                      <h1>Re- Evaluate</h1>
                    </div>
                    <div className="message">
                      <p className="message-details">
                        Reward Adz is disrupting traditional forms of
                        advertising to create value for both the advertiser and
                        the consumer
                      </p>
                      <div className="cta">
                        <input
                          type="button"
                          className="get-started-cta"
                          value="Get started"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* End First Information Block */}

                  {/* Beginning of Second Information Block */}

                  <motion.div
                    className="info-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 10 }}
                  >
                    <div className="header">
                      <h1>Organic Reach</h1>
                    </div>
                    <div className="message">
                      <p className="message-details">
                        At Reward Adz we aim to re evaluate how we consume and
                        send adz. <br /> Want to get Organic ads and reach?
                        Consult at rewards Adz to know how
                      </p>
                      <div className="cta">
                        <input
                          type="button"
                          className="get-started-cta"
                          value="Get Reach"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* End of Second Information Block */}

                  {/* Beginning of Third Information Block */}

                  <motion.div
                    className="info-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 19 }}
                  >
                    <div className="header">
                      <h1>Watch Adz</h1>
                    </div>
                    <div className="message">
                      <p className="message-details">
                        Do you feel exposed watching adz? <br />
                        How about make money by watching adz. <br /> With
                        rewards Adz you can get paid by consuming ads.
                      </p>
                      <div className="cta">
                        <input
                          type="button"
                          className="get-started-cta"
                          value="Get paid ?"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* End of Web Block  */}

                {/* Beginning of Mobile Block  */}
                <div className="mobile-block">
                  {informatioOneDisplay && (
                    <motion.div
                      className="info-details-mobile"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="header">
                        <h1>Re- Evaluate</h1>
                      </div>
                      <div className="message">
                        <p className="message-details">
                          Reward Adz is disrupting traditional forms of
                          advertising to create value for both the advertiser
                          and the consumer
                        </p>
                        <div
                          className="cta"
                          onClick={handleFirstInstructionPause}
                        >
                          <input
                            type="button"
                            className="get-started-cta"
                            value="Continue"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* End First Information Block */}

                  {/* Beginning of Second Information Block */}

                  {informatioTwoDisplay && (
                    <motion.div
                      className="info-details-mobile"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="header">
                        <h1>Organic Reach</h1>
                      </div>
                      <div className="message">
                        <p className="message-details">
                          Consumers don’t really see/hear ads. We drive past the
                          same billboards on our daily commute while paying no
                          attention.
                          <br /> <br />
                          Incentivizing consumers to engage with ad content and
                          rewarding them for it is where the adverts start to
                          impact the target market.
                        </p>
                        <div
                          className="cta"
                          onClick={handleFirstInstructionPause}
                        >
                          <input
                            type="button"
                            className="get-started-cta"
                            value="Continue"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* End of Second Information Block */}

                  {/* Beginning of Third Information Block */}

                  {informatioThreeDisplay && (
                    <motion.div
                      className="info-details-mobile"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="header">
                        <h1>Consume Adz</h1>
                      </div>
                      <div className="message">
                        <p className="message-details">
                          Do you feel exposed watching unneccessary adz? <br />
                          <br />
                          Take control by consuming adz that you believe in and
                          get rewarded for it
                        </p>
                        <div
                          className="cta"
                          onClick={handleFirstInstructionPause}
                        >
                          <input
                            type="button"
                            className="get-started-cta"
                            value="Get paid ?"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                {/* End of Mobile Block  */}

                {/* End of Third Information Block */}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Beginning of Mobile Info Block  */}
        {/* End of Mobile Info Block  */}

        {ctaDisplay && (
          <motion.div
            className="main-cta"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="main-cta-info">
              <div>
                <h1 className="main-cta-header">
                  Lets Begin the Reward Ad-venture
                </h1>
              </div>
              <div>
                <img src={GooglePlay} alt="Google Play Button" />
              </div>
            </div>
          </motion.div>
        )}
        {/* End of the Main CTA section  */}
      </motion.div>

      {/* Beginning of the Main CTA section  */}
    </div>
    // End of the Introduction Video
  );
};

export default Home;
