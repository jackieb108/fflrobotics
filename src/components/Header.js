import React from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Header = ({ isMenuOpen, toggleMenu }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Innovation Project', href: '#challenge' },
    { name: 'UNEARTHED', href: '#unearthed' },
    { name: 'Mechanical Principles', href: '#mechanical' },
    { name: 'Resources', href: '#resources' },
    { name: 'Tips', href: '#tips' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clickable to home */}
          <a href="#home" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <Bot className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">FLL Quickstart</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-md"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-primary-50 border-l-2 border-transparent hover:border-primary-600"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
