import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

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
    const dateDivider = hasSlashDivider ? '/' : '-';
    const date = `${startDate} ${dateDivider} ${endDate}`
    const dot = '·'
    const titleFormat = hasSingleRow ? `${title} ${dot} ${institution}` : title

    return (
        <ListItem>
            <ListItemText
                primary={
                    <Typography variant="h4" color="secondary">
                        {date}
                    </Typography>
                }
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body1"
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
                            <Typography>
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
