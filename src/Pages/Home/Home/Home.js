import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import useService from "../../../Hooks/useService";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Check from "../Check/Check";
import Prefect from "../Perfect/Prefect";
import Services from "../Services/Services";
import Travel from "../Travel/Travel";

const Home = () => {

    useEffect(() => {
        document.title = 'Travel On : Your Trusted Travel Partner'
    }, []);

    const [services] = useService();
    if (services.length === 0) {
        return (
            <div
                style={{ minHeight: "100vh" }}
                className="d-flex my-5 justify-content-center align-items-center"
            >
                <Spinner animation="border" variant="info" />
            </div>
        );
    }
    return (
        <div>
            <Banner />
            <Prefect />
            <Check />
            <Travel />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;
