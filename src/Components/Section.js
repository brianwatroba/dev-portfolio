import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionDiv: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    // borderTop: '2px solid black',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(-3),
  },
  title: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    borderRadius: '25px 25px 10px 10px',
    display: 'inline-block',
    color: '#ffffff',
    border: '5px solid #ffffff',
  },
}));

const Section = (props) => {
  const classes = useStyles();
  const { title, backgroundColor } = props;
  return (
    <>
      <div className={classes.titleContainer}>
        <Typography
          variant={'h6'}
          className={classes.title}
          style={{ backgroundColor: '#626262' }}
          component="div"
        >
          {title}
        </Typography>
      </div>
      <div className={classes.sectionDiv} style={{ backgroundColor }}>
        {props.children}
      </div>
    </>
  );
};

export default Section;
