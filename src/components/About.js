import React from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <GraduationCap className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="section-title">
            About the Project
          </h2>
        </div>

        <div className="card bg-white border-l-4 border-blue-500 p-8">
          <div className="text-center">

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              This educational robotics website is created and maintained by Rohan, a passionate educator and robotics enthusiast at Virginia Tech. Our mission is to provide accessible, comprehensive resources that help FIRST LEGO League teams develop their robotics skills and succeed in competitions.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
