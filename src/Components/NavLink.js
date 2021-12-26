import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles(() => ({
  link: {
    fontWeight: "400",
    fontSize: "1rem",
    color: "#989898",
    "&:hover": {
      color: "#333333",
      cursor: "pointer",
    },
  },
}));

const NavLink = (props) => {
  const { title, to } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Grid item>
        <Link
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className={classes.link}
        >
          <Typography variant={matches ? "subtitle1" : " caption"}>
            {title}
          </Typography>
        </Link>
      </Grid>
    </>
  );
};

export default NavLink;
