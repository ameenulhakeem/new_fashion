import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const Blog = () => {
  return (
    <div className="bg-dark text-white min-vh-100 pt-5 mt-5">
      <div className="container">
        <h2 className="text-center mb-5">Fashion Photography Blog</h2>
        <div className="row g-4">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card bg-dark border border-secondary">
                <img 
                  src={post.image} 
                  className="card-img-top" 
                  alt={post.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <small className="text-primary">{post.category}</small>
                    <small className="text-secondary">{post.date}</small>
                  </div>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-secondary">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-secondary">By {post.author}</small>
                    <Link to={`/blog/${post.id}`} className="btn btn-outline-primary btn-sm">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;