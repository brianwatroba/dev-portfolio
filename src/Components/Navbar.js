import React from 'react';
import {
  AppBar,
  Toolbar,
  // useMediaQuery,
  useTheme,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/MenuRounded';

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
}));

const Navbar = () => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar} disableGutters>
          <IconButton
            edge="end"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
