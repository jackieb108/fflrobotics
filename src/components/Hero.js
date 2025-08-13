import React from 'react';
import { Bot, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white rounded-full shadow-2xl">
              <Bot className="h-20 w-20 text-primary-600" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Educational Robotics
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
            FIRST LEGO League (FLL) Quickstart
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Welcome to our <strong>Educational Robotics</strong> guide for <strong>FIRST LEGO League (FLL)</strong> teams.  
            This site offers quickstart guidance for new teams on the <strong>Engineering Design Process</strong> and points to resources to help you get started.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#challenge" className="btn-primary">
              Explore Innovation Challenge
            </a>
            <a href="#process" className="btn-secondary">
              Learn Engineering Process
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce-slow">
            <ArrowDown className="h-8 w-8 text-gray-500 mx-auto" />
            <p className="text-gray-500 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
