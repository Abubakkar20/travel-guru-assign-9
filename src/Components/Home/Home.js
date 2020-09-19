import { FormControl } from '@material-ui/core';
import React from 'react';
import logo from '../../FakeData/Image/Logo.png'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Home.css'
import HomeDetails from '../HomeDetails/HomeDetails';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-container" >
            <Container>
                <Navbar bg="none" variant="">
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>

                    <Nav className="mr-auto hmbtn">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="createAccount">Blog</Nav.Link>
                        <Nav.Link href="hotel">Hotel</Nav.Link>
                        <Nav.Link href="hotel">Destination</Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Link to="/login"><Button variant="warning">Login</Button></Link>
                    </Form>
                </Navbar>
            </Container>
            <HomeDetails />
        </div>
    );
};

export default Home;