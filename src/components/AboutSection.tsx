
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          About <span className="text-netflix-red">Me</span>
        </h2>
        
        <div className="bg-netflix-gray rounded-lg p-8 netflix-card">
          <p className="text-lg md:text-xl text-gray-300 mb-6 font-playfair leading-relaxed">
            Growth & marketing expert with 4.5+ years of experience driving customer acquisition, 
            revenue, and brand visibility for SAAS based fintech and legal-tech businesses. 
            Demonstrated ability to implement performance-focused strategies while optimising 
            marketing pathways and directing market entry initiatives.
          </p>
          
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 mx-auto text-netflix-red hover:text-red-400 transition-colors duration-300 font-semibold"
          >
            Career Impact
            {showMore ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {showMore && (
            <div className="mt-6 pt-6 border-t border-netflix-light-gray animate-slide-up">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-netflix-dark rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-netflix-red mb-2">4.5+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="bg-netflix-dark rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-netflix-red mb-2">10+</h3>
                  <p className="text-gray-400">Team Members Managed</p>
                </div>
                <div className="bg-netflix-dark rounded-lg p-4">
                  <h3 className="text-2xl font-bold text-netflix-red mb-2">42%</h3>
                  <p className="text-gray-400">Conversion Rate Increase</p>
                </div>
              </div>
              
              <p className="text-gray-300 mt-6 leading-relaxed">
                I demonstrate expertise in cross-functional team management and apply marketing 
                automation and analytics tools to lower CAC while boosting LTV and conversion rates. 
                My approach combines data-driven decision making with creative problem-solving to 
                deliver measurable business impact.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
