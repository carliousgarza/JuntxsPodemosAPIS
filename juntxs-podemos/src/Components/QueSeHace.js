import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from './Navbar'

class QueSeHace extends Component {

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
                <h1>¿Qué se hace en Monterrey?</h1>
            </div>
        );
    }
}

export default QueSeHace;
