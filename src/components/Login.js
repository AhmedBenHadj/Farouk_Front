import React, { Component } from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import api from "../api";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
			password:""
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleSubmit(event) {
        const JsonObject = JSON.parse(JSON.stringify({
            username:this.state.username,
			password:this.state.password
        }));
        api.post('/api/user/signin',JsonObject)
            .then((res)=>{
                const cookie = new Cookies();
                const cookie_value={
                    token:res.data.token,
                    username:this.state.username
                };
                cookie.set("steg",cookie_value,{path:'/'});
                window.location = "/Home" ;
            }).catch((error)=>{
            	alert("An error has occured !");
        });
        event.preventDefault();
    }
  render() {
    return (
            <Card className="text-white bg-dark">
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" required onChange={this.handleUsernameChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="dark" type="submit" className="border border-white">
                                Login
                            </Button>
                            <Button variant="white" className="border border-dark">
                                Register
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
    )
  }
}
