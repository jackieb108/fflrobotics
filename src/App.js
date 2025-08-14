import React, { useState } from 'react';
import { Menu, X, Robot, BookOpen, Wrench, Users, ExternalLink, Calendar, Target, Zap } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import InnovationChallenge from './components/InnovationChallenge';
import UnearthedChallenge from './components/UnearthedChallenge';
import About from './components/About';

import MechanicalPrinciples from './components/MechanicalPrinciples';
import Resources from './components/Resources';
import Tips from './components/Tips';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main>
        <Hero />
        <InnovationChallenge />
        <UnearthedChallenge />
        <About />
        <MechanicalPrinciples />
        <Resources />
        <Tips />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
