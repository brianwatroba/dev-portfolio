import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

import LogoCard from "./LogoCard";
import { PlayCircleFilledWhite } from "@material-ui/icons";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(6),
    },
    title: {
        fontWeight: "700",
    },
    subtitleOne: {
        fontWeight: "400",
        color: "#737373",
        fontFamily: "open sans",
    },
    subtitleTwo: {
        fontWeight: "200",
        color: "#737373",
        fontStyle: "italic",
        fontFamily: "open sans",
    },
    blankText: {
        color: "white",
    },
    stats: {
        fontWeight: "300",
        color: "#737373",
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(1.5),
    },
    phoneImage: {
        width: "300px",
        marginTop: theme.spacing(4),
    },
}));

const AppExample = (props) => {
    const classes = useStyles();
    const {
        title,
        subtitleOne,
        subtitleTwo,
        subtitleTwoLinkText,
        subtitleTwoLinkHref,
        stats,
        buttonLink,
        phoneImage,
        logos,
    } = props;

    return (
        <>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                item
                xs={12}
                lg={4}
                className={classes.container}
            >
                <ScrollAnimation
                    animateIn="slideInUp"
                    animateOnce
                    duration={0.5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Grid item>
                        <Typography variant="h4" className={classes.title}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h6"
                            className={classes.subtitleOne}
                        >
                            {subtitleOne}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h7"
                            className={classes.subtitleTwo}
                        >
                            {subtitleTwo}
                            {subtitleTwoLinkText && (
                                <a href={subtitleTwoLinkHref}>
                                    {subtitleTwoLinkText}
                                </a>
                            )}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classes.stats}>
                            {stats}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            href={buttonLink}
                        >
                            check it out
                        </Button>
                    </Grid>

                    <Grid item>
                        <img
                            src={phoneImage}
                            alt={`${title} screenshot`}
                            className={classes.phoneImage}
                        ></img>
                    </Grid>
                </ScrollAnimation>
                <Grid item>
                    <LogoCard
                        cardLogos={logos}
                        elevation={2}
                        type="whatIBuild"
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default AppExample;
