import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <h1>THIS IS  A Gyu</h1>
          </div>

            <Route path="/" exact component={TodoList}/>

        </Router>
    );
  }
}

export default App;
