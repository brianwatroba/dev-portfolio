import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import LogoCard from "../Components/LogoCard";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  emoji: {
    width: "30px",
    marginLeft: theme.spacing(1),
  },
  subtitle: {
    fontStyle: "italic",
    fontFamily: "Open Sans",
    marginBottom: theme.spacing(3),
    color: "#B0B0B0",
  },
  content: {
    fontFamily: "Open Sans",
    fontWeight: "300",
    color: "#505050",
  },
  logoCard: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7),
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(7),
  },
  callout: {
    color: "#808080",
    fontStyle: "italic",
    marginTop: theme.spacing(0.5),
  },
}));

const Subsection = (props) => {
  const classes = useStyles();
  const {
    type,
    title,
    emoji,
    subtitle,
    content,
    cardTitle,
    cardLogos,
    buttonLink,
    callout,
  } = props;
  return (
    <Grid
      container
      xs={12}
      md={4}
      alignItems="center"
      justify="center"
      direction="column"
    >
      {type === "aboutMe" && (
        <Grid item>
          <Typography variant={"h2"} className={classes.title}>
            {title}
          </Typography>
        </Grid>
      )}
      {type === "whatILike" && (
        <Grid item>
          <Typography variant={"h4"} className={classes.title}>
            {title}
            <img src={emoji} alt={emoji} className={classes.emoji}></img>
          </Typography>
        </Grid>
      )}

      <Grid item>
        <Typography variant={"h6"} className={classes.subtitle}>
          {subtitle}
        </Typography>
      </Grid>
      {content &&
        content.map((line) => (
          <Grid item>
            <Typography variant={"h6"} className={classes.content}>
              {line}
            </Typography>
          </Grid>
        ))}
      {cardLogos && (
        <Grid item className={classes.logoCard}>
          <LogoCard
            cardTitle={cardTitle}
            cardLogos={cardLogos}
            type={"aboutMe"}
          />
        </Grid>
      )}
      {callout && (
        <Grid item>
          <Typography variant={"subtitle1"} className={classes.callout}>
            {callout}
          </Typography>
        </Grid>
      )}
      {buttonLink && (
        <Grid item>
          <Button
            variant="contained"
            color="info"
            disableElevation
            href={buttonLink}
            className={classes.button}
          >
            check it out
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Subsection;
