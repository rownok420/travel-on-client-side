import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageOrder.css";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState({});

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
                <Container>
                    <div>
                        <h1 className="hed-color text-center">
                            All Orders Here
                        </h1>
                    </div>
                    <div className="my-5">
                        <Row xs={1} md={2} lg={4} className="g-4">
                            {orders.map((order) => {
                                return (
                                    <Col key={order._id}>
                                        <Card className="h-100 card-style card-hover-style">
                                            <div className="card-img-container">
                                                <Card.Img
                                                    className="card-img-style"
                                                    variant="top"
                                                    src={order?.image}
                                                />
                                            </div>
                                            <Card.Body>
                                                <div className="my-3">
                                                    <Card.Title>
                                                        {order?.serviceName.slice(
                                                            0,
                                                            26
                                                        )}
                                                    </Card.Title>
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-map-marker-alt me-2 mb-2"></i>
                                                        <h6 className="text-muted">
                                                            {order?.location.slice(
                                                                0,
                                                                30
                                                            )}
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6
                                                        style={{
                                                            color: "#ff7c5b",
                                                        }}
                                                    >
                                                        Order Status:{" "}
                                                        {order?.status}
                                                    </h6>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer className="text-center">
                                                <button className="btn btn-primary mb-2">
                                                    Confirm Order
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteOrder(
                                                            order._id
                                                        )
                                                    }
                                                    className="btn btn-warning mb-2"
                                                >
                                                    Delete Order
                                                </button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ManageOrder;
