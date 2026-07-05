import { Box, Chip, Divider, Grid, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material"
import { educationDetails, languageDetails, methodologies, softSkills, technologies } from "../data/about";
import { ExperienceListItem } from "./experienceListItem";
import { Language, School } from "@mui/icons-material";
import { Container, IconContainer, TransformedTypography } from "../styles/common-components";
import { Sections } from "../sections";

export const AboutContent = () => {
    const theme = useTheme()
   
    return (
        <section id={Sections.about}>
          <Grid container rowSpacing={2}
                columnSpacing={3}
            >
                   <Grid size={12}
                    sx={{ minHeight: 10}}>
                  
                </Grid>

                <Grid
                    size={{
                        xs: 12,
                        sm: 8,
                        md: 6,
                        lg: 6,
                    }}
                    sx={{ minHeight: 160 }}>
                    <Typography variant="h2" color="primary">About Me</Typography>
                </Grid>
                <Grid
                    size={{
                        xs: 12,
                        sm: 11,
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
                        sm: 8,
                        md: 8,
                        lg: 8,
                    }} >
                    <Box>
                        <Container flex>
                            <IconContainer>
                                <School fontSize="large" 
                                    color={theme.palette.mistlavander.main}
                                 />
                            </IconContainer>
                            <Typography variant="overline" color="primary">
                                Education
                            </Typography>
                        </Container>
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
                        <Container flex>
                            <IconContainer>

                                <Language fontSize="large" 
                                    color={theme.palette.mistlavander.main} 
                                />
                            </IconContainer>
                            <Typography variant="overline" color="primary">
                                Languages
                            </Typography>
                        </Container>
                        <Box>

                            <List>
                                {languageDetails.map(({ language, level }) => (
                                    <ListItem disableGutters disablePadding>
                                        <ListItemText
                                            primary={
                                                <TransformedTypography textTransform="capitalize">
                                                    {`${language} ${level}`}
                                                </TransformedTypography>
                                            }
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
                        <Container flex>
                            <Typography variant="overline" color="primary">
                                Softskills
                            </Typography>

                        </Container>
                        <Box
                        >
                            {softSkills.map((skill) => (
                                <ListItem disableGutters >
                                    <Chip label={skill} variant="outlined" color="secondary" size="small" />
                       
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
                        <Container flex>
                            <Typography variant="overline" color="primary">
                                Technologies
                            </Typography>

                        </Container>
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
                        <Container flex>
                            <Typography variant="overline" color="primary">
                                Methodologies
                            </Typography>

                        </Container>
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