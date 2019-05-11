import React, { Component } from 'react';
import MainLayout from "./layouts/MainLayout";
import './App.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class App extends Component {
  render() {
    return (
        <div className="bg">
            <Container>
                <MainLayout></MainLayout>
            </Container>
        </div>
    );
  }
}

export default App;
