import React from "react";
import Intro from "./Intro";
import KeyServices from "./KeyServices";
import Heading from "./Heading";
import Container from "react-bootstrap/Container";
import CallAction from "./CallAction";
import Select from "./Select";

//https://metalpriceapi.com/

const HomePage = () => {
  return (
    <>
      <Heading />
      <Intro />
      <CallAction />
      <Select />
      <KeyServices />
    </>
  );
};

export default HomePage;
