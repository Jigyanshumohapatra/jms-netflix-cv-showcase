
import { ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  issuerLogo: string;
  issuerUrl: string;
  certificateUrl?: string;
  category: string;
  year?: string;
}

const certifications: Certification[] = [
  // Marketing & Growth
  {
    name: 'Google Ads Masterclass',
    issuer: 'Digital Deepak',
    issuerLogo: 'https://www.dellaleaders.com/v3/wp-content/uploads/2021/09/Profile-picture-1.png',
    issuerUrl: 'https://digitaldeepak.com/',
    certificateUrl: 'https://drive.google.com/file/d/1K323FYq85gT6lUlfF-b131G4W-VHFFAX/view?usp=drive_link',
    category: 'Marketing & Growth'
  },
  {
    name: 'Email Marketing Strategy',
    issuer: 'BitDegree',
    issuerLogo: 'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/bitdegree/original.jpg',
    issuerUrl: 'https://www.bitdegree.org/',
    certificateUrl: 'https://drive.google.com/file/d/1LZx0XJZKh45rKn3nreQxLc2DGeGGyh7l/view?usp=drive_link',
    category: 'Marketing & Growth'
  },
  {
    name: 'Instagram Marketing Course',
    issuer: 'BitDegree',
    issuerLogo: 'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/bitdegree/original.jpg',
    issuerUrl: 'https://www.bitdegree.org/',
    certificateUrl: 'https://drive.google.com/file/d/1XdKw1iHRba4_ce6CUuaJ-KrLtWmdg_-I/view?usp=drive_link',
    category: 'Marketing & Growth'
  },
  {
    name: 'MoEngage Growth Marketing Expert',
    issuer: 'MoEngage',
    issuerLogo: 'https://appexchange.salesforce.com/image_host/ed4eccc0-3509-4224-812e-a2960f573459.png',
    issuerUrl: 'https://www.moengage.com/',
    certificateUrl: 'https://drive.google.com/file/d/11EHy6-5fnKPStQNcDsoqBmP77ShjsMSG/view?usp=sharing',
    category: 'Marketing & Growth'
  },

  // Business & Strategy (IIM Bangalore)
  {
    name: 'Foundations of Digital Business',
    issuer: 'IIM Bangalore',
    issuerLogo: 'https://pbs.twimg.com/profile_images/1777223765207769088/nJaggiQa_400x400.jpg',
    issuerUrl: 'https://www.iimb.ac.in/',
    certificateUrl: 'https://drive.google.com/file/d/1XIcWj1-OnmutwEC_nJ57BDK6YZKqSOM1/view?usp=drive_link',
    category: 'Business & Strategy'
  },
  {
    name: 'Marketing Management',
    issuer: 'IIM Bangalore',
    issuerLogo: 'https://pbs.twimg.com/profile_images/1777223765207769088/nJaggiQa_400x400.jpg',
    issuerUrl: 'https://www.iimb.ac.in/',
    certificateUrl: 'https://drive.google.com/file/d/1hYaha9vmWfyAQgbzfJd_dopQJxVtXnwP/view?usp=drive_link',
    category: 'Business & Strategy'
  },
  {
    name: 'Brand Management',
    issuer: 'IIM Bangalore',
    issuerLogo: 'https://pbs.twimg.com/profile_images/1777223765207769088/nJaggiQa_400x400.jpg',
    issuerUrl: 'https://www.iimb.ac.in/',
    certificateUrl: 'https://drive.google.com/file/d/16VhOf3xilYQY9RF3vaRb9L95rCwPUTui/view?usp=drive_link',
    category: 'Business & Strategy'
  },

  // Web & Development
  {
    name: 'Webflow: Website Development',
    issuer: 'Webflow University',
    issuerLogo: 'https://w7.pngwing.com/pngs/266/755/png-transparent-webflow-blue-w-logo-icon-tech-companies-thumbnail.png',
    issuerUrl: 'https://university.webflow.com/',
    category: 'Web & Development'
  },
  {
    name: 'Bootstrap and PHP Blog Tutorial',
    issuer: 'BitDegree',
    issuerLogo: 'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/bitdegree/original.jpg',
    issuerUrl: 'https://www.bitdegree.org/',
    certificateUrl: 'https://drive.google.com/file/d/1PKnaWj42P7frfr2pLhgc5f21e9bluKp4/view?usp=drive_link',
    category: 'Web & Development'
  },

  // Cybersecurity
  {
    name: 'ISCP (Information Security Certified Professional)',
    issuer: 'ISCP',
    issuerLogo: 'https://startupsuccessstories.in/wp-content/uploads/2023/01/Kraftshala-Logo.png',
    issuerUrl: '#',
    certificateUrl: 'https://drive.google.com/file/d/1e_Fl2AdY24KwJ21vPakFPQuhZda1APpF/view?usp=drive_link',
    category: 'Cybersecurity'
  },
  {
    name: 'Web & Network Security',
    issuer: 'IEEE CS Kerala',
    issuerLogo: 'https://ieeekerala.org/wp-content/uploads/2024/05/cropped-sectionLogoBlue.png',
    issuerUrl: 'https://ieeekerala.org/',
    certificateUrl: 'https://drive.google.com/file/d/1FFXlH-Pz3Z8vfdPh7_yUiOy3NaWDVk_k/view?usp=drive_link',
    category: 'Cybersecurity'
  },

  // Programming
  {
    name: 'C++ Programming',
    issuer: 'Coursera',
    issuerLogo: 'https://about.coursera.org/static/blueCoursera-646f855eae3d677239ea9db93d6c9e17.svg',
    issuerUrl: 'https://www.coursera.org/',
    certificateUrl: 'https://drive.google.com/file/d/1Hagm_TCt8tmm9FbAxUaUK4EZbDG1B4Uv/view?usp=drive_link',
    category: 'Programming'
  }
];

const categories = ['Business & Strategy', 'Marketing & Growth', 'Web & Development', 'Cybersecurity', 'Programming'];

const CertificationsSection = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        Certifications & <span className="text-netflix-red">Credentials</span>
      </h2>
      
      <div className="space-y-12">
        {categories.map((category) => {
          const categoryCerts = certifications.filter(cert => cert.category === category);
          
          return (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-netflix-red mb-6">{category}</h3>
              
              <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar">
                {categoryCerts.map((cert, index) => (
                  <div key={index} className="flex-shrink-0 w-80 netflix-card p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={cert.issuerLogo} 
                        alt={cert.issuer}
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                        <p className="text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {cert.certificateUrl && (
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-netflix-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors duration-300 text-center text-sm flex items-center justify-center gap-2"
                        >
                          View Certificate
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={cert.issuerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-netflix-light-gray hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors duration-300 text-center text-sm flex items-center justify-center gap-2"
                      >
                        Visit Issuer
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationsSection;
