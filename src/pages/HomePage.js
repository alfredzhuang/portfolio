import React from 'react';
import './HomePage.css';
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion";

function HomePage(props) {

    return(
        <div className="home">
            <motion.div className="headline-container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <h1 className ="heading">{props.title}</h1>
                <h2>{props.subTitle}</h2>
                <Button class="btn" size="lg" variant="outline-info" target="_blank" href="/resume.pdf" rel="noreferrer">My Resume</Button>
            </motion.div>
        </div>
    );

}

export default HomePage;