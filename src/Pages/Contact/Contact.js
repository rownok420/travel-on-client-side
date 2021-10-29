import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Contact.css";
import img from "../../Images/contact-1.png";

const Contact = () => {
    return (
        <div style={{ backgroundColor: "#f3f2f0" }} className="py-3">
            <div className="container">
                <div>
                    <h1 className="mt-4 mb-5 contact-heading">Contact Us</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-center">
                    <div className="col">
                        <div className="card mb-3 w-100 h-100 card-style p-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div>
                                        <i className="far fa-envelope fa-6x p-3"></i>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            Email Address
                                        </h4>
                                        <p className="card-text">
                                            hello@edu.com
                                        </p>
                                        <p className="card-text">
                                            hello@envato.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100 h-100 card-style p-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div>
                                        <i className="fas fa-phone-alt fa-6x p-3"></i>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            Phone Number
                                        </h4>
                                        <p className="card-text">
                                            1-888-452-1505
                                        </p>
                                        <p className="card-text">
                                            1-888-452-1340
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3 w-100 h-100 card-style p-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div>
                                        <i className="fas fa-map-marker-alt fa-6x p-3"></i>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            Our Location
                                        </h4>
                                        <p className="card-text">
                                            30 Commercial Road
                                        </p>
                                        <p className="card-text">
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="my-5">
                        <Row>
                            <Col sm={12} md={6}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        className="img-fluid mt-4 mb-5"
                                        src={img}
                                        alt=""
                                    />
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div>
                                    <div>
                                        <h3
                                            style={{ color: "#ff7c5b" }}
                                            className=" mt-3 text-center"
                                        >
                                            Get In Touch
                                        </h3>
                                    </div>
                                    <form className="w-75 m-auto form-style">
                                        <div className="mb-3  text-start">
                                            <label className="mb-2 fw-bold ms-2">
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Write your name"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 text-start">
                                            <label className="mb-2 fw-bold ms-2">
                                                Email address:
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleFormControlInput2"
                                                placeholder="name@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 text-start">
                                            <label className="mb-2 fw-bold ms-2">
                                                Feedback:
                                            </label>
                                            <textarea
                                                style={{ resize: "none" }}
                                                className="form-control"
                                                id="exampleFormControlTextarea3"
                                                rows="5"
                                                placeholder="Write your feedback"
                                            ></textarea>
                                        </div>
                                        <div className="mb-3 pb-5">
                                            <button
                                                type="submit"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="home-button m-2"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="reset"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="home-button m-2"
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
