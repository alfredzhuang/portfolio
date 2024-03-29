import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import BarLoader from "react-spinners/BarLoader";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: "Alfred Zhuang",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        subTitle1: "Hi, I'm",
        title: "Alfred Zhuang",
        subTitle2: "Computer Science Major",
      },
      about: {
        about: {
          subTitle1: "About me",
          subText1:
            "I'm a third-year Computer Science Major at Cal Poly Pomona. In 2018, I started out coding by learning Java. Since then, I've expanded my pool of coding languages with languages such as Javascript and Python. " +
            "Currently, I am learning full stack web development and hope to one day become a SWE to put my skills to the test.",
          subText2:
            "I enjoy designing and creating projects, with the goal of bringing joy and convenience for others in every application that I create.",
          subText3:
            "Aside from coding, in my free time, I recently began pursuing hobbies such as working out, playing videogames, cutting hair, and cooking.",
        },
        skills: {
          subTitle1: "My Skills",
          subText1: "I have experience using the following technologies:",
          java: "Java",
          javascript: "Javascript",
          react: "React.js",
          node: "Node.js",
          python: "Python",
          html: "HTML",
          css: "CSS",
          graphql: "GraphQL",
          mongodb: "MongoDB",
        },
      },
      projects: {
        title: "Projects I've Worked On",
        recipeRandomizer: {
          title: "Recipe Randomizer (Python)",
          subTitle:
            "Flask | Selenium Webdriver | FPDF | Bootstrap | TheMealDB API",
          text: "A website that chooses a random recipe for the user and automates the process of adding items to the cart",
        },
        schoolE: {
          title: "School-E (HTML/CSS/Javascript)",
          subTitle: "MongoDB | Express | Fetch API | Chrome API | DOM | OAuth",
          text: "A google chrome extension that allows users to store links, emails, and access a to-do list for their courses",
        },
        bobaful: {
          title: "Bobaful (Typescript)",
          subTitle:
            "GraphQL | MongoDB | Urql | React | Chakra UI | Nextjs | Apollo | Express",
          text: "A web application project that was created as an ordering website for Bobaful",
        },
        codingJournal: {
          title: "Coding Journal (Node.js)",
          subTitle: "MongoDB | Express | EJS | Filepond | Bootstrap",
          text: "A website that allows users to keep track of their learnings and progress in coding",
        },
        zoomin: {
          title: "Zoomin' Discord Bot (Node.js)",
          subTitle: "Discord.js | cron | MongoDB",
          text: "A Discord Bot that reminds students when they have a class, or any upcoming tests and quizzes, or any homework due",
        },
        lookingForGroup: {
          title: "Looking For Group (React.js) - Built at IvyHacks 2020",
          subTitle:
            "Google Firebase | Google Firestore | Google Firebase hosting",
          text: "A website that aims to bring users together, allowing people to join or create their own groups",
        },
        twitterTracker: {
          title:
            "Trieuloo Twitter Tracker (Node.js) - Built at SillyHacks 2020 (Won Hacking With Amazon AWS)",
          subTitle: "Amazon AWS EC2 | twit API | nedb | Riot Games API",
          text: "A twitter bot created for a top 1% player of a game called League of Legends that tweets out whenever they have finished a game",
        },
        dragonfistFitness: {
          title: "Dragonfist Fitness (Dart/Flutter)",
          subTitle: "Google Firebase | Google Firestore",
          text: "An android application that gives workouts for users based upon what body part they would like to exercise",
        },
        valuableVocabulary: {
          title: "Valuable Vocabulary (Java/Swing GUI)",
          subTitle: "Wordnik API",
          text: "My first ever personal project. A random word generator that retrieves a word and its definition for the user",
        },
      },
      contact: {
        title: "Let's Talk!",
        subtitle1: "Feel free to ",
        subtitle2: "contact me",
        subtitle3: "for any inquiries or opportunities!",
      },
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    return this.state.loading ? (
      <div className="loader">
        <div className="loading-text">
          <h6>Welcome to Alfred Zhuang's Portolio!</h6>
        </div>
        <BarLoader color={"#80ACBD"} loading={this.state.loading} />
        <div className="loading-text">
          <h6>Loading...</h6>
        </div>
      </div>
    ) : (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="navbar navbar-dark fixed-top"
            bg="transparent"
            expand="lg"
          >
            <Navbar.Brand>
              <Link to="/">
                <img
                  className="img"
                  src="/favicon-32x32.png"
                  alt="Navbar Brand"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text ml-auto" to="/">
                  Home
                </Link>
                <Link className="nav-link text ml-auto" to="/about">
                  About
                </Link>
                <Link className="nav-link text ml-auto" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link text ml-auto" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle1={this.state.home.subTitle1}
                subTitle2={this.state.home.subTitle2}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <AboutPage
                about={this.state.about.about}
                skills={this.state.about.skills}
              />
            )}
          />
          <Route
            path="/projects"
            exact
            render={() => (
              <ProjectsPage
                title={this.state.projects.title}
                codingJournal={this.state.projects.codingJournal}
                zoomin={this.state.projects.zoomin}
                lookingForGroup={this.state.projects.lookingForGroup}
                twitterTracker={this.state.projects.twitterTracker}
                dragonfistFitness={this.state.projects.dragonfistFitness}
                valuableVocabulary={this.state.projects.valuableVocabulary}
                bobaful={this.state.projects.bobaful}
                schoolE={this.state.projects.schoolE}
                recipeRandomizer={this.state.projects.recipeRandomizer}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <ContactPage
                title={this.state.contact.title}
                subtitle1={this.state.contact.subtitle1}
                subtitle2={this.state.contact.subtitle2}
                subtitle3={this.state.contact.subtitle3}
              />
            )}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
