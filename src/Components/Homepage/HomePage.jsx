import React from "react";
import Intro from "./Intro";
import KeyServices from "./KeyServices";
import Heading from "./Heading";
import Container from "react-bootstrap/Container";
import CallAction from "./CallAction";
import Select from "./Select";
import Metalprice from "./Metalprice";
import Trustedby from './Trustedby';
import Contact from '../Contactpage/Contact';
import FAQ from './FAQ';
//https://metalpriceapi.com/

const HomePage = () => {
  return (
    <>
      <Heading />
      <Intro />
      <CallAction />
      <Select />
      <Metalprice/>
      <KeyServices />
      <Trustedby/>
      <Contact/>
      <FAQ/>
    </>
  );
};

export default HomePage;
