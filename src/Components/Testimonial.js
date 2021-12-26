import React from "react";

import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    borderRadius: "20px",
  },
  outerDiv: {
    borderRadius: "4px",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(5),
    backgroundColor: "#F9F9F9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "450px",
    height: "100%",
  },
  quoteDiv: {
    textAlign: "left",
    fontStyle: "italic",
    fontFamily: "roboto",
  },
  attributionDiv: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  attributionContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  authorAndTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: theme.spacing(1),
    textAlign: "right",
  },
  avatar: {
    height: "53px",
  },
}));

const Testimonial = ({ quote, author, title, avatar }) => {
  const classes = useStyles();
  return (
    <div className={classes.outerDiv}>
      <Paper className={classes.paper} elevation={0}>
        <div className={classes.quoteDiv}>
          <Typography variant="h6" style={{ fontWeight: 300 }}>
            {quote}
          </Typography>
        </div>
        <div className={classes.attributionDiv}>
          <div className={classes.attributionContent}>
            <div className={classes.authorAndTitle}>
              <Typography
                variant="body1"
                component="div"
                style={{ textAlign: "right" }}
              >
                {author}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                style={{ textAlign: "right" }}
              >
                {title}
              </Typography>
            </div>
            <img src={avatar} className={classes.avatar} alt="avatar" />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Testimonial;
