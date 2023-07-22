import React from "react";
import Intro from "./Intro";
import KeyServices from "./KeyServices";
import Heading from "./Heading";
import Container from "react-bootstrap/Container";

//https://metalpriceapi.com/

const HomePage = () => {
  return (
    <>
      <Heading />
      <Intro />
      <KeyServices />
    </>
  );
};

export default HomePage;
