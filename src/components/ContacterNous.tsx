import React, { useState } from "react";
import "./contacterNous.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ContacterNous = () => {
  const [buttonState, setButtonState] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <p className="services--title">
        Interessé Par Nos Services ?{" "}
        <button
          className="btn-contact"
          disabled={buttonState}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setButtonState(true);
            navigate("Contact");
          }}
        >
          Contactez Nous !
        </button>
      </p>
      {/* <Container>
        <Row>
          <Col>Interessé par nos services ?</Col>
          <Col>Contacter Nous ! </Col>
        </Row>
      </Container> */}
    </div>

    // <div className="contacterNous--main">
    //   <p>Interessé Par Nos Services ? </p>
    //   <button>Contacter Nous ! </button>
    // </div>
  );
};

export default ContacterNous;
