import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { settings } = useContext(DataContext);
  return (
    <section className="hero">
      <h1>{settings.heroTitle}</h1>
      <p>{settings.heroDescription}</p>
      <Link to="/#temples" className="cta-button">Khám phá ngay</Link>
    </section>
  );
};

export default Hero;
