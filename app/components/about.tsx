import { Box, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { educationDetails, languageDetails } from "~/data/about";
import { ExperienceListItem } from "./experienceListItem";

export const AboutContent = () => {
    return (
        <section id="about" style={{ minHeight: '100vh' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid
                    // style={{ background: 'hotpink' }}
                    size={{
                        xs: 12,
                        sm: 4,
                        md: 6,
                        lg: 6,
                    }}
                    sx={{ minHeight: 160 }}>
                    <Typography variant="h1" color="primary">About Me</Typography>
                </Grid>
                <Grid
                    // style={{ background: 'blue' }}
                    size={{
                        xs: 12,
                        sm: 4,
                        md: 6,
                        lg: 6,
                    }}
                    sx={{ minHeight: 160 }}>
                    <Typography align="justify" variant="body1" gutterBottom>
                        I began my tech journey in 2019 as Front-End Developer with a background in visual arts in
                        my hometown Guadalajara, Mexico. During my first two years in tech, I strengthened my
                        skills in React, TypeScript, and Redux, and contributed to a team responsible for
                        maintaining an internal UI library, with occasional contributions to open-source libraries
                        used as dependencies.

                    </Typography>
                    <Typography align="justify" variant="body1" gutterBottom>
                        In 2022, I moved to Germany and worked on UI development as Software Engineer and

                        later as Senior Software Engineer, successfully collaborating with international and cross-
                        cultural teams. I am dedicated to creating efficient and consistent UI systems that

                        enhance both developer productivity and user experience. With experience in maintaining
                        UI component libraries, I thrive in collaborative environments where I can guide teams,
                        address technical challenges, and ensure agile best practices are followed to drive
                        continuous improvement. I consider myself a committed and passionate professional who
                        embraces challenges and continuously seeks to learn and grow.
                    </Typography>

                </Grid>
                <Grid
                    size={{
                        xs: 12,
                        sm: 4,
                        md: 8,
                        lg: 8,
                    }} >
                    <Box>
                        <Typography color="primary">
                            Education
                        </Typography>
                        <Divider />
                        <Box
                        // style={{ background: 'pink' }}
                        >
                            <List>

                                {educationDetails.map(({ title, institution, dateRange }) => (
                                    <ExperienceListItem
                                        title={title}
                                        institution={institution}
                                        dateRange={dateRange}
                                    />
                                ))}
                            </List>
                        </Box>

                    </Box>

                </Grid>
                <Grid
                    size={{
                        xs: 12,
                        sm: 4,
                        md: 4,
                        lg: 4,
                    }}
                >
                    <Typography color="primary">
                        Languages
                    </Typography>
                    <List>
                        {languageDetails.map(({ language, level }) => (
                            <ListItem>
                                <ListItemText
                                    primary={`${language} ${level}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>

            </Grid>
        </section>
    )
}