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

  render() {
      return (
          <div>
              <Navbar></Navbar>
              <h1>Crea un evento</h1>
              <form>
                <div>
                  <TextField
                    required
                    id="name-input"
                    label="Required"
                    defaultValue="Nombre"
                    className={this.state.textField}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="category-input"
                    label="Categoría"
                    className={this.state.textField}
                    margin="normal"
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
                  />
                </div>
                <div>
                <Button variant="contained" color="primary" className={this.state.button}>
                  Crear evento
                </Button>
                </div>
              </form>
          </div>
      );
  }
}

export default Activity;
