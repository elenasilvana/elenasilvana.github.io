import React from 'react';
import ProjectComponent from '../ProjectComponent';
//project data
const PROJECTS = require('../../data/projects.json');
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
        tech={project.technologies}
        tools={project.tools}
        uexd={project.uexd}
        frontskills={project.frontskills}
        
        />
    </div>
       // <Container fluid={false} className="meetpokemon-container">
            
       // </Container>
    //))}               
    

)

export default MeetPokemon;