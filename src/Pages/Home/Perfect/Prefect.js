import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import sideImg from "../../../Images/side-1.jpg";
import "./Perfect.css";

const Prefect = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                className="img-fluid mt-4 mb-5"
                                src={sideImg}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="text-left">
                                <div className="my-4">
                                    <h1 className="mb-3 hed-color">
                                        A Simply Perfect Place To Get Lost
                                    </h1>
                                </div>
                                <div>
                                    <p>
                                        Treat yourself with a journey to your
                                        inner self. Visit a mystique Tibet and
                                        start your spiritual adventure. We
                                        promise, you’ll enjoy every step you
                                        make.
                                    </p>{" "}
                                    <p>
                                        When it comes to exploring exotic
                                        places, the choices are numerous.
                                        Whether you like peaceful destinations
                                        or vibrant landscapes, we have offers
                                        for you.
                                    </p>
                                    <p>
                                        Exploring means learning. Bring new
                                        experiences from each journey. Meet
                                        different cultures, traditions and
                                        landscapes. Choose your next destination
                                        and start your trip.
                                    </p>
                                </div>
                                <div>
                                    <Link to="/destinations">
                                        <button className="home-button">
                                            Find Destinations
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Prefect;
