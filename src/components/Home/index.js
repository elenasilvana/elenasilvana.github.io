import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

const projects = [
    {
        name: 'Conoce Pokemón',
        img: 'https://i.postimg.cc/mZnqwf58/alola-form-kanto-pokemon-go.jpg',
        category: 'front-end',
        deliverable: 'WebApplication'

    }
];

//<img src={projects[0].img} alt="imagen"></img>
console.log(projects[0].img);


const Home = () => (
    <container className="portfolio-container">

        <div className="portfolio-home">
            <h1 id="ES">Elena Silvana</h1>
            <p>hola mundo</p>
            <Link className="btn btn-light btn-lg about-botton"  to={ROUTES.ABOUT}>About</Link>
        </div>

        <div className="navigation-widget">
            <p><a href="#ES"></a>Home</p>
            {projects.map((project, key)=> (
                <p><a href={`#${project.name}`}></a>{project.name}</p>

                
            ))}
        </div>
       

        <div className="project-list">
            <p></p>
            
            {projects.map((project, key)=> (
                <div className="project-card">
                    <div className="project-img" style={{backgroundImage: "url(" + project.img + ")"}}>
                    <p id="project.name">{project.name}</p>
                    <p>{project.deliverable}</p>
                    </div>
                </div>

            ))}
        </div>
       

    </container>


);

export default Home;