import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Section from '../Components/Section';
import Subsection from '../Components/Subsection';
import nextJsLogo from '../Images/Logos/nextjslogo.png';
import nodeJsLogo from '../Images/Logos/nodejslogo.png';
import railsLogo from '../Images/Logos/railslogo.png';
import reactLogo from '../Images/Logos/reactlogo.jpg';
import chewyLogo from '../Images/Logos/chewylogo.png';
import dentsuLogo from '../Images/Logos/dentsutwo.jpg';
import gmLogo from '../Images/Logos/gmlogo.png';
import microsoftLogo from '../Images/Logos/microsoftlogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionDiv: {
    width: '100vw',
    height: 'auto',
    backgroundColor: '#EAEAEA',
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Section title={'about me'} backgroundColor={'#EAEAEA'}>
      <Grid
        container
        xs={12}
        alignItems="center"
        justify="center"
        direction="row"
      >
        <Subsection
          title="engineer"
          subtitle="@ freelance"
          content={[
            'full stack',
            'web + native',
            'JavaScript, Python, Ruby',
            'consumer, games',
          ]}
          cardTitle="i work in"
          cardLogos={[reactLogo, nextJsLogo, nodeJsLogo, railsLogo]}
          buttonLink
        />

        <Subsection
          title="marketer"
          subtitle="@ Facebook"
          content={[
            'brand partnerships',
            '$50M+ in yearly revenue',
            'ad conception + launch',
            'digital native, eComm',
          ]}
          cardTitle="i work with"
          cardLogos={[microsoftLogo, gmLogo, chewyLogo, dentsuLogo]}
          buttonLink
        />
      </Grid>
    </Section>
  );
};

export default AboutMe;
