import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./apropos.css";
import img1 from "./../assets/images/propos.png";
import img11 from "./../assets/images/group1/1.png";
import { Height } from "@mui/icons-material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
const Apropos = () => {
  return (
    <div className="mb-5">
      <Container>
        <Row>
          <h2 className="apropos--title">A propos</h2>
        </Row>
        <Row>
          <Col md="6" className="mb-6">
            <p className="apropos--text">
              Créer en 2005, Makni renov est une entreprise spécialisée dans la
              rénovation intérieure tout corps de métier. Toutes les compétences
              regroupées au sein d'une même entreprise pour réaliser toutes
              rénovation sur mesure.
            </p>
            <p className="apropos--text">
              Nous mettons notre savoir-faire et nos compétences au service de
              tous vos projets de rénovation, d'aménagement et de décoration
              visant à l'amélioration et au confort de votre habitat à Paris et
              en Île-de-France.
            </p>
          </Col>
          {/* <Col md="6" className="mb-6">
            <div
              className="home--main"
              style={{
                backgroundImage: `url(${img11})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                height: "240px",
              }}
            ></div>
          </Col> */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            {/* <h3 className="into-sub-title">Our Values</h3> */}

            <div
              className="accordion accordion-group"
              id="our-values-accordion"
            >
              <div className="card">
                <div className="card-header p-0 bg-transparent" id="headingOne">
                  <h2 className="mb-0">
                    <div className="item btn-block text-left collapsed">
                      Devis Gratuit
                    </div>
                  </h2>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0 bg-transparent" id="headingTwo">
                  <h2 className="mb-0">
                    <div className="item btn-block text-left collapsed">
                      Garantie décennale
                    </div>
                  </h2>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header p-0 bg-transparent"
                  id="headingThree"
                >
                  <h2 className="mb-0">
                    <div className="item  text-left collapsed">
                      Plan 3D
                      {/* <DoneOutlineIcon className="yellow-icon" /> */}
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* <Col>
            <Row>
              <div className="quality-item">
                <DoneOutlineIcon className="yellow-icon" />
                Devis gratuits
              </div>
            </Row>
            <Row>
              <div className="quality-item">
                <DoneOutlineIcon className="yellow-icon" />
                Garantie décennale
              </div>
            </Row>
            <Row>
              <div className="quality-item">
                <DoneOutlineIcon className="yellow-icon" />
                Plan 3D
              </div>
            </Row>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Apropos;
