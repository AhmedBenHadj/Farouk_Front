import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

export default class Footer extends Component {
  render() {
    return (
        <React.Fragment>
            <hr className="border border-white" />
            <Row>
                <Col>
                    <Card bg="dark" text="white">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Success Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="white" text="dark" >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark" text="white" >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="http://ahmedbenhaj.tn">Made By Ahmed Ben Haj @ All right reserved.</Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
        </React.Fragment>
    )
  }
}
