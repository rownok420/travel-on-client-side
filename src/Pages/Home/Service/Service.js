import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Service.css";

const Service = ({ service, badge, setLoading, loading }) => {
  const { name, image, description, location, price, duration, _id } = service;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addservice/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                icon: "success",
                title: "Service Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              setLoading(!loading);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <Col>
      <Card className="h-100 card-style card-hover-style">
        <div className="card-img-container">
          <Card.Img className="card-img-style" variant="top" src={image} />
          {badge && (
            <Badge
              bg="danger"
              className="position-absolute top-0 start-100 translate-middle"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                handleDelete(_id);
              }}
            >
              X
            </Badge>
          )}
        </div>
        <Card.Body>
          <div className="my-3">
            <Card.Title>{name.slice(0, 26)}</Card.Title>
            <div className="d-flex align-items-center">
              <i className="fas fa-map-marker-alt me-2 mb-2 text-muted"></i>
              <h6 className="text-muted">{location.slice(0, 30)}</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p style={{ color: "#ff7c5b" }}>${price} / Person</p>
            <p style={{ color: "#ff7c5b" }}>{duration} Days</p>
          </div>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Link to={`/placeorder/${_id}`}>
            <button className="home-button mb-2">Place Order</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
