import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./../assets/images/img1.png";
import img2 from "./../assets/images/img2.png";
import img3 from "./../assets/images/img3.png";
import img11 from "./../assets/images/group1/1.png";
import img12 from "./../assets/images/group1/2.png";
import img13 from "./../assets/images/group1/3.png";
import img14 from "./../assets/images/group1/4.png";
import img21 from "./../assets/images/group2/1.png";
import img22 from "./../assets/images/group2/2.png";
import img23 from "./../assets/images/group2/3.png";
import img24 from "./../assets/images/group2/4.png";
import img31 from "./../assets/images/group3/1.png";
import img32 from "./../assets/images/group3/2.png";
import img33 from "./../assets/images/group3/3.png";

import img41 from "./../assets/images/group4/1.png";
import img42 from "./../assets/images/group4/2.png";
import img43 from "./../assets/images/group4/3.png";
import img44 from "./../assets/images/group4/4.png";

import img51 from "./../assets/images/group5/1.png";
import img52 from "./../assets/images/group5/2.png";
import img53 from "./../assets/images/group5/3.png";

import img61 from "./../assets/images/group6/1.png";
import img62 from "./../assets/images/group6/2.png";
import img63 from "./../assets/images/group6/3.png";
import img64 from "./../assets/images/group6/4.png";
import img65 from "./../assets/images/group6/5.png";
import img66 from "./../assets/images/group6/6.png";

import img71 from "./../assets/images/group7/1.png";
import img72 from "./../assets/images/group7/2.png";
import img73 from "./../assets/images/group7/3.png";
import img74 from "./../assets/images/group7/4.png";
import img75 from "./../assets/images/group7/5.png";
import img76 from "./../assets/images/group7/6.png";

import { Col, Container, Row } from "react-bootstrap";
declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};
const Realisation = () => {
  const images = require.context("./../assets/images", false);
  // console.log(images.keys());

  // console.log(testitems);
  const imageKeys = images.keys();
  const carouselHeight = "360px";
  const testitems = [];
  // imageKeys.forEach(item=>{
  //   testitems.
  // })
  const items: any = [
    {
      imagePath: [img11, img12, img13, img14],
      description: "",
      header: "",
    },
    {
      imagePath: [img23, img21, img22, img24],
      description: "",
      header: "",
    },
    {
      imagePath: [img41, img42, img43, img44],
      description: "",
      header: "",
    },
    {
      imagePath: [img51, img52, img53],
      description: "",
      header: "",
    },
    {
      imagePath: [img61, img62, img63, img64, img65, img66],
      description: "",
      header: "",
    },
    {
      imagePath: [img31, img32, img33],
      description: "",
      header: "",
    },
    {
      imagePath: [img71, img72, img73, img74, img75, img76],
      description: "",
      header: "",
    },
  ];
  // Define a function to group image paths by group_id
  // const groupImagesByGroupId = (keys: string[]): Record<string, string[]> => {
  //   const groupedImages: Record<string, string[]> = {};

  //   keys.forEach((key) => {
  //     // Extract group_id from the image path
  //     const [, groupId] = key.match(/\/([^/]+)\//) || [];
  //     if (groupId) {
  //       // Initialize the array for the group_id if it doesn't exist
  //       if (!groupedImages[groupId]) {
  //         groupedImages[groupId] = [];
  //       }
  //       // Push the image path to the array for the group_id
  //       groupedImages[groupId].push(images(key));
  //     }
  //   });

  //   return groupedImages;
  // };

  // Group image paths by group_id
  // const groupedImages = groupImagesByGroupId(imageKeys);

  // // Convert groupedImages into the desired format
  // const items = Object.entries(groupedImages).map(([groupId, imagePaths]) => ({
  //   imagePath: imagePaths,
  //   description: "", // Add description if needed
  //   header: `Group ${groupId}`, // Set header based on groupId
  // }));

  // console.log(items);

  return (
    <div>
      {/* <div>
        {imageKeys.map((imageKey) => (
          <img key={imageKey} src={images(imageKey)} alt="Dynamic Image" />
        ))}
      </div> */}
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
            Découvrer nos réalisations
          </div>
        </div>
      </div>
      <p className="realisations--title pt-5">Nos Projets</p>
      <Container className="pb-5">
        <Row>
          <div className="horizontalLine"></div>
        </Row>
        <Row className="mb-5 pt-5">
          {items.map((group: any, groupIndex: any) => (
            <Col md={4} xs={12} className="p-1">
              <Carousel fade>
                {group.imagePath.map((item: any, imageIndex: any) => (
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

export default Realisation;
