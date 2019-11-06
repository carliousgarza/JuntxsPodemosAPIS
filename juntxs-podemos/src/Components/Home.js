import React, { Component } from "react"
import "./Login.css"
import firebase from '../config/firebase'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Container } from "@material-ui/core"
import Swal from "sweetalert2"
import Navbar from './Navbar'

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

    render() {
        return (
            <div>
                {firebase.auth().currentUser ? <Navbar></Navbar> 
                : 
                window.location.href = "/"}
            </div>
        );
    }

}

export default Home;