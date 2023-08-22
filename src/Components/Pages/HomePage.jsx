import React, { Suspense, lazy } from "react";
import Intro from "../Components/Intro";
import Heading from "../Components/Heading";
import CallAction from "../Components/CallAction";
import Trustedby from "../Components/Trustedby";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import { motion } from "framer-motion";
import ServicesCards from '../Components/ServicesCards';

const LazyLoadedComponent = lazy(() => import("../Components/IndustriesCards"));

const HomePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={ { opacity: 1, scale: 1 } }
        transition={{ duration: 1 }}
      >
        <Heading />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={ { opacity: 1, scale: 1 } }
        transition={{ duration: 1 }}
      >
        <Intro />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={ { opacity: 1, scale: 1 } }
        transition={{ duration: 1 }}
      >
        <CallAction />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={ { opacity: 1, scale: 1 } }
        transition={{ duration: 1 }}
      >
        <ServicesCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={ { opacity: 1, scale: 1 } }
        transition={{ duration: 1 }}
      >
        <Suspense fallback={<div></div>}>
          <LazyLoadedComponent />
        </Suspense>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={ { opacity: 1, scale: 1 } }
        transition={{ duration: 1 }}
      >
        <Trustedby />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={ { opacity: 1, scale: 1 } }
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={ { opacity: 1, scale: 1 } }
        transition={{ duration: 1 }}
      >
        <FAQ />
      </motion.div>
    </>
  );
};

const MemoizedHomePage = React.memo(HomePage);

export default MemoizedHomePage;
