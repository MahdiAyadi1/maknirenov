import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import img11 from "./../assets/images/group1/1.png";
import img12 from "./../assets/images/3d/img2.png";
import img13 from "./../assets/images/3d/img1.png";
import img14 from "./../assets/images/group1/4.png";
import img21 from "./../assets/images/3d/img3.png";
import img22 from "./../assets/images/group2/2.png";
import img23 from "./../assets/images/3d/img4.png";
import img24 from "./../assets/images/group2/4.png";
// import img31 from "./../assets/images/group3/1.png";
// import img32 from "./../assets/images/group3/2.png";
// import img33 from "./../assets/images/group3/3.png";

import img31 from "./../assets/images/3d/group3/1.png";
import img32 from "./../assets/images/3d/group3/2.png";
import img33 from "./../assets/images/3d/group3/3.png";
import img34 from "./../assets/images/3d/group3/4.png";
import img35 from "./../assets/images/3d/group3/5.png";
const Conception = () => {
  const carouselHeight = "360px";
  const items = [
    {
      imagePath: [img13, img12],
      description: "",
      header: "",
    },
    {
      imagePath: [img23, img21],
      description: "",
      header: "",
    },
    {
      imagePath: [img31, img32, img33, img34, img35],
      description: "",
      header: "",
    },
  ];
  return (
    <div>
      <div
        className="home--main"
        style={{
          backgroundImage: `url(${img11})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "500px",
        }}
      >
        <div className="overlay"></div>
        <div className="home--main--text">
          <div className="home--main--text--head slide-sub-title">
            Conception 3D
          </div>
        </div>
      </div>
      <p className="realisations--title pt-5">Conception 3D</p>
      <Container className="pb-5">
        <Row>
          <div className="horizontalLine"></div>
        </Row>
        <Row className="mb-5 pt-5">
          {items.map((group, groupIndex) => (
            <Col md={4} xs={12} className="p-1">
              <Carousel fade>
                {group.imagePath.map((item: any, imageIndex) => (
                  <Carousel.Item
                    key={groupIndex}
                    style={{ height: carouselHeight }}
                  >
                    <img
                      key={imageIndex}
                      className="d-block w-100"
                      src={item}
                      alt={`Group ${groupIndex + 1} - Image ${imageIndex + 1}`}
                      style={{
                        height: carouselHeight,
                        objectFit: "cover",
                        borderRadius: "3px",
                      }}
                    />
                    {/* You can customize the Carousel.Caption for each group if needed */}
                    <Carousel.Caption>
                      <h3>{group.header}</h3>
                      <p>{group.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Conception;
