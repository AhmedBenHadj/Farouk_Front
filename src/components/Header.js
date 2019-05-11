import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/" className="border-bottom border-primary text-primary">STEG</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-light"><a href="http://www.steg.com.tn/fr/index.html" style={{color:"white"}}> Site officiel</a></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <hr className="border border-white"/>
        </React.Fragment>
    )
  }
}
