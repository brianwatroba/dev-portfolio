import React from 'react';
import Navbar from '../Components/Navbar';
import FaceCard from '../Components/FaceCard';
import fbWordmark from '../Images/fbwordmark.png';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Container, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    width: '150px',
  },
  currentlyAtText: {
    fontWeight: '400',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container>
        <Grid container className={classes.centeredColumn}>
          <Grid item xs={12}>
            <FaceCard />
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
