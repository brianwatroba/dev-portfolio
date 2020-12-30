import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, IconButton } from '@material-ui/core';

import Section from '../Components/Section';
import FaceCard from '../Components/FaceCard';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '300',
    marginBottom: theme.spacing(3),
  },
  socialsTitle: {
    marginTop: theme.spacing(3),
    fontWeight: '300',
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      width: '125px',
      height: '40px',
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(2.5),
      marginBottom: theme.spacing(2.5),
    },
    [theme.breakpoints.up('sm')]: {
      width: '125px',
      height: '45px',
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      width: '125px',
      height: '50px',
      marginLeft: theme.spacing(4.5),
      marginRight: theme.spacing(4.5),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      width: '150px',
      height: '55px',
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  icon: {
    fontSize: '2rem',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Section title={'contact'} backgroundColor={'#FFFFFF'} id="contact">
        <Grid
          container
          xs={12}
          alignItems="center"
          justify="center"
          direction="row"
        ></Grid>
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            want to build?
          </Typography>
        </Grid>
        <Grid item>
          <FaceCard
            type="contact"
            subtitle={"let's chat."}
            title={
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
                href="mailto:brianwatroba@gmail.com"
              >
                email me
              </Button>
            }
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            component="div"
            className={classes.socialsTitle}
          >
            or find me here:
          </Typography>
        </Grid>
        <Grid container alignItems="center" justify="center" direction="row">
          <Grid item>
            <IconButton href="https://www.linkedin.com/in/brian-watroba-649a93b0/">
              <LinkedInIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://github.com/brianwatroba">
              <GitHubIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://www.instagram.com/brianwatroba">
              <InstagramIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://www.buymeacoffee.com/brianwatroba">
              <FreeBreakfastIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="mailto:brianwatroba@gmail.com">
              <EmailIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default Contact;
