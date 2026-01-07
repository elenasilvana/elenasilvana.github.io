import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import ProfesionalExperience from './profesionalExperience';
const PROFESIONAL_EXPERIENCE = require('../data/experience.json');

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell className='resume-description' col={4}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
							<h2 style={{}}>Elena Silvana</h2>
							<h4 style={{ color: '#d9d9d9' }}>Front-End Developer</h4>
							<hr style={{ borderTop: '1px solid gray', width: '50%' }} />
              <div>
                <h3>Languages</h3>
                <span>
                  <ul>
                    <li>English fluent</li>
                    <li>Spanish native </li>
                    <li>German intermediate</li>
                  </ul>             
                </span>
              </div>
							<div>
								<h3>Contact</h3>
								<List>
									<ListItem>
										<ListItemContent style={{ color: '#9da1aa' }}>
											<a href='mailto:elena.s.casillas@gmail.com'>
												<i className='fa fa-envelope' aria-hidden='true' />
											</a>
										</ListItemContent>
									</ListItem>
									<ListItem>
										<ListItemContent style={{ color: '#9da1aa' }}>
											<a
												target='_blank'
												rel='noopener noreferrer'
												href='https://github.com/elenasilvana'
											>
												<i className='fa fa-github' aria-hidden='true' />
											</a>
										</ListItemContent>
									</ListItem>
									<ListItem>
										<ListItemContent style={{ color: '#9da1aa' }}>
											<a
												target='_blank'
												rel='noopener noreferrer'
												href='https://www.linkedin.com/in/elena-silvana-c/'
											>
												<i className='fa fa-linkedin' aria-hidden='true' />
											</a>
										</ListItemContent>
									</ListItem>
								</List>
							</div>
							<hr style={{ borderTop: '1px solid gray', width: '50%' }} />
              <div>

							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://drive.google.com/file/d/1mp9few11jKD4k_n6gv_yOpjj09zLvcF3/view?usp=sharing'
							>
								<h4>CV</h4>
							</a>
              </div>

							<hr style={{ borderTop: '1px solid gray', width: '50%' }} />
						</div>
					</Cell>
					<Cell className='resume-right-col' col={8}>
						<h3>Experience</h3>
						<ProfesionalExperience
							experienceData={PROFESIONAL_EXPERIENCE || []}
						/>
						<hr style={{ borderTop: '1px solid #16a2ab' }} />
						<h3>Education</h3>

						<Education
							startYear={2012}
							endYear={2017}
							schoolName='Escuela de Artes de la Secretaría de Cultura Jalisco'
							schoolDescription='Bachelor degree on Visual Arts'
						/>
						<Education
							startYear={2019}
							endYear={2019}
							schoolName='Laboratoria'
							schoolDescription='Front-End Developer'
						/>
					</Cell>
					<Cell className='resume-right-col' col={8}></Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
