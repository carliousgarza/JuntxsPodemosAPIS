import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from './Navbar'

class Involucrate extends Component {

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
                <h1>¿Cómo involucrarte?</h1>
            </div>
        );
    }
}

export default Involucrate;
