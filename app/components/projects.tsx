import { Box, Card, CardActions, CardContent, CardMedia, Chip, Divider, Grid, Link, Typography } from "@mui/material"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { projects } from "~/data/projects";
import { CarousselComponent } from "./caroussel";
import { ProjectCard } from "./projectCard";

// const CarousselComponent = ({itemsList}: any) => {
// 	var settings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		fade: true,
//   		cssEase: 'linear'
// 	};
// 	return (
// 		<Slider {...settings}>
// 			{
// 				itemsList()
// 			}
// 		</Slider>
// 	);
// }

// const ProjectCard = ({ img, title, description, primaryTechnology, technologies, demoUrl }: any) => {
// 	return (
// 		<Card sx={{ maxWidth: 340 }}>
// 			<Box style={{ display: 'flex', justifyContent: 'center', paddingTop: 16 }}>
// 				<CardMedia
// 					sx={{ objectFit: 'cover', width: 140, borderRadius: 7 }}
// 					component="img"
// 					alt={title}
// 					height="140"
// 					image={img}
// 				/>
// 			</Box>
// 			<CardContent>
// 				<Typography gutterBottom variant="h3" component="div">
// 					{title}
// 				</Typography>
// 				<Divider />
// 				<Typography variant="body1" sx={{ color: 'text.secondary' }}>
// 					{description}
// 				</Typography>
// 				<Box>
// 					<Typography>{primaryTechnology}</Typography>
// 					<Box>
// 						{technologies && technologies.length > 0 && technologies.map((e) => (<Chip label={e} variant="outlined" color="secondary" size="small" />))}
// 					</Box>
// 				</Box>
// 			</CardContent>
// 			<CardActions>
// 				{demoUrl && (
// 					<Link href={demoUrl} underline="hover" target="_blank" rel="noopener">
// 						Live Demo
// 					</Link>

// 				)}
// 			</CardActions>
// 		</Card>
// 	)
// }

export const ProjectsContent = () => {
	return (
		<section id="projects" style={{ minHeight: '100vh' }}>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			>
				<Grid
					size={{
						xs: 12,
						sm: 4,
						md: 6,
						lg: 6,
					}}
					sx={{ minHeight: 160 }}>
					<Typography variant="h2" color="primary">Projects</Typography>
				</Grid>
				<Grid
					size={{
						xs: 12,
						sm: 4,
						md: 6,
						lg: 6,
					}}
					sx={{ minHeight: 160 }}>
					<Box>
						<CarousselComponent itemsList={() => projects.map(({ title, img, description, url, technologies }) => (
							<ProjectCard
								img={img}
								title={title}
								description={description}
								technologies={technologies}
								demoUrl={url}
							/>))} />
					</Box>
				</Grid>
			</Grid>
		</section>
	)
}