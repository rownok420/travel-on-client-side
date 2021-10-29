import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
    const { name, image, description, location } = service;
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
                    <div className='my-3'>
                        <Card.Title>{name}</Card.Title>
                        <h6 className='text-muted'>{location}</h6>
                    </div>
                    <Card.Text>{description.slice(0, 120)}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link to="/placeorder">
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
