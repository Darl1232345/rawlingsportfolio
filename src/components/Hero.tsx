import React from 'react';
import { Download, Mail, ArrowDown, Github, Linkedin, MessageCircle } from 'lucide-react';
import profileImage from '../assets/Image.jpg';
import heroBg from '../assets/Image2.jpg';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewCV = () => {
    window.open('/Rawlings%20CV.pdf', '_blank', 'noopener,noreferrer');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Create a dummy CV download - in real implementation, this would link to actual CV
    const link = document.createElement('a');
    link.href = '/Rawlings%20CV.pdf';
    link.download = 'Asomani_Rawlings_Junior_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat transform scale-105"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            imageRendering: 'crisp-edges'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/50 to-purple-900/90" />
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400 rounded-full opacity-10 animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
              <img
                src={profileImage}
                srcSet={`${profileImage} 1x`}
                alt="Asomani Rawlings Junior"
                className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                style={{ imageRendering: 'crisp-edges' }}
                loading="eager"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse z-0"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-1/2 -right-4 w-4 h-4 bg-indigo-500 rounded-full animate-ping"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Asomani Rawlings
            </span>
            <br />
            <span className="text-gray-200">Junior</span>
          </h1>
          
          {/* Subtitle with Typing Effect */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Full-Stack Developer
            </span>
            <span className="text-gray-400"> | </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              AI Enthusiast
            </span>
            <span className="text-gray-400"> | </span>
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Cloud Engineer
            </span>
          </div>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build <span className="font-semibold text-blue-400">scalable web & mobile apps</span>, 
            integrate <span className="font-semibold text-purple-400">AI solutions</span>, 
            and deploy projects on the <span className="font-semibold text-indigo-400">cloud</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <div className="flex gap-4">
              <button 
                onClick={viewCV}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                title="View CV"
              >
                View CV
              </button>
              <button 
                onClick={downloadCV}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
                title="Download CV"
              >
                <Download size={20} className="mr-3 group-hover:animate-bounce" />
                Download CV
              </button>
            </div>
            <button 
              onClick={scrollToContact}
              className="group inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold hover:shadow-lg transform hover:scale-105"
            >
              <Mail size={20} className="mr-3 group-hover:animate-pulse" />
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="#" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
            </a>
            <a 
              href="https://wa.me/233552945333" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
            >
              <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-green-700" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors group"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium mb-2 group-hover:text-blue-600">Scroll Down</span>
              <ArrowDown size={32} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;