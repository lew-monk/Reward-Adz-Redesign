//React imports
import React, { useState } from "react";

//Package Imports
import { motion, AnimatePresence } from "framer-motion";
import Player from "react-player";

//Local Imports
import PlayStore from "../Images/google-play.svg";
import myVideo from "../assets/videos/Edited_20210608_221705.mp4";

const GetStarted = () => {
  //State to store Installation Video time
  const [installationVideoTime, setInstallationVideoTime] = useState(0);

  //State to control the render of first Instructiion
  const [instructionOneDisplay, setInstructionOneDisplay] = useState(false);

  //State to control the render of Second Instructiion
  const [instructionTwoDisplay, setInstructionTwoDisplay] = useState(false);

  //State to control the render of Second Instructiion
  const [instructionThreeDisplay, setInstructionThreeDisplay] = useState(false);

  //State to control the render of Second Instructiion
  const [instructionFiveDisplay, setInstructionFiveDisplay] = useState(false);

  //State to control the render of Second Instructiion
  const [instructionFourDisplay, setInstructionFourDisplay] = useState(false);

  //Function to handle Instalation video progress
  const handleInstallationVideoProgress = (time) => {
    setInstallationVideoTime(time.playedSeconds);

    //First Instruction is animated in
    if (installationVideoTime > 0 && installationVideoTime < 4) {
      setInstructionOneDisplay(true);
      setInstructionTwoDisplay(false);
      setInstructionThreeDisplay(false);
      setInstructionFourDisplay(false);
      setInstructionFiveDisplay(false);
    }

    //Second Instruction is animated in and
    //First Instruction is animated out
    if (installationVideoTime > 5 && installationVideoTime < 22) {
      setInstructionThreeDisplay(false);
      setInstructionFourDisplay(false);
      setInstructionFiveDisplay(false);
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(true);
    }

    //Third Instructions is animated in and
    //Second Instructions is animated out
    if (installationVideoTime > 23 && installationVideoTime < 29) {
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionFourDisplay(false);
      setInstructionFiveDisplay(false);
      setInstructionThreeDisplay(true);
    }

    //Fourth Instructions is animated in and
    //Third Instruction is animated out
    if (installationVideoTime > 30 && installationVideoTime < 34) {
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionThreeDisplay(false);
      setInstructionFiveDisplay(false);
      setInstructionFourDisplay(true);
    }

    //Fifth Instructions is animated in and
    //Fourth Instruction is animated out
    if (installationVideoTime > 35 && installationVideoTime < 47) {
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionThreeDisplay(false);
      setInstructionFourDisplay(false);
      setInstructionFiveDisplay(true);
    }
  };

  return (
    //Beginning of the Main section of the Instructions
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
      className="instructions"
    >
      {/* Beginnig of the Videos Section */}

      <motion.div
        className="phone-player-mockup"
        initial={{ x: 100 }}
        animate={{ x: -50 }}
        transition={{ delay: 2 }}
      >
        {/* Beginning of the Video */}

        <Player
          url={myVideo}
          height="auto"
          width="20vw"
          controls
          playing
          onProgress={(progress) => handleInstallationVideoProgress(progress)}

          // style={{ transform: "scale(1.1)" }}
        />

        {/* End of the Video */}
        <div className="punchole"></div>
      </motion.div>

      {/* Beginning of the Instructions  */}
      <motion.div className="instructions-content">
        {/* Beginning of First instruction  */}
        <AnimatePresence>
          {instructionOneDisplay && (
            <motion.div
              className="instruction"
              initial={{ y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              exit={{ opacity: 0, x: "100vw" }}
            >
              <div className="instruction-head">
                <h1>PlayStore</h1>
              </div>
              <div className="instruction-body">
                <p>Download Reward-Adz from Playstore using the link below</p>
              </div>
              <div className="first-instruction-cta">
                <img src={PlayStore} alt="" />
                <p>PlayStore</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* End of First instruction  */}

        {/* Beginning of Second instruction  */}

        <AnimatePresence exitBeforeEnter>
          {instructionTwoDisplay && (
            <motion.div
              className="instruction"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -150 }}
              transition={{ delay: 1.5, duration: 1 }}
              exit={{ opacity: 0, x: "100vw", y: 10 }}
            >
              <div className="instruction-head">
                <h1>Download Reward-Adz</h1>
              </div>
              <div className="instruction-body">
                <p>
                  After Download and App install Open the Application <br /> Ae
                  you ready to make money or gain organic reach ?
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* End of Second instruction  */}

        {/* Beginning of Three instruction  */}

        <AnimatePresence exitBeforeEnter>
          {instructionThreeDisplay && (
            <motion.div
              className="instruction"
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 220 }}
              transition={{ delay: 2.5, duration: 1 }}
              exit={{ opacity: 0, x: "100vw" }}
            >
              <div className="instruction-head">
                <h1>Allow the neccessary permissions</h1>
              </div>
              <div className="instruction-body">
                <p>
                  Allow all the permissions required by Reward-Adz. <br />
                  This will ensure all ads viewed follow all the requirements of
                  the campaign and offer meaningful unsights and ensure smooth
                  operation between the campaign manager and viewer.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* End of Three instruction  */}

        {/* Beginning of Fourth instruction  */}

        <AnimatePresence exitBeforeEnter initial={false}>
          {instructionFourDisplay && (
            <motion.div
              className="instruction"
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 300 }}
              transition={{ delay: 1.5, duration: 1 }}
              exit={{ opacity: 0, x: "100vw" }}
            >
              <div className="instruction-head">
                <h1>Log in ? Register ?</h1>
              </div>
              <div className="instruction-body">
                <p>
                  Are you a member ? New user? <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* End of Fourth instruction  */}

        {/* Beginning of Fifth instruction  */}

        <AnimatePresence exitBeforeEnter>
          {instructionFiveDisplay && (
            <motion.div
              className="instruction"
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: -50 }}
              transition={{ delay: 3, duration: 1 }}
              exit={{ opacity: 0, x: "100vw" }}
            >
              <div className="instruction-head">
                <h1>Authentication</h1>
              </div>
              <div className="instruction-body">
                <p>
                  At this point, you are almost there to start earning or
                  recieving organic reach.
                  <br />
                  Just move past the mere formalities and of authentication and
                  lets see you on the other side balling💲💲💲
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* End of Fifth instruction  */}
      </motion.div>
      {/* End of the Instructions  */}

      {/* End of the Videos Section  */}
    </motion.div>

    //End of the Main section of the Instructions
  );
};

export default GetStarted;
