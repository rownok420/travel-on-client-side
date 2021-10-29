import React from "react";
import { Link } from "react-router-dom";
import "./ManageOrder.css";

const ManageOrder = () => {
    return (
        <div>
            <div className="text-center">
                <div className="manage-background-img">
                    <h1 className="dep-heading">Manage all Orders</h1>
                    <p className="text-white">
                        A journey of a 1000 miles starts with a single step.
                        Import the full demo content with 1 click <br /> and create a
                        head-turning website for your travel agency.
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

export default ManageOrder;
