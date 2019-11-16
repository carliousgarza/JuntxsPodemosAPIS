import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Components/Login';
import './App.css';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import ConoceIniciativa from './Components/ConoceIniciativa';
import QueSeHace from './Components/QueSeHace';
import Involucrate from './Components/Involucrate';
import Eventos from './Components/Eventos';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Login} exact/>
        <div>
          <Route path="/SignUp" component={SignUp} exact/>
          <Route path="/Home" component = {Home} exact/>
          <Route path="/Conoce" component = {ConoceIniciativa} exact/>
          <Route path="/EnMty" component = {QueSeHace} exact/>
          <Route path="/Involucrate" component = {Involucrate} exact/>
          <Route path="/Eventos" component = {Eventos} exact/>
        </div>

      </Router>
      
    </div>
  );
}

export default App;
