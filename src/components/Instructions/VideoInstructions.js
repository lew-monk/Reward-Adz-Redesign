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

  //State to control video progress
  const [videoProgess, setVideoProgress] = useState(0);

  //Function to handle Video Progress
  const handleInstructionVideoProgress = (time) => {
    setVideoProgress(time.playedSeconds);

    if (videoProgess >= 4 && videoProgess <= 18) {
      setInstructionOneDisplay(true);
    }

    if (videoProgess > 19) {
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(true);
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
          <div>
            <h1 className="video-instructions-header">Instruction one</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="video-instructions-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              et repellat saepe ullam sint, accusantium assumenda optio!
              Ducimus, molestiae laudantium!
            </p>
          </motion.div>
        </motion.div>
      )}
      {/* End of the Instructions Sections */}

      {/* Beginning of the Instructions Sections */}
      {instructionTwoDisplay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="video-instructions"
        >
          <div>
            <h1 className="video-instructions-header">Instruction Two</h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="video-instructions-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              et repellat saepe ullam sint, accusantium assumenda optio!
              Ducimus, molestiae laudantium!
            </p>
          </motion.div>
        </motion.div>
      )}
      {/* End of the Instructions Sections */}
    </motion.div>
    //End of the Video Instructions Component
  );
};

export default VideoInstructions;
