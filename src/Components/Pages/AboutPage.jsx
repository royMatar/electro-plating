import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Start from the right
      animate={{ opacity: 1, scale: 1 }} // Move to the middle
      transition={{ duration: 1 }} // Animation duration
    >
      AboutPage
    </motion.div>
  );
};

export default AboutPage;
