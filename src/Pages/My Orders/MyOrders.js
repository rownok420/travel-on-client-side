import React from "react";
import { Link } from "react-router-dom";
import "./MyOrders.css";

const MyOrders = () => {
    return (
        <div>
            <div className="text-center">
                <div className="my-order-background">
                    <h1 className="dep-heading">Show Your Orders</h1>
                    <p className='text-white'>
                        One inspiring story is worth traveling. Discover more
                        about local food, tradition and history. Read the <br />
                        stories that make you want to travel.
                    </p>
                    <Link to="/home">
                        <button className="home-button">
                            <i className="fas fa-user pe-2"></i> Back home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
