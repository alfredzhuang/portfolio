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
                    <a href="https://github.com/alfredzhuang/zoomin" class = "image" target = "_blank" rel="noreferrer">
                        <img src="/images/zoomin.jpg" alt = ""/>
                    </a>
                    <div className = "description">
                            <h4>{props.zoomin.title}</h4>
                            <p>{props.zoomin.text}</p>
                        </div>
                </article>
                <article>
                    <a href="https://github.com/alfredzhuang/LookingForGroup" class = "image" target = "_blank" rel="noreferrer">
                        <img src="/images/lookingforgrp.jpg" alt = ""/>
                    </a>
                    <div className = "description">
                            <h4>{props.lookingForGroup.title}</h4>
                            <p>{props.lookingForGroup.text}</p>
                        </div>
                </article>
                <article>
                    <a href="https://github.com/andreidimaano/TrieulooTwitterTracker" class = "image" target = "_blank" rel="noreferrer">
                        <img src="/images/trieuloo.jpg" alt = ""/>
                    </a>
                    <div className = "description">
                            <h4>{props.twitterTracker.title}</h4>
                            <p>{props.twitterTracker.text}</p>
                        </div>
                </article>
                <article>
                    <a href="https://github.com/alfredzhuang/dragon-fist-fitness" class = "image1" target = "_blank" rel="noreferrer">
                        <img src="/images/dragonfistfitness1.jpg" alt = ""/>
                        <img src="/images/dragonfistfitness2.jpg" alt = ""/>
                        <img src="/images/dragonfistfitness3.jpg" alt = ""/>
                    </a>
                    <div className = "description">
                            <h4>{props.dragonfistFitness.title}</h4>
                            <p>{props.dragonfistFitness.text}</p>
                        </div>
                </article>
                <article>
                    <a href="https://github.com/alfredzhuang/valuable-vocabulary" class = "image" target = "_blank" rel="noreferrer">
                        <img src="/images/valuableVocabulary.jpg" alt = ""/>
                    </a>
                    <div className = "description">
                            <h4>{props.valuableVocabulary.title}</h4>
                            <p>{props.valuableVocabulary.text}</p>
                        </div>
                </article>
            </div>
        </div>
    );

}

export default ProjectsPage;