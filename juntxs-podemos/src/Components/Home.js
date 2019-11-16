import React, { Component } from "react"
import "./Login.css"
import firebase from '../config/firebase'
import Navbar from "./Navbar.js";

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