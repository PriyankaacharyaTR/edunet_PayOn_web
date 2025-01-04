import React from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchBar />
      <Hero />
      <Carousel />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;