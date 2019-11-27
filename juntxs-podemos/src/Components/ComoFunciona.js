import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import SearchIcon from '@material-ui/icons/Search';
import LinesBG from '../Assets/lines.png';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#576842',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: '#FFFFFF',
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ComoFunciona(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={LinesBG}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography component="h1" variant="h3" marked="center" className={classes.title} component="h2">
          ¿Cómo funciona?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <SearchIcon className={classes.image} fontSize="large"/>
                <Typography variant="h5" align="center">
                  Entra a ver las actividades que se harán.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <AccessTimeIcon className={classes.image} fontSize="large"/>
                <Typography variant="h5" align="center">
                  Registrate a la que quieras. Unas tienen cupo, entonces ¡hazlo pronto!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <BeenhereIcon className={classes.image} fontSize="large"/>
                <Typography variant="h5" align="center">
                  Asiste a la actividad y disfruta la experiencia.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/Involucrate"
        >
          Empieza a explorar
        </Button>
      </Container>
    </section>
  );
}

export default withStyles(styles)(ComoFunciona);