import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

const NavTabs = (props) => {
  const classes = useStyles();
  const { reference } = props;
  const handleChange = () => {
    console.log('hi');
  };

  return (
    <>
      <Tabs indicatorColor="none">
        <Tab
          label="about me"
          disableRipple
          className={classes.tab}
          onClick={() => {
            console.log(reference);
          }}
        ></Tab>
        <Tab
          label="what i build"
          disableRipple
          className={classes.tab}
          onClick={handleChange}
        ></Tab>
        <Tab
          label="what i like"
          disableRipple
          className={classes.tab}
          onClick={handleChange}
        ></Tab>
        <Tab
          label="contact"
          disableRipple
          className={classes.tab}
          onClick={handleChange}
        ></Tab>
      </Tabs>
    </>
  );
};

export default NavTabs;
