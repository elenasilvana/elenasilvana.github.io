import React from 'react';
import { Grid, Cell } from 'react-mdl';

const ExperienceDetail = (props) => {
	const {position, companyName, location, description} = props.work
	return (
		<Cell col={8}>
			<div>
				<h4 style={{ marginTop: '0px' }}>
					{position} &#183; {companyName}
				</h4>
				<h5>{location}</h5>
				<span>{description}</span>
			</div>
		</Cell>
	);
};

const ProfesionalExperience = (props) => {
	const { experienceData } = props;

	const years = experienceData.map((job) => job.year).sort((a, b) => (a > b ? -1 : 0));
	return years.map((year) => {
		const workPerYear = experienceData.filter((job) => year === job.year);
		return workPerYear.map((work) => {
			return (
				<Grid>
					<Cell col={4}>
						<h4 style={{marginTop: '0px'}}>
							{work.startYear} - {work.endYear}
						</h4>
					</Cell>
					<ExperienceDetail work={work}/>
				</Grid>
			);
		});
	});
};

export default ProfesionalExperience;
