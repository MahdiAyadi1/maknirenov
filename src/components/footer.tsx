import React from "react";
import "./footer.css";
import { Col, Container, Nav, Row } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import logo from "./logo60.png";
const footer = () => {
  return (
    <div id="footer">
      <div className="footer--main">
        <Container style={{ letterSpacing: "1px" }}>
          <Row>
            <Col className="pb-5">
              <p className="footer--title">
                <strong>A propos</strong>
              </p>
              Que vous réaménager votre appartement, votre maison, vos bureaux
              ou votre cabinet dentaire, les services de Makni renov peuvent vos
              apporter leurs aides à tous les niveaux.
              <br />
              <img
                src={logo}
                alt="Makni Renov Logo"
                height="80"
                className="d-inline-block align-top"
              />
            </Col>
            <Col>
              <p className="footer--title">
                <strong>Contact</strong>
              </p>
              <div>
                <LocationOnIcon />
                101 Boulevard Poniatowski 75012 PARIS{" "}
                <a
                  id="myLink"
                  href="https://maps.app.goo.gl/R2X9joF1p1EY2KB8A"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <OpenInNewIcon />
                </a>
              </div>
              <div>
                <div>
                  <CallIcon />
                  0130255880 / 0631354880
                </div>
              </div>
              <div>
                <EmailIcon /> maknirenov@gmail.com
              </div>
              <Nav.Link
                href={"https://www.facebook.com/maknirenovation"}
                className="d-flex align-items-center"
              >
                <FacebookIcon className="me-2" />
                Makni renov
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer--sub">
        <Container>Copyright © 2024</Container>
      </div>
    </div>
  );
};

export default footer;
