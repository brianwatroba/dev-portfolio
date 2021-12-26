import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  tab: {
    textTransform: "none",
    fontWeight: "400",
    fontSize: "1rem",
    minWidth: 9,
    color: "#989898",
    "&:hover": {
      color: "#333333",
    },
  },
}));

const NavTabs = () => {
  const classes = useStyles();

  return (
    <>
      <Link to="aboutMe" spy={true} smooth={true} offset={-70} duration={500}>
        move
      </Link>
      <Tabs indicatorColor="none">
        <Tab label="about me" disableRipple className={classes.tab}></Tab>
        <Tab label="what i build" disableRipple className={classes.tab}></Tab>
        <Tab label="what i like" disableRipple className={classes.tab}></Tab>
        <Tab label="contact" disableRipple className={classes.tab}></Tab>
      </Tabs>
    </>
  );
};

export default NavTabs;
