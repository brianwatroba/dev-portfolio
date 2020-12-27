import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Section title={'about me'} backgroundColor={'#EAEAEA'}>
      testing
    </Section>
  );
};

export default AboutMe;
