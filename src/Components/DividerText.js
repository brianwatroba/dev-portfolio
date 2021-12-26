import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ownershipTitle: {
    borderRadius: "4px",
    display: "flex",
    color: "#B0B0B0",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontFamily: "roboto",

    marginBottom: theme.spacing(1),
  },
  divider: {
    width: "150px",
    height: "2px",
    backgroundColor: "#808080",
  },
}));

const DividerText = ({ title }) => {
  const classes = useStyles();

  return (
    <div className="container">
      <Typography
        component="div"
        variant="h5"
        className={classes.ownershipTitle}
      >
        {title}
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
  );
};

export default DividerText;
