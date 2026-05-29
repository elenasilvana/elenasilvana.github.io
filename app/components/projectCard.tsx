import { Box, Card, CardActions, CardContent, CardMedia, Chip, Divider, Link, Typography } from "@mui/material"

export const ProjectCard = ({ img, title, description, primaryTechnology, technologies, demoUrl }: any) => {
    return (
        <Card sx={{ maxWidth: 340 }}>
            <Box style={{ display: 'flex', justifyContent: 'center', paddingTop: 16 }}>
                <CardMedia
                    sx={{ objectFit: 'cover', width: 140, borderRadius: 7 }}
                    component="img"
                    alt={title}
                    height="140"
                    image={img}
                />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {title}
                </Typography>
                <Divider />
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
                <Box>
                    <Typography>{primaryTechnology}</Typography>
                    <Box>
                        {technologies && technologies.length > 0 && technologies.map((e) => (<Chip label={e} variant="outlined" color="secondary" size="small" />))}
                    </Box>
                </Box>
            </CardContent>
            <CardActions>
                {demoUrl && (
                    <Link href={demoUrl} underline="hover" target="_blank" rel="noopener">
                        Live Demo
                    </Link>

                )}
            </CardActions>
        </Card>
    )
}