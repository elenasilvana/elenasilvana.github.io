import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UnderConstruction from '../UnderConstruction';

import ProjectComponent from '../ProjectComponent';

const PROJECTS = require('../../data/projects.json');
//console.log('desde meed pokemon', PROJECTS);
//meet-pokemon

//.description .name .deliverable .url
//console.log(PROJECTS.find((project)=>{return project.id === "meet-pokemon"}));

const project = PROJECTS.find((project)=>{return project.id === "meet-pokemon"});
console.log(project);

const MeetPokemon = () => (
    <div> 
        <ProjectComponent 

        description={project.description}
        name={project.name}
        deliverable={project.deliverable}
        url={project.url}
        id={project.id}
        
        />
    </div>
       // <Container fluid={false} className="meetpokemon-container">
            
       // </Container>
    //))}               
    

)

export default MeetPokemon;