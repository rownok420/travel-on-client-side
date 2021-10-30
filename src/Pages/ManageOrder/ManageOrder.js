import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageOrder.css";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/placeorder")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);


    // useEffect(() => {
    //     fetch(`http://localhost:5000/singleorder/${orders?._id}`)
    //         .then((res) => res.json())
    //         .then((data) => setUpdate(data));
    // }, []);

    // handle update user
    // const handleUpdateStatus =(id)=> {
    //     fetch(`http://localhost:5000/placeorder/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(update),
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.modifiedCount > 0){
    //             alert("Updated successfully")
    //             setOrders()
    //         }
    //     })
    // }

    // handle delete user
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure!!! you want to delete");
        if (proceed) {
            fetch(`http://localhost:5000/placeorder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert("Successfully Deleted");
                        const remainingProduct = orders?.filter(
                            (product) => product._id !== id
                        );
                        setOrders(remainingProduct);
                    }
                });
        }
    };
    return (
        <div>
            <div className="text-center">
                <div className="manage-background-img">
                    <h1 className="dep-heading">Manage all Orders</h1>
                    <p className="text-white">
                        A journey of a 1000 miles starts with a single step.
                        Import the full demo content with 1 click <br /> and
                        create a head-turning website for your travel agency.
                    </p>
                    <Link to="/home">
                        <button className="home-button">
                            <i className="fas fa-user pe-2"></i> Back home
                        </button>
                    </Link>
                </div>
            </div>
            <div className="my-5">
                <div>
                    <h1 className="hed-color text-center">All Orders Here</h1>
                </div>
                <div className="text-center">
                    <ul>
                        {orders?.map((order) => (
                            <li key={order._id}>
                                Status: {order.status} :: {order.email}
                                {/* <button onClick={() => handleUpdateStatus(order._id)}>Confirm</button> */}
                                <button
                                    onClick={() => handleDeleteOrder(order._id)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;
