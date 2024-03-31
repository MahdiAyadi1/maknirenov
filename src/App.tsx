import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import ToolBar from "./components/toolBar/ToolBar";
import BottomNav from "./components/bottomNav/BottomNav";
import "./App.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { Col, Container, Row } from "react-bootstrap";
import { Email } from "@mui/icons-material";
import Navbar2 from "./components/Navbar2";
import PageTopHeading from "./components/PageTopHeading/PageTopHeading";
export function App() {
  const handleEmailClick = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="appWrapper">
      {/* <ToolBar /> */}
      <BrowserRouter>
        <PageTopHeading />
        {/* <Header /> */}
        {/* <Navbar /> */}
        <Navbar2 />
        <Routes>
          {AppRoutes.map((item) => {
            return <Route path={item.path} element={item.element} />;
          })}
        </Routes>
        <Container className="change-this d-sm-none">
          <Row className="justify-content-md-center">
            <Col>
              <div
                style={{ cursor: "pointer" }}
                className="bottom--nav--text"
                onClick={handleEmailClick}
              >
                <Email />
                <p className="bottom--nav--text">Email</p>
              </div>
            </Col>
            <Col>
              <div className="bottom--nav--text">
                <a
                  className="bottom--nav--text"
                  id="myLink"
                  href="https://maps.app.goo.gl/R2X9joF1p1EY2KB8A"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <LocationOnIcon />
                  <p>Itinéraire</p>
                </a>
              </div>
            </Col>
            <Col>
              <div className="bottom--nav--text">
                <a
                  className="bottom--nav--text"
                  style={{ color: "inherit" }}
                  href="tel:0631354880"
                >
                  <CallIcon />

                  <p className="bottom--nav--text">Appeler</p>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
        {/* <BottomNav /> */}
      </BrowserRouter>
    </div>
  );
}
