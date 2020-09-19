import { FormControl } from '@material-ui/core';
import React from 'react';
import "./Hotel.css"
import logo from '../../FakeData/Image/Logo.png'
import image1 from '../../FakeData/Image/Rectangle 26.png'
import image2 from '../../FakeData/Image/Rectangle 27.png'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';

const Hotel = () => {
    return (
        <Container>
            <Navbar bg="none" variant="">
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="createAccount">Features</Nav.Link>
                    <Nav.Link href="hotel">Hotel</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="warning">Login</Button>
                </Form>
            </Navbar>

            <Row>
                <Col>
                    <div className="hotel-img">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image2} alt="" />
                        <img src={image1} alt="" />
                    </div>
                    <Col>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit necessitatibus perspiciatis. Eius modi minima deserunt aspernatur ratione id explicabo sunt! Non, quos accusamus? Inventore repellat voluptatum sunt deleniti. Omnis neque consectetur odit perferendis, maxime autem voluptatem earum ducimus corporis fuga, amet ex esse reiciendis consequatur! Iure possimus sapiente maxime
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, perspiciatis. Vel, minima nisi. Natus ex dolore voluptatem reprehenderit atque error debitis expedita, dolorem quasi repudiandae perspiciatis? Quam dolor porro debitis, vel vitae accusantium fuga. Ipsum, quod eveniet! Similique sapiente pariatur nam neque, maiores accusantium? Est ullam dolores modi aperiam ea.
                                    .</p>
                        </div>
                    </Col>
                </Col>

            </Row>
        </Container>
    );
};


export default Hotel;