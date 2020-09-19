import { FormControl, Input } from '@material-ui/core';
import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../../FakeData/Image/Logo.png'
import './CreateAccount.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const CreateAccount = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {

                const { displayName, email } = res.user;
                const signedInuser = { name: displayName, email }
                setLoggedInUser(signedInuser)
                history.replace(from);
            }).catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const handleChange = (e) => {
        console.log(e.target.value);

    }

    const handleSubmt = () => {

    }

    return (
        <div className="CreateAccount-container" >
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

                <div className="CreateAccount-form">
                    <Form onSubmit={handleSubmt}>
                        <h3>Create account</h3>
                        <br />
                        <input type="text" name="first name" id="" onBlur={handleChange} placeholder="First Name" required />
                        <br />
                        <br />
                        <input type="text" name="last name" id="" onBlur={handleChange} placeholder="Last Name" required></input>
                        <br />
                        <br />
                        <input type="email" name="email" id="" onBlur={handleChange} placeholder="Username or Email" required />
                        <br />
                        <br />
                        <input type="password" name="password" id="" onBlur={handleChange} placeholder="Password" required />

                        <br />
                        <br />
                        <input type="password" name="confirm password" id="" onBlur={handleChange} placeholder="Confrim Passowrd" required ></input>
                        <br />
                        <br />
                        <br />
                        {/* <Button variant="warning" size="sm" block> Create account</Button> */}
                        <input type="submit" value="Create account" />
                        <p> <small> Already have an account? <a href="login">Login</a> </small></p>

                    </Form>
                </div>
                <div className="loginBtn">

                    <button className="fbBtn"> <FacebookIcon style={{ color: "blue" }}></FacebookIcon> Continue with Facebook</button>
                    <br />
                    <button className="fbBtn" onClick={signInWithGoogle} >Continue with Google</button>
                </div>

            </Container>
        </div>
    );
};

export default CreateAccount;