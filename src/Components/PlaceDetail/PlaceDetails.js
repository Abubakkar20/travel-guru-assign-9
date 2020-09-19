import { FormControl, Input } from '@material-ui/core';
import React from 'react';
import logo from '../../FakeData/Image/Logo.png'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import './PlaceDetails.css'
import { Link } from 'react-router-dom';

const PlaceDetails = () => {



    return (
        <div className="home-container" >
            <Container>
                <Navbar bg="none" variant="">
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>

                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="warning">Login</Button>
                    </Form>
                </Navbar>




                <div className="placeBody">
                    <Row>
                        <Col>
                        <h2>COX'S BAZAR'</h2>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam autem suscipit necessitatibus, nisi modi neque adipisci illum quia alias asperiores.
                        
                        </Col>
                        <Col>
                            <Form className="bookingFrom">
                                <Form.Group controlId="origin">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control type="text" placeholder="Your origin..." />
                                </Form.Group>

                                <Form.Group controlId="destination">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control type="password" placeholder="Destination..." />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>From</Form.Label> <br />
                                        <Input type="date"></Input>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>To</Form.Label> <br />
                                        <Input type="date"></Input>

                                    </Form.Group>
                                </Form.Row>

                                <Link to="/CreateAccount"> <Button variant="warning" size="lg" block> Start Booking
                                </Button></Link>


                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>






        </div>
    );
};

export default PlaceDetails;