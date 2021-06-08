//React imports
import React from "react";

//Package Imports
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          Reward Adz Reward Adz Reward Adz Reward Adz Reward Adz Reward Adz
          Reward Adz Reward Adz Reward Adz Reward Adz Reward Adz Reward Adz
          Reward Adz Reward Adz Reward Adz{" "}
        </div>

        <motion.div
          className="reward"
          initial={{ opacity: 0 }}
          animate={{
            y: -600,
            fontSize: "14rem",
            opacity: 1,
          }}
          exit={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.4 }}
        >
          <motion.p
            className="reward-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            Reward Adz
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
