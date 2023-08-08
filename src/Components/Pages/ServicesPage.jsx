import React from "react";
import ServicesCards from "../Components/ServicesCards";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
      >
        <ServicesCards />
      </motion.div>
    </>
  );
};

export default ServicesPage;
