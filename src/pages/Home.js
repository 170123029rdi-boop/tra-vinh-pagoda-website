import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { DataContext } from '../context/DataContext';
import Hero from '../components/Hero';
import About from '../components/About';
import Landscape from '../components/Landscape';
import TemplesList from '../components/TemplesList';

const Home = () => {
  const { settings, pagodas } = useContext(DataContext);
  return (
    <>
      <Helmet>
        <title>{settings.siteTitle}</title>
        <meta name="description" content={settings.siteDescription} />
        <meta name="keywords" content="Trà Vinh, chùa, du lịch, văn hóa, Khmer" />
        <meta property="og:title" content={settings.siteTitle} />
        <meta property="og:description" content={settings.siteDescription} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Hero />
      <About />
      <Landscape />
      <TemplesList />
    </>
  );
};

export default Home;
