import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import "./PlaceOrder.css";
import { Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [service, setService] = useState({});
    const history = useHistory();

    const nameRef = useRef();
    const emailRef = useRef();
    const serviceRef = useRef();
    const locationRef = useRef();
    const addressRrf = useRef();

    useEffect(() => {
        fetch(`http://localhost:5000/placeorder/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const serviceName = serviceRef.current.value;
        const location = locationRef.current.value;
        const address = addressRrf.current.value;
        const status = "Pending";
        const order = { name, email, serviceName, location, address, status };
        order.status = "Pending";
        console.log(order);

        fetch("http://localhost:5000/placeorder", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Successfully added the product");
                    history.push("/home")
                }
            });
    };
    return (
        <div>
            <div className="text-center">
                <div className="place-order-background">
                    <h1 className="dep-heading">Last Minute Offers</h1>
                    <p className="text-white">
                        Book a memorable tour at great price! Grab our last
                        minute offer and pack the things for the journey <br />{" "}
                        you dream about. See our recommendations.
                    </p>
                    <Link to="/home">
                        <button className="home-button">
                            <i className="fas fa-user pe-2"></i> Back home
                        </button>
                    </Link>
                </div>
            </div>

            <div style={{ backgroundClip: "#f3f2f0" }}>
                <div className="my-5">
                    <Container>
                        <div className="text-center">
                            <h1
                                style={{ color: "#ff7c5b" }}
                                className="hed-color mb-3"
                            >
                                Place Your Orders
                            </h1>
                        </div>
                        <div className=" place-order mt-5">
                            <form onSubmit={handlePlaceOrder}>
                                <input
                                    type="text"
                                    ref={nameRef}
                                    readOnly
                                    value={user?.displayName || ""}
                                />
                                <br />
                                <input
                                    type="email"
                                    ref={emailRef}
                                    readOnly
                                    value={user?.email || ""}
                                />
                                <br />
                                <div className="d-flex justify-content-between w-50">
                                    <input
                                        type="text"
                                        ref={serviceRef}
                                        readOnly
                                        value={service?.name || ""}
                                    />
                                    <input
                                        type="text"
                                        ref={locationRef}
                                        readOnly
                                        value={service?.location || ""}
                                    />
                                </div>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Your address"
                                    ref={addressRrf}
                                    required
                                />
                                <br />
                                <input
                                    className="home-button"
                                    type="submit"
                                    value="Place Order"
                                />
                            </form>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
