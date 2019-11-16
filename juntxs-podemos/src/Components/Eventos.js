import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from './Navbar'

class Eventos extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h1>Lista de eventos y actividades</h1>
            </div>
        );
    }
}

export default Eventos;