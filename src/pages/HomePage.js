import React from 'react';
import './HomePage.css';

function HomePage(props) {

    return(
        <div className="home">
            <div className="headline">
                <h2 className ="heading">{props.title}</h2>
                <div className = "headline-img">
                    <img className = "img" src="/images/Alfred.jpg" alt = "Alfred img"/>
                </div>
            </div>
            <div className="about">
                <h3 className="heading">{props.subTitle}</h3>
            </div>
        </div>
    );

}

export default HomePage;