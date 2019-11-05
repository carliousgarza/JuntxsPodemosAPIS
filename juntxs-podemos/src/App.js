import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import './App.css';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Login} exact/>
        <Route path="/SignUp" component={SignUp} exact/>
      </Router>
      
    </div>
  );
}

export default App;
