import React from 'react';
import { Search, Lightbulb, Clipboard, Wrench, Play, TrendingUp } from 'lucide-react';

const EngineeringProcess = () => {
  const steps = [
    {
      icon: Search,
      title: 'Ask',
      description: 'Understand the challenge and missions.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Lightbulb,
      title: 'Imagine',
      description: 'Brainstorm ideas for the robot and strategy.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-50 to-yellow-100'
    },
    {
      icon: Clipboard,
      title: 'Plan',
      description: 'Sketch designs, plan code, and mission runs.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Wrench,
      title: 'Create',
      description: 'Build and program your robot.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: Play,
      title: 'Test',
      description: 'Run missions, note what works and what doesn\'t.',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      icon: TrendingUp,
      title: 'Improve',
      description: 'Make adjustments for reliability.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Getting Started: Engineering Design Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these six essential steps to design, build, and improve your robot systematically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className={`card bg-gradient-to-br ${step.bgColor} border-0 transform transition-all duration-300 hover:scale-105`}
              >
                <div className="text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg mb-4">
                    <span className="text-lg font-bold text-gray-700">{index + 1}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-full mb-4 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process flow visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-sm font-medium text-gray-600">Process Flow:</span>
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <span className="text-sm font-semibold text-gray-700">{step.title}</span>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Apply These Steps?
            </h3>
            <p className="text-gray-600 mb-6">
              Learn about the mechanical principles that will help you build a successful robot.
            </p>
            <a href="#mechanical" className="btn-primary">
              Explore Mechanical Principles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringProcess;
