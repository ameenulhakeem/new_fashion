import React from 'react';
import { motion } from 'framer-motion';

const Services = () => (
  <section className="py-5 bg-black">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row g-4">
          {['Fashion Editorial', 'Lookbook Creation', 'Campaign Shoots'].map((service, index) => (
            <motion.div
              key={index}
              className="col-md-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-4 rounded bg-dark">
                <i className={`bi bi-camera fs-1 mb-3`}></i>
                <h4>{service}</h4>
                <p className="text-secondary">
                  Professional photography services tailored to your needs
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Services;