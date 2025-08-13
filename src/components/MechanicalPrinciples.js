import React from 'react';
import { Settings, RotateCcw, ArrowUpDown, Play, ExternalLink } from 'lucide-react';

const MechanicalPrinciples = () => {
  const principles = [
    {
      icon: Settings,
      title: 'Gear Ratios: Speed vs Torque',
      description: 'Learn how gears can increase torque for pushing or speed for fast tasks.',
      videoUrl: 'https://www.youtube.com/watch?v=xqb8WzQ6YHE',
      videoTitle: 'Gear Ratio Basics',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: RotateCcw,
      title: 'Motion Transfer',
      description: 'Use bevel gears or gear trains to transfer motion across different parts of your robot.',
      videoUrl: 'https://www.youtube.com/watch?v=aWUcb6E8eC4',
      videoTitle: 'Simple Gear Mechanisms',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      icon: ArrowUpDown,
      title: 'Linkages & Lifts',
      description: 'Create lifts and moving arms using scissor lifts, rack-and-pinion, or other linkages.',
      videoUrl: 'https://www.youtube.com/watch?v=pUyq5MCOgmI',
      videoTitle: 'LEGO Scissor Lift',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    }
  ];

  return (
    <section id="mechanical" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Mechanical Principles for LEGO Robotics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these fundamental mechanical concepts to build robots that can complete complex missions reliably.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div 
                key={index}
                className={`card bg-gradient-to-br ${principle.bgColor} border-0`}
              >
                <div className="text-center mb-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${principle.color} rounded-full mb-4 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${principle.color} bg-clip-text text-transparent`}>
                    {principle.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {principle.description}
                  </p>
                </div>

                {/* Video link */}
                <div className="text-center">
                  <a 
                    href={principle.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${principle.color} text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                  >
                    <Play className="h-4 w-4" />
                    <span>Watch: {principle.videoTitle}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive learning section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 Key Learning Points
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding these principles will help you make informed design decisions for your robot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Gear Selection</h4>
                  <p className="text-gray-600 text-sm">Choose gears based on whether you need speed or power for your mission.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Efficient Motion</h4>
                  <p className="text-gray-600 text-sm">Design mechanisms that transfer motion efficiently without losing energy.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Stability & Strength</h4>
                  <p className="text-gray-600 text-sm">Build structures that can handle the forces your robot will encounter.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reliability</h4>
                  <p className="text-gray-600 text-sm">Test your mechanisms thoroughly to ensure they work consistently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for More Resources?
            </h3>
            <p className="text-gray-600 mb-6">
              Discover additional learning materials and community resources to support your FLL journey.
            </p>
            <a href="#resources" className="btn-primary">
              Explore Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalPrinciples;
