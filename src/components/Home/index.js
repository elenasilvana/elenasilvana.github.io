import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

const projects = [
    {
        name: 'Conoce Pokemón',
        img: 'https://i.postimg.cc/QCHGKmRc/1949831-1.jpg',
        category: 'front-end'
    }
];

//console.log(projects[1].img);


const Home = () => (
    <container className="portfolio-container">

        <div className="portfolio-home">
            <h1>Elena Silvana</h1>
            <Link className="btn btn-outline-secondary btn-lg"  to={ROUTES.ABOUT}>About</Link>
        </div>

        <div className="navigation-widget"></div>
       

        <div className="project-list">
            <p>proyecto</p>
            <img src="{projects[0].img}" alt="imagen"></img>
            {/*projects.map((project, index)=> (
                <div>
                    <p>{project.name}</p>
                </div>

            ))*/}
        </div>
       

    </container>


);

export default Home;