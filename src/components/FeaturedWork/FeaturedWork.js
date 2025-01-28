import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../data/images';

const FeaturedWork = () => (
  <section className="py-5">
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center mb-5">Featured Work</h2>
        <div className="row g-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="position-relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="img-fluid rounded"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75">
                  <h5 className="mb-0">{image.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FeaturedWork;