import React, { useLayoutEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import FaceCard from '../Components/FaceCard';
import fbWordmark from '../Images/fbwordmark.png';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Container, Button } from '@material-ui/core';

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
  },
  background: {
    positive: 'relative',
    zIndex: '-1',
  },
  faceCard: {
    position: 'absolute',
    zIndex: '5',
  },
}));

const Landing = () => {
  const classes = useStyles();
  const background = useRef();

  useLayoutEffect(() => {
    const colors = ['#222222', '#4050b5', '#5dcbb0', '#FFEDD2', '#efce8f'];

    const numBalls = 50;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement('div');
      ball.classList.add('ball');
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      background.current.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      let anim = el.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    });
  }, []);
  return (
    <>
      <Navbar id="nav" />
      <div ref={background} className={classes.background} />
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
            <img src={fbWordmark} className={classes.fbWordmark} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Landing;
