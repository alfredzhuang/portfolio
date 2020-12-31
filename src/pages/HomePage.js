import React from 'react';
import './HomePage.css';
import Button from 'react-bootstrap/Button';
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiJavascript, SiFlutter} from "react-icons/si"

function HomePage(props) {

    return(
        <div className="home">
            <div className="headline-container">
                <h1 className ="heading">{props.title}</h1>
                <h2>{props.subTitle}</h2>
                <Button size="lg" variant="outline-info" target="_blank" href="/resume.pdf" rel="noreferrer">Resume</Button>
            </div>
            <div className="about-container">
                <div className = "headline-img">
                    <img className = "img" src="/images/Alfred.jpg" alt = "Alfred image"/>
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
                    <li><FaJava className="skills-icon"/> {props.skills.java}</li>
                    <li><SiJavascript className="skills-icon"/> {props.skills.javascript}</li>
                    <li><FaReact className="skills-icon"/> {props.skills.react}</li>
                    <li><FaNodeJs className="skills-icon"/> {props.skills.node}</li>
                    <li><SiFlutter className="skills-icon"/> {props.skills.flutter}</li>
                </ul>
             </div>
        </div>
    );

}

export default HomePage;