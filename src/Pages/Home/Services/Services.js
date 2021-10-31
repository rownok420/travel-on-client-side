import { Container, Row } from "react-bootstrap";
import useService from "../../../Hooks/useService";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [services] = useService();

    return (
        <div style={{ marginTop: "100px" }} className="mb-5">
            <Container>
                <div className="text-center hed-color">
                    <h6>MODERN & BEAUTIFUL</h6>
                    <h1 className="mb-5">Our Most Popular Services</h1>
                </div>
                <div>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {services.map((service) => (
                            <Service key={service._id} service={service} />
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Services;
