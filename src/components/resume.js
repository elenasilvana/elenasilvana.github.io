import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import ProfesionalExperience from './profesionalExperience';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-description" col={4}>
                        <h2 style={{ paddingTop: '3em' }}>Elena Silvana</h2>
                        <h4 style={{ color: '#d9d9d9' }}>Front-End Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h3>Contact Me :)!</h3>
                        <List>
                                <ListItem>
                                    <ListItemContent style={{ color: '#9da1aa' }}>
                                        <a
                                        href="mailto:ele.silvana.c@gmail.com">
                                            <i className="fa fa-envelope" aria-hidden='true' />
                                        </a>
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{color: '#9da1aa' }}>
                                        <a
                                            target="_blank"
                                            href="https://github.com/elenasilvana">
                                                <i className="fa fa-github" aria-hidden='true' />
                                        </a>
                                    </ListItemContent>
                                </ListItem><ListItem>
                                    <ListItemContent style={{ color: '#9da1aa' }}>
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/elena-silvana-c/">
                                                <i className="fa fa-linkedin" aria-hidden='true' />
                                        </a>

                                    </ListItemContent>
                                </ListItem>
                            </List>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <a target="_blank"
                        href="https://drive.google.com/open?id=17CXfyu-uVNB9Xx-8IharXbQG1mRbBEem">
                            <h4>CV</h4>
                        </a>
                        

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

                        <hr style={{ borderTop: '3px solid #16a2ab' }} />

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
