import React, { Component } from "react";
import fire from "../config/firebase"
import firebase from '../config/firebase';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ActivityCard from './ActivityCard'
import BG from '../Assets/backlitBG.jpg';

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
    backgroundImage: `url(${BG})`,
    zIndex: -2,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
});

class Involucrate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activityList: []
      }
    }

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
          var activityList = [];
          var activitiesRef = fire.firestore().collection("Activities");
          var allActivities = activitiesRef.get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                var activity = []
                activity.push(doc.data().name);
                activity.push(doc.data().category);
                activity.push(doc.data().description);
                activityList.push(activity);
                this.setState({activityList: activityList})
              });
            })
            .catch(err => {
              console.log("Error getting documents", err);
            })
    }

    render() {
      const { classes } = this.props;

      const activitycards = []
      for (const [activity, info] of this.state.activityList.entries()) {
        activitycards.push(<ActivityCard title={info[0]} category={info[1]} description={info[2]}></ActivityCard>)
      }

        return (
            <div>
                <Navbar isCurrentUserAdmin={this.props.isCurrentUserAdmin}></Navbar>
                <section className={classes.root}>
                  <Container className={classes.container}>
                    <div className={classes.backdrop} />
                    <div className={classes.background} />
                    <Typography color="inherit" align="center" variant="h2" marked="center">
                      ¿Cómo involucrarte?
                    </Typography>
                    <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                      Aquí se muestran las próximas actividades en tu comunidad. Cada actividad esta diseñada para que tenga el mayor impacto en la comunidad y en ti.
                      ¡Regístrate a las que más te interesan antes de que se llenen!
                    </Typography>
                  </Container>
                </section>
                <Container maxWidth="md" component="main" className={classes.content}>
                  {activitycards}
                </Container>
                
            </div>
        );
    }
}

export default withStyles(styles)(Involucrate);
