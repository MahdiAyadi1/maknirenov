import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import AppRoutes from "../AppRoutes";
import { useNavigate } from "react-router-dom";
import logo from "./logo60.png";
const Navbar2 = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = (path: any) => {
    navigate(path);
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Close the Navbar when a link is clicked
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="p-3"
      sticky="top"
      expanded={expanded}
      style={{ top: "-1px" }}
    >
      <Navbar.Brand onClick={() => handleNavLinkClick("maknirenov/")}>
        <img
          src={logo}
          alt="Makni Renov Logo"
          height="40"
          // width="110"
          style={{ padding: 0, margin: 0 }}
          className="d-inline-block align-top"
        />{" "}
        {/* Makni Renov */}
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarNavDropdown"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="ms-auto">
          <Nav.Link
            className="mx-2"
            onClick={() => handleNavLinkClick("maknirenov/")}
          >
            Acceuil
          </Nav.Link>
          <Nav.Link
            className="mx-2"
            onClick={() => handleNavLinkClick("maknirenov/Realisation")}
          >
            Réalisations
          </Nav.Link>
          <Nav.Link
            className="mx-2"
            onClick={() => handleNavLinkClick("maknirenov/Conception")}
          >
            Conception
          </Nav.Link>
          <Nav.Link
            className="mx-2"
            onClick={() => handleNavLinkClick("maknirenov/Contact")}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;
