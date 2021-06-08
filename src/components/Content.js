//React Imports
import React from "react";

//Paackage Imports
import { motion } from "framer-motion";

const Content = () => {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
      exit={{ x: "-100vw" }}
      className="contents-comp"
    >
      <div>
        <h1>Okay</h1>
      </div>
    </motion.div>
  );
};

export default Content;
