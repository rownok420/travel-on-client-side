import React from "react";
import { Container, Form, FormSelect, Row } from "react-bootstrap";
import './Check.css'

const Check = () => {
    return (
        <div>
            <section className="booking-container mb-5">
                <Container className="text-center">
                    <div className="sec-title text-center hed-color">
                        <h6 className="text-uppercase">
                            TRAVEL SPECIALS
                        </h6>
                        <h1 className="mb-5">
                            Check Availability.
                        </h1>
                    </div>
                    <Form className="card-style p-5 rounded-3">
                        <Row className="g-0 g-3 py-5">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                    <i className="fas fa-calendar-alt mt-1 me-2"></i>
                                    <p>CHECK-IN</p>
                                </div>
                                <input
                                    type="date"
                                    className="form-control px-md-5 shadow-none  mb-5 mb-md-0"
                                />
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                    <i className="fas fa-calendar-alt mt-1 me-2"></i>
                                    <p>CHECK-OUT</p>
                                </div>
                                <input
                                    type="date"
                                    className="form-control px-md-5 shadow-none mb-5 mb-md-0"
                                />
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                                        <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                            <i className="fas fa-user-friends mt-1 me-2"></i>
                                            <p>PERSON</p>
                                        </div>
                                        <FormSelect className="form-control shadow-none">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                        </FormSelect>
                                    </div>
                                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                                        <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                            <i className="fas fa-map-marker-alt mt-1 me-2"></i>
                                            <p>CITY</p>
                                        </div>
                                        <FormSelect className="shadow-none form-control">
                                            <option value="new york">
                                                New York, America
                                            </option>
                                            <option value="Chicago, America">
                                                Chicago, America
                                            </option>
                                            <option value="Barcelona, Spain">
                                                Barcelona, Spain
                                            </option>
                                            <option value="Moscow, Russia">
                                                Moscow, Russia
                                            </option>
                                            <option value="Los Angels, America">
                                                Los Angels,America
                                            </option>
                                            <option value="Sorrent, Germany">
                                                Sorrent, Germany
                                            </option>
                                        </FormSelect>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    type="submit"
                                    className="py-3 px-3 mt-4 home-button fw-bold border-0"
                                >
                                    Check Availability
                                </button>
                            </div>
                        </Row>
                    </Form>
                </Container>
            </section>
        </div>
    );
};

export default Check;
