import React from "react";
import Image from "react-bootstrap/Image";

const AboutHeading = () => {
  const headingStyle = {
    position: "relative",
    width: "100%",
    height: "auto",
    marginTop: "40px",
  };

  const imageStyle = {
    width: "100%",
    height: "85vh",
    filter: "grayscale(100%)",
    objectFit: "cover",
  };

  return (
    <div style={headingStyle}>
      <Image src="./assets/welding.jpeg" style={imageStyle} fluid />
      <div className="textStyle-responsive">Welcome to Electroplating-LB!</div>
      
    </div>
  );
};

export default AboutHeading;
