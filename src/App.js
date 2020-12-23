import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Alfred Zhuang',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume', path: '/resume' }
      ],
      home: {
        title: 'My Portfolio',
        subTitle: 'About me',
      },
      projects: {
        title: 'My projects',
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

          <Navbar className = "border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>AZ</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>} />
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.home.title}/>} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.home.title}/>} />
          <Route path="/resume" exact render={() => <ResumePage title={this.state.home.title}/>} />

          <Footer/>

        </Container>
      </Router>
    );
  }
}

export default App;
