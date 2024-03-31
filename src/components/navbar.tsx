import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppRoutes from "../AppRoutes";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = (path: any) => {
    navigate(path);
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Close the Navbar when a link is clicked
  };

  const handleContactClick = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded(false); // Close the Navbar when the "Contact" link is clicked
  };

  return (
    <Navbar
      expand="lg"
      className="bg-custom-color mr-2 ml-2"
      sticky="top"
      variant="dark"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="navbar--text">
          <p className="navbar--text">Makni renov</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {AppRoutes.map((item) => (
              <Nav.Link
                onClick={() => handleNavLinkClick(item.path)}
                key={item.key}
                className="mx-2"
              >
                <p className="navbar--text">{item.title}</p>
              </Nav.Link>
            ))}
            {/* <Nav.Link className="me-5 ms-5">
              <p
                className="navbar--text navbar--contact"
                onClick={handleContactClick}
              >
                Contact
              </p>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
