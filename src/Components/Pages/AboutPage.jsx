import React from "react";
import { motion } from "framer-motion";
import AboutHeading from "../Components/AboutHeading";
import Trustedby from "../Components/Trustedby";

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
        <Trustedby/>
      </motion.div>
      </>
  );
};

export default AboutPage;
