import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Facebook from "@mui/icons-material/Facebook";
import "./PageTopHeading.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const PageTopHeading = () => {
  return (
    <div className="top-heading-text d-none d-xl-flex">
      <Container>
        <Row>
          <Col style={{ fontSize: "15px" }}>
            <LocationOnIcon className="me-2" />
            101 Boulevard Poniatowski 75012 PARIS
          </Col>
          <Col className="ml-auto" style={{ textAlign: "right" }}>
            <Nav.Link
              href={"https://www.facebook.com/maknirenovation"}
              className="d-flex align-items-center justify-content-end"
              style={{ fontSize: "14px" }}
            >
              <Facebook className="me-2" />
              <div style={{ fontSize: "15px" }}>Makni renov</div>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageTopHeading;
