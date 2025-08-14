import React from 'react';
import { Bot, ArrowDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden transition-all duration-1000">
      {/* Background decoration with enhanced dynamic effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-blue-100 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-purple-100 rounded-full opacity-15 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Icon - Enhanced with larger size and subtle animation */}
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white rounded-full shadow-2xl group">
              <Bot className="h-24 w-24 text-primary-600 group-hover:scale-110 transition-transform duration-500 animate-pulse" />
            </div>
          </div>

          {/* Main Title - Reduced margin with gradient text and improved accessibility */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 bg-clip-text text-transparent drop-shadow-sm">
            Educational Robotics
          </h1>
          
          {/* Subheading - Increased spacing for better readability with improved typography and accessibility */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-10 leading-relaxed text-gray-800 drop-shadow-sm">
            FIRST LEGO League (FLL) Quickstart
          </h2>

          {/* Description - Reduced margin with improved readability */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed tracking-wide">
            Welcome to our <strong>Educational Robotics</strong> guide for <strong>FIRST LEGO League (FLL)</strong> teams.  
            This site offers quickstart guidance for new teams and points to resources to help you get started.
          </p>

          {/* CTA Buttons - Enhanced button with shadow, hover effects, and icon */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#challenge" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-600 group">
              <span>Explore Innovation Project</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Scroll indicator - Enhanced with animation and click functionality */}
          <button 
            onClick={() => document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' })}
            className="group animate-bounce-slow hover:animate-none transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <ArrowDown className="h-8 w-8 text-gray-500 mx-auto group-hover:text-primary-600 transition-colors duration-300" />
            <p className="text-gray-500 mt-2 group-hover:text-primary-600 transition-colors duration-300">Scroll to explore</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
