import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../Images/bwheadshot.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: '#F9F9F9',
    borderRadius: '12px',
    display: 'inline-block',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    position: 'relative',
    border: 'solid 10px white',
  },
  avatar: {
    borderRadius: '100%',
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(-6),
    zIndex: '0',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      width: '120px',
      marginLeft: theme.spacing(-4),
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('sm')]: {
      width: '160px',
    },
    [theme.breakpoints.up('md')]: {
      width: '190px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '225px',
    },
  },
  textBubbleTop: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    display: 'inline-block',
    borderRadius: '20px 20px 0px 0px',
    fontStyle: 'italic',
    position: 'relative',
  },
  textBubbleBottom: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: '#FFFFFF',
    display: 'inline-block',
    borderRadius: '0px 20px 20px 20px',
    fontWeight: '700',
    zIndex: '2',
    position: 'relative',
  },
}));

const FaceCard = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={0} className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                component="div"
                className={classes.textBubbleTop}
              >
                hi! i'm
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h1"
                component="div"
                className={classes.textBubbleBottom}
              >
                brian
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item>
              <img src={Avatar} className={classes.avatar} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default FaceCard;
