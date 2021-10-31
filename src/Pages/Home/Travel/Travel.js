import React from "react";
import "./Travel.css";
import img1 from "../../../Images/travel/t-1.jpg";
import img2 from "../../../Images/travel/t-2.jpg";
import img3 from "../../../Images/travel/t-3.jpg";
import img4 from "../../../Images/travel/t-4.jpg";

const Travel = () => {
    return (
        <div>
            <div style={{ marginTop: "100px" }} className="container">
                <div className="text-center hed-color">
                    <h6>TRAVELON SPECIALS</h6>
                    <h1>Why Travel with TravelOn</h1>
                </div>
                <div className="mt-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col">
                            <div className="card h-100 card-1 card-hover">
                                <div>
                                    <img
                                        src={img1}
                                        className="card-img-top img-fluid"
                                        alt="..."
                                    />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">
                                        2000+ Our Worldwide Guide
                                    </h4>
                                    <p>
                                        Book a memorable tour at great price!
                                        Grab our last minute offer and pack the
                                        things for the journey you dream about.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-2 card-hover">
                                <div>
                                    <img
                                        src={img2}
                                        className="card-img-top img-fluid"
                                        alt="..."
                                    />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">
                                        100% Trusted Tour Agency
                                    </h4>
                                    <p>
                                        Book a memorable tour at great price!
                                        Grab our last minute offer and pack the
                                        things for the journey you dream about.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-3 card-hover">
                                <div>
                                    <img
                                        src={img3}
                                        className="card-img-top img-fluid"
                                        alt="..."
                                    />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">
                                        12+ Years of Travel Experience
                                    </h4>
                                    <p>
                                        Book a memorable tour at great price!
                                        Grab our last minute offer and pack the
                                        things for the journey you dream about.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 card-4 card-hover">
                                <div>
                                    <img
                                        src={img4}
                                        className="card-img-top img-fluid"
                                        alt="..."
                                    />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">
                                        98% of Our Travelers are Happy
                                    </h4>
                                    <p>
                                        Book a memorable tour at great price!
                                        Grab our last minute offer and pack the
                                        things for the journey you dream about.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;
