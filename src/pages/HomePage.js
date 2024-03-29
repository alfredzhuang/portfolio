import React from "react";
import "./HomePage.css";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

function HomePage(props) {
  return (
    <div className="home">
      <motion.div
        className="headline-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h3 class="top-subheading">{props.subTitle1}</h3>
        <h1 className="heading">{props.title}</h1>
        <h2 class="bottom-subheading">{props.subTitle2}</h2>
      </motion.div>
    </div>
  );
}

export default HomePage;
