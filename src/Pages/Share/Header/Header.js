import React from "react";
import {
  Container,
  DropdownButton,
  InputGroup,
  Nav,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
import logo from "../../../Images/logo-1.png";
// import { Dropdown } from "bootstrap";

const Header = () => {
  const { user, logOut } = useAuth();
  const activeStyle = {
    fontWeight: "bold",
    overflow: "hidden",
    color: "#ff7c5b",
  };

  return (
    <Navbar className="nav-style" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img className="logo text-white" src={logo} alt="logo" />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <NavLink
              activeStyle={activeStyle}
              to="/home"
              className="widthCustom"
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              to="/about"
              className="widthCustom"
            >
              About us
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              to="/destination"
              className="widthCustom"
            >
              Destinations
            </NavLink>
            {user.email && (
              <>
                <NavLink
                  activeStyle={activeStyle}
                  to="/orders"
                  className="widthCustom"
                >
                  My Orders
                </NavLink>
                <InputGroup
                //   className="mb-3"
                >
                  <DropdownButton
                    variant="outline-secondary"
                    title="Dashboard"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item>
                      <NavLink activeStyle={activeStyle} to="/manageorder">
                        Manage Orders
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink activeStyle={activeStyle} to="/addservice">
                        Add Service
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink activeStyle={activeStyle} to="/allProduct">
                        All Products
                      </NavLink>
                    </Dropdown.Item>
                  </DropdownButton>
                  {/* <FormControl aria-label="Text input with dropdown button" /> */}
                </InputGroup>
              </>
            )}
          </Nav>

          {user.email ? (
            <div>
              <NavLink to="/login">
                <button onClick={logOut} className="rounded-pill login-btn">
                  Log out
                </button>
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to="/login">
                <button className="rounded-pill login-btn">Login</button>
              </NavLink>
            </div>
          )}

          {user?.photoURL && (
            <Navbar.Brand style={{ marginRight: "0px" }}>
              <img
                src={user?.photoURL}
                width="35"
                height="35"
                className="d-inline-block align-top rounded-circle m-2 d-none d-lg-block"
                alt=""
              />
            </Navbar.Brand>
          )}

          {user?.email && (
            <Navbar.Brand className="name-style py-0 text-white">
              <h6>{user?.displayName.split(" ")[0]}</h6>
            </Navbar.Brand>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
