import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Subscribe from "../Subscribe/Subscribe";
import "./ManageOrder.css";

const ManageOrder = () => {
    useEffect(() => {
        document.title = "Travel On : Manage order";
    }, []);

    const [orders, setOrders] = useState([]);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        fetch("https://agile-oasis-47558.herokuapp.com/placeorder")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, [update]);

    // handle update user
    const handleUpdateStatus = (id) => {
        fetch(`https://agile-oasis-47558.herokuapp.com/placeorder/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orders),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Good job!", "Your order confirmed", "success");
                    setUpdate(!update);
                } else {
                    setUpdate(false);
                }
            });
    };

    // handle delete user
    const handleDeleteOrder = (id) => {
        // const proceed = window.confirm("Are you sure!!! you want to delete?");
        // if (proceed) {
            fetch(`https://agile-oasis-47558.herokuapp.com/placeorder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        Swal.fire(
                            "Sorry to say!",
                            "Successfully deleted!",
                            "success"
                        );
                        const remainingProduct = orders?.filter(
                            (product) => product._id !== id
                        );
                        setOrders(remainingProduct);
                    }
                });
        // }
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
                            <i className="fas fa-backward pe-2"></i> Back home
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
                        <hr className="doted-hr" />
                    </div>
                    <div className="my-5">
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {orders?.map((order) => {
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
                                                <div className="my-2">
                                                    <Card.Title>
                                                        {order?.serviceName.slice(
                                                            0,
                                                            26
                                                        )}
                                                    </Card.Title>
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-map-marker-alt me-2 mb-2 text-muted"></i>
                                                        <h6 className="text-muted">
                                                            {order?.location.slice(
                                                                0,
                                                                30
                                                            )}
                                                        </h6>
                                                    </div>
                                                </div>

                                                <small className="text-muted">
                                                    <i className="fas fa-user me-2"></i>
                                                    Booked by: {order?.name}
                                                </small>

                                                <div className="mt-3">
                                                    {/* <h6
                                                        style={{
                                                            color: "#ff7c5b",
                                                        }}
                                                    >
                                                        Order Status:{" "}
                                                        {order?.status}
                                                    </h6> */}
                                                    {order?.status ===
                                                    "Pending" ? (
                                                        <h6>
                                                            Order Status:{" "}
                                                            <span
                                                                style={{
                                                                    color: "red",
                                                                    fontWeight: "bold"
                                                                }}
                                                            >
                                                                {order?.status}
                                                            </span>
                                                        </h6>
                                                    ) : (
                                                        <h6>
                                                            Order Status:{" "}
                                                            <span
                                                                style={{
                                                                    color: "green",
                                                                    fontWeight: "bold"
                                                                }}
                                                            >
                                                                {order?.status}
                                                            </span>
                                                        </h6>
                                                    )}
                                                </div>
                                            </Card.Body>
                                            <Card.Footer className="text-center py-3">
                                                <div className="btn-group">
                                                    <button
                                                        onClick={() =>
                                                            handleUpdateStatus(
                                                                order._id
                                                            )
                                                        }
                                                        className="btn py-3 btn-success fw-bold"
                                                    >
                                                        Confirm Order
                                                    </button>
                                                    <button
                                                        style={{
                                                            backgroundColor:
                                                                "#ff7c5b",
                                                        }}
                                                        onClick={() =>
                                                            handleDeleteOrder(
                                                                order._id
                                                            )
                                                        }
                                                        className="btn text-white py-3 fw-bold"
                                                    >
                                                        Delete Order
                                                    </button>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </Container>
            </div>
            <Subscribe />
        </div>
    );
};

export default ManageOrder;
