import React, { Component } from "react"
import "./Login.css"
import firebase from '../config/firebase'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Container } from "@material-ui/core"
import Swal from "sweetalert2"
import logo from '../Assets/JXP.png';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            interests: [],
            show: false,
            flagUser: false,
            user: {}
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is signed in.
                console.log("user", user)
                this.setState({ user })
            } else {
                // No user is signed in.
                window.location.href = "/"
            }
        });
    }

    render() {
        return (
            <div>
                <div id="leftHalf">
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
                        <img src={logo} alt="Juntos Podemos" id="logo" />
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
                        <h1>Editar Perfil</h1>

                        <div>
                            <TextField
                                id="standard-basic"
                                label="Nombre"
                                margin="normal"
                                name="email"
                                value={this.state.name}
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
                        </div>
                        <br></br>

                        <div>
                            <Button variant="contained" color="default" onClick={this.cancel}>
                                Cancelar
                            </Button>

                            <Button variant="contained" color="default" onClick={this.confirm} style={{marginLeft:"10px"}}>
                                Confirmar
                            </Button>
                        </div>

                    </Container>
                </div>
            </div>
        );
    }

}

export default EditProfile;