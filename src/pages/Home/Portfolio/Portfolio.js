import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../../data/images';

const Portfolio = () => {
  const categories = ['Editorial', 'Commercial', 'Street Style'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="bg-dark text-white min-vh-100 pt-5 mt-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Portfolio</h2>
        
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group">
            <button 
              className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="col-md-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                layout
              >
                <div className="portfolio-item position-relative">
                  <img src={image.src} alt={image.title} className="img-fluid rounded" />
                  <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center opacity-0 transition-opacity">
                    <div className="text-center">
                      <h5>{image.title}</h5>
                      <button className="btn btn-outline-light mt-2">View Details</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;