
import { ExternalLink } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  year: string;
  location: string;
  logo: string;
  website: string;
}

const education: Education[] = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    year: '2020',
    location: 'Punjab, India',
    logo: 'https://www.figma.com/community/resource/d69a0c3b-c6bb-4907-aae0-46ee190d0db7/thumbnail.png',
    website: 'https://www.lpu.in/'
  },
  {
    institution: 'Narayana Junior College',
    degree: 'XII (Science Stream)',
    year: '2016',
    location: 'Hyderabad, India',
    logo: 'https://content.jdmagicbox.com/comp/vijayawada/b6/0866px866.x866.180813230450.t3b6/catalogue/narayana-e-techno-school-maruthi-nagar-vijayawada-narayana-schools-0rsrhtscz3.jpg',
    website: 'https://www.narayanagroup.com/'
  }
];

const EducationSection = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        Educational <span className="text-netflix-red">Background</span>
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="netflix-card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    <a 
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-netflix-red transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-gray-300 mb-2">{edu.degree}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{edu.year}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="netflix-card p-6 inline-block">
            <h3 className="text-xl font-bold text-white mb-4">Additional Information</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-netflix-red font-semibold mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-netflix-dark px-3 py-1 rounded-full text-sm text-gray-300">English</span>
                  <span className="bg-netflix-dark px-3 py-1 rounded-full text-sm text-gray-300">Hindi</span>
                  <span className="bg-netflix-dark px-3 py-1 rounded-full text-sm text-gray-300">Oriya</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-netflix-red font-semibold mb-2">Location</h4>
                <p className="text-gray-300 text-sm">
                  <strong>Current:</strong> Hyderabad/Pune<br />
                  <strong>Hometown:</strong> Odisha, India
                </p>
              </div>
              
              <div>
                <h4 className="text-netflix-red font-semibold mb-2">Interests</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-netflix-dark px-3 py-1 rounded-full text-sm text-gray-300">Traveling</span>
                  <span className="bg-netflix-dark px-3 py-1 rounded-full text-sm text-gray-300">Adventure Sports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
