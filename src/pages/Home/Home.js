import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedWork from '../../components/FeaturedWork/FeaturedWork';
import Services from '../../components/Services/Services';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-dark text-white">
      <Hero isVisible={isVisible} />
      <FeaturedWork />
      <Services />
    </div>
  );
};

export default Home;