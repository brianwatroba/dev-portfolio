import React, { useRef, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Typed from 'typed.js';

import Section from '../Components/Section';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionDiv: {
    width: '100vw',
    height: 'auto',
    backgroundColor: '#EAEAEA',
  },
  bringUsCloserText: {
    color: '#989898',
  },
  typingDiv: {
    marginTop: theme.spacing(2),
    width: '220px',
    height: '25px',
    borderBottom: '1px solid black',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const WhatIBuild = () => {
  const classes = useStyles();
  const typingRef = useRef();

  useLayoutEffect(() => {
    var options = {
      strings: [
        'ourselves',
        'each other',
        'our ideas',
        'our feelings',
        'our ambitions',
      ],
      startDelay: 30,
      backDelay: 1000,
      typeSpeed: 100,
      shuffle: true,
      showCursor: false,
      loop: true,
      smartBackspace: false,
    };
    const typed = new Typed(typingRef.current, options);
    return () => {
      typed.stop();
    };
  }, []);

  return (
    <Section title={'what i build'} backgroundColor={'#FFFFFF'}>
      <Grid
        container
        xs={12}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item>
          <Typography variant={'h5'} className={classes.bringUsCloserText}>
            apps that bring us closer to:
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component={'div'}
            ref={typingRef}
            variant="h4"
            className={classes.typingDiv}
          ></Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default WhatIBuild;
