import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from "./Navbar.js";
import ComoFunciona from "./ComoFunciona.js"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Familia from '../Assets/1.png';
import Mundo from '../Assets/12.png';
import Infinity from '../Assets/13.png';
import Alianza from '../Assets/17.png';
import HelpBG from '../Assets/help.jpg';
import PersonBG from '../Assets/person.jpg';

const useStyles = theme => ({
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
        backgroundImage: `url(${HelpBG})`,
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
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      },
      mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(6),
          paddingRight: 0,
        },
      },
      mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${PersonBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
  });
  

const tiers = [
    {
      title: 'Fin de la pobreza',
      icon: Familia,
      buttonLink: 'https://www.undp.org/content/undp/es/home/sustainable-development-goals/goal-1-no-poverty.html',
    },
    {
      title: 'Producción y consumo responsables',
      icon: Infinity,
      buttonLink: 'https://www.undp.org/content/undp/es/home/sustainable-development-goals/goal-12-responsible-consumption-and-production.html',
    },
    {
      title: 'Acción por el clima',
      icon: Mundo,
      buttonLink: 'https://www.undp.org/content/undp/es/home/sustainable-development-goals/goal-13-climate-action.html',
    },
    {
        title: 'Alianzas para lograr los objetivos',
        icon: Alianza,
        buttonLink: 'https://www.undp.org/content/undp/es/home/sustainable-development-goals/goal-17-partnerships-for-the-goals.html',
      },
  ];

class ConoceIniciativa extends Component {

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
                        Conoce la iniciativa
                    </Typography>
                    <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                        Juntos Podemos es una iniciativa hecha para crear una comunidad activa y consciente de lo que está sucediendo en sus alrededores.
                        La sostenibilidad es un tema muy importante y todos debemos ayudar.
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      className={classes.button}
                      component="a"
                      href="/EnMty"
                    >
                      Sobre Monterrey 
                    </Button>
                  </Container>
                </section>
                <Container maxWidth="md" component="main" className={classes.content}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Objetivos de Desarrollo Sostenible 
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                        Estos son los objetivos que se tomarán en acción
                    </Typography>
                    <hr />
                    </Container>
                    <Container maxWidth="md" component="main">
                        <Grid container spacing={8} justify="center" alignItems="flex-end">
                        {tiers.map(tier => (
                            <Grid item xs={6} sm={3}>
                                <Link href={tier.buttonLink} target="_blank"><img src={tier.icon} width="90%"/></Link>
                            </Grid>
                        ))}
                        </Grid>
                    </Container>
                    <div className={classes.content}>
                        <Paper className={classes.mainFeaturedPost}>
                            <div className={classes.overlay} />
                            <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    Sostenibilidad con cultura activa
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    Se busca ayudar a que las personas sean mas conscientes y responsables de sus acciones.
                                    Identificar las necesidades de nuestra comunidad es el primer paso, ¡hay que tomar acción! 
                                </Typography>
                                </div>
                            </Grid>
                            </Grid>
                        </Paper> 
                    </div>
                    <ComoFunciona />
            </div>
        );
    }
}

export default withStyles(useStyles)(ConoceIniciativa);