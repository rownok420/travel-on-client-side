import React from 'react';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from '../../../Images/login.png'
import './Login.css'

const Login = () => {
    const {
        signInUsingGoogle,
        signInUsingGitHub,
        error,
        setError,
        processLogin,
        setIsLoading,
    } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Login user
    const handleLoginUser = (e) => {
        e.preventDefault();
        processLogin(email, password)
            .then((result) => {
                // const user = result.user;
                // console.log(user);
                setError("");
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // google authentication
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                // console.log(result.user);
                history.push(redirect_uri);
            })
            .catch((err) => {
                setError(err.message);
                console.log(err.message);
            })
            .finally(() => setIsLoading(false));
    };

    // github authentication
    const handleGithubLogin = () => {
        signInUsingGitHub()
            .then((result) => {
                // console.log(result.user);
                history.push(redirect_uri);
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
                        <div>
                            <div>
                                <h2
                                    className="mb-2 fw-bold"
                                    style={{ color: "#00a3c8" }}
                                >
                                    Login Your Account
                                </h2>
                                <p className="text-muted mb-4">
                                    Setup your account in a minute
                                </p>
                            </div>
                            <div>
                                <Form
                                    onSubmit={handleLoginUser}
                                    className="w-100"
                                >
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            onBlur={handleEmailChange}
                                            type="email"
                                            placeholder="Email address"
                                            required
                                        />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with
                                            anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            onBlur={handlePasswordChange}
                                            type="password"
                                            placeholder="Password at lest 6 characters"
                                            required
                                        />
                                    </Form.Group>
                                    <div>
                                        <p className="text-warning">{error}</p>
                                    </div>
                                    <div>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicCheckbox"
                                        >
                                            <Link
                                                to="/register"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <p style={{ color: "#00a3c8" }}>
                                                    Don't have any
                                                    account?Register Now
                                                </p>
                                            </Link>
                                        </Form.Group>
                                    </div>
                                    <button
                                        className="login-btn rounded-2"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </Form>
                            </div>

                            <div className="mt-4 mb-5 text-center">
                                <small style={{ color: "#00a3c8" }}>
                                    or login with
                                </small>
                                <div className="mt-4">
                                    <i
                                        role="button"
                                        style={{ color: "#00a3c8" }}
                                        onClick={handleGoogleLogin}
                                        className="fab fab-icon fa-2x fa-google"
                                    ></i>

                                    <i
                                        role="button"
                                        onClick={handleGithubLogin}
                                        className="fab fab-icon fa-2x fa-github"
                                    ></i>
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