import React, { Component } from "react";
import firebase from '../config/firebase';
import Navbar from './Navbar';
import Organizaciones from './Organizaciones.js';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Monterrey from '../Assets/monterrey.jpg';

const styles = theme => ({
  content: {
    padding: theme.spacing(8, 0, 6),
  },
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#7fc7d9', 
    backgroundPosition: 'center',
    backgroundImage: `url(${Monterrey})`,
    zIndex: -2,
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

class QueSeHace extends Component {

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
              // User is signed in.
              console.log("user", user)
            } else {
              // No user is signed in.
              window.location.href = "/"
            }
          });
    }

    render() {
      const { classes } = this.props;

      return (
            <div>
                <Navbar isCurrentUserAdmin={this.props.isCurrentUserAdmin}></Navbar>
                <section className={classes.root}>
                  <Container className={classes.container}>
                    <div className={classes.backdrop} />
                    <div className={classes.background} />
                    <Typography color="inherit" align="center" variant="h2" marked="center">
                      ¿Qué se hace en Monterrey?
                    </Typography>
                    <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                      Varias organizaciones ya están creando proyectos para ayudar a la ciudad. 
                      Esta iniciativa quiere dar a conocerlas para que crezca esta comunidad.
                      Conoce más sobre ellas.
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      className={classes.button}
                      component="a"
                      href="/Involucrate"
                    >
                      Empieza a dejar tu huella
                    </Button>
                  </Container>
                </section>
                <Container maxWidth="md" component="main" className={classes.content}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Colaboración  
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                        Estas alianzas no solo ayudan a el medio ambiente, pero ayudan a que la comunidad crecer.  
                    </Typography>
                    <hr />
                    </Container>
                <Organizaciones />
            </div>
        );
    }
}

export default withStyles(styles)(QueSeHace);
