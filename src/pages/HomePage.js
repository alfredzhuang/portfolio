import React from 'react';
import './HomePage.css';
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiJavascript, SiFlutter, SiSkillshare } from "react-icons/si"

function HomePage(props) {

    return(
        <div className="home">
            <div className="headline-container">
                <h1 className ="heading">{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
            <div className="about-container">
                <div className = "headline-img">
                    <img className = "img" src="/images/Alfred.jpg" alt = "Alfred img"/>
                </div>
                <div className="profile">
                    <h2>{props.about.subTitle1}</h2>
                    <p>{props.about.subText1}</p>
                    <p>{props.about.subText2}</p>
                    <p>{props.about.subText3}</p>
                </div>
             </div>
             <div className="skills-container">
                <h3>{props.skills.subTitle1}</h3>
                <p>{props.skills.subText1}</p>
                <ul class="skills">
                    <li><FaJava/> {props.skills.java}</li>
                    <li><SiJavascript/> {props.skills.javascript}</li>
                    <li><FaReact/> {props.skills.react}</li>
                    <li><FaNodeJs/> {props.skills.node}</li>
                    <li><SiFlutter/> {props.skills.flutter}</li>
                </ul>
             </div>
        </div>
    );

}

export default HomePage;