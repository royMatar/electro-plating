import React from "react";
import Intro from "./Intro";
import ServicesCards from "./ServicesCards";
import Heading from "./Heading";
import Container from "react-bootstrap/Container";
import CallAction from "./CallAction";
import Metalprice from "./Metalprice";
import Trustedby from './Trustedby';
import Contact from '../Contactpage/Contact';
import FAQ from './FAQ';


const HomePage = () => {
  return (
    <>
      <Heading />
      <Intro />
      <CallAction />
      {/* to be added later before publishing, API free - limited requests */}
      {/* <Metalprice/> */}
      <ServicesCards />
      <Trustedby/>
      <Contact/>
      <FAQ/>
    </>
  );
};

export default HomePage;
