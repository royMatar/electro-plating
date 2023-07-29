import React from "react";
import Intro from "./Intro";
import ServicesCards from "./ServicesCards";
import Heading from "./Heading";
import Container from "react-bootstrap/Container";
import CallAction from "./CallAction";
import Trustedby from "./Trustedby";
import Contact from "../Contactpage/Contact";
import FAQ from "./FAQ";

const HomePage = () => {
  return (
    <>
      <Heading />
      <Intro />
      <CallAction />
      <ServicesCards />
      <Trustedby />
      <Contact />
      <FAQ />
    </>
  );
};

export default HomePage;
