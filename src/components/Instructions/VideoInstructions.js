//Import React Components
import React, { useState } from "react";

//Package Imports
import Player from "react-player";
import { motion } from "framer-motion";

//Local Imports
import myVideo from "../../assets/videos/David Rewardadz Promo-1.m4v";

const VideoInstructions = () => {
  //States to control Instructions display
  const [instructionOneDisplay, setInstructionOneDisplay] = useState(false);
  const [instructionTwoDisplay, setInstructionTwoDisplay] = useState(false);
  const [instructionThreeDisplay, setInstructionThreeDisplay] = useState(false);
  const [instructionFourDisplay, setInstructionFourDisplay] = useState(false);

  //State to control video progress
  const [videoProgess, setVideoProgress] = useState(0);

  //Function to handle Video Progress
  const handleInstructionVideoProgress = (time) => {
    setVideoProgress(time.playedSeconds);

    if (videoProgess >= 0 && videoProgess <= 16) {
      setInstructionThreeDisplay(false);
      setInstructionFourDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionOneDisplay(true);
    }

    if (videoProgess >= 17 && videoProgess <= 25) {
      setInstructionThreeDisplay(false);
      setInstructionFourDisplay(false);
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(true);
    }
    if (videoProgess >= 33 && videoProgess <= 34) {
      setInstructionFourDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionOneDisplay(false);
      setInstructionThreeDisplay(true);
    }
    if (videoProgess > 39) {
      setInstructionThreeDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionOneDisplay(false);
      setInstructionFourDisplay(true);
    }
  };

  return (
    //Beginning of the Video Instructions Component
    <motion.div
      className="video-instructions-main"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Beginning of the video  */}

      <div className="video-instructions-video">
        <Player
          url={myVideo}
          playing
          height="100%"
          width="100%"
          onProgress={(progress) => handleInstructionVideoProgress(progress)}
        />
      </div>
      {/* End of the video  */}

      {/* Beginning of the Instructions Sections */}
      {instructionOneDisplay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="video-instructions"
        >
          <div className="instruction-number">
            <h1 className="video-instructions-header">1</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="video-instructions-body">
              Open th application and ensure all permissions required have been
              granted i.e. location, contacts etc.
            </p>
          </motion.div>
        </motion.div>
      )}
      {/* End of the Instructions Sections */}

      {/* Beginning of the Second Instructions Sections */}
      {instructionTwoDisplay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="video-instructions"
        >
          <div className="instruction-number">
            <h1 className="video-instructions-header">2</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="video-instructions-body">
              Choose a video ad from the organisation that hits home the most.
              <br />
              Watch and Learn the service being advertised
            </p>
          </motion.div>
        </motion.div>
      )}
      {/* End of the Second Instructions Sections */}

      {/* Beginning of the Third Instructions Sections */}
      {instructionThreeDisplay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="video-instructions"
        >
          <div className="instruction-number">
            <h1 className="video-instructions-header">3</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="video-instructions-body">
              Participate in a survey to show that you fully understand the
              service being advertised
            </p>
          </motion.div>
        </motion.div>
      )}
      {/* End of the Third Instructions Sections */}

      {/* Beginning of the Fourth Instructions Sections */}
      {instructionFourDisplay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="video-instructions"
        >
          <div className="instruction-number">
            <h1 className="video-instructions-header">4</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="video-instructions-body">Sit back relax and earn</p>
          </motion.div>
        </motion.div>
      )}
      {/* End of the Forth Instructions Sections */}
    </motion.div>
    //End of the Video Instructions Component
  );
};

export default VideoInstructions;
