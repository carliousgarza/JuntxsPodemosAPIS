import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Login} />
      </Router>
      
    </div>
  );
}

export default App;
