import React from 'react';
import './ContactPage.css';

function ContactPage(props) {

    return(
        <div className="contact">
            <div className ="title">
                <h2>{props.title}</h2>
            </div>
            <div className = "text">
                <h3></h3>
            </div>
            <div className = "button"></div>
        </div>
    );

}

export default ContactPage;