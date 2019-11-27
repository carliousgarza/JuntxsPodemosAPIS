import React, { Component } from "react"
import fire from "../config/firebase"
import firebase from '../config/firebase'
import Navbar from './Navbar'
import ActivityCard from './ActivityCard'

class Eventos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activityList: []
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

        var activityList = [];
        var activitiesRef = fire.firestore().collection("Activities");
        var allActivities = activitiesRef.get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              var activity = []
              activity.push(doc.data().name);
              activity.push(doc.data().category);
              activity.push(doc.data().description);
              activityList.push(activity);
              this.setState({activityList: activityList})
            });
          })
          .catch(err => {
            console.log("Error getting documents", err);
          })
    }

    render() {
        const activitycards = []
        for (const [activity, info] of this.state.activityList.entries()) {
          activitycards.push(<ActivityCard title={info[0]} category={info[1]} description={info[2]}></ActivityCard>)
        }
        return (
            <div>
                <Navbar isCurrentUserAdmin={this.props.isCurrentUserAdmin}></Navbar>
                <h1>Lista de eventos y actividades</h1>
                {activitycards}
            </div>
        );
    }
}

export default Eventos;
