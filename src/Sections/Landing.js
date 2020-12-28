import React, { useLayoutEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import FaceCard from '../Components/FaceCard';
import fbWordmark from '../Images/fbwordmark.png';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Container, Button } from '@material-ui/core';

const makeBalls = require('../Utils/makeBalls');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(20),
  },
  centeredColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  centeredRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing(1),
  },
  buildThingsAndGrowThem: {
    marginTop: theme.spacing(4),
    position: 'relative',
    backgroundColor: 'white',
  },
  buildThingsText: {
    color: '#5CCAB0',
    fontWeight: '700',
  },
  carrotText: {
    color: '#808080',
    fontWeight: '700',
  },
  fbWordmark: {
    position: 'relative',
    backgroundColor: 'white',
    [theme.breakpoints.down('xs')]: {
      width: '100px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '125px',
    },
    // [theme.breakpoints.up('md')]: {
    //   width: '125px',
    // },
    [theme.breakpoints.up('lg')]: {
      width: '150px',
    },
  },
  currentlyAtText: {
    fontWeight: '400',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    position: 'relative',
    backgroundColor: 'white',
  },
  background: {
    positive: 'relative',
    zIndex: '-1',
  },
  faceCard: {
    position: 'absolute',
    zIndex: '5',
  },
  navbar: {
    position: 'relative',
    zIndex: '5',
  },
}));

const Landing = () => {
  const classes = useStyles();
  const backgroundRef = useRef();

  useLayoutEffect(() => {
    makeBalls({
      numBalls: 50,
      speed: 12500,
      distance: 6,
      backgroundRef,
      colors: ['#5CCAB0', '#DC3B43'],
    });
  }, []);

  return (
    <>
      <Navbar className={classes.navbar} />
      <div ref={backgroundRef} className={classes.background} />
      <Container className={classes.container}>
        <Grid container className={classes.centeredColumn}>
          <Grid item xs={12}>
            <FaceCard className={classes.faceCard} />
          </Grid>
          <Grid container xs={12} className={classes.centeredRow}>
            <Grid
              container
              className={`${classes.centeredRow} ${classes.buildThingsAndGrowThem}`}
              spacing={2}
            >
              <Grid item>
                <Typography variant={'h4'}>i</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant={'h4'}
                  display={'inline'}
                  className={classes.carrotText}
                >
                  {'<'}
                </Typography>
                <Typography
                  variant={'h4'}
                  display={'inline'}
                  className={classes.buildThingsText}
                >
                  BuildThings /
                </Typography>
                <Typography
                  variant={'h4'}
                  display={'inline'}
                  className={classes.carrotText}
                >
                  {'>'}
                </Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.centeredRow} spacing={2}>
              <Grid item>
                <Typography variant={'h4'}>and</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" size="large">
                  grow them
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant={'h6'} className={classes.currentlyAtText}>
              currently at:
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={fbWordmark}
              className={classes.fbWordmark}
              alt="facebook"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Landing;
