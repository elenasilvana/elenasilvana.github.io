import { Box, Divider, Grid, List, Typography } from "@mui/material";
import { ExperienceListItem } from "./experienceListItem";
import { professionalExperience } from "~/data/experience";

const sortedExperience = professionalExperience.sort((a, b) => { return a.startDate > b.startDate ? -1 : 0 })

export const ExperienceContent = () => {
	return (
		<section
			id='experience'
			style={{
				minHeight: '100vh',

			}}
		>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			>
				<Grid
					size={{
						xs: 12,
						sm: 8,
						md: 12,
						lg: 6,
					}}
					sx={{ minHeight: 160 }}>
					<Typography variant="h2" color="primary">Experience</Typography>
				</Grid>
				<Grid
					size={{
						xs: 12,
						sm: 11,
						md: 12,
						lg: 6,
					}}
					sx={{ minHeight: 160 }}>
					<Box>
						<List>
							{sortedExperience.map(({
								position,
								startDate,
								endDate,
								companyName,
								location,
								description
							}) => (
								<ExperienceListItem
									title={position}
									institution={companyName}
									dateRange={{ startDate, endDate }}
									location={location}
									hasSingleRow
									hasSlashDivider
									description={description}
								/>
							))}
						</List>
					</Box>
				</Grid>
				<Grid size={12}
					sx={{ minHeight: 160 }}>
					<Divider />
				</Grid>
			</Grid>
		</section>
	);
};
