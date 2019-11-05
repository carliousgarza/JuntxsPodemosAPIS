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
            flagUser: false
        };
    }

    signUp = e => {
        

        Swal.fire({
            title: "¡Usuario creado!",
            html: "Por favor checa tu correo para verificar tu cuenta.",
            icon: "success",
            confirmButtonText: "Aceptar",
            onAfterClose: () => {
                this.setState({ show: false });
            }
        });
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
                                label="Nombre"
                                margin="normal"
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

                    </Container>
                </div>
            </div>
        );
    }
}
export default SignUp;