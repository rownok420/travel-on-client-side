import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from '../../../Images/place/place-1.jpg'
import img2 from '../../../Images/place/place-2.jpg'
import img3 from '../../../Images/place/place-3.jpg'
import img4 from '../../../Images/place/place-4.jpg'
import img5 from '../../../Images/place/place-5.jpg'
import img6 from '../../../Images/place/place-6.jpg'
import img7 from '../../../Images/place/place-7.jpg'
import img8 from '../../../Images/place/place-8.jpg'
import img9 from '../../../Images/place/place-9.jpg'
import './DestinationCard.css'

const DestinationCard = () => {
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
                <div className='mt-5'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img1}
                                    />
                                    <h3 className="place">New York City</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img2}
                                    />
                                    <h3 className="place">Mont Blanc</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img3}
                                    />
                                    <h3 className="place">Norway Lake</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img4}
                                    />
                                    <h3 className="place">Affrican Park</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img5}
                                    />
                                    <h3 className="place">Vietnam</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img6}
                                    />
                                    <h3 className="place">Netherlands</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img7}
                                    />
                                    <h3 className="place">Greece</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img8}
                                    />
                                    <h3 className="place">Australia</h3>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 card-style">
                                <div className="img-container">
                                    <Card.Img
                                        className="p-3 card-img"
                                        variant="top"
                                        src={img9}
                                    />
                                    <h3 className="place">Costa Rica</h3>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default DestinationCard;
