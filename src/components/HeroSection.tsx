
import { useState, useRef, useEffect } from 'react';
import { Download, Mail, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="https://motionarray.imgix.net/preview-1622637-7TQ8W1RLLRJuUJAK-large.mp4" type="video/mp4" />
          {/* Fallback gradient background if video fails to load */}
        </video>
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-netflix-dark to-netflix-darker opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent"></div>
        
        {/* Moving gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/20 via-transparent to-netflix-dark/40 animate-pulse"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-netflix-red rounded-full animate-bounce opacity-30"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-netflix-red/30 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 netflix-text-shadow">
            <span className="text-white">Jigyanshu</span>
            <br />
            <span className="text-netflix-red">Mohapatra</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Growth & Marketing Expert with 4.5+ years driving customer acquisition, 
            revenue growth, and brand visibility for SAAS & fintech businesses
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
               onClick={() => {
               const link = document.createElement('a');
               link.href = "https://docs.google.com/document/d/1VTE5A8nGhrh_PodMNd7DmtvsT1cFfS6b2_ri0Wm9lIo/export?format=pdf";
               link.download = "Jigyanshu_Mohapatra_CV.pdf";
               link.target = "_blank";
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
                }}
               className="bg-netflix-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
            <Download className="w-5 h-5" />
             Download CV
           </button>
            <button 
              onClick={() => {
                window.open("https://wa.link/tbhda7", "_blank");
                }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-netflix-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
            <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>
          
          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="absolute top-6 right-6 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
            title={isMuted ? "Unmute video" : "Mute video"}
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
