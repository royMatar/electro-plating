import React from "react";
import Intro from "../Components/Intro";
import ServicesCards from "../Components/ServicesCards";
import Heading from "../Components/Heading";
import Container from "react-bootstrap/Container";
import CallAction from "../Components/CallAction";
import Trustedby from "../Components/Trustedby";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";

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
