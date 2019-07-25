import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import ProfesionalExperience from './profesionalExperience';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://avatarfiles.alphacoders.com/125/125495.jpg"
                                alt="avatar"
                                style={{ height: '200px' }}
                            ></img>
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Elena Silvana</h2>
                        <h4 style={{ color: 'grey' }}>Front-End Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h3>Contact Me</h3>
                        <h4>Email</h4>
                        <p>ele.silvana.c@gmail.com</p>
                        <h4>Github</h4>
                        <p>elenasilvana</p>
                        <h4>Linkedin</h4>
                        <p>elenasilvana</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2012}
                            endYear={2017}
                            schoolName="Escuela de Artes de la Secretaría de Cultura Jalisco"
                            schoolDescription="Bachelor degree on Visual Arts"
                        />
                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="Laboratoria"
                            schoolDescription="Front-End Developer"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>
                        <ProfesionalExperience
                            startYear={2019}
                            projectName='BQ Back-End'
                            projectDescription='API REST for Burger Queen WebApplication'
                        />

                        <ProfesionalExperience
                            startYear={2019}
                            projectName='Burger Queen'
                            projectDescription='WebApplication for restaurants to take orders, send the orders to the kitchen and check which orders are ready'
                        />

                        <ProfesionalExperience
                            startYear={2019}
                            projectName='Meet Pokemon'
                            projectDescription='WebApplication aimed at kids or people who want to know about Pokemon or want to learn how to play Pokemon Go'
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
