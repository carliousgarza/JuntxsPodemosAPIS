import React, { Component } from "react"
import "./Login.css"
import firebase from '../config/firebase'
import Navbar from "./Navbar.js";
import NewsPost from "./NewsPost.js";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PeopleBG from '../Assets/sunsetpeople.jpg';

  const useStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: `url(${PeopleBG})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
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
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
      display: 'flex',
      width: "70%"
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  });

  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
  ];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            show: false,
            flagUser: false
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
    }

    render() {
        const { classes } = this.props;
        return (            
            <div>
                <Navbar isCurrentUserAdmin={this.props.isCurrentUserAdmin}></Navbar>
                <main>
                <Paper className={classes.mainFeaturedPost}>
                    <div className={classes.overlay} />
                    <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            ¡Bienvenidos!
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Descubre los eventos que hemos hecho en la comunidad y el impacto que han creado.
                        </Typography>
                        </div>
                    </Grid>
                    </Grid>
                </Paper>
                <NewsPost />
                </main>
            </div>
        );
    }

}

export default withStyles(useStyles)(Home);