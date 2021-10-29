import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./PlaceOrder.css";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/placeorder/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        // fetch("http://localhost:5000/placeorder", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.insertedId) {
        //             alert("Successfully added the product");
        //         }
        //     });
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    defaultValue={user?.displayName || ""}
                                    type="text"
                                    {...register("name", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <input
                                    defaultValue={user?.email || ""}
                                    type="email"
                                    {...register("email", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <div className="d-flex justify-content-between w-50">
                                    <input
                                        defaultValue={service?.name || ""}
                                        type="text"
                                        {...register("serviceName", {
                                            required: true,
                                            maxLength: 20,
                                        })}
                                        placeholder="Service name"
                                    />
                                    <input
                                        defaultValue={service?.location || ""}
                                        type="text"
                                        {...register("location", {
                                            required: true,
                                            maxLength: 20,
                                        })}
                                        placeholder="Location"
                                    />
                                </div>
                                <input
                                    type="text"
                                    {...register("address", {
                                        required: true,
                                    })}
                                    placeholder="Address"
                                />
                                <button className="home-button" type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
