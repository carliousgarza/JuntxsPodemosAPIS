import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from './Navbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

class Activity extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: "",
        category: "",
        description: "",
        textField: {
          marginLeft: 100,
          marginRight: 100,
          width: 200,
        },
        button: {
          margin: 100,
        }
      };
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

    updateInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    addActivity = e => {
      e.preventDefault();
      const db = firebase.firestore();
      const activityRef = db.collection("Activities").add({
        name: this.state.name,
        category: this.state.category,
        description: this.state.description
      });
      this.setState({
        name: "",
        category: "",
        description: ""
      });
    };

  render() {
      return (
          <div>
              <Navbar isCurrentUserAdmin={this.props.isCurrentUserAdmin}></Navbar>
              <h1>Crea un evento</h1>
              <form>
                <div>
                  <TextField
                    required
                    id="name-input"
                    label="Required"
                    className={this.state.textField}
                    margin="normal"
                    name="name"
                    value={this.state.name}
                    onChange={this.updateInput}
                  />
                </div>
                <div>
                  <TextField
                    id="category-input"
                    label="Categoría"
                    className={this.state.textField}
                    margin="normal"
                    name="category"
                    value={this.state.category}
                    onChange={this.updateInput}
                  />
                </div>
                <div>
                  <TextField
                    id="description-input"
                    label="Descripción"
                    multiline
                    rows="4"
                    className={this.state.textField}
                    margin="normal"
                    variant="outlined"
                    name="description"
                    value={this.state.description}
                    onChange={this.updateInput}
                  />
                </div>
                <div>
                <Button variant="contained" color="primary" className={this.state.button} onClick={this.addActivity}>
                  Crear evento
                </Button>
                </div>
              </form>
          </div>
      );
  }
}

export default Activity;
