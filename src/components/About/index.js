import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

//github https://i.postimg.cc/rpr42MkP/Git-Hub-Mark-64px.png
//linkedin https://i.postimg.cc/cHGns214/makefg.png

const About = () => (
    <Container className="about-container">
        <Row>
            <Col>
            <div className="about-presentation">
                <h1>Hi, are you looking for me?</h1>
                <p>I’m Elena, I’m a front end developer
                did you like my work? get in touch</p>
            </div>
            <div className="about-icons">
                <a href="https://github.com/elenasilvana"><img className="icons-network" src="https://i.postimg.cc/rpr42MkP/Git-Hub-Mark-64px.png" alt="github-icon"></img></a>
                <a href="https://www.linkedin.com/in/elena-silvana-c/"><img className="icons-network" src="https://i.postimg.cc/cHGns214/makefg.png
        " alt="linkedin-icon"></img></a>
        <a href="https://drive.google.com/open?id=1DkWyVmRJgOgOaZo_cijDtrUH9ZIYIrlO"><img className="icons-network" src="https://www.flaticon.com/premium-icon/icons/svg/1895/1895171.svg" alt="CV icon"></img></a>
        </div>
            </Col>
        </Row>
    </Container>
);

export default About;