//Import React Components
import React, { useState } from "react";

//Package Imports
import Player from "react-player";
import { motion } from "framer-motion";

//Local Imports
import myVideo from "../../assets/videos/Ronnie Rewardadz Promo-1.m4v";

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

    if (videoProgess >= 0 && videoProgess <= 2) {
      setInstructionThreeDisplay(false);
      setInstructionFourDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionOneDisplay(true);
    }

    if (videoProgess >= 7 && videoProgess <= 9) {
      setInstructionThreeDisplay(false);
      setInstructionFourDisplay(false);
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(true);
    }
    if (videoProgess >= 13 && videoProgess <= 15) {
      setInstructionFourDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionOneDisplay(false);
      setInstructionThreeDisplay(true);
    }
    if (videoProgess > 24) {
      setInstructionThreeDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionOneDisplay(false);
      setInstructionFourDisplay(true);
    }
    if (videoProgess > 30) {
      setInstructionThreeDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionOneDisplay(false);
      setInstructionFourDisplay(false);
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
              Choose an audio file from the organisation that hits home the
              most.🎼🎧
              <br />
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
              Set the Audio Ad as your ringtone and <br /> Let the Ad ring to
              Earn😅
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
            <p className="video-instructions-body">
              Not ring alone but also you can listen to adverts and earn
            </p>
          </motion.div>
        </motion.div>
      )}
      {/* End of the Forth Instructions Sections */}
    </motion.div>
    //End of the Video Instructions Component
  );
};

export default VideoInstructions;
