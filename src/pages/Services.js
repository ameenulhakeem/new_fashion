import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, price }) => (
  <motion.div
    className="col-md-4 mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="card bg-dark border border-secondary h-100">
      <div className="card-body text-center">
        <i className={`bi ${icon} fs-1 mb-3 text-primary`}></i>
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
        <h5 className="text-primary mt-3">{price}</h5>
        <button className="btn btn-outline-primary mt-3">Learn More</button>
      </div>
    </div>
  </motion.div>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Fashion Editorial",
      description: "Professional fashion editorial photography for magazines and publications.",
      icon: "bi-camera",
      price: "From $1000"
    },
    {
      title: "Lookbook Creation",
      description: "Complete lookbook photography services for fashion brands and designers.",
      icon: "bi-collection",
      price: "From $1500"
    },
    {
      title: "Campaign Shoots",
      description: "Full-service campaign photography for advertising and marketing.",
      icon: "bi-stars",
      price: "From $2000"
    },
    {
      title: "E-commerce Photography",
      description: "High-quality product photography for online stores and catalogs.",
      icon: "bi-bag",
      price: "From $800"
    },
    {
      title: "Portfolio Development",
      description: "Professional portfolio shoots for models and artists.",
      icon: "bi-person",
      price: "From $500"
    },
    {
      title: "Event Coverage",
      description: "Fashion event and runway photography services.",
      icon: "bi-calendar-event",
      price: "From $1200"
    }
  ];

  return (
    <div className="bg-dark text-white min-vh-100 pt-5 mt-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;