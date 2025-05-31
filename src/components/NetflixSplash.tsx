
import { useEffect, useState } from 'react';

interface NetflixSplashProps {
  onComplete: () => void;
}

const NetflixSplash = ({ onComplete }: NetflixSplashProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="animate-netflix-zoom">
          <h1 className="text-6xl md:text-8xl font-bold text-netflix-red mb-4 netflix-text-shadow">
            JM
          </h1>
          <h2 className="text-2xl md:text-3xl text-white font-light">
            RESUME
          </h2>
        </div>
        
        <div className="mt-8">
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-netflix-red rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixSplash;
