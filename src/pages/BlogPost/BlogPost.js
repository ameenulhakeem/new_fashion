import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="bg-dark text-white min-vh-100 pt-5 mt-5">
        <div className="container text-center">
          <h2>Post not found</h2>
          <Link to="/blog" className="btn btn-primary mt-3">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 pt-5 mt-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={post.image} 
            className="img-fluid rounded mb-4" 
            alt={post.title}
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
          <h1 className="mb-4">{post.title}</h1>
          <div className="d-flex mb-4">
            <span className="text-primary me-3">{post.category}</span>
            <span className="text-secondary me-3">By {post.author}</span>
            <span className="text-secondary">{post.date}</span>
          </div>
          <div className="blog-content">
            {/* Add your blog content here */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="mt-5">
            <Link to="/blog" className="btn btn-outline-primary">
              Back to Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;