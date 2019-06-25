import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import ShowProject from '../ShowProject';

const projects = [
    {
        name: 'Conoce Pokemón',
        img: 'https://i.postimg.cc/mZnqwf58/alola-form-kanto-pokemon-go.jpg',
        category: 'front-end',
        deliverable: 'WebApplication'

    }
];

/*  <div className="navigation-widget">
            <p><a href="#ES"></a>Home</p>
            {projects.map((project, key)=> (
                <p><a href={`#${project.name}`}></a>{project.name}</p>

                
            ))}
        </div>
       */

//<img src={projects[0].img} alt="imagen"></img>
console.log(projects[0].img);


const Home = () => (
    <container className="portfolio-container">

        <div className="portfolio-home container-fluid">
            <div className="row">
                <div className="col">
                        <div className="name">
                            <h1 id="ES">Elena Silvana</h1>
                        </div>
                    <p className="text-center">hola mundo</p>
                    <Link className=""  to={ROUTES.ABOUT}>About</Link>
                </div>
            </div>
        </div>

       

        <div className="project-list">
        
            {projects.map((project, key)=> (
                <ShowProject
                    img={project.img}
                    name={project.name}
                    deliverable={project.deliverable}
                />

            ))}
        </div>
       

    </container>


);

export default Home;