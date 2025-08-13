import React from 'react';
import { Lightbulb, Target, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Tips = () => {
  const tips = [
    {
      icon: Target,
      title: 'Start Simple',
      description: 'Build a reliable base robot first before adding complexity.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Users,
      title: 'Focus on Few Missions',
      description: 'Master a few missions before adding more complexity to your strategy.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Zap,
      title: 'Keep It Sturdy',
      description: 'Ensure your robot is stable and can handle competition table conditions.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const successFactors = [
    'Regular team meetings and clear communication',
    'Documenting your design process and iterations',
    'Testing on competition-style tables when possible',
    'Balancing innovation with reliability',
    'Learning from failures and celebrating successes',
    'Building strong teamwork and collaboration skills'
  ];

  const commonMistakes = [
    'Trying to do too many missions at once',
    'Not testing mechanisms thoroughly',
    'Ignoring the importance of a stable base',
    'Rushing the building process',
    'Not documenting design decisions',
    'Forgetting to practice driving skills'
  ];

  return (
    <section id="tips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Tips for New Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced teams and avoid common pitfalls with these essential tips for FLL success.
          </p>
        </div>

        {/* Main tips */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div 
                key={index}
                className={`card bg-gradient-to-br ${tip.bgColor} border-0 transform transition-all duration-300 hover:scale-105`}
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${tip.color} rounded-full mb-6 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${tip.color} bg-clip-text text-transparent`}>
                    {tip.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success factors and common mistakes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Success Factors */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border-l-4 border-emerald-500">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-emerald-800">
                Keys to Success
              </h3>
            </div>
            <ul className="space-y-3">
              {successFactors.map((factor, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-emerald-700">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Mistakes */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-500">
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="h-8 w-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-amber-800">
                Common Mistakes to Avoid
              </h3>
            </div>
            <ul className="space-y-3">
              {commonMistakes.map((mistake, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-amber-700">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team building advice */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🚀 Building Your Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Success in FLL isn't just about building robots—it's about building a great team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-indigo-800">Team Roles</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700">Designer: Plans robot structure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700">Builder: Assembles the robot</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700">Programmer: Writes the code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700">Driver: Operates the robot</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-indigo-800">Communication Tips</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700">Hold regular team meetings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700">Document all decisions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700">Share responsibilities fairly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-indigo-700">Celebrate small victories</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🎉 You're Ready to Start Your FLL Journey!
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              You now have the essential knowledge to begin building your robot and competing in FIRST LEGO League. 
              Remember to start simple, work as a team, and have fun learning!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#home" className="btn-primary inline-flex items-center space-x-2">
                <span>Back to Top</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#challenge" className="btn-secondary">
                Review Challenge Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
