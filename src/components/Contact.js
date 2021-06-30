import React, { useState } from "react";

//Package imports
import { motion } from "framer-motion";

const Contact = () => {
  const [addAdvertDisplay, setAddAdvertDisplay] = useState(false);
  const [recieveWithdrawDisplay, setRecieveWithdrawDisplay] = useState(false);
  const [dashboard, setDashboard] = useState(false);

  //Functions to control the display of the help instructions
  const handleAddAdvertDisplay = () => {
    addAdvertDisplay ? setAddAdvertDisplay(false) : setAddAdvertDisplay(true);
  };

  const handleRecieveWithdrawDisplay = () => {
    recieveWithdrawDisplay
      ? setRecieveWithdrawDisplay(false)
      : setRecieveWithdrawDisplay(true);
  };

  const handeDashboardDisplay = () => {
    dashboard ? setDashboard(false) : setDashboard(true);
  };

  return (
    //Beginning of the contact page render

    <div className="contact-main">
      {/* Beginning of the Form Section  */}

      <div className="form">
        <form action="" className="form-start">
          <div className="form-section">
            <div className="form-title">
              <h1>Contact Form</h1>
            </div>
            {/* Beginning of the Name Inputs  */}

            <div className="name-section">
              <div
                style={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="first-name-section">
                  <div className="name-labels form-label ">
                    <label htmlFor="FirstName">First Name</label>
                  </div>
                  <div className="form-input">
                    <input type="text" />
                  </div>
                </div>
                <div className="last-name-section">
                  <div className="name-labels form-label ">
                    <label htmlFor="FirstName">Last Name</label>
                  </div>
                  <div className="form-input">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>

            {/* End of the Name Inputs  */}

            {/* Beginning of the Email Section  */}

            <div className="email-section">
              <div className="form-label">Email</div>
              <div className="form-input">
                <input type="email" name="" id="" className="input" />
              </div>
            </div>

            {/* End of the Email Section  */}

            {/* Beginning of the Message Section  */}

            <div className="message-section">
              <div className="form-label">Message</div>
              <div className="form-input">
                <input type="text" name="" id="" />
              </div>
            </div>

            {/* End of the Message Section  */}

            {/* Beginning of the Additional Section  */}

            <div className="message-section">
              <div className="form-label">Additional Message</div>
              <div className="form-input">
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </div>
            </div>

            {/* End of the Additional Section  */}

            <div className="submit-contact">
              <div>
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* End of the Form Section  */}

      {/* Beginning of the Topic requests  */}

      <div className="topic-requests">
        <div className="banner-header">
          <h1>How Can We Help?</h1>
        </div>
        <div className="banner-sub">
          <h2>
            Please select a topic below related to your inquiry. If you don't
            find what you need, fill out our contact form
          </h2>
        </div>

        {/* Beginning of the Topics  */}

        <div className="topics">
          {/* Beginning of the first Topic  */}

          <div className="topic" onClick={handleAddAdvertDisplay}>
            <div className="topic-header">
              <h3>Add an Advert</h3>
            </div>
            <div className="topic-sub">
              <p>Instructions on how to add or place adverts</p>
            </div>
            {addAdvertDisplay && (
              <motion.div
                initial={{ y: "-10%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="topic-instruction">
                  <p>
                    1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
                <div className="topic-instruction">
                  <p>
                    2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
                <div className="topic-instruction">
                  <p>
                    3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* End of the first Topic  */}

          {/* Beginning of the Second Topic  */}

          <div className="topic" onClick={handleRecieveWithdrawDisplay}>
            <div className="topic-header">
              <h3>Recieve / Withdraw Payment</h3>
            </div>
            <div className="topic-sub">
              <p>Get and understand more how the payment system works</p>
            </div>
            {recieveWithdrawDisplay && (
              <motion.div
                initial={{ y: "-10%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="topic-instruction">
                  <p>
                    1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
                <div className="topic-instruction">
                  <p>
                    2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
                <div className="topic-instruction">
                  <p>
                    3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* End of the Second Topic  */}

          {/* Beginning of the Third Topic  */}

          <div className="topic" onClick={handeDashboardDisplay}>
            <div className="topic-header">
              <h3>Dashboards and Metrics</h3>
            </div>
            <div className="topic-sub">
              <p>Learn more how to understand and relate to the audience</p>
            </div>
            {dashboard && (
              <motion.div
                initial={{ y: "-10%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="topic-instruction">
                  <p>
                    1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
                <div className="topic-instruction">
                  <p>
                    2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
                <div className="topic-instruction">
                  <p>
                    3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, consequuntur.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* End of the Third Topic  */}
        </div>

        {/* End of the Topics  */}
      </div>

      {/* End of the Topic requests  */}
    </div>
  );
};

export default Contact;
