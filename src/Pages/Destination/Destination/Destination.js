import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "../../Subscribe/Subscribe";
import DestinationCard from "../DestinationCard/DestinationCard";
import "./Destination.css";

const Destination = () => {
    return (
        <div>
            <div className="text-center">
                <div className="background-img">
                    <h1 className="dep-heading">Our Destination</h1>
                    <p className="text-white">
                        Showcase your destination offers with the
                        all-encompasing destination lists that <br /> contains
                        all the amazing places your customers can visit.
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
