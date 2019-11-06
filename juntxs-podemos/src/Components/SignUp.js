import React, { Component } from "react"
import "./Login.css"
import firebase from '../config/firebase'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Container } from "@material-ui/core"
import Swal from "sweetalert2"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password2: "",
            show: false,
            flagUser: false,
            name: ""
        };
    }

    handleChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    };

    signUp = e => {
        
        if(this.state.email !== "" && this.state.name !== "" && this.state.password !== "" && this.state.password2 !== ""){
            var validator = require("email-validator"); //para validar que sea un correo
            if (validator.validate(this.state.email)) {
                var passwordValidator = require("password-validator"); // para validar que sea una password válida
                var schema = new passwordValidator();
                schema
                    .is().min(6)
                    .is().max(20)
                    .has().not().spaces();
                if (schema.validate(this.state.password)) { //la contraseña es valida
                    if(this.state.password === this.state.password2){   //la contraseña es la misma a la de confirmar
                        if (e) e.preventDefault();
                        firebase
                            .auth()
                            .createUserWithEmailAndPassword(this.state.email, this.state.password)
                            .then(u => {
                                Swal.fire({
                                    title: "¡Èxito!",
                                    html: "Creación de usuario exitosa.",
                                    icon: "success",
                                    confirmButtonText: "Aceptar",
                                    onAfterClose: () => {
                                        this.setState({ show: false });
                                    }
                                });
                            })
                            .catch(error => {
                                Swal.fire({
                                    title: "Error",
                                    html: "Error creando usuario.",
                                    icon: "error",
                                    confirmButtonText: "Aceptar",
                                    onAfterClose: () => {
                                        this.setState({ show: false });
                                    }
                                });
                            })
                    } else {
                        Swal.fire({
                            title: "Error",
                            html: "Las dos contraseñas deben ser idénticas.",
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
                        html: "Debes ingresar una contraseña válida de al menos 6 caracteres, sin espacios.",
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
                    html: "Debes ingresar un correo válido.",
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
                html: "Debes llenar todas las areas.",
                icon: "error",
                confirmButtonText: "Aceptar",
                onAfterClose: () => {
                    this.setState({ show: false });
                }
            });
        }
    }

    render() {
        return (
            <div>
                <div id="leftHalf">
                    <Container>
                        <h1>Juntxs Podemos</h1>
                    </Container>

                </div>
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
                        <h1>Crear Usuario</h1>

                        <div>
                            <TextField
                                id="standard-basic"
                                label="Nombre y Apellido"
                                margin="normal"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <TextField
                                id="standard-basic1"
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

                        <div>
                            <TextField
                                id="standard-password-input2"
                                label="Confirmar Contraseña"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                name="password2"
                                value={this.state.password2}
                                onChange={this.handleChange}
                            />
                        </div>

                        <br></br>

                        <div>
                            <Button variant="contained" color="default" onClick={this.signUp}>
                                Crear Usuario
                            </Button>
                        </div>

                        <br></br>

                        <div>
                            Regresar a  <a href="/">iniciar sesión</a>
                        </div>

                    </Container>
                </div>
            </div>
        );
    }
}
export default SignUp;