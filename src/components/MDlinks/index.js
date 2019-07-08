import React from 'react';
import ProjectComponent from '../ProjectComponent';
//project data
const PROJECTS = require('../../data/projects.json');
//md-links

const project = PROJECTS.find((project)=>{return project.id === "md-links"});
console.log(project);

const MDlinks = () => (
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
);

export default MDlinks;