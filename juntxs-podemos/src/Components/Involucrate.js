import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from './Navbar'

class Involucrate extends Component {
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