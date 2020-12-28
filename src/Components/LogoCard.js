import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    position: 'relative',
    zIndex: '1',
  },
  image: {
    width: '40px',
  },
  cardTitle: {
    display: 'flex',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    backgroundColor: '#FFEDD2',
    borderRadius: '50px',
    marginBottom: theme.spacing(-2.5),
    position: 'relative',
    zIndex: '2',
    fontWeight: '300',
  },
}));

const LogoCard = (props) => {
  const classes = useStyles();
  const { cardTitle, cardLogos } = props;
  return (
    <Grid container alignItems="center" justify="center" direction="column">
      <Typography
        variant={'subtitle2'}
        component="div"
        className={classes.cardTitle}
      >
        {cardTitle}
      </Typography>

      <Paper elevation={0} className={classes.paper}>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="row"
          spacing={2}
        >
          {cardLogos &&
            cardLogos.map((logo) => (
              <Grid item>
                <img src={logo} alt={logo} className={classes.image} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LogoCard;
