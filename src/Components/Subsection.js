import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Button } from '@material-ui/core';
import LogoCard from '../Components/LogoCard';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '700',
  },
  subtitle: {
    fontStyle: 'italic',
    marginBottom: theme.spacing(3),
  },
  content: {
    fontWeight: '200',
  },
  logoCard: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7),
  },
}));

const Subsection = (props) => {
  const classes = useStyles();
  const { title, subtitle, content, cardTitle, cardLogos, buttonLink } = props;
  return (
    <>
      <Grid
        container
        xs={12}
        md={4}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item>
          <Typography variant={'h2'} className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={'h5'} className={classes.subtitle}>
            {subtitle}
          </Typography>
        </Grid>
        {content.map((line) => (
          <Grid item>
            <Typography variant={'h5'} className={classes.content}>
              {line}
            </Typography>
          </Grid>
        ))}
        <Grid item className={classes.logoCard}>
          <LogoCard cardTitle={cardTitle} cardLogos={cardLogos} />
        </Grid>
      </Grid>
    </>
  );
};

export default Subsection;
