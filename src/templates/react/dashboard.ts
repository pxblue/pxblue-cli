export const DASHBOARD = `import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, List } from '@material-ui/core';
import { Menu as MenuIcon, MoreVert, Alarm, Info as InfoIcon, Cloud, Bookmark } from '@material-ui/icons';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Spacer, ScoreCard, InfoListItem } from '@pxblue/react-components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            padding: \`0 \${theme.spacing(2)}px\`,
        },
        title: {
            marginLeft: theme.spacing(2),
        },
        bodyContent: {
            padding: \`\${theme.spacing(3)}px \${theme.spacing(2)}px\`,
        },
        scorecard: {
            width: 320,
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
            display: 'inline-block',
        },
        scorecardListItem: {
            height: theme.spacing(4.5),
        },
        accordionSummary: {
            color: theme.palette.primary.main,
            height: theme.spacing(6),
            '&.MuiAccordionSummary-root.Mui-expanded': {
                minHeight: theme.spacing(6),
            },
        },
        accordion: {
            marginTop: theme.spacing(2),
        },
    })
);

const DashboardPage: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <>
            {/* App Bar */}
            <AppBar position={'sticky'} color={'primary'}>
                <Toolbar className={classes.toolbar}>
                    <IconButton color={'inherit'} edge={'start'}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant={'h6'} className={classes.title}>
                        Dashboard
                    </Typography>
                    <Spacer flex={1} />
                    <IconButton color={'inherit'} edge={'end'}>
                        <MoreVert />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* Body Content */}
            <div className={classes.bodyContent}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ScoreCard
                        headerTitle={'Station 42'}
                        headerSubtitle={'1 Device Running, 32 Active'}
                        headerInfo={'Normal'}
                        className={classes.scorecard}
                        actionItems={[<Bookmark key={'view-more'} />]}
                    >
                        <List>
                            <InfoListItem
                                dense
                                icon={<InfoIcon />}
                                title={'1 Event'}
                                className={classes.scorecardListItem}
                            />
                            <InfoListItem
                                dense
                                icon={<Alarm />}
                                title={'2 Alerts'}
                                className={classes.scorecardListItem}
                            />
                            <InfoListItem
                                dense
                                icon={<Cloud />}
                                title={'Online'}
                                className={classes.scorecardListItem}
                            />
                        </List>
                    </ScoreCard>
                    <ScoreCard
                        headerTitle={'Station 43'}
                        headerSubtitle={'1 Device Running, 32 Active'}
                        headerInfo={'Alert'}
                        headerColor={theme.palette.error.main}
                        className={classes.scorecard}
                        actionItems={[<Bookmark key={'view-more'} />]}
                    >
                        <List>
                            <InfoListItem
                                dense
                                icon={<InfoIcon />}
                                title={'1 Event'}
                                className={classes.scorecardListItem}
                            />
                            <InfoListItem
                                dense
                                icon={<Alarm />}
                                title={'2 Alerts'}
                                className={classes.scorecardListItem}
                            />
                            <InfoListItem
                                dense
                                icon={<Cloud />}
                                title={'Online'}
                                className={classes.scorecardListItem}
                            />
                        </List>
                    </ScoreCard>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
`;
