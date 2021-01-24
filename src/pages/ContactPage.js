import React from "react";
import "./ContactPage.css";
import { motion } from "framer-motion";

function ContactPage(props) {
  return (
    <div className="contact">
      <motion.div
        class="text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2>{props.title}</h2>
        <h3>
          {props.subtitle1}
          <a class="contactme" href="mailto:alfredzhuang1234@gmail.com">
            {props.subtitle2}
          </a>
        </h3>
        <h3>{props.subtitle3}</h3>
      </motion.div>
    </div>
  );
}

export default ContactPage;
