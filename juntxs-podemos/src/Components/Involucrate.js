import React, { Component } from "react"
import firebase from '../config/firebase'
import Navbar from './Navbar'
import ActivityCard from './ActivityCard'

const activities = [['Titulo 1', 'Categoria 1', 'Descripcion 1'],
                    ['Titulo 2', 'Categoria 2', 'Descripcion 2'],
                    ['Titulo 3', 'Categoria 3', 'Descripcion 3']]

const activitycards = []
for (const [activity, info] of activities.entries()) {
  activitycards.push(<ActivityCard title={info[0]} category={info[1]} description={info[2]}></ActivityCard>)
}

class Involucrate extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h1>¿Cómo involucrarte?</h1>
                {activitycards}
            </div>
        );
    }
}

export default Involucrate;
