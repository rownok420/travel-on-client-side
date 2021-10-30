import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./DestinationCard.css";

const DestinationCard = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/destination")
            .then((res) => res.json())
            .then((data) => {
                setDestinations(data);
            });
    }, []);

    return (
        <div className="my-5">
            <Container>
                <div className="text-center">
                    <h1 className="hed-color mb-3">Ultimate Thailand</h1>
                    <p>
                        Show travel details, galleries, allow the users to
                        search & more. And our simple <br /> booking form allows
                        visitors to easily book their next tour.
                    </p>
                </div>
                <div className="mt-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {destinations.map((destination) => {
                            return (
                                <Col key={destination._id}>
                                    <Card className="h-100 card-style">
                                        <div className="img-container">
                                            <Card.Img
                                                className="p-3 card-img"
                                                variant="top"
                                                src={destination.image}
                                            />
                                            <h3 className="place">
                                                {destination.name}
                                            </h3>
                                        </div>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default DestinationCard;
