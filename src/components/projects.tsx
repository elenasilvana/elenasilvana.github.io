import { Grid, Typography } from "@mui/material"
import { projects } from "../data/projects";
import { ProjectCard } from "./projectCard";
import { CarousselComponent } from "./caroussel";
import { Sections } from "../sections";

export const ProjectsContent = () => {
	return (
		<section id={Sections.projects} >
			<Grid sx={{ minHeight: '80vh',}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			>
				<Grid size={12}
					sx={{ minHeight: 160 }}>
				</Grid>
				<Grid
					size={{
						xs: 12,
						sm: 8,
						md: 5,
						lg: 6,
					}}
					sx={{ minHeight: 160 }}>
					<Typography variant="h2" color="primary">Projects</Typography>
				</Grid>
				<Grid
					size={{
						xs: 1,
						sm: 2,
						md: 1,
						lg: 1,
					}}
					sx={{ minHeight: 160 }}>

				</Grid>
				<Grid
					size={{
						xs: 10,
						sm: 8,
						md: 5,
						lg: 5,
					}}
					sx={{ minHeight: 160 }}>


					<CarousselComponent
						itemsList={() => projects.map(({ title, img, description, url, technologies }) => (
							<ProjectCard
								img={img}
								title={title}
								description={description}
								technologies={technologies}
								demoUrl={url}
							/>))}
					/>
				</Grid>
				<Grid
					size={{
						xs: 1,
						sm: 2,
						md: 2,
						lg: 2,
					}}
					sx={{ minHeight: 160 }}>

				</Grid>
			</Grid>
		</section>
	)
}