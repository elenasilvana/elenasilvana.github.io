import { Box, Chip, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { educationDetails, languageDetails, methodologies, softSkills, technologies } from "~/data/about";
import { ExperienceListItem } from "./experienceListItem";
import { Language, School } from "@mui/icons-material";
import { IconContainer } from "~/styles/common-components";

export const AboutContent = () => {
    return (
        <section id="about" style={{ minHeight: '100vh' }}>
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
                    <Box style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <Box component="span">
                            <Typography sx={{ fontWeight: 'bold' }} variant="h2" color="primary">Elena Silvana</Typography>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h2" color="secondary">Casillas</Typography>
                        </Box>
                        <Box component="span">
                            <Typography sx={{ fontWeight: 'bold' }} variant="h3">Front-End</Typography>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h3" style={{ background: 'purple' }}>Developer</Typography>
                        </Box>

                    </Box>
                    <Typography variant="h2" color="primary">About Me</Typography>
                </Grid>
                <Grid
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
                        <Box style={{ display: 'flex' }}>
                            <IconContainer>

                                <School color="secondary" />
                            </IconContainer>
                            <Typography color="secondary">
                                Education
                            </Typography>

                        </Box>
                        <Box
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
                    <Box>
                        <Box style={{ display: 'flex' }}>
                            <IconContainer>

                                <Language color="secondary" />
                            </IconContainer>
                            <Typography color="secondary">
                                Languages
                            </Typography>
                        </Box>
                        <Box>

                            <List>
                                {languageDetails.map(({ language, level }) => (
                                    <ListItem disableGutters disablePadding>
                                        <ListItemText
                                            primary={`${language} ${level}`}
                                        />
                                    </ListItem>
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
                    }} >
                    <Box>
                        <Box style={{ display: 'flex' }}>
                            <Typography color="secondary">
                                Softskills
                            </Typography>

                        </Box>
                        <Box
                        >
                            {softSkills.map((skill) => (
                                <ListItem disableGutters >
                                     <Chip label={skill} variant="outlined" color="secondary" size="small" />
                                    {/* <ListItemText primary={skill} /> */}
                                </ListItem>
                            ))}

                        </Box>

                    </Box>
                </Grid>
                <Grid
                    size={{
                        xs: 12,
                        sm: 4,
                        md: 4,
                        lg: 4,
                    }} >
                    <Box>
                        <Box style={{ display: 'flex' }}>
                            <Typography color="secondary">
                                Technologies
                            </Typography>

                        </Box>
                        <Box
                        >
                            <List>
                                {technologies.map((technology) => (
                                    <ListItem disableGutters >
                                        <Chip label={technology} variant="outlined" color="secondary" size="small" />
                                    </ListItem>
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
                    }} >
                    <Box>
                        <Box style={{ display: 'flex' }}>
                            <Typography color="secondary">
                                Methodologies
                            </Typography>

                        </Box>
                        <Box
                        >
                            {methodologies.map((methodology) => (
                                <ListItem disableGutters >
                                    <Chip label={methodology} variant="outlined" color="secondary" size="small" />
                                </ListItem>
                            ))}
                        </Box>

                    </Box>
                </Grid>
                <Grid size={12}
                    sx={{ minHeight: 160 }}>
                    <Divider />
                </Grid>
            </Grid>
        </section>
    )
}