import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "../components/home";
export default class MainLayout extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Route exact path="/" component={Login}/>
          <Route path="/Home" component={Home}/>
      </Router>
    );
  }
}
