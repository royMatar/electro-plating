import React, { Suspense, lazy } from "react";
import Intro from "../Components/Intro";
import Heading from "../Components/Heading";
import Container from "react-bootstrap/Container";
import CallAction from "../Components/CallAction";
import Trustedby from "../Components/Trustedby";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServicesCards from '../Components/ServicesCards';

const LazyLoadedComponent = lazy(() => import("../Components/IndustriesCards"));

const HomePage = () => {
  const [isComponentVisible, setIsComponentVisible] = React.useState(false);

  const headingRef = React.useRef(null);
  const introRef = React.useRef(null);
  const callActionRef = React.useRef(null);
  const lazyLoadedComponentRef = React.useRef(null);
  const trustedByRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const faqRef = React.useRef(null);

  const { ref: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -50% 0px",
  });

  const { ref: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: callActionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: lazyLoadedComponentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: trustedByInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (headingInView) {
      setIsComponentVisible(true);
    }
  }, [headingInView]);

  React.useEffect(() => {
  if (introInView) {
    setIsComponentVisible(true);
  }
}, [introInView]);

  return (
    <>
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComponentVisible ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Heading />
      </motion.div>
      <motion.div
        ref={introRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComponentVisible ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Intro />
      </motion.div>
      <motion.div
        ref={callActionRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComponentVisible ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        <CallAction />
      </motion.div>
      <motion.div
        ref={callActionRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComponentVisible ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        <ServicesCards />
      </motion.div>

      <motion.div
        ref={lazyLoadedComponentRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComponentVisible ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Suspense fallback={<div></div>}>
          <LazyLoadedComponent />
        </Suspense>
      </motion.div>

      <motion.div
        ref={trustedByRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComponentVisible ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Trustedby />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComponentVisible ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
      <motion.div
        ref={faqRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isComponentVisible ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        <FAQ />
      </motion.div>
    </>
  );
};

const MemoizedHomePage = React.memo(HomePage);

export default MemoizedHomePage;
