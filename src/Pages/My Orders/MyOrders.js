import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Subscribe from "../Subscribe/Subscribe";
import "./MyOrders.css";

const MyOrders = () => {
    useEffect(() => {
        document.title = "Travel On : My orders";
    }, []);

    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();
    const email = user?.email;

    useEffect(() => {
        fetch(`https://agile-oasis-47558.herokuapp.com/myOrder/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrder(data);
            });
    }, [email]);

    // handle delete user
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure!!! you want to delete?");
        if (proceed) {
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
                        const remainingProduct = myOrder?.filter(
                            (product) => product._id !== id
                        );
                        setMyOrder(remainingProduct);
                    }
                });
        }
    };

    return (
        <div>
            <div className="text-center">
                <div className="my-order-background">
                    <h1 className="dep-heading">Show Your Orders</h1>
                    <p className="text-white">
                        One inspiring story is worth traveling. Discover more
                        about local food, tradition and history. Read the <br />
                        stories that make you want to travel.
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
                        <h1 className="text-center hed-color">My Orders</h1>
                        <hr className="doted-hr" />
                    </div>
                    <div className="my-5">
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {myOrder.map((order) => {
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
                                                    Booked by: {order?.name}
                                                </small>
                                                <div className="mt-3">
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
                                            <Card.Footer className="text-center">
                                                <button
                                                    onClick={() =>
                                                        handleDeleteOrder(
                                                            order?._id
                                                        )
                                                    }
                                                    className="home-button mb-2"
                                                >
                                                    Cancel Order
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
            <Subscribe />
        </div>
    );
};

export default MyOrders;
