import React, { Component } from "react"
import "./Login.css"
import firebase from '../config/firebase'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Container } from "@material-ui/core"
import Swal from "sweetalert2"
import fire from '../config/firebase';
import logo from '../Assets/JXP.png';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interests: [],
            newName: "",
            newPassword: "",
            newConfirmPassword: "",
            newInterests: [],
            show: false,
            flagUser: false,
            user: {}
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // User is signed in.
                this.setState({ user })
                fire.firestore().collection("Users").doc(user.uid).get()
                    .then(doc => {
                        const currentUserData = doc.data();
                        this.setState({ user: currentUserData })
                        this.setState({ currentUserType: currentUserData.userType })
                        this.setState({ newInterests: currentUserData.interests})
                    })
                fire.firestore().collection("Interests").doc("Interests").get()
                    .then(doc => {
                        const interests = doc.data().Interests;
                        this.setState({ interests, newName: doc.data().name })
                    })
            } else {
                // No user is signed in.
                window.location.href = "/"
            }
        });
    }

    handleChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    };

    handleCheck(e, x) {
        console.log(e, x);
        this.setState(state => ({
            newInterests: state.newInterests.includes(x)
                ? state.newInterests.filter(c => c !== x)
                : [...state.newInterests, x]
        }));
        console.log(this.state.newInterests)
    }

    handleCancel = () => {
        window.location.href = "/Home"
    }

    handleConfirmar = () => {
        
        Swal.fire({
            title: '¿Seguro que quieres hacer estos cambios?',
            text: "¡Los cambios serán permanentes despues de esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si! Editar mi perfil.'
        })
        .then((result) => {
            var updateName = this.state.newName;
            var updateInterests = this.state.newInterests
            var userID = this.state.user.ID
            console.log(updateName, updateInterests, userID)
            if (result.value) {
                fire.firestore().collection("Users").doc(userID)
                    .update({
                        name: updateName,
                        interests: updateInterests
                    }).then(u => {
                        Swal.fire({
                            title:'¡Éxito!',
                            html: 'Tu perfil ha sido cambiado exitosamente.',
                            icon: 'success',
                            confirmButtonText: "Aceptar",
                            onAfterClose: () => {
                                window.location.href = "/Home"
                            }
                        })
                    });
            }
        }
        ).catch(error => {
            console.log(error)
        })
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
                                label={this.state.user.name}
                                margin="normal"
                                name="newName"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <TextField
                                id="standard-password-input"
                                label="Contraseña Nueva"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                name="newPassword"
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
                                name="newConfirmPassword"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <br></br>

                        <h1>Intereses</h1>
                        {this.state.interests.map(x =>
                            <FormControlLabel
                                control={<Checkbox
                                    onChange={e => this.handleCheck(e, x)}
                                    checked={this.state.newInterests.includes(x)}
                                />}
                                label={x.toString()}
                                key={x.toString()}
                            />
                        )}

                        <div>
                        </div>
                        <br></br>

                        <div>
                            <Button variant="contained" color="default" onClick={this.handleCancel}>
                                Cancelar
                            </Button>

                            <Button variant="contained" color="default" onClick={this.handleConfirmar} style={{ marginLeft: "10px" }}>
                                Guardar Cambios
                            </Button>
                        </div>

                    </Container>
                </div>
            </div>
        );
    }
}

export default EditProfile;