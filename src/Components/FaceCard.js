import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../Images/bwheadshot.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        backgroundColor: "#F9F9F9",
        borderRadius: "12px",
        display: "inline-block",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        position: "relative",
        border: "solid 10px white",
    },
    avatar: {
        borderRadius: "100%",
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(-6),
        zIndex: "0",
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            width: "120px",
            marginLeft: theme.spacing(-4),
            marginBottom: theme.spacing(1),
        },
        [theme.breakpoints.up("sm")]: {
            width: "160px",
        },
        [theme.breakpoints.up("md")]: {
            width: "190px",
        },
        [theme.breakpoints.up("lg")]: {
            width: "225px",
        },
    },
    textBubbleTop: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(2),
        backgroundColor: "#FFFFFF",
        display: "inline-block",
        borderRadius: "20px 20px 0px 0px",
        fontStyle: "italic",
        position: "relative",
        zIndex: "2",
    },
    textBubbleBottom: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        backgroundColor: "#FFFFFF",
        display: "inline-block",
        borderRadius: "0px 20px 20px 20px",
        fontWeight: "700",
        zIndex: "2",
        position: "relative",
    },
    textBubbleTopContact: {
        paddingLeft: theme.spacing(2.5),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: "#F9F9F9",
        fontWeight: "700",
        display: "inline-block",
        borderRadius: "20px 20px 0px 0px",
        position: "relative",
        zIndex: "0",
    },
    textBubbleBottomContact: {
        marginRight: theme.spacing(2),
        backgroundColor: "#FFFFFF",
        display: "inline-block",
        borderRadius: "20px 20px 20px 20px",
        fontWeight: "700",
        zIndex: "2",
        position: "relative",
    },
}));

const FaceCard = (props) => {
    const classes = useStyles();
    const { type, title, subtitle } = props;
    return (
        <>
            <ScrollAnimation
                animateIn="fadeIn"
                delay={500}
                duration={1}
                animateOnce
            >
                <Paper elevation={0} className={classes.paper}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        <Grid container direction="column">
                            <Grid item>
                                <Typography
                                    variant={type === "contact" ? "h4" : "h4"}
                                    component="div"
                                    className={
                                        type === "contact"
                                            ? classes.textBubbleTopContact
                                            : classes.textBubbleTop
                                    }
                                >
                                    {subtitle}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {type === "contact" ? (
                                    <div
                                        className={
                                            classes.textBubbleBottomContact
                                        }
                                    >
                                        {title}
                                    </div>
                                ) : (
                                    <Typography
                                        variant="h1"
                                        component="div"
                                        className={classes.textBubbleBottom}
                                    >
                                        {title}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>

                        <Grid container direction="column">
                            <Grid item>
                                <img
                                    src={Avatar}
                                    className={classes.avatar}
                                    alt="avatar"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </ScrollAnimation>
        </>
    );
};

export default FaceCard;
