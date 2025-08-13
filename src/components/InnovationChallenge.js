import React from 'react';
import { Calendar, Target, ExternalLink, Sparkles } from 'lucide-react';

const InnovationChallenge = () => {
  return (
    <section id="challenge" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="section-title">
            Current Innovation Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2025–2026: <span className="font-bold text-primary-600">UNEARTHED™</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Theme description */}
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Theme: Archaeology & Discovery
              </h3>
              <p className="text-lg text-amber-700 leading-relaxed">
                Explore archaeology and uncover the past to discover the future. 
                Teams will tackle challenges related to historical discovery, 
                preservation, and innovation in archaeological methods.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Calendar className="h-5 w-5 text-primary-600" />
                <span className="font-semibold">Season kickoff:</span>
                <span className="text-primary-600 font-bold">August 5, 2025</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <Target className="h-5 w-5 text-secondary-600" />
                <span className="font-semibold">Registration deadline:</span>
                <span className="text-secondary-600 font-bold">October 31, 2025</span>
              </div>
            </div>
          </div>

          {/* Right side - Official info and CTA */}
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Official Information
              </h3>
              <p className="text-blue-700 mb-4">
                Get the complete challenge details, game rules, and official resources 
                from FIRST LEGO League.
              </p>
              <a 
                href="https://www.firstinspires.org/robotics/fll/game-and-season" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <span>Visit Official FLL Page</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">
                🚀 Ready to Get Started?
              </h4>
              <p className="text-green-700 text-sm">
                Scroll down to learn about the Engineering Design Process and 
                mechanical principles that will help your team succeed!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationChallenge;
