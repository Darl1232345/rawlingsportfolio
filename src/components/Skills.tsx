import React from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Brain, 
  Users, 
  FileText,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'shadcn/ui'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8" />,
      skills: ['PostgreSQL', 'MySQL', 'Database Design'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    },
    {
      title: 'Cloud Engineering',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['AWS', 'Microsoft Azure', 'CI/CD', 'Cloud Deployment'],
      color: 'from-sky-500 to-blue-500',
      bgColor: 'from-sky-50 to-blue-50'
    },
    {
      title: 'AI Tools',
      icon: <Brain className="w-8 h-8" />,
      skills: ['OpenAI API', 'NLP', 'Chatbots', 'AI Recommender Systems', 'TensorFlow'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['React Native (Expo)', 'Cross-platform Apps'],
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50'
    },
    {
      title: 'Management',
      icon: <Users className="w-8 h-8" />,
      skills: ['Product Management', 'Project Management', 'Agile/Scrum', 'Jira', 'Trello'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    },
    {
      title: 'Productivity Tools',
      icon: <FileText className="w-8 h-8" />,
      skills: ['Microsoft Office Suite', 'Word', 'Excel', 'PowerPoint', 'Outlook'],
      color: 'from-gray-500 to-slate-500',
      bgColor: 'from-gray-50 to-slate-50'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-10 animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and tools I use to build amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.bgColor} text-transparent bg-clip-text`}>
                  <div className={`bg-gradient-to-r ${category.color} text-white p-2 rounded-lg`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 ml-4 text-lg group-hover:text-gray-900 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-700 font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Proficiency</span>
                  <span className="font-semibold text-gray-700">Expert</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 group-hover:w-full`} style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Always Learning</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, frameworks, and best practices in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['', 'Reactjs', 'TypeScript', 'Tailwind CSS', 'Nodejs', 'AWS'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;