import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp, Users, Code, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const achievements = [
    'Designed and deployed 15+ websites and mobile applications for diverse clients',
    'Integrated AI features including chatbots and recommendation systems',
    'Applied cloud engineering practices for scalable deployment solutions',
    'Optimized database performance resulting in 40% faster load times',
    'Managed project timelines using Agile methodologies and delivered 95% of projects on time',
    'Built end-to-end e-commerce solutions with secure payment processing',
    'Developed cross-platform mobile applications for Android and iOS',
    'Implemented CI/CD pipelines reducing deployment time by 60%'
  ];

  const stats = [
    { icon: <Code className="w-6 h-6" />, label: 'Projects Completed', value: '5+', color: 'from-blue-500 to-cyan-500' },
    { icon: <Users className="w-6 h-6" />, label: 'Happy Clients', value: '4+', color: 'from-green-500 to-emerald-500' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Success Rate', value: '95%', color: 'from-purple-500 to-violet-500' },
    { icon: <Zap className="w-6 h-6" />, label: 'Technologies Used', value: '20+', color: 'from-orange-500 to-amber-500' }
  ];

  const technologies = [
    'React', 'Node.js', '', '', 'PostgreSQL', 'AWS', 
    '', '', 'Express.js', 'TensorFlow', 'Git', 'Jira',
    '', 'React Native', 'TypeScript', 'Tailwind CSS'
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z\' fill=\'%23f3f4f6\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey as a freelance developer, delivering innovative solutions to clients worldwide
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 group">
              <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Experience Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-3 rounded-xl mr-4">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">
                        Full-Stack Developer
                      </h3>
                      <h4 className="text-xl text-blue-100 font-semibold">
                        Freelance
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-blue-100 space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      <span className="font-medium">2020 – Present (4+ Years)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-2" />
                      <span className="font-medium">Accra, Ghana (Remote)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  As a freelance full-stack developer, I specialize in creating comprehensive digital solutions 
                  that combine modern web technologies, AI integration, and cloud deployment strategies. 
                  My work spans from small business websites to complex enterprise applications.
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h5 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  Key Achievements & Responsibilities
                </h5>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <CheckCircle size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="border-t border-gray-200 pt-8">
                <h5 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  Core Technologies & Tools
                </h5>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:shadow-md hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-blue-100 text-lg mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;