//React Imports
import React, { useState, createRef } from "react";

//Package Imports
import { motion, AnimatePresence } from "framer-motion";
import Player from "react-player";

//Local Imports
// import Promo from "../Images/rewards-promo.png";

const Home = () => {
  //State to automatically play the video
  const [autoPlayVideo, setAutoPlayVideo] = useState(false);

  //State to render the information Pop up
  const [infoPopUp, setInfoPopUp] = useState(false);

  //Store the number of seconds played
  const [playedSeconds, setPlayedSeconds] = useState(0);

  //Create a ref to for the video
  const ref = createRef();

  //Set timout for 5 seconds to start playing the video
  setTimeout(() => {
    setAutoPlayVideo(true);
  }, 5000);

  //Set time out to show the pop ups
  // setTimeout(() => {
  //   setInfoPopUp(true);
  // }, 20000);

  //Set time out to End the pop ups
  // setTimeout(() => {
  //   setInfoPopUp(false);
  // }, 50000);

  //Function to handle video progress and Pop ups
  const handleVideoProgress = (progress) => {
    setPlayedSeconds(progress.playedSeconds);

    if (playedSeconds >= 15 && playedSeconds <= 16) {
      setInfoPopUp(true);
    }
    if (playedSeconds >= 44 && playedSeconds <= 46) {
      setInfoPopUp(false);
    }
  };

  return (
    // Beginning of the Introduction Video
    <div>
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
            ref={ref}
            url={window.location.origin + "/videos/David RewardAdz Promo.mp4"}
            height="100%"
            width="100%"
            playIcon={true}
            controls
            playing={autoPlayVideo}
            onProgress={(played) => handleVideoProgress(played)}
            config={{
              file: {
                attributes: {
                  poster: window.location.origin + "/videos/rewards-promo.png",
                },
              },
            }}
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
                      At Reward Adz we aim to re evaluate how we consume and
                      send adz. <br /> Want to get Organic ads and reach? Want
                      to make money watching ads?
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
                      How about make money by watching adz. <br /> With rewards
                      Adz you can get paid by consuming ads.
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

                {/* End of Third Information Block */}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
    // End of the Introduction Video
  );
};

export default Home;
