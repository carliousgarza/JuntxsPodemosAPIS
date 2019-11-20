import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from "./Navbar.js";

class ConoceIniciativa extends Component {

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
                <Navbar></Navbar>
                <div>
                    <h1>Conoce la iniciativa</h1>
                </div>
                
            </div>
        );
    }
}

export default ConoceIniciativa;