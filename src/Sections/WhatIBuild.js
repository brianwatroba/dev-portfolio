import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import Section from "../Components/Section";
import AppExample from "../Components/AppExample";
import Testimonial from "../Components/Testimonial";

import spyfallPhone from "../Images/spyfallphone.png";
import loveQuotesPhone from "../Images/lovequotesphone.png";
import tfyPhone from "../Images/tfyphone.png";
import pipelinePhone from "../Images/pipelinephone.png";

import videoGamesEmoji from "../Images/videogamesemoji.png";

import nodeJsLogo from "../Images/Logos/nodejslogo.png";
import railsLogo from "../Images/Logos/railslogo.png";
import reactLogo from "../Images/Logos/reactlogo.jpg";
import bootstrapLogo from "../Images/Logos/bootstraplogotwo.png";
import redisLogo from "../Images/Logos/redislogo.png";
import ejsLogo from "../Images/Logos/ejslogo.png";
import postgresLogo from "../Images/Logos/postgreslogo.png";
import materialUiLogo from "../Images/Logos/materialuilogo.png";
import mongoDbLogo from "../Images/Logos/mongodblogo.png";
import herokuLogo from "../Images/Logos/herokulogofour.png";
import nextjsLogo from "../Images/Logos/nextjslogo.png";
import firebaseLogo from "../Images/Logos/firebaselogo.png";
import dockerLogo from "../Images/Logos/dockerlogo.png";
import tailwindLogo from "../Images/Logos/tailwindlogo.png";

const useStyles = makeStyles((theme) => ({
    appExampleDiv: {
        marginTop: theme.spacing(6),
    },
    mauNumber: {
        textAlign: "center",
        color: "black",
        fontWeight: "700",
        fontFamily: "roboto",
    },
    mauText: {
        textAlign: "center",
        marginTop: theme.spacing(0),
        color: "#989898",
        fontFamily: "open sans",
    },
    ownershipTitle: {
        // paddingTop: theme.spacing(2),
        // paddingBottom: theme.spacing(2),
        // paddingRight: theme.spacing(5),
        // paddingLeft: theme.spacing(5),
        borderRadius: "4px",
        // backgroundColor: "#FFEDD2",
        display: "flex",
        color: "#B0B0B0",
        alignItems: "center",
        justfiyContent: "center",
        fontWeight: 900,
        fontFamily: "roboto",
        marginBottom: theme.spacing(1),
    },
    emoji: {
        width: "30px",
        marginRight: theme.spacing(1),
    },
    divider: {
        width: "150px",
        height: "2px",
        backgroundColor: "#808080",
        marginBottom: theme.spacing(2),
    },
}));

const WhatIBuild = () => {
    const classes = useStyles();

    return (
        <Section
            title={"what i build"}
            backgroundColor={"#FFFFFF"}
            id="whatIBuild"
        >
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
            >
                <Grid item>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    ></div>
                </Grid>
                <Grid item className={classes.mauText}>
                    <Typography variant={"h2"} className={classes.mauNumber}>
                        150K
                    </Typography>
                    <Typography variant={"h5"}>monthly active users</Typography>
                    <Typography variant={"h7"}>
                        across all original apps
                    </Typography>
                </Grid>

                <Grid
                    container
                    alignContent="center"
                    direction="row"
                    xs={12}
                    xl={8}
                    className={classes.appExampleDiv}
                >
                    <AppExample
                        title={"spyfall"}
                        subtitleOne={"'whodunnit' digital board game"}
                        subtitleTwo={`"a great party game" - `}
                        subtitleTwoLinkText={"Tech Radar"}
                        subtitleTwoLinkHref="https://www.techradar.com/how-to/how-to-play-spyfall-online"
                        // stats={'150K MAU | 2M page views'}
                        buttonLink={"https://www.spyfall.app"}
                        phoneImage={spyfallPhone}
                        logos={[
                            railsLogo,
                            redisLogo,
                            postgresLogo,
                            bootstrapLogo,
                            herokuLogo,
                        ]}
                    />

                    <AppExample
                        title={"texts from yourself"}
                        subtitleOne={"sms-based journaling app"}
                        subtitleTwo={`"easy self care, love it!" - `}
                        subtitleTwoLinkText={"user"}
                        // stats={'300 MAU | 1K page views'}
                        buttonLink={"https://www.textsfromyourself.app"}
                        phoneImage={tfyPhone}
                        logos={[
                            reactLogo,
                            nodeJsLogo,
                            mongoDbLogo,
                            materialUiLogo,
                            herokuLogo,
                        ]}
                    />
                    <AppExample
                        title={"love quotes only"}
                        subtitleOne={"largest online love quotes library"}
                        subtitleTwo={`"where I find my IG captions" - `}
                        subtitleTwoLinkText={"user"}
                        // stats={'1K MAU | 5K page views'}
                        buttonLink={"https://www.lovequotesonly.com"}
                        phoneImage={loveQuotesPhone}
                        logos={[
                            ejsLogo,
                            nodeJsLogo,
                            mongoDbLogo,
                            bootstrapLogo,
                            herokuLogo,
                        ]}
                    />
                </Grid>
                <div>
                    <Typography
                        component="div"
                        variant="h5"
                        className={classes.ownershipTitle}
                    >
                        other contributions
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <div className={classes.divider} />
                    </div>
                </div>
                <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="center"
                    direction="row"
                    xs={12}
                    xl={8}
                    className={classes.appExampleDiv}
                >
                    <Testimonial />

                    <AppExample
                        title={"pipeline.gg"}
                        subtitleOne={"learn to livestream like a pro"}
                        subtitleTwo={`"helping streamers stand out" - `}
                        subtitleTwoLinkText={"Forbes"}
                        subtitleTwoLinkHref="https://www.forbes.com/sites/paultassi/2019/04/22/if-you-want-to-stream-video-games-for-a-living-start-up-pipeline-says-it-can-show-you-how/?sh=2e01ea8b5195"
                        // stats={"Senior Front End Engineer"}
                        buttonLink={"https://www.pipeline.gg"}
                        phoneImage={pipelinePhone}
                        logos={[
                            nextjsLogo,
                            firebaseLogo,
                            postgresLogo,
                            dockerLogo,
                            tailwindLogo,
                        ]}
                    />
                </Grid>
            </Grid>
        </Section>
    );
};

export default WhatIBuild;
