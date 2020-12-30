import React from 'react';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavTabs from './NavTabs';

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
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { reference } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={matches ? classes.toolBarMobile : classes.toolBar}>
          <NavTabs reference={reference} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
