import React from 'react';
import ProjectComponent from '../ProjectComponent';
//project data
const PROJECTS = require('../../data/projects.json');
//secret-cipher

const project = PROJECTS.find((project)=>{return project.id === "secret-cipher"});
console.log(project);

const Cipher = () => (
    <div> 
    <ProjectComponent 

    description={project.description}
    name={project.name}
    deliverable={project.deliverable}
    url={project.url}
    id={project.id}
    
    />
</div>

);

export default Cipher;