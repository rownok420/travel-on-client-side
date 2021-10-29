import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
    const { name, image, description, location, price, duration, _id } = service;
    return (
        <Col>
            <Card className="h-100 card-style card-hover-style">
                <div className="card-img-container">
                    <Card.Img
                        className="card-img-style"
                        variant="top"
                        src={image}
                    />
                </div>
                <Card.Body>
                    <div className="my-3">
                        <Card.Title>{name.slice(0, 26)}</Card.Title>
                        <div  className="d-flex align-items-center">
                            <i className="fas fa-map-marker-alt me-2 mb-2"></i>
                            <h6 className="text-muted">{location.slice(0, 30)}</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p style={{ color: "#ff7c5b" }}>{price} / Person</p>
                        <p style={{ color: "#ff7c5b" }}>{duration} Days</p>
                    </div>
                    <Card.Text>{description.slice(0, 100)}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link to={`/placeorder/${_id}`}>
                        <button className="home-button mb-2">
                            Place Order
                        </button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
