import React from "react";
import IndustriesCards from "../Components/IndustriesCards";
import { motion } from "framer-motion";

const IndustriesPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
      >
        <IndustriesCards />
      </motion.div>
    </>
  );
};

export default IndustriesPage;
