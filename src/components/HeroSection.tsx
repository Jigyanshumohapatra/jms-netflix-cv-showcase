
import { useState } from 'react';
import { Download, Mail, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black via-netflix-dark to-netflix-darker opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 netflix-text-shadow">
            <span className="text-white">Jigyanshu</span>
            <br />
            <span className="text-netflix-red">Mohapatra</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Growth & Marketing Expert with 4.5+ years driving customer acquisition, 
            revenue growth, and brand visibility for SAAS & fintech businesses
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-netflix-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-netflix-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>
          
          {/* Sound Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-6 right-6 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300"
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
