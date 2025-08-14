import React from 'react';
import { Users, Globe, Video, Star, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: Globe,
      title: 'Official FIRST Resources',
      description: 'Comprehensive challenge resources, game rules, and official documentation.',
      url: 'https://www.firstinspires.org/resource-library/fll/challenge/challenge-and-resources',
      category: 'Official',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Video,
      title: 'FLL Tutorials',
      description: 'Curated YouTube playlist with step-by-step tutorials and tips.',
      url: 'https://www.youtube.com/watch?v=BcDj7Rjdkgc',
      category: 'Video',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      icon: Users,
      title: 'Community Guides',
      description: 'FLL 101 guide and community-created resources for new teams.',
      url: 'https://www.ignitepathways.org/post/start-with-fll',
      category: 'Community',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    }
  ];

  const additionalResources = [
    {
      title: 'Team Building Tips',
      description: 'Learn how to work effectively as a team and distribute roles.',
      icon: '🤝'
    },
    {
      title: 'Programming Basics',
      description: 'Get started with block-based programming for your robot.',
      icon: '💻'
    },
    {
      title: 'Competition Prep',
      description: 'Understand what to expect at FLL competitions and how to prepare.',
      icon: '🏆'
    },
    {
      title: 'Safety Guidelines',
      description: 'Important safety considerations when building and testing robots.',
      icon: '⚠️'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Useful Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access official materials, community guides, and additional learning resources to support your FLL journey.
          </p>
        </div>

        {/* Main resources */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div 
                key={index}
                className={`card bg-gradient-to-br ${resource.bgColor} border-0 transform transition-all duration-300 hover:scale-105`}
              >
                <div className="text-center mb-6">
                  {/* Category badge */}
                  <div className="inline-block px-3 py-1 bg-white/80 rounded-full text-xs font-semibold text-gray-700 mb-4">
                    {resource.category}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${resource.color} rounded-full mb-4 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`}>
                    {resource.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {resource.description}
                  </p>
                </div>

                {/* Link */}
                <div className="text-center">
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${resource.color} text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                  >
                    <span>Visit Resource</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional learning topics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              📚 Additional Learning Topics
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore these areas to build a comprehensive understanding of FLL robotics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalResources.map((topic, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{topic.title}</h4>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resource tips */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-500">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              💡 Resource Tips
            </h3>
            <ul className="space-y-3 text-amber-700">
              <li className="flex items-start space-x-2">
                <Star className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Start with official resources for accurate, up-to-date information</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Use video tutorials to see concepts in action</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Join community forums to ask questions and share experiences</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border-l-4 border-emerald-500">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">
              🎯 How to Use These Resources
            </h3>
            <ul className="space-y-3 text-emerald-700">
              <li className="flex items-start space-x-2">
                <Star className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Bookmark important pages for quick reference</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Take notes while watching tutorials</span>
              </li>
              <li className="flex items-start space-x-2">
                <Star className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Practice concepts with hands-on building exercises</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for Pro Tips?
            </h3>
            <p className="text-gray-600 mb-6">
              Learn valuable tips and strategies specifically for new FLL teams.
            </p>
            <a href="#tips" className="btn-primary">
              View Team Tips
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
