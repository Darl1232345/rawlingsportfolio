import React from 'react';
import { Download } from 'lucide-react';

const ResumePage: React.FC = () => {
  const downloadCV = () => {
    // Implement CV download functionality
    const link = document.createElement('a');
    link.href = '/Rawlings%20CV.pdf';
    link.download = 'Asomani_Rawlings_Junior_CV.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
            </h1>
            <button
              onClick={downloadCV}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </button>
          </div>

          {/* Resume Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Email: your.email@example.com</p>
                  <p className="text-gray-600">Phone: +233 55 294 5333</p>
                </div>
                <div>
                  <p className="text-gray-600">Location: Accra, Ghana</p>
                  <p className="text-gray-600">LinkedIn: linkedin.com/in/yourprofile</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                Full-stack developer with expertise in React, Node.js, and cloud technologies. 
                Passionate about creating scalable web applications and implementing AI solutions. 
                Proven track record of delivering high-quality projects on time.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Frontend</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Backend</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Other</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Git</li>
                    <li>AI/ML</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Senior Full Stack Developer</h3>
                    <span className="text-gray-600">2023 - Present</span>
                  </div>
                  <p className="text-gray-700 mb-2">Tech Company Name</p>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Led development of enterprise-level web applications</li>
                    <li>Implemented AI-driven features improving user engagement by 40%</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
                {/* Add more experience entries */}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Bachelor's in Computer Science</h3>
                    <span className="text-gray-600">2019 - 2023</span>
                  </div>
                  <p className="text-gray-600">University Name</p>
                </div>
                {/* Add more education entries */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;