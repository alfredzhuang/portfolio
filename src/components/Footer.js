import React from 'react';
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {

    return (
        <footer className="footer">
            <div className = "container">
                <a class="icon" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/alfred-zhuang/">
                    <LinkedInIcon className="footer-icon"/>
                </a>
                <a class="icon" rel="noreferrer" target="_blank" href="https://github.com/alfredzhuang">
                    <GitHubIcon className="footer-icon"/>
                </a>
                <a class="icon" rel="noreferrer" target="_blank" href="mailto:alfredzhuang1234@gmail.com">
                    <EmailIcon className="footer-icon"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;