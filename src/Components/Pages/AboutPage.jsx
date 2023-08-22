import React from "react";
import { motion } from "framer-motion";
import AboutHeading from "../Components/AboutHeading";
import Trustedby from "../Components/Trustedby";
import AboutContent from "../Components/AboutContent";
import FAQ from '../Components/FAQ';
const AboutPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1 }} 
    >
      <AboutHeading/>
    </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
      >
            <AboutContent/>

        <Trustedby/>
        <FAQ/>
      </motion.div>
      </>
  );
};

export default AboutPage;
