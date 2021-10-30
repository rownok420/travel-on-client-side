import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import loginImg from "../../../Images/login.png";
import "./Login.css";

const Login = () => {
    const {
        signInUsingGoogle,
        setError,
        setIsLoading,
    } = useAuth();

    

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";




    // google authentication
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                // console.log(result.user);
                history.push(redirect_uri);
                console.log(result.user)
            })
            .catch((err) => {
                setError(err.message);
                console.log(err.message);
            })
            .finally(() => setIsLoading(false));
    };


    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="mb-4">
                            <img className="w-100" src={loginImg} alt="" />
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div className="login-style mb-5">
                            <div>
                                <h2 className="mb-2 fw-bold text-center hed-color">
                                    Login Your Account
                                </h2>
                                <p className="text-muted text-center mb-4">
                                    Setup your account in a minute
                                </p>
                            </div>
                            <div onClick={handleGoogleLogin} role="button" className="google-box">
                                <div className="d-flex align-items-center justify-content-around">
                                    <i className="fab fab-icon fa-2x fa-google"></i>
                                    <h5>Continue with Google</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
