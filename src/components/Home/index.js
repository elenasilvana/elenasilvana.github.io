import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

const projects = [
    {
        name: 'Conoce Pokemón',
        img: 'https://i.postimg.cc/mZnqwf58/alola-form-kanto-pokemon-go.jpg',
        category: 'front-end'
    }
];

//<img src={projects[0].img} alt="imagen"></img>
console.log(projects[0].img);


const Home = () => (
    <container className="portfolio-container">

        <div className="portfolio-home">
            <h1>Elena Silvana</h1>
            <Link className="btn btn-outline-secondary btn-lg"  to={ROUTES.ABOUT}>About</Link>
        </div>

        <div className="navigation-widget"></div>
       

        <div className="project-list">
            <p></p>
            
            {/*projects.map((project, index)=> (
                <div>
                    <p>{project.name}</p>
                </div>

            ))*/}
        </div>
       

    </container>


);

export default Home;