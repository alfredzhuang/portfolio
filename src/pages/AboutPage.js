import React from "react";
import "./AboutPage.css";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

function AboutPage(props) {
  return (
    <div className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="headline-img">
          <img className="img" src="/images/Alfred.jpg" alt="Profile Picture" />
        </div>
        <div className="profile">
          <h2>{props.about.subTitle1}</h2>
          <p>{props.about.subText1}</p>
          <p>{props.about.subText2}</p>
          <p>{props.about.subText3}</p>
        </div>
      </motion.div>
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h3>{props.skills.subTitle1}</h3>
        <p>{props.skills.subText1}</p>
        <ul class="skills">
          <li>
            <FaJava className="skills-icon" /> {props.skills.java}
          </li>
          <li>
            <SiHtml5 className="skills-icon" /> {props.skills.html}
          </li>
          <li>
            <SiCss3 className="skills-icon" /> {props.skills.css}
          </li>
          <li>
            <SiJavascript className="skills-icon" /> {props.skills.javascript}
          </li>
          <li>
            <FaReact className="skills-icon" /> {props.skills.react}
          </li>
          <li>
            <FaNodeJs className="skills-icon" /> {props.skills.node}
          </li>
          <li>
            <SiGraphql className="skills-icon" /> {props.skills.graphql}
          </li>
          <li>
            <SiMongodb className="skills-icon" /> {props.skills.mongodb}
          </li>
          <li>
            <SiFlutter className="skills-icon" /> {props.skills.flutter}
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default AboutPage;
