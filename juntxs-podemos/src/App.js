import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Components/Login';
import './App.css';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import ConoceIniciativa from './Components/ConoceIniciativa';
import QueSeHace from './Components/QueSeHace';
import Involucrate from './Components/Involucrate';
import Activity from './Components/Activity';
import EditProfile from './Components/EditProfile';
import fire from './config/firebase';
import firebase from './config/firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currentUserType: null,
      currentUserData: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Update currentUser and currentUserType to App state
        this.setState({ currentUser: user })
        this.setCurrentUserType(user)
      } else {
        // No user was found
      }
    });
  }

  setCurrentUserType(currentUser) {
    const currentUserId = currentUser.uid
    fire.firestore().collection("Users").doc(currentUserId).get()
      .then(doc => {
        const currentUserData = doc.data();
        this.setState({ currentUserData: currentUserData})
        this.setState({ currentUserType: currentUserData.userType })
      })
  }

  isCurrentUserAdmin() {
    return this.state.currentUserType === 0
  }

  render() {
    const isCurrentUserAdmin = this.isCurrentUserAdmin()
    return (
      <div>
        <Router>
          <Route path="/" component={Login} exact />
          <div>
            <Route path="/SignUp" component={SignUp} exact />
            <Route path="/Home"
              component={() => <Home isCurrentUserAdmin={isCurrentUserAdmin} />} exact />
            <Route path="/Conoce"
              component={() => <ConoceIniciativa isCurrentUserAdmin={isCurrentUserAdmin} />} exact />
            <Route path="/EnMty"
              component={() => <QueSeHace isCurrentUserAdmin={isCurrentUserAdmin} />} exact />
            <Route path="/Involucrate"
              component={() => <Involucrate isCurrentUserAdmin={isCurrentUserAdmin} />} exact />
            <Route path="/Activity"
              component={() => <Activity isCurrentUserAdmin={isCurrentUserAdmin} />} exact />
            <Route path="/EditarPerfil"
              component = {EditProfile} exact />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
