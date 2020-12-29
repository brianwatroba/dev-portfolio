import React, { useRef, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';
import Typed from 'typed.js';

import Section from '../Components/Section';
import AppExample from '../Components/AppExample';

import spyfallPhone from '../Images/spyfallphone.png';
import loveQuotesPhone from '../Images/lovequotesphone.png';
import tfyPhone from '../Images/tfyphone.png';

import nodeJsLogo from '../Images/Logos/nodejslogo.png';
import railsLogo from '../Images/Logos/railslogo.png';
import reactLogo from '../Images/Logos/reactlogo.jpg';
import bootstrapLogo from '../Images/Logos/bootstraplogotwo.png';
import redisLogo from '../Images/Logos/redislogo.png';
import ejsLogo from '../Images/Logos/ejslogo.png';
import postgresLogo from '../Images/Logos/postgreslogo.png';
import materialUiLogo from '../Images/Logos/materialuilogo.png';
import mongoDbLogo from '../Images/Logos/mongodblogo.png';
import herokuLogo from '../Images/Logos/herokulogofour.png';

const useStyles = makeStyles((theme) => ({
  bringUsCloserText: {
    color: '#989898',
  },
  typingDiv: {
    marginTop: theme.spacing(2),
    width: '220px',
    height: '25px',
    borderBottom: '1px solid black',
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appExampleDiv: {
    marginTop: theme.spacing(8),
  },
}));

const WhatIBuild = () => {
  const classes = useStyles();
  const typingRef = useRef();

  useLayoutEffect(() => {
    var words = {
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
      backSpeed: 35,
      shuffle: true,
      showCursor: false,
      loop: true,
      smartBackspace: false,
    };
    const typed = new Typed(typingRef.current, words);
    return () => {
      typed.stop();
    };
  }, []);

  return (
    <Section title={'what i build'} backgroundColor={'#FFFFFF'}>
      <Grid container alignItems="center" justify="center" direction="column">
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

        <Grid
          container
          alignContent="center"
          direction="row"
          xs={12}
          xl={8}
          className={classes.appExampleDiv}
        >
          <AppExample
            title={'spyfall'}
            subtitleOne={"'whodunnit' digital board game"}
            subtitleTwo={''}
            stats={'150K MAU | 2M page views'}
            buttonLink={'https://www.spyfall.app'}
            phoneImage={spyfallPhone}
            logos={[
              railsLogo,
              redisLogo,
              postgresLogo,
              bootstrapLogo,
              herokuLogo,
            ]}
          />
          <AppExample
            title={'texts from yourself'}
            subtitleOne={'sms-based journaling app'}
            subtitleTwo={' '}
            stats={'300 MAU | 1K page views'}
            buttonLink={'https://www.textsfromyourself.app'}
            phoneImage={tfyPhone}
            logos={[
              reactLogo,
              nodeJsLogo,
              mongoDbLogo,
              materialUiLogo,
              herokuLogo,
            ]}
          />
          <AppExample
            title={'love quotes only'}
            subtitleOne={'largest online love quotes library'}
            subtitleTwo={' '}
            stats={'1K MAU | 5K page views'}
            buttonLink={'https://www.lovequotesonly.com'}
            phoneImage={loveQuotesPhone}
            logos={[
              ejsLogo,
              nodeJsLogo,
              mongoDbLogo,
              bootstrapLogo,
              herokuLogo,
            ]}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default WhatIBuild;
