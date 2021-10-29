import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddService.css";
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        fetch("http://localhost:5000/addservice", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Successfully added the product")
                reset()
            }
            
        })
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
            <div style={{backgroundClip: "#f3f2f0"}}>
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
                        <div className=" add-services mt-5">
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
                                <div className="d-flex justify-content-between w-50">
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
                                <input className="home-button" type="submit" />
                            </form>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default AddService;


