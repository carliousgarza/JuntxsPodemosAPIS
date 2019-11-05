import React, { Component } from "react";
import "./Login.css";
import Firebase from '../config/firebase'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Container } from "@material-ui/core";


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

    login = () => {
        console.log(this.state.email, this.state.password)
    }

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
                            ¿No tienes cuenta? <a href="">Crea una</a>
                        </div>

                    </Container>
                </div>
            </div>
        );
    }





}

export default Login;