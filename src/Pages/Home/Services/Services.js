import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div style={{marginTop: "100px"}} className="mb-5">
            <Container>
                <div className="text-center hed-color">
                    <h5>MODERN & BEAUTIFUL</h5>
                    <h1 className="mb-5">Our Most Popular Services</h1>
                </div>
                <div>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {
                            services.map(service => <Service key={service.name} service={service}/>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Services;