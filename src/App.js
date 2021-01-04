import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import BarLoader from "react-spinners/BarLoader";

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: 'Alfred Zhuang',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume',}
      ],
      home: {
        title: 'Alfred Zhuang',
        subTitle: 'An Aspiring Software Engineer',
        about: {
          subTitle1: 'About me',
          subText1: 'I\'m a 19 year old Computer Science Major at Cal Poly Pomona. In 2018, I started out coding by learning Java. Since then, I\'ve expanded my pool of coding languages with Javascript and Flutter. I hope to become a SWE to put my skills to the test.',
          subText2: 'I enjoy designing and creating projects, with the goal of bringing joy and convenience for others with every application I create.',
          subText3: 'During quarantine, while also building my skills in coding, I also picked up a few hobbies that include: working out, barbering, and cooking.',
        },
        skills: {
          subTitle1: 'My Skills',
          subText1: 'I have experience using the following technologies:',
          java: 'Java',
          javascript: 'Javascript',
          react: 'React.js',
          node: 'Node.js',
          flutter: 'Flutter/Dart'
        }
      },
      projects: {
        title: 'My projects',
        zoomin: {
          title: 'Zoomin\' Discord Bot (Node.js)',
          subTitle: 'Discord.js | cron | mongoDB',
          text: 'A Discord Bot that reminds students when they have a class, or any upcoming tests and quizzes, or any homework due',
        },
        lookingForGroup: {
          title: 'Looking For Group (React.js)',
          subTitle: 'Google Firebase | Google Firestore | Google Firebase hosting',
          text: 'A website that aims to bring users together, allowing people to join or create their own groups',
        },
        twitterTracker: {
          title: 'Trieuloo Twitter Tracker (Node.js)',
          subTitle: 'Amazon AWS EC2 | twit API | nedb | Riot Games API',
          text: 'A twitter bot for a top 1% player of League of Legends that tweets out whenever they have finished a game, with a little twist in the message',
        },
        dragonfistFitness: {
          title: 'Dragonfist Fitness (Dart/Flutter)',
          subTitle: 'Google Firebase | Google Firestore',
          text: 'An android application that gives workouts for users based upon what body part they would like to exercise',
        },
        valuableVocabulary: {
          title: 'Valuable Vocabulary (Java/Swing GUI)',
          subTitle: 'Wordnik API',
          text: 'My first ever personal project. A random word generator that retrieves a word and its definition for the user',
        },
      },
      contact: {
        title: 'Let\'s Talk',
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
     }, 2000);
  }

  render() {
    return (
      this.state.loading ?
      <div className="loader">
        <div className="loading-text">
          <h6>Welcome to Alfred Zhuang's Portolio!</h6>
        </div>
        <BarLoader color={"#80ACBD"} loading={this.state.loading}/>
        <div className="loading-text">
          <h6>Loading...</h6>
        </div>
      </div>
      :
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className = "navbar navbar-dark fixed-top" bg="transparent" expand="lg">
            <Navbar.Brand>
              <Link to="/">
              <img className = "img" src="/favicon-32x32.png" alt = "AZ image"/>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text" to="/">Home</Link>
                <Link className="nav-link text" to="/projects">Projects</Link>
                <Link className="nav-link text" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} about={this.state.home.about} skills={this.state.home.skills}/>} />
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} zoomin={this.state.projects.zoomin} lookingForGroup={this.state.projects.lookingForGroup} twitterTracker={this.state.projects.twitterTracker} dragonfistFitness={this.state.projects.dragonfistFitness} valuableVocabulary={this.state.projects.valuableVocabulary}/>} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>} />

          <Footer/>

        </Container>
      </Router>
    );
  }
}

export default App;
