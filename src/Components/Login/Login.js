import React from 'react';
import './Login.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from '../../FakeData/Image/Logo.png'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';


const Login = () => {
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
            <div className="login-from">
                <form action="">
                    <h3>Login</h3>

                    <input type="text" name="" id="" placeholder="Username or Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Passowrd" />
                    <br />
                    <br />
                    <input type="checkbox" name="chkbox" id="" />
                    <label for="chkbox"> Remmember Me</label>
                    <br />
                    <br />
                    <input className="input-btn" cla type="submit" value="Login" />
                    <br />
                    <br />
                    <p><small>Dont't have an account? <a href="CreateAccount">Create an account</a></small></p>
                </form>
            </div>
            <div className="loginBtn">

                <button className="fbBtn"> <FacebookIcon style={{ color: "blue" }}></FacebookIcon> Continue with Facebook</button>
                <br />
                <button className="fbBtn" >Continue with Google</button>
            </div>

        </Container>
    );
};
export default Login;