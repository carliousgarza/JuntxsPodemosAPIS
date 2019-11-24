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

    render() {
        return (
            <div>
                <Navbar isCurrentUserAdmin={this.props.isCurrentUserAdmin}></Navbar>
            </div>
        );
    }

}

export default Home;
