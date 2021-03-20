import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    aboutMePaper: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        position: "relative",
        zIndex: "1",
    },
    whatIBuildPaper: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(4),
        marginTop: theme.spacing(-1),
        position: "relative",
        zIndex: "1",
    },
    image: {
        width: "40px",
    },
    cardTitle: {
        display: "flex",
        paddingTop: theme.spacing(0.75),
        paddingBottom: theme.spacing(0.75),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        backgroundColor: "#FFEDD2",
        borderRadius: "8px",
        marginBottom: theme.spacing(-2),
        position: "relative",
        zIndex: "2",
        fontWeight: "200",
        fontFamily: "open sans",
        color: "#B0B0B0",
    },
}));

const LogoCard = (props) => {
    const classes = useStyles();
    const { cardTitle, cardLogos, elevation, type } = props;
    return (
        <Grid container alignItems="center" justify="center" direction="column">
            {cardTitle && (
                <Typography
                    variant={"caption"}
                    component="div"
                    className={classes.cardTitle}
                >
                    {cardTitle}
                </Typography>
            )}

            <Paper
                elevation={elevation || 0}
                className={
                    type === "aboutMe"
                        ? classes.aboutMePaper
                        : classes.whatIBuildPaper
                }
            >
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    direction="row"
                    spacing={2}
                >
                    {cardLogos &&
                        cardLogos.map((logo) => (
                            <Grid item>
                                <img
                                    src={logo}
                                    alt={logo}
                                    className={classes.image}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Paper>
        </Grid>
    );
};

export default LogoCard;
