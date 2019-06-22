import React from 'react';

//github https://i.postimg.cc/rpr42MkP/Git-Hub-Mark-64px.png
//linkedin https://i.postimg.cc/cHGns214/makefg.png

const About = () => (
    <container className="about-container">
        <div className="about-presentation">
            <h1>Hi, are you looking for me?</h1>
            <p>I’m Elena, I’m a front end developer
                do you liked my work? get in touch</p>
        </div>
        <div className="about-icons">
        <a href="https://github.com/elenasilvana"><img className="icons-network" src="https://i.postimg.cc/rpr42MkP/Git-Hub-Mark-64px.png" alt="github-icon"></img></a>
        <a href="https://www.linkedin.com/in/elena-silvana-c/"><img className="icons-network" src="https://i.postimg.cc/cHGns214/makefg.png
" alt="linkedin-icon"></img></a>
        </div>
        <div className="about-resume">

        </div>
    </container>

);

export default About;