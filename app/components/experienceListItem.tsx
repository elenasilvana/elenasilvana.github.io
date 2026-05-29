import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { DividerContainer } from "~/styles/common-components";

export const ExperienceListItem = ({
    title,
    institution,
    dateRange,
    location,
    hasSingleRow,
    hasSlashDivider,
    description
}: any) => {
    const { startDate, endDate } = dateRange;
    const dateDivider = hasSlashDivider ? ' / ' : ' - ';
    const date = `${startDate} ${dateDivider} ${endDate}`
    const titleFormat = hasSingleRow ? `${title} · ${institution}` : title

    return (
        <ListItem disableGutters>
            <ListItemText
                primary={
                    <Typography variant="h4" color="secondary">
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
                           color="secondary"
                            sx={{ color: 'secondary', display: 'inline' }}
                        >
                            {titleFormat}
                        </Typography>
                        {!hasSingleRow && (
                            <Typography color="primary">
                                {institution}
                            </Typography>
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
