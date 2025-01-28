import React from "react";
import { motion } from "framer-motion";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D", title: "Modern Elegance" },
  { id: 2, src: "https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1646733392/Hamstech%20App/Title-Image-4_8046668324e19/Title-Image-4_8046668324e19.jpg?_i=AA", title: "Vintage Chic" },
  { id: 3, src: "https://t4.ftcdn.net/jpg/04/84/87/61/360_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg", title: "Street Style" },
];


function Fashionista() {
  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Header Section */}
      <header className="bg-black text-center py-5">
        <h1 className="display-4 fw-bold text-uppercase">Fashion Photography Showcase</h1>
        <p className="text-secondary fs-5 mt-2">
          Capturing style, elegance, and emotion through the lens.
        </p>
      </header>

      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center position-relative text-center"
        style={{
          backgroundImage: "url(/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
      >
        <motion.div
          className="bg-black bg-opacity-75 rounded p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="display-3 fw-bold">Redefining Fashion</h2>
          <p className="fs-5 text-secondary mt-3">
            Explore the art of fashion photography through stunning visuals.
          </p>
          <a href="#gallery" className="btn btn-primary mt-4">
            Explore Gallery <i className="ms-2 bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-5 bg-secondary text-white">
        <h2 className="text-center text-primary mb-5">Featured Galleries</h2>
        <div className="container">
          <div className="row g-4">
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="col-12 col-sm-6 col-lg-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card shadow-lg">
                  <img src={image.src} className="card-img-top" alt={image.title} />
                  <div className="card-body bg-dark text-white">
                    <h5 className="card-title">{image.title}</h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-gradient text-white">
        <div className="container text-center">
          <h2 className="mb-4">About Us</h2>
          <p className="fs-5">
            Our passion lies in blending creativity and style into a visual masterpiece. With a keen eye for
            detail, we bring every outfit, accessory, and expression to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-black text-center">
        <h2 className="mb-4">Get in Touch</h2>
        <p className="text-secondary fs-5">
          Ready to start your fashion journey with us? Reach out today!
        </p>
        <a href="#contact" className="btn btn-primary mt-4">
          Contact Us
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark py-3 text-center">
        <p className="text-secondary small mb-0">&copy; 2025 FashionLens. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Fashionista
