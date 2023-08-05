import React from 'react'
import Contact from '../Components/Contact'
import FAQ from '../Components/FAQ'
import Trustedby from '../Components/Trustedby'
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Start from the right
      animate={{ opacity: 1, scale: 1 }} // Move to the middle
      transition={{ duration: 1 }} // Animation duration
    >
    <Contact/>
    <Trustedby/>
    <FAQ/>
    </motion.div>
    </>
  )
}

export default ContactPage