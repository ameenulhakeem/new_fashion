import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ isVisible }) => (
  <section 
    className="d-flex align-items-center justify-content-center position-relative"
    style={{
      backgroundImage: "url(/hero.jpg)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      height: "100vh",
      marginTop: "-56px"
    }}
  >
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <h1 className="display-1 fw-bold text-uppercase mb-4">Fashion Photography</h1>
      <p className="fs-4 mb-4">Where Style Meets Art</p>
      <Link to="/portfolio" className="btn btn-outline-light btn-lg">
        Explore Our Work
      </Link>
    </motion.div>
  </section>
);

export default Hero;
