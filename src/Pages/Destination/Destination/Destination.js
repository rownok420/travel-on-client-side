import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../../Subscribe/Subscribe";
import DestinationCard from "../DestinationCard/DestinationCard";
import "./Destination.css";

const Destination = () => {
    useEffect(() => {
        document.title = 'Travel On : Find your destinations'
    }, []);
    return (
        <div>
            <div className="text-center">
                <div className="background-img">
                    <h1 className="dep-heading">Our Destination</h1>
                    <p className="text-white">
                        Find your next travel adventure and make it memorable.
                        Explore wildlife, enjoy seaside or book a <br /> cruise tour.
                        Check out our popular destinations.
                    </p>
                    <Link to="/home">
                        <button className="home-button">
                            <i className="fas fa-user pe-2"></i> Back home
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <DestinationCard />
            </div>
            <div>
                <Subscribe />
            </div>
        </div>
    );
};

export default Destination;
