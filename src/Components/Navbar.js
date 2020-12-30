import React from 'react';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import NavLink from './NavLink';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    positive: 'relative',
    zIndex: '1',
  },
  menuButton: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1),
    fontColor: 'black',
    positive: 'relative',
    zIndex: '2',
  },
  appBar: {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    position: 'relative',
    zIndex: '2',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    positive: 'relative',
    zIndex: '2',
  },
  toolBarMobile: {
    display: 'flex',
    justifyContent: 'center',
    positive: 'relative',
    zIndex: '2',
  },
  tab: {
    textTransform: 'none',
    fontWeight: '400',
    fontSize: '1rem',
    minWidth: 9,
    color: '#989898',
    '&:hover': {
      color: '#333333',
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { refs } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClick = () => {
    console.log(refs);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <NavLink title="about me" to="aboutMe" />
            <NavLink title="what i build" to="whatIBuild" />
            <NavLink title="what i like" to="whatILike" />
            <NavLink title="contact" to="contact" />
            {/* <Tabs indicatorColor="none"> 
            <Tab label="about me" disableRipple className={classes.tab}></Tab>
            <Tab label="what i build" disableRipple className={classes.tab} />
            <Tab label="what i like" disableRipple className={classes.tab} />
            <Tab label="contact" disableRipple className={classes.tab} />
          </Tabs> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
