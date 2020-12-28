import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
          subTitle: '',
          text: '',
        },
        lookingForGroup: {
          title: 'Looking For Group (React.js)',
          subTitle: '',
          text: '',
        },
        twitterTracker: {
          title: 'Trieuloo Twitter Tracker (Node.js)',
          subTitle: '',
          text: '',
        },
        dragonfistFitness: {
          title: 'Dragonfist Fitness (Dart/Flutter)',
          subTitle: '',
          text: '',
        },
        valuableVocabulary: {
          title: 'Valuable Vocabulary (Java/Swing GUI)',
          subTitle: '',
          text: '',
        },
      },
      contact: {
        title: 'Let\'s Talk',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className = "navbar navbar-dark fixed-top" bg="transparent" expand="lg">
            <Navbar.Brand>
              <Link to="/">
              <img className = "img" src="/favicon-32x32.png" alt = "AZ img"/>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Form inline>
                  <Button variant="outline-info" target="_blank" href="/resume.pdf" rel="noreferrer">Resume</Button>
                </Form>
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
