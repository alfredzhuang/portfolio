import React from 'react';
import './ContactPage.css';

function ContactPage(props) {

    return(
        <div className="contact">
            <div className ="title">
                <h2>{props.title}</h2>
            </div>
            <div className = "text">
                <h3>Feel free to <a href="mailto:alfredzhuang1234@gmail.com">contact me</a> at any time.</h3>
            </div>
        </div>
    );

}

export default ContactPage;