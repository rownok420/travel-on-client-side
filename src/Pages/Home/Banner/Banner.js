import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="text-center">
            <div className="bg-img">
                <div className='container'>
                    <h1 className="banner-heading">
                        Ready to start your exciting journey Explore Your
                        Travel
                    </h1>
                    <p className="text-white py-3">
                        Discover your next great adventure, become an explorer
                        to get started!
                    </p>
                    <Link to="/about">
                        <button className="home-button">
                            <i className="fas fa-user pe-2"></i>About us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
