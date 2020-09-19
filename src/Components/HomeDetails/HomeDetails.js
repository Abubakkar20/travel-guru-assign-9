import { Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import sajek from '../../FakeData/Image/Sajek.png'
import sremongol from '../../FakeData/Image/Sreemongol.png'
import sundorbon from '../../FakeData/Image/sundorbon.png'
import './HomeDetails.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom'

const HomeDetails = () => {
    return (
        <Container>

            <Row className="homeDetails-container">
                <Col xs={6}>
                    <h1>COX'S BAZAR</h1>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt doloremque, adipisci corporis obcaecati aperiam.</p>
                    <Link to="/createAccount"><Button variant="warning">Booking<ArrowForwardIcon style={{ fontSize: "16px" }}></ArrowForwardIcon></Button></Link>
                </Col>
                <Col className="homeDetailsImg" xs={6}>

                    <div className="photo-frame">

                        <div className="photo">
                            <Link to="/PlaceDetails"> <img src={sajek} alt="" /></Link>
                        </div>

                        <div className="photo-detail">
                            <h4>COX'S BAZAR</h4>
                        </div>
                    </div>

                    <div className="photo-frame">
                        <div className="photo">
                            <Link to="/PlaceDetails" > <img src={sremongol} alt="" /></Link>
                        </div>
                        <div className="photo-detail">
                            <h4>SREMONGOL</h4>
                        </div>
                    </div>


                    <div className="photo-frame">
                        <div className="photo">
                            <Link to="/PlaceDetails"><img src={sundorbon} alt="" /></Link>
                        </div>
                        <div className="photo-detail">
                            <h4>SUNDORBON</h4>
                        </div>
                    </div>


                </Col>
            </Row>

        </Container >
    );
};

export default HomeDetails;