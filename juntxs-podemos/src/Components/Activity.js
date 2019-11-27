import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from './Navbar'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LinesBG from '../Assets/lines.png';
import Swal from "sweetalert2";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
});

class Activity extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        category: '',
        description: '',
      };
      this.addActivity = this.addActivity.bind(this);
      this.updateInput = this.updateInput.bind(this);
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

    updateInput = (param, e) => {
      this.setState({ [param]: e.target.value })
    }

    addActivity = e => {
      e.preventDefault();
      console.log(this.state.name)
      if(this.state.name === '') {
        Swal.fire({
          title: 'Falta información',
          text: "Escribe tus datos para mandar el mensaje",
          icon: 'warning',
        });
      }
      else {
        Swal.fire({
          type: "success",
          title: "¡Éxito!",
          text: "El evento ha sido registrado y esta siendo evaluado.",
          onAfterClose: () => {
            window.location.href = "/Home"
        }
        });        
      }

      this.setState({
        name: '',
        category: '',
        description: '',
      })
    };

  render() {
    const { classes } = this.props;
      return (
          <div>
              <Navbar isCurrentUserAdmin={this.props.isCurrentUserAdmin}></Navbar>
              <Container component="main" maxWidth="md" className={classes.container}>
                <img
                  src={LinesBG}
                  className={classes.curvyLines}
                  alt="curvy lines"
                />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <AddCircleIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Crea un evento
                  </Typography>
                  <form className={classes.form} onSubmit={this.addActivity.bind(this)}>
                      <TextField
                        variant="outlined"
                        required
                        id="name-input"
                        label="Nombre de evento"
                        margin="normal"
                        name="name"
                        value={this.state.name}
                        onChange={this.updateInput.bind(this, 'name')}
                        fullWidth
                        autoFocus
                      />
                      <TextField
                        variant="outlined"
                        id="category-input"
                        label="Categoría"
                        margin="normal"
                        name="category"
                        value={this.state.category}
                        onChange={this.updateInput.bind(this, 'category')}
                        fullWidth
                        autoFocus
                      />
                      <TextField
                        id="description-input"
                        label="Descripción"
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                        name="description"
                        value={this.state.description}
                        onChange={this.updateInput.bind(this, 'description')}
                        fullWidth
                        autoFocus
                      />
                    <Button variant="contained" color="primary" fullWidth className={classes.submit} onClick={this.addActivity}>
                      Crear
                    </Button>
                  </form>
                </div>
              </Container>

          </div>
      );
  }
}

export default withStyles(styles)(Activity);
