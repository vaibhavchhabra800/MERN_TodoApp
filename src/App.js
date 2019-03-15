import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.components";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <a className="navbar-brand" href="https://www.google.com" target="_blank">
                          <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                      </a>
                      <Link to="/" className="navbar-brand">Todo App</Link>
                      <div className="collpase nav-collapse">
                          <ul className="navbar-nav mr-auto">
                              <li className="navbar-item">
                                  <Link to="/" className="nav-link">Todos</Link>
                              </li>
                              <li className="navbar-item">
                                  <Link to="/create" className="nav-link">Create Todo</Link>
                              </li>
                          </ul>
                      </div>
                  </nav>
              <div className="container">
              </div>
            <Route path="/" exact component={TodosList}/>
            <Route path="/edit/:id" exact component={EditTodo}/>
            <Route path="/create" exact component={CreateTodo}/>
          </div>

        </Router>
    );
  }
}

export default App;
