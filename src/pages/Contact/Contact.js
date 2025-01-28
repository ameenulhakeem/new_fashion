import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent successfully!');
  };

  return (
    <div className="bg-dark text-white min-vh-100 pt-5 mt-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-5">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Your Name</label>
                  <input 
                    type="text" 
                    className="form-control bg-dark text-white" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="mb-3">
                <label>Your Email</label>
                  <input 
                    type="email" 
                    className="form-control bg-dark text-white" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div className="mb-3">
                <label>Your Message</label>
                  <textarea 
                    className="form-control bg-dark text-white" 
                    rows="5" 
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
                {formStatus && (
                  <div className="alert alert-success mt-3" role="alert">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;