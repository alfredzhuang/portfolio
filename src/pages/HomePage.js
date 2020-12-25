import React from 'react';
import './HomePage.css';

function HomePage(props) {

    return(
        <div className="home">
            <div className="headline-container">
                <h1 className ="heading">{props.title}</h1>
                <h2>Software Engineer</h2>
            </div>
            <div className="about-container">
                <div className = "headline-img">
                    <img className = "img" src="/images/Alfred.jpg" alt = "Alfred img"/>
                </div>
                <div className="profile">
                    <h2>{props.subTitle}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor. Iaculis nunc sed augue lacus viverra vitae. Ultricies leo integer malesuada nunc vel risus commodo viverra. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Sed vulputate mi sit amet mauris commodo. Quam quisque id diam vel. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Sagittis purus sit amet volutpat consequat mauris nunc. Mattis nunc sed blandit libero. Praesent elementum facilisis leo vel fringilla est. Sed risus ultricies tristique nulla aliquet enim. Imperdiet proin fermentum leo vel orci porta non.</p>
                </div>
             </div>
             <div className="skills-container">
                <h3>My Skills</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor. Iaculis nunc sed augue lacus viverra vitae. Ultricies leo integer malesuada nunc vel risus commodo viverra. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Sed vulputate mi sit amet mauris commodo. Quam quisque id diam vel. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Sagittis purus sit amet volutpat consequat mauris nunc. Mattis nunc sed blandit libero. Praesent elementum facilisis leo vel fringilla est. Sed risus ultricies tristique nulla aliquet enim. Imperdiet proin fermentum leo vel orci porta non.</p>
             </div>
        </div>
    );

}

export default HomePage;