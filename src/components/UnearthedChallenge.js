import React from 'react';
import { Calendar, Target, ExternalLink, Sparkles, Bot, BookOpen } from 'lucide-react';

const UnearthedChallenge = () => {
  return (
    <section id="unearthed" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-amber-600" />
          </div>
          <h2 className="section-title">
            2025-2026 UNEARTHED™ Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get ready to dig deep into history as this year's UNEARTHED™ robot game takes you on an exciting archaeological adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Challenge Overview */}
          <div className="space-y-8">
            <div className="card bg-white border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Theme: Archaeology & Discovery
              </h3>
              <p className="text-lg text-amber-700 leading-relaxed">
                Your team will explore a dig site, carefully excavating artifacts hidden beneath layers of rock and soil and uncovering clues that reveal stories of past civilizations. As you journey farther into the dig site, you'll encounter more challenging terrain, fragile ruins, and delicate artifacts that require precision to retrieve without damage.
              </p>
              <p className="text-lg text-amber-700 leading-relaxed mt-4">
                Along the way, you'll decode mysteries and help share stories of the artifacts you find. Prepare to unearth hidden treasures and piece together the past as you embark on this thrilling journey of discovery!
              </p>
            </div>

            <div className="card bg-white border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                The Robot Game
              </h3>
              <p className="text-blue-700 mb-4">
                The robot game is the exciting culmination of your team's hard work throughout the season. You'll put your creativity, strategy, and teamwork to the test during each 2.5-minute match.
              </p>
              <div className="space-y-3 text-blue-700">
                <div className="flex items-start space-x-3">
                  <Bot className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Design and program a LEGO® robot that operates autonomously</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Develop a mission strategy and determine which missions to attempt</span>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Complete missions by manipulating objects, activating mechanisms, or moving items</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Key Information & Resources */}
          <div className="space-y-8">
            <div className="card bg-white border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Key Dates & Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Season kickoff:</span>
                  <span className="text-green-600 font-bold">August 5, 2025</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-700">
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Registration deadline:</span>
                  <span className="text-green-600 font-bold">October 31, 2025</span>
                </div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                Challenge Set Contents
              </h3>
              <p className="text-purple-700 mb-4">
                Inside the UNEARTHED™ Challenge Set, you will find:
              </p>
              <ul className="space-y-2 text-purple-700">
                <li>• A mat for your field</li>
                <li>• 3M™ Dual Lock™ Reclosable Fasteners</li>
                <li>• Mission models in numbered bags</li>
                <li>• Mission Model Building Instructions</li>
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-indigo-50 to-blue-50 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                Official Resources
              </h3>
              <p className="text-indigo-700 mb-4">
                Get the complete challenge details, game rules, and official resources from FIRST LEGO League.
              </p>
              <a 
                href="https://firstinspires.blob.core.windows.net/fll/challenge/2025-26/fll-challenge-unearthed-rgr.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <span>Download Official Rulebook (PDF)</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">
                🚀 Getting Started Tips
              </h4>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• Decide whether to roll out your mat on a table or floor</li>
                <li>• Build mission models exactly as shown in instructions</li>
                <li>• Watch the Field Setup Video for proper field setup</li>
                <li>• Check Challenge Updates often for rule clarifications</li>
                <li>• Practice with the Official Scoring Calculator</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Robot Game Information */}
        <div className="mt-16">
          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Robot Game Details
            </h3>
            
            {/* Match Structure */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Bot className="h-5 w-5 mr-2" />
                Match Structure
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Match Duration</h5>
                  <p className="text-blue-600">2.5 minutes per match</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Scoring</h5>
                  <p className="text-blue-600">Mission requirements must be visible at match end</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Competition Format</h5>
                  <p className="text-blue-600">Three official matches, best score counts</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Advancement</h5>
                  <p className="text-blue-600">Best score determines awards and advancement</p>
                </div>
              </div>
            </div>

            {/* Robot Requirements */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Robot Requirements
              </h4>
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2 text-blue-700">
                  <li>• Must operate autonomously (no remote control)</li>
                  <li>• Must start from launch areas inside home</li>
                  <li>• Must fit within launch areas under 12-inch height limit</li>
                  <li>• Can use LEGO Education SPIKE Prime, Essential, MINDSTORMS EV3, or equivalent</li>
                  <li>• Can use any software or programming language</li>
                </ul>
              </div>
            </div>

            {/* Field Setup & Equipment */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Field Setup & Equipment
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Field Components</h5>
                  <ul className="text-blue-600 space-y-1">
                    <li>• Official mat with wireframe guides</li>
                    <li>• Mission models in numbered bags</li>
                    <li>• 3M™ Dual Lock™ fasteners</li>
                    <li>• Mission Model Building Instructions</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Equipment Storage</h5>
                  <ul className="text-blue-600 space-y-1">
                    <li>• Two launch areas in home</li>
                    <li>• 12-inch height limit for equipment</li>
                    <li>• Side storage areas available</li>
                    <li>• One sheet of notebook paper allowed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mission Strategy */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Mission Strategy
              </h4>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-blue-700 mb-3">
                  Teams must develop a comprehensive strategy for each match:
                </p>
                <ul className="space-y-2 text-blue-700">
                  <li>• Choose which missions to attempt</li>
                  <li>• Determine the order of mission completion</li>
                  <li>• Design necessary robot attachments</li>
                  <li>• Program robot for autonomous operation</li>
                  <li>• Focus on high-scoring missions or combination strategies</li>
                </ul>
              </div>
            </div>

            {/* Game Rules Highlights */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                Key Game Rules
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">During Match</h5>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>• Robot must be autonomous outside home</li>
                    <li>• Technicians can handle robot in home areas</li>
                    <li>• No interference with opposing team</li>
                    <li>• Mission models cannot be modified</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Scoring Rules</h5>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>• All requirements visible at match end</li>
                    <li>• "In" areas include lines and airspace above</li>
                    <li>• Precision tokens lost for interruptions</li>
                    <li>• Gracious Professionalism points awarded</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Values Integration */}
            <div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                Core Values & Sportsmanship
              </h4>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-blue-700 mb-3">
                  The robot game evaluates not just performance, but how teams express Core Values through:
                </p>
                <ul className="space-y-2 text-blue-700">
                  <li>• Gracious Professionalism® during competition</li>
                  <li>• Coopertition® with other teams</li>
                  <li>• Fair play and sportsmanship</li>
                  <li>• Respect for rules and referees</li>
                  <li>• Teamwork and communication</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Gracious Professionalism points are added to the total Core Values score from judging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Mission Models */}
        <div className="mt-16">
          <div className="card bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Mission Models
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Bags 1,2</h4>
                <p className="text-amber-700">Angler Artifacts</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Bags 3,4</h4>
                <p className="text-blue-700">Tip the Scales</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Bag 5</h4>
                <p className="text-green-700">Map Reveal</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Bag 6</h4>
                <p className="text-purple-700">Statue Rebuild</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Bag 7</h4>
                <p className="text-red-700">Surface Brushing</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Bags 8,9,10</h4>
                <p className="text-indigo-700">Mineshaft Explorer & Careful Recovery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnearthedChallenge;
