import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import ShowProject from '../ShowProject';
//import Image from 'react-bootstrap/Image'

const PROJECTS = require('../../data/projects.json');



    /*  
    <div className="navigation-widget">
            <p><a href="#ES"></a>Home</p>
            {projects.map((project, key)=> (
                <p><a href={`#${project.name}`}></a>{project.name}</p>

                
            ))}
        </div>
       */

//<img src={projects[0].img} alt="imagen"></img>


const Home = () => (
    <container className="portfolio-container">

        <div className="portfolio-home container-fluid">
            <div className="row">
                <div className="col">
                        <div className="name">
                            <h1 id="ES">Elena Silvana</h1>
                        </div>
                    <p className="text-center"></p>
                    <Link className="about-botton"  to={ROUTES.ABOUT}>About</Link>
                   
                 </div>
            </div>
        </div>

       
        <div className="project-list">
        
            {PROJECTS.map((project, key)=> (
                <ShowProject
                    img={project.img}
                    name={project.name}
                    category={project.category}
                    route={project.route}
                />

            ))}
        </div>
       

    </container>


);

export default Home;