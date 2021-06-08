//React Imports
import { useState } from "react";

//Packages imports
import { motion } from "framer-motion";

//Local Imports
import Intro from "./components/Intro";
import "./index.css";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import GetStarted from "./components/GetStarted";

function App() {
  //State to use in the Switch statememt
  const [componentDeterminor, setComponentDeterminor] = useState("home");

  //Switch case to switch different components
  //based on the clicked navigation
  const swicthComponents = () => {
    switch (componentDeterminor) {
      case "home":
        return <Home />;
      case "content":
        return <Content />;
      case "instructions":
        return <GetStarted />;
      default:
        return <Home />;
    }
  };

  console.log(componentDeterminor);
  return (
    <div className="App">
      {/* Beginning of the animated Intro */}

      <motion.div
        animate={{ x: "100vw" }}
        transition={{ delay: 3.2, duration: 1 }}
        className="intro"
      >
        <Intro />
      </motion.div>
      {/* End of the Animated Intro */}

      {/* Beginning of the Main Content Section */}

      <motion.div className="main-section" initial={{ x: -200 }}>
        {/* Beginning of the Side Bar */}

        <motion.div
          className="side-bar"
          animate={{
            transform: "translateX(200px)",
          }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          <SideBar setComponent={setComponentDeterminor} />
        </motion.div>

        {/* End of the Side Bar */}

        {/* Start of the Content Section */}

        <motion.div
          className="switch-main"
          animate={{
            transform: "translateX(200px)",
            transitionEnd: { opacity: 1 },
          }}
          transition={{ delay: 2.4, duration: 1 }}
          exit={{ x: "-100vw" }}
        >
          {swicthComponents()}
        </motion.div>

        {/* End of the Content Section */}
      </motion.div>

      {/* End of the main Content Section */}
    </div>
  );
}

export default App;
