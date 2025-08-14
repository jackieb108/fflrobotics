import React from 'react';
import { Bot, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Bot className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">FLL Quickstart</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your comprehensive guide to getting started with FIRST LEGO League robotics. 
              Learn mechanical principles and team strategies.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for FLL teams</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#challenge" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Innovation Project
                </a>
              </li>
              <li>
                <a href="#unearthed" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  UNEARTHED Challenge
                </a>
              </li>

              <li>
                <a href="#mechanical" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Mechanical Principles
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#resources" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Learning Materials
                </a>
              </li>
              <li>
                <a href="#tips" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Team Tips
                </a>
              </li>
              <li>
                <a 
                  href="https://www.firstinspires.org/robotics/fll" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-flex items-center space-x-1"
                >
                  <span>Official FLL</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.firstinspires.org/resource-library/fll/challenge/challenge-and-resources" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 inline-flex items-center space-x-1"
                >
                  <span>Challenge Resources</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} FLL Quickstart Guide. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Educational Robotics</span>
              <span>•</span>
              <span>FIRST LEGO League</span>
              <span>•</span>
              <span>Robotics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
