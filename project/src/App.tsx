import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import FeaturedExperiences from './components/FeaturedExperiences';
import TeaFinder from './components/TeaFinder';
import TeaLibrary from './components/TeaLibrary';
import Journal from './components/Journal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Philosophy />
      <FeaturedExperiences />
      <TeaFinder />
      <TeaLibrary />
      <Journal />
      <Footer />
    </div>
  );
}

export default App;