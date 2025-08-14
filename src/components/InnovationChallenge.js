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
            Current Innovation Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2025–2026: <span className="font-bold text-primary-600">UNEARTHED™</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Innovation Project Overview */}
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Innovation Project Overview
              </h3>
              <p className="text-lg text-amber-700 leading-relaxed">
                Archaeologists use the archaeological process to reconstruct and understand the artifacts they have unearthed. Whether they are excavating a site or studying materials in a laboratory, it takes people working together with technology to find the clues needed to understand how past generations lived, learned, and celebrated.
              </p>
              <p className="text-lg text-amber-700 leading-relaxed mt-4">
                In the UNEARTHED™ season, your team's challenge is to identify a problem faced by archaeologists and propose a solution that can help.
              </p>
            </div>

            <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Project Development Process
              </h3>
              <div className="space-y-3 text-green-700">
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>Identify and research a problem faced by archaeologists</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>Conduct research to explore existing solutions and challenges</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>Develop a plan to improve your ideas through testing and feedback</span>
                </div>
              </div>
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

          {/* Right side - Project Sparks and Resources */}
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-purple-50 to-indigo-50 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                Project Sparks
              </h3>
              <p className="text-purple-700 mb-4">
                Use these archaeological scenarios to inspire your innovation project:
              </p>
              <div className="space-y-3 text-purple-700">
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-1">Survey & Map</h4>
                  <p className="text-sm">How can teams use technology to create modern-day maps of cave systems and full sites?</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-1">Excavation Tools</h4>
                  <p className="text-sm">What tools can help retrieve artifacts without damage or loss?</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-1">Restoration Process</h4>
                  <p className="text-sm">How can teams improve the restoration process for broken artifacts?</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-1">Collaboration</h4>
                  <p className="text-sm">How can archaeologists work with other teams to solve mysteries together?</p>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Official Resources
              </h3>
              <p className="text-blue-700 mb-4">
                Get the complete challenge details, game rules, and official resources 
                from FIRST LEGO League.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://www.firstinspires.org/robotics/fll/game-and-season" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 btn-primary w-full justify-center"
                >
                  <span>Visit Official FLL Page</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a 
                  href="https://firstinspires.blob.core.windows.net/fll/challenge/2025-26/fll-challenge-unearthed-en.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 btn-secondary w-full justify-center"
                >
                  <span>Download Engineering Notebook (PDF)</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">
                🚀 Ready to Get Started?
              </h4>
              <p className="text-green-700 text-sm">
                Scroll down to learn about mechanical principles that will help your team succeed!
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Innovation Project Information */}
        <div className="mt-16">
          <div className="card bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-600">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              Innovation Project Details
            </h3>
            
            {/* Project Requirements */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-amber-800 mb-3">
                Project Requirements
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-amber-700 mb-2">What You Need to Do</h5>
                  <ul className="space-y-2 text-amber-600 text-sm">
                    <li>• Identify a problem faced by archaeologists</li>
                    <li>• Research existing solutions and challenges</li>
                    <li>• Develop an innovative solution</li>
                    <li>• Create a prototype or model</li>
                    <li>• Present your solution to judges</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-amber-700 mb-2">Innovation Types</h5>
                  <ul className="space-y-2 text-amber-600 text-sm">
                    <li>• Create something completely new</li>
                    <li>• Apply existing technology from another field</li>
                    <li>• Improve on an existing solution</li>
                    <li>• Combine multiple approaches</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Development Steps */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-amber-800 mb-3">
                Development Process
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-3">1</div>
                  <h5 className="font-semibold text-amber-700 mb-2">Research</h5>
                  <p className="text-amber-600 text-sm">Use the Project Sparks page to guide your selection of an archaeological problem. Conduct research to explore existing solutions.</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-3">2</div>
                  <h5 className="font-semibold text-amber-700 mb-2">Develop</h5>
                  <p className="text-amber-600 text-sm">Develop a plan to improve your ideas. It may be necessary to change or update parts of your solution as you learn more.</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-3">3</div>
                  <h5 className="font-semibold text-amber-700 mb-2">Test & Iterate</h5>
                  <p className="text-amber-600 text-sm">Test your ideas and share them with others. Iterate based on feedback and what you learn from testing.</p>
                </div>
              </div>
            </div>

            {/* Project Presentation */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-amber-800 mb-3">
                Project Presentation
              </h4>
              <div className="bg-white p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-amber-700 mb-2">What to Include</h5>
                    <ul className="space-y-2 text-amber-600 text-sm">
                      <li>• Problem you selected and its connection to archaeology</li>
                      <li>• Research you conducted on existing solutions</li>
                      <li>• How you developed your innovative solution</li>
                      <li>• How your solution would help archaeologists</li>
                      <li>• How you used Core Values throughout the process</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-amber-700 mb-2">Presentation Tips</h5>
                    <ul className="space-y-2 text-amber-600 text-sm">
                      <li>• Prepare a live presentation (5 minutes)</li>
                      <li>• Create a prototype model or drawing</li>
                      <li>• Involve your whole team in sharing</li>
                      <li>• Be ready for judge questions</li>
                      <li>• Highlight your team's journey and progress</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Sparks Details */}
            <div>
              <h4 className="text-lg font-semibold text-amber-800 mb-3">
                Project Sparks - Archaeological Scenarios
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-amber-700 mb-2">Survey & Mapping</h5>
                  <p className="text-amber-600 text-sm">A team discovers an ancient map leading to additional artifacts. How can they use technology to create modern-day maps of cave systems and full sites?</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-amber-700 mb-2">Excavation & Recovery</h5>
                  <p className="text-amber-600 text-sm">Teams find artifacts from everyday life - some sturdy like millstones, others delicate like coins. What tools can help retrieve items without damage?</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-amber-700 mb-2">Restoration & Preservation</h5>
                  <p className="text-amber-600 text-sm">Broken sculptures and artifacts need restoration. How can teams improve the restoration process for these delicate items?</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-amber-700 mb-2">Collaboration & Teamwork</h5>
                  <p className="text-amber-600 text-sm">Some mysteries require multiple teams to solve together. How can archaeologists collaborate with other professionals effectively?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationChallenge;
