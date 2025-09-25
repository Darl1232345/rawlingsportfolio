import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Users } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'BSc. Computer Science',
      institution: 'Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development (AAMUSTED)',
      period: '2022 – 2026',
      status: 'In Progress',
      description: 'Comprehensive study of computer science fundamentals, software engineering, algorithms, data structures, and modern development practices.',
      highlights: ['Software Engineering', 'Data Structures & Algorithms', 'Database Systems', 'Web Development'],
      gpa: '3.8/4.0',
      color: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Senior High School Certificate',
      institution: 'Bekwai SDA Senior High School',
      period: '2015 – 2018',
      status: 'Completed',
      description: 'General science program with focus on mathematics, physics, and chemistry, providing strong analytical and problem-solving foundation.',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'Computer Studies'],
      gpa: 'Distinction',
      color: 'from-green-500 to-emerald-500'
    },
    {
      degree: 'Junior High School Certificate',
      institution: 'Livingstone Academy',
      period: 'Completed',
      status: 'Completed',
      description: 'Foundation education with emphasis on core subjects and early technology exposure, building fundamental academic skills.',
      highlights: ['Core Subjects', 'Technology Introduction', 'Leadership Skills'],
      gpa: 'Excellent',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: 'Academic Excellence', description: 'Consistent high performance across all levels' },
    { icon: <Users className="w-6 h-6" />, title: 'Leadership Roles', description: 'Active participation in student organizations' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'Research Projects', description: 'Completed multiple technical research projects' }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-10 animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Educational <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic foundation and continuous learning journey that shaped my technical expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200"></div>
            
            {education.map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mr-4`}>
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.status === 'In Progress' 
                              ? 'bg-yellow-100 text-yellow-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span className="font-medium">{item.period}</span>
                        </div>
                        <div className="flex items-center">
                          <Award size={16} className="mr-2" />
                          <span className="font-medium">{item.gpa}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                      {item.degree}
                    </h3>
                    
                    <h4 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.institution}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Key Subjects & Highlights:</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <span 
                            key={highlightIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-10 text-gray-700 rounded-full text-sm font-medium border border-gray-200`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Academic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 group">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">
                    {achievement.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">
                  {achievement.title}
                </h4>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-blue-100 text-lg">
              Education doesn't stop at graduation. I'm committed to lifelong learning through online courses, 
              certifications, and staying updated with the latest technologies and industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;