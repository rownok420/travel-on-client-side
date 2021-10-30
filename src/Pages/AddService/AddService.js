import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddService.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Subscribe from "../Subscribe/Subscribe";
import img from "../../Images/add.png";
import Swal from "sweetalert2";

const AddService = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("https://agile-oasis-47558.herokuapp.com/addservice", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Services added successfully!',
                        'success'
                      )
                    history.push("/home");
                    reset();
                }
            });
    };
    return (
        <div>
            <div className="text-center">
                <div className="service-background">
                    <h1 className="dep-heading">Add a New Service</h1>
                    <p className="text-white">
                        Book a memorable tour at great price! Grab our last
                        minute offer and pack the things for the journey you{" "}
                        <br /> dream about. See our recommendations.
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
                                Add Your marvelous Service
                            </h1>
                            <p>
                                Show travel details, galleries, allow the users
                                to search & more. And our simple <br /> booking
                                form allows visitors to easily book their next
                                tour.
                            </p>
                        </div>
                        <div>
                            <Row>
                                <Col sm={12} md={6}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img
                                            className="img-fluid"
                                            src={img}
                                            alt=""
                                        />
                                    </div>
                                </Col>

                                <Col sm={12} md={6}>
                                    <div className=" add-services mt-5 d-flex justify-content-center align-items-center">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                type="text"
                                                {...register("name", {
                                                    required: true,
                                                    maxLength: 20,
                                                })}
                                                placeholder="Service name"
                                            />
                                            <input
                                                type="text"
                                                {...register("location", {
                                                    maxLength: 20,
                                                })}
                                                placeholder="Location"
                                            />
                                            <div className="d-flex justify-content-between w-100">
                                                <input
                                                    type="number"
                                                    {...register("price", {
                                                        required: true,
                                                        maxLength: 20,
                                                    })}
                                                    placeholder="Price"
                                                />
                                                <input
                                                    type="number"
                                                    {...register("duration", {
                                                        required: true,
                                                        maxLength: 20,
                                                    })}
                                                    placeholder="Duration"
                                                />
                                            </div>
                                            <input
                                                type="text"
                                                {...register("image", {
                                                    required: true,
                                                })}
                                                placeholder="Photo url"
                                            />
                                            <textarea
                                                style={{ resize: "none" }}
                                                rows="4"
                                                cols="2"
                                                type="text"
                                                {...register("description", {
                                                    required: true,
                                                })}
                                                placeholder="Description"
                                            />
                                            <input
                                                className="home-button"
                                                type="submit"
                                            />
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
            <Subscribe />
        </div>
    );
};

export default AddService;
