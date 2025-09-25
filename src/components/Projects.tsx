import React from 'react';
import { ExternalLink, Github, Globe, Plane, Heart, ShoppingCart, Smartphone, Shield, Star, Calendar } from 'lucide-react';
import type { Project } from '../types/project';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Vandy Travel and Tour Services',
      description: 'Comprehensive travel agency platform featuring advanced booking system, secure payment integration, tour package management, and customer relationship tools.',
      icon: <Globe className="w-8 h-8" />,
      tags: ['React', 'Node.js', 'MongoDB', 'Payment Integration', 'Booking System'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      status: 'Live',
      year: '2025',
      liveDemo: 'https://vandytravelandtoursservice.com',
      github: 'https://github.com/Darlington-s-store/Vandy-Travel-Recruitment-Services'
    },
    {
      title: 'Apex Travel Consult',
      description: 'Modern consultancy website with responsive design, advanced inquiry forms, service showcases, client testimonials, and SEO optimization.',
      icon: <Plane className="w-8 h-8" />,
      tags: ['Next.js', 'Tailwind CSS', 'Contact Forms', 'SEO', 'Responsive Design'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      status: 'Live',
      year: '2025',
      liveDemo: 'https://apextravelconsult.com/',
      github: 'https://github.com/Darlington-s-store/Apex-travel-Consult'
    },
    {
      title: 'Hope for Prisoners and Social Justice',
      description: 'NGO platform featuring donation system, blog management, event coordination, volunteer registration, and impact tracking dashboard.',
      icon: <Heart className="w-8 h-8" />,
      tags: ['Django', 'PostgreSQL', 'Donations', 'CMS', 'Event Management'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      status: 'Live',
      year: '2025',
      liveDemo: 'https://hopeforprisoners.org',
      github: 'https://github.com/Darlington-s-store/hope-justice-initiative'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with product catalog, shopping cart, secure checkout, inventory management, and AI-powered product recommendations.',
      icon: <ShoppingCart className="w-8 h-8" />,
      tags: ['React', 'Express.js', 'AI Recommendations', 'Stripe', 'Inventory'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
      status: 'Live',
      year: '2025',
      liveDemo: 'https://darlingtonstore.netlify.app/',
      github: 'https://github.com/Darlington-s-store/darlington-store'
    },
    {
      title: 'Mobile Applications Suite',
      description: 'Cross-platform Android and iOS applications for travel, e-commerce, and service platforms with real-time synchronization and offline capabilities.',
      icon: <Smartphone className="w-8 h-8" />,
      tags: ['React Native', 'Android', 'iOS', 'API Integration', 'Offline Support'],
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
      status: 'Live',
      year: '2025',
      liveDemo: 'https://mobile-apps.example.com',
      github: 'https://github.com/yourusername/mobile-apps-suite'
    },
    {
      title: 'SecureDeviceTracker (AI-powered)',
      description: 'Intelligent device tracking application using IMEI, phone numbers, and email verification with AI pattern recognition and security alerts.',
      icon: <Shield className="w-8 h-8" />,
      tags: ['AI/ML', 'Security', 'Python', 'TensorFlow', 'Real-time', 'Pattern Recognition'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      status: 'Beta',
      year: '2025',
      liveDemo: 'https://securedevicetracker.example.com',
      github: 'https://github.com/yourusername/secure-device-tracker'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f3f4f6\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning web development, mobile applications, and AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                {/* Icon and Status */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.bgColor}`}>
                    <div className={`bg-gradient-to-r ${project.color} text-white p-2 rounded-lg`}>
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium`}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Interested in Working Together?</h3>
            </div>
            <p className="text-blue-100 text-lg mb-6">
              I'm always excited to take on new challenges and bring innovative ideas to life.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;