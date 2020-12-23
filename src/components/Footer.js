import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Alfred Zhuang
                    </Col>
                    <Col className="justify-content-center" md={1}>
                        <a class="icon" target="_blank" href="https://www.linkedin.com/in/alfred-zhuang/">
                            <LinkedInIcon className="footer-icon"/>
                        </a>
                        <a class="icon" target="_blank" href="https://github.com/alfredzhuang">
                            <GitHubIcon className="footer-icon"/>
                        </a>
                        <a class="icon" target="_blank" href="mailto:alfredzhuang1234@gmail.com">
                            <EmailIcon className="footer-icon"/>
                        </a>
                    </Col> 
                    <Col className ="p-0 d-flex justify-content-end" md={3}>
                        Placeholder
                        {/* Dark mode goes here */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;