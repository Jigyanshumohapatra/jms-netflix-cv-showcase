
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  logo: string;
  website: string;
  description: string;
  achievements: string[];
  tools: string[];
}

const experiences: Experience[] = [
  {
    id: 'saras',
    company: 'Saras Analytics',
    role: 'Growth Marketer',
    duration: 'Feb 2025 - Present',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFm6zLz7dcxQA/company-logo_200_200/B56ZTubmbCGsAM-/0/1739167001061/sarasanalytics_logo?e=1753920000&v=beta&t=ZTb21xQk0Ib_6yIlSnX5NgsaCt494wYZ-yxtHRAFTzI',
    website: 'https://sarasanalytics.com',
    description: 'Leading growth marketing initiatives for SaaS-based eCommerce analytics platform.',
    achievements: [
      'Driving customer acquisition strategies for B2B SaaS platform',
      'Implementing performance-focused marketing campaigns',
      'Optimizing conversion funnels and customer journey mapping'
    ],
    tools: ['HubSpot', 'Google Analytics', 'Mixpanel', 'Salesforce']
  },
  {
    id: 'zolvit',
    company: 'Zolvit (Legal-Tech SaaS)',
    role: 'Assistant Manager - Digital Marketing',
    duration: 'Dec 2022 - May 2024',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQH6QOxC8Gn0HA/company-logo_200_200/company-logo_200_200/0/1662789932425/vakilsearch_com_logo?e=1753920000&v=beta&t=L0LM6dEipu5IUv5Y2666lbw0UEXFGWoinH4PuBIWxuQ',
    website: 'https://zolvit.com',
    description: 'Managed 10-member growth team and executed multi-channel campaigns for legal-tech products.',
    achievements: [
      'Achieved 20% increase in lead generation and 15% rise in website traffic',
      'Delivered 23% revenue growth year-over-year through enhanced product positioning',
      'Enhanced lead quality by 18% and market penetration by 17%',
      'Achieved 42% rise in real-time conversion rates through AI-powered chatbot integration'
    ],
    tools: ['Google Ads', 'Meta Ads', 'HubSpot', 'Salesforce', 'MoEngage']
  },
  {
    id: 'cleartax',
    company: 'ClearTax',
    role: 'Category Associate',
    duration: 'Jan 2020 - Sep 2022',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGnKWm2m1Ktpg/company-logo_200_200/company-logo_200_200/0/1720251597733/clearofficial_logo?e=1753920000&v=beta&t=jwM7USbKEbIFBQLNuWer6xUV0H7Lnozn8nRGV5b2UnE',
    website: 'https://cleartax.in',
    description: 'Implemented campaign tracking systems and evaluated digital funnels for fintech platform.',
    achievements: [
      'Increased conversion rate by 10% through strategic campaign optimization',
      'Reduced lead response time by 26% via CRM process optimization',
      'Generated 76% of overall enterprise leads in Middle East expansion',
      'Achieved 1.5L+ MSME customers in 10 months with Rs 35L/month ad spend'
    ],
    tools: ['Salesforce', 'Leadsquared', 'Google Analytics', 'UTM.io']
  },
  {
    id: 'thefabs',
    company: 'The Fabs (Startup)',
    role: 'Founder',
    duration: 'Jul 2018 - Sep 2019',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFhsk1tF7g-ZA/company-logo_200_200/company-logo_200_200/0/1630615857369?e=1753920000&v=beta&t=l61q_s86BJxxhD994T23orrybHv3IqXp18-u818f3VY',
    website: '#',
    description: 'Built hyperlocal laundry service platform catering to 30,000+ students.',
    achievements: [
      'Built hyperlocal laundry service platform catering to 30,000+ students',
      'Established unified pricing and fulfillment partnerships across local vendors',
      'Successfully streamlined order allocation and customer service processes'
    ],
    tools: ['PHP', 'Bootstrap', 'MySQL', 'Payment Gateway Integration']
  }
];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        Professional <span className="text-netflix-red">Experience</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {experiences.map((exp) => (
          <div key={exp.id} className="netflix-card p-6 cursor-pointer group">
            <div 
              className="flex items-start gap-4 mb-4"
              onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
            >
              <div className="flex-shrink-0">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-netflix-red transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <a 
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-netflix-red transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-netflix-red font-semibold mb-1">{exp.role}</p>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{exp.description}</p>
            
            {selectedExperience === exp.id && (
              <div className="animate-slide-up border-t border-netflix-light-gray pt-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-netflix-red text-lg">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                <h4 className="text-lg font-semibold text-white mb-3">Tools & Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="bg-netflix-red bg-opacity-20 text-netflix-red px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
