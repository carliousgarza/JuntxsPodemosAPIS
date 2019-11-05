import React, { Component } from "react"
import "./Login.css"
import firebase from '../config/firebase'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Container } from "@material-ui/core"
import Swal from "sweetalert2"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            show: false,
        };
    }

    handleChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    };

    login = e => {
        var validator = require("email-validator"); //para validar que sea un correo

        if (validator.validate(this.state.email)) {
          var passwordValidator = require("password-validator"); // para validar que sea una password válida
          var schema = new passwordValidator();
          schema
            .is().min(6) 
            .is().max(20) 
            .has().not().spaces(); 
    
          if (schema.validate(this.state.password)) {
            if (e) e.preventDefault();
            firebase
              .auth()
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .then(u => {
                this.setState({flagUser: true})
                console.log("SUCCESS LOGGING IN")
              })
              .catch(error => {
                Swal.fire({
                  title: "Error",
                  html: "Usuario o contraseña incorrectos",
                  type: "error",
                  icon: "error",
                  confirmButtonText: "Aceptar",
                  onAfterClose: () => {
                    this.setState({ show: false });
                  }
                });
              });
          } else {
            Swal.fire({
              title: "Error",
              html: "Debes ingresar una contraseña válida de al menos 6 caracteres",
              type: "error",
              icon: "error",
              confirmButtonText: "Aceptar",
              onAfterClose: () => {
                this.setState({ show: false });
              }
            });
          }
        } else {
          Swal.fire({
            title: "Error",
            html: "Debes ingresar un correo válido",
            type: "error",
            icon: "error",
            confirmButtonText: "Aceptar",
            onAfterClose: () => {
              this.setState({ show: false });
            }
          });
        }
      };

    render() {
        return (
            <div>
                <div id="leftHalf"></div>
                <div id="rightHalf">
                    <Container>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>Log in</h1>

                        <div>
                            <TextField
                                id="standard-basic"
                                label="Correo Electronico"
                                margin="normal"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <TextField
                                id="standard-password-input"
                                label="Contraseña"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <br></br>

                        <div>
                            <Button variant="contained" color="default" onClick={this.login}>
                                Log In
                            </Button>
                        </div>

                        <br></br>

                        <div>
                            ¿No tienes cuenta? <a href="/SignUp">Crea una</a>
                        </div>

                    </Container>
                </div>
            </div>
        );
    }
}

export default Login;