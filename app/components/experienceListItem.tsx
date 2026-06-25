import { Box, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import React from "react";
import { DividerContainer, TransformedTypography } from "~/styles/common-components";

export const ExperienceListItem = ({
    title,
    institution,
    dateRange,
    location,
    hasSingleRow,
    hasSlashDivider,
    description
}: any) => {
    const theme = useTheme()
    const { startDate, endDate } = dateRange;
    const dateDivider = hasSlashDivider ? ' / ' : ' - ';
    const date = `${startDate} ${dateDivider} ${endDate}`
    const titleFormat = hasSingleRow ? `${title} · ${institution}` : title

    return (
        <ListItem disableGutters>
            <ListItemText
                primary={
                    <Typography style={{fontWeight: 'bold', fontSize: '1.2rem'}} color={theme.palette.mistlavander.main}>
                        {startDate}
                        <DividerContainer component="span">
                            {dateDivider}
                        </DividerContainer>
                        {endDate}
                    </Typography>
                }
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                          
                            sx={{ color: 'secondary', display: 'inline' }}
                        >
                            {titleFormat}
                        </Typography>
                        {!hasSingleRow && (
                            <TransformedTypography textTransform="uppercase" fontStyle="italic" color="primary">
                                {institution}
                            </TransformedTypography>
                        )}
                        {location && (
                            <Typography color="secondary">
                                {location}
                            </Typography>
                        )}
                        {description && (
                            <Typography>
                                {description}
                            </Typography>
                        )}
                    </React.Fragment>
                }
            />
        </ListItem>
    )

}
