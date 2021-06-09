//React Imports
import React, { useState } from "react";

//Paackage Imports
import { motion } from "framer-motion";
import Player from "react-player";

//Local Imports
import myVideo from "../assets/videos/Ronnie RewardAdz Promo.mp4";

const Audio = () => {
  //State to store the played seconds in the video
  const [playedSeconds, setPlayedSeconds] = useState(0);

  //State to controll render for the Instructions
  const [audioAdzInstructions, setAudioAdzInstructions] = useState(false);

  //State to controll render for the First Instructions
  const [instructionOneDisplay, setInstructionOneDisplay] = useState(false);

  //State to controll render for the Second Instructions
  const [instructionTwoDisplay, setInstructionTwoDisplay] = useState(false);

  //State to controll render for the Third Instructions
  const [instructionThreeDisplay, setInstructionThreeDisplay] = useState(false);

  //Function to handle Instructions Animation Throughout the video

  const handleVideoProgress = (time) => {
    setPlayedSeconds(time.playedSeconds);

    //Animate in the first Instruction
    if (playedSeconds > 2 && playedSeconds <= 5) {
      setAudioAdzInstructions(true);
      setInstructionOneDisplay(true);
    }

    // Animate in the Second Instruction and
    //animate out the first
    if (playedSeconds > 7 && playedSeconds <= 14) {
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(true);
    }

    //Animate in the The Third Instruction and
    //animate out all others
    if (playedSeconds > 21 && playedSeconds <= 24) {
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionThreeDisplay(true);
    }

    if (playedSeconds > 32) {
      setAudioAdzInstructions(false);
      setInstructionOneDisplay(false);
      setInstructionTwoDisplay(false);
      setInstructionThreeDisplay(false);
    }
  };

  return (
    //Beginning of the Audio Instructions Component

    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
      exit={{ x: "-100vw" }}
      className="audio-main"
    >
      {/* Beginning of the Video Container  */}

      {/* <div>{playedSeconds}</div> */}

      <motion.div className="audio-instruction-video">
        <Player
          height="100%"
          width="100%"
          url={myVideo}
          playing
          controls
          onProgress={(progress) => handleVideoProgress(progress)}
        />
      </motion.div>

      {/* End of the video Container */}

      {/* Beginning of the Instructions  */}

      {audioAdzInstructions && (
        <motion.div
          className="audio-instructions"
          animate={{ x: 0 }}
          initial={{ x: "-100vw" }}
        >
          {/* Beginning of the First Instruction */}

          {instructionOneDisplay && (
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              className="audio-instruction"
            >
              <div>
                <h1 className="audio-instruction-head">
                  Get Into Reward Ad-ventures
                </h1>
              </div>
              <div>
                <p className="audio-instruction-body">
                  Open your app and sign in to start getting paid by listening
                  or using audio as your ringtone
                </p>
              </div>
            </motion.div>
          )}

          {/* End of the First Instruction */}

          {/* Beginning of the Second Instruction */}

          {instructionTwoDisplay && (
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="audio-instruction"
            >
              <div className="audio-instruction-head">
                <h1>Adopt Ringtone</h1>
              </div>
              <div>
                <p className="audio-instruction-body">
                  Adopt any audio as your ringtone and earn a dime every minutes
                  someone calls you.
                </p>
              </div>
            </motion.div>
          )}

          {/* End of the Second Instruction */}

          {/* Beginning of the Third Instruction */}

          {instructionThreeDisplay && (
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              className="audio-instruction"
            >
              <div className="audio-instruction-head">
                <h1>Earn Passively</h1>
              </div>
              <div>
                <p className="audio-instruction-body">
                  Listen or adopt the audio as your ringtone and earn money in a
                  passive money. <br />
                  Whats not to like?
                </p>
              </div>
            </motion.div>
          )}

          {/* End of the Third Instruction */}
        </motion.div>
      )}

      {/* End of the Instructions  */}
    </motion.div>

    //End of the Audio Instructions Component
  );
};

export default Audio;
