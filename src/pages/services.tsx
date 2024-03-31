import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/services.css";
import ConstructionIcon from "@mui/icons-material/Construction";
import TungstenIcon from "@mui/icons-material/Tungsten";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import HouseIcon from "@mui/icons-material/House";
import CustomImage from "../assets/service-center.jpg"; // Import your image component

const Services = () => {
  // Example array of services
  const servicesData = [
    {
      logo: <ConstructionIcon />,
      name: " Maçonnerie / Platrerie",
      description:
        "Mur en brique, pierre, parpaing, ou cloison en BA13. Makni renov répondra à vos attentes.",
    },
    {
      logo: <PlumbingIcon />,
      name: " Plomberie/ Chauffage",
      description:
        "Installation pour cuisines, salles de bain, équipements sanitaires...",
    },
    {
      logo: <TungstenIcon />,
      name: " Electricité",
      description:
        "Rénovation et installation électrique pour chaque pièce. Gagnez en sécurité.",
    },
    {
      logo: <CarpenterIcon />,
      name: " Menuiserie",
      description: "Pose de parquet, meubles, portes, fenêtres, escaliers...",
    },
    {
      logo: <PublishedWithChangesIcon />,
      name: " Revêtement sol et murs",
      description:
        "Ravivez vos pièces, changez de style. Makni renov propose parquet, dallage, PVC, résine.",
    },
    {
      logo: <FormatPaintIcon />,
      name: " Peinture",
      description:
        "Conseils pour teintes, couleurs, techniques. Sous-couche, peinture à l'eau, glycéro, mate, satinée ou brillante.",
    },
    {
      logo: <HouseIcon />,
      name: " Isolation",
      description:
        "Isolation pour économies d'énergie. Laine de verre pour thermique, plâtre pour phonique.",
    },
  ];
  return (
    <div className="mb-5">
      <p className="services--title">
        <div className="realisations--text">Découvrir</div>
        Nos Services
      </p>
      <Container>
        <Row>
          <Col md={6}>
            {servicesData.slice(0, 4).map((service, index) => (
              <div key={index} className="mb-6">
                <div className="card border-0">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="services-card-logo">{service.logo}</span>
                      {service.name}
                    </h5>
                    <p className="card-text" style={{ fontSize: "17px" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Col>
          <Col md={6}>
            {servicesData.slice(4).map((service, index) => (
              <div key={index} className="mb-6">
                <div className="card border-0">
                  <div className="card-body">
                    <h5 className="card-title services-card-title">
                      <span className="services-card-logo">{service.logo}</span>
                      {service.name}
                    </h5>
                    <p className="card-text" style={{ fontSize: "17px" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
  // return (
  //   <div className="mb-5">
  //     <p className="services--title">
  //       <div className="realisations--text">Découvrir</div>
  //       Nos Services
  //     </p>
  //     <Container>
  //       <Row>
  //         <Col md={4}>
  //           {servicesData.slice(0, 4).map((service, index) => (
  //             <div key={index} className="mb-6">
  //               <div className="card border-0">
  //                 <div className="card-body">
  //                   <h5 className="card-title">
  //                     <span className="services-card-logo">{service.logo}</span>
  //                     {service.name}
  //                   </h5>
  //                   <p className="card-text" style={{ fontSize: "17px" }}>
  //                     {service.description}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </Col>
  //         <Col md={4} className="text-center">
  //           <div className="mb-6">
  //             <img
  //               src={CustomImage}
  //               alt="Under Construction"
  //               className="img-fluid"
  //               style={{ maxHeight: "472px" }}
  //             />
  //           </div>
  //         </Col>
  //         <Col md={4}>
  //           {servicesData.slice(4).map((service, index) => (
  //             <div key={index} className="mb-6">
  //               <div className="card border-0">
  //                 <div className="card-body">
  //                   <h5 className="card-title services-card-title">
  //                     <span className="services-card-logo">{service.logo}</span>
  //                     {service.name}
  //                   </h5>
  //                   <p className="card-text" style={{ fontSize: "17px" }}>
  //                     {service.description}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </Col>
  //       </Row>
  //     </Container>
  //   </div>
  // );
};

export default Services;
