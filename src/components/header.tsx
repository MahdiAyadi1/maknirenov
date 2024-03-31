import React from "react";
import logo from "./logo.png";
import "./header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const Header = () => {
  return (
    <div
      className="header--text d-none d-xl-flex "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "10px",
      }}
    >
      <div className="header-item text-center ">
        <img src={logo} alt="Logo" style={{ maxHeight: "100px" }} />
      </div>
      <div
        className="header--text additional-info"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "70px",
        }}
      >
        <div className="header-item text-center mb-2">
          <div className="flex--center">
            <LocationOnIcon />
            <strong>Adresse</strong>
          </div>
          <div>
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
        </div>
        <div className="verticleLine"></div>
        <div className="header-item text-center mb-2">
          <div className="flex--center">
            <CallIcon />
            <strong>Telephone</strong>
          </div>
          <div>0130255880 / 0631354880</div>
        </div>
        <div className="verticleLine"></div>
        <div className="header-item text-center mb-2">
          <div className="flex--center">
            <EmailIcon />
            <strong>Email</strong>
          </div>
          <div>maknirenov@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
