import React from 'react';
import './Footer.css'
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

function Footer() {

    return (
        <footer className="footer fixed-bottom" bg="transparent">
            <div className = "container">
                <a class="icon" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/alfred-zhuang/">
                    <SiLinkedin className="footer-icon1"/>
                </a>
                <a class="icon" rel="noreferrer" target="_blank" href="mailto:alfredzhuang1234@gmail.com">
                    <MdEmail className="footer-icon2"/>
                </a>
                <a class="icon" rel="noreferrer" target="_blank" href="https://github.com/alfredzhuang">
                    <SiGithub className="footer-icon3"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;