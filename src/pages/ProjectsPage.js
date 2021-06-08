import React from "react";
import "./ProjectsPage.css";
import { motion } from "framer-motion";

function ProjectsPage(props) {
  return (
    <div className="projects">
      <motion.div
        className="project-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2>{props.title}</h2>
        <p2></p2>
      </motion.div>
      <motion.div
        className="project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <article>
          <a
            href="https://github.com/alfredzhuang/recipe-randomizer"
            class="image"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/reciperandomizer.jpg" alt="Recipe Randomizer" />
          </a>
          <div className="description">
            <h4>{props.recipeRandomizer.title}</h4>
            <h6>{props.recipeRandomizer.subTitle}</h6>
            <p>{props.recipeRandomizer.text}</p>
          </div>
        </article>
        <article>
          <a
            href="https://github.com/andreidimaano/Bobaful"
            class="image"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/bobaful.jpg" alt="Bobaful" />
          </a>
          <div className="description">
            <h4>{props.bobaful.title}</h4>
            <h6>{props.bobaful.subTitle}</h6>
            <p>{props.bobaful.text}</p>
          </div>
        </article>
        <article>
          <a
            href="https://github.com/alfredzhuang/school-e"
            class="image"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/schoole.jpg" alt="School-E" />
          </a>
          <div className="description">
            <h4>{props.schoolE.title}</h4>
            <h6>{props.schoolE.subTitle}</h6>
            <p>{props.schoolE.text}</p>
          </div>
        </article>
        <article>
          <a
            href="https://github.com/alfredzhuang/coding-journal"
            class="image"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/codingjournal.jpg" alt="Coding Journal" />
          </a>
          <div className="description">
            <h4>{props.codingJournal.title}</h4>
            <h6>{props.codingJournal.subTitle}</h6>
            <p>{props.codingJournal.text}</p>
          </div>
        </article>
        <article>
          <a
            href="https://github.com/alfredzhuang/zoomin"
            class="image"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/zoomin.jpg" alt="Zoomin" />
          </a>
          <div className="description">
            <h4>{props.zoomin.title}</h4>
            <h6>{props.zoomin.subTitle}</h6>
            <p>{props.zoomin.text}</p>
          </div>
        </article>
        <article>
          <a
            href="https://github.com/alfredzhuang/LookingForGroup"
            class="image"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/lookingforgrp.jpg" alt="Looking For Group" />
          </a>
          <div className="description">
            <h4>{props.lookingForGroup.title}</h4>
            <h6>{props.lookingForGroup.subTitle}</h6>
            <p>{props.lookingForGroup.text}</p>
          </div>
        </article>
        <article>
          <a
            href="https://github.com/andreidimaano/TrieulooTwitterTracker"
            class="image"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/trieuloo.jpg" alt="Trieuloo Twitter Tracker" />
          </a>
          <div className="description">
            <h4>{props.twitterTracker.title}</h4>
            <h6>{props.twitterTracker.subTitle}</h6>
            <p>{props.twitterTracker.text}</p>
          </div>
        </article>
        <article>
          <a
            href="https://github.com/alfredzhuang/dragonfist-fitness"
            class="image1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/dragonfistfitness1.jpg"
              alt="Dragonfist Fitness 1"
            />
            <img
              src="/images/dragonfistfitness2.jpg"
              alt="Dragonfist Fitness 2"
            />
            <img
              src="/images/dragonfistfitness3.jpg"
              alt="Dragonfist Fitness 3"
            />
          </a>
          <div className="description">
            <h4>{props.dragonfistFitness.title}</h4>
            <h6>{props.dragonfistFitness.subTitle}</h6>
            <p>{props.dragonfistFitness.text}</p>
          </div>
        </article>
        <article>
          <a
            href="https://github.com/alfredzhuang/valuable-vocabulary"
            class="image"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/valuablevocabulary.jpg"
              alt="Valuable Vocabulary"
            />
          </a>
          <div className="description">
            <h4>{props.valuableVocabulary.title}</h4>
            <h6>{props.valuableVocabulary.subTitle}</h6>
            <p>{props.valuableVocabulary.text}</p>
          </div>
        </article>
      </motion.div>
    </div>
  );
}

export default ProjectsPage;
