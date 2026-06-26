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
    description, 
    hasColorDivider,
}: any) => {
    const theme = useTheme()
    const { startDate, endDate } = dateRange;
    const dateDivider = hasSlashDivider ? ' / ' : ' - ';
    const date = `${startDate} ${dateDivider} ${endDate}`
    const titleFormat = hasSingleRow ? `${title} · ${institution}` : title
    const palette = theme.palette;

    return (
        <ListItem disableGutters>
            <ListItemText
                primary={
                    <Typography style={{fontWeight: 'bold', fontSize: '1.2rem', color: theme.palette.mistlavander.main}}>
                        {startDate}
                        <DividerContainer color={hasColorDivider ? palette.primary.main : undefined} component="span">
                            {dateDivider}
                        </DividerContainer>
                        {endDate}
                    </Typography>
                }
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            sx={{ display: 'inline', color: hasSingleRow ? palette.primary.main : palette.text.primary  }}
                        >
                            {titleFormat}
                        </Typography>
                        {!hasSingleRow && (
                            <TransformedTypography textTransform="uppercase" fontStyle="italic" color={palette.primary.main}>
                                {institution}
                            </TransformedTypography>
                        )}
                        {location && (
                            <Typography color="secondary">
                                {location}
                            </Typography>
                        )}
                        {description && (
                            <Typography color="textPrimary">
                                {description}
                            </Typography>
                        )}
                    </React.Fragment>
                }
            />
        </ListItem>
    )

}
