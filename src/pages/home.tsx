import React from "react";
import "./styles/home.css";
import background from "../assets/images/group2/2.png";
import { Col, Container, Row } from "react-bootstrap";
import Apropos from "../components/Apropos";
import Services from "./services";
import ContacterNous from "../components/ContacterNous";
import Realisation from "../components/Realisation";
const Home = () => {
  return (
    <div>
      <div
        className="home--main"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <div className="home--main--text">
          <div className="home--main--text--head slide-sub-title">
            ENTREPRISE GéNéRALE DE BâTIMENT
          </div>
          <div className="home--main--text--sub">Paris ile de france</div>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="home--experience">
              <p>Notre priorité est votre satisfaction</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Apropos />
      <Services />
      <ContacterNous />
      <Realisation />
      {/* <div>
        Que vous réaménager votre appartement, votre maison, vos bureaux ou
        votre cabinet dentaire, les services de Makni renov peuvent vos apporter
        leurs aides à tous les niveaux.
        <div>Services painture maconerie barcha fazet</div>
        <div>Projets recents</div>
        <div>Contacter nous ! + numero tel and probably add email form </div>
      </div> */}
    </div>
  );
};

export default Home;
