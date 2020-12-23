import React from 'react';
import './ProjectsPage.css';

function ProjectsPage(props) {

    return(
        <div className = "projects">
            <div className = "heading">
                <h2>{props.title}</h2>
                <p2></p2>
            </div>
            <div className = "project">
                <article>
                    <a href="https://github.com/alfredzhuang/zoomin" class = "image" target = "_blank">
                        <img src="/images/zoomin.jpg" alt = ""/>
                        <div className = "description">
                            <h4>Zoomin</h4>
                            <p>My project</p>
                        </div>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/alfredzhuang/LookingForGroup" class = "image" target = "_blank">
                        <img src="/images/lookingforgrp.jpg" alt = ""/>
                        <div className = "description">
                            <h4>Looking For Group</h4>
                            <p>My project</p>
                        </div>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/andreidimaano/TrieulooTwitterTracker" class = "image" target = "_blank">
                        <img src="/images/trieuloo.jpg" alt = ""/>
                        <div className = "description">
                            <h4>Trieuloo Twitter Tracker</h4>
                            <p>My project</p>
                        </div>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/alfredzhuang/dragon-fist-fitness" class = "image" target = "_blank">
                        <img src="/images/dragonfistfitness1.jpg" alt = ""/>
                        <img src="/images/dragonfistfitness2.jpg" alt = ""/>
                        <img src="/images/dragonfistfitness3.jpg" alt = ""/>
                        <div className = "description">
                            <h4>Dragonfist Fitness</h4>
                            <p>My project</p>
                        </div>
                    </a>
                </article>
                <article>
                    <a href="https://github.com/alfredzhuang/valuable-vocabulary" class = "image" target = "_blank">
                        <img src="/images/zoomin.jpg" alt = ""/>
                        <div className = "description">
                            <h4>Valuable Vocabulary</h4>
                            <p>My project</p>
                        </div>
                    </a>
                </article>
            </div>
        </div>
    );

}

export default ProjectsPage;