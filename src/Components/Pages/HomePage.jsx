import React, { Suspense, lazy } from 'react';
import Intro from "../Components/Intro";
import Heading from "../Components/Heading";
import Container from "react-bootstrap/Container";
import CallAction from "../Components/CallAction";
import Trustedby from "../Components/Trustedby";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";

const LazyLoadedComponent=lazy(()=>import('../Components/ServicesCards'))
const HomePage = () => {
  return (
    <>
      <Heading />
      <Intro />
      <CallAction />
      <Suspense fallback={<div>Loading...</div>}>
      <LazyLoadedComponent />
      </Suspense>
      <Trustedby />
      <Contact />
      <FAQ />
    </>
  );
};

const MemoizedHomePage = React.memo(HomePage);

export default MemoizedHomePage;