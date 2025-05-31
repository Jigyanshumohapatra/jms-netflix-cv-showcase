
import { useState } from 'react';

interface Skill {
  name: string;
  logo: string;
  url: string;
  category: string;
}

const skills: Skill[] = [
  // Analytics & Data
  { name: 'Google Analytics', logo: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-ar21.svg', url: 'https://marketingplatform.google.com/about/analytics/', category: 'Analytics' },
  { name: 'Mixpanel', logo: 'https://cdn.worldvectorlogo.com/logos/mixpanel.svg', category: 'Analytics' },
  { name: 'Amplitude', logo: 'https://images.seeklogo.com/logo-png/42/1/amplitude-logo-png_seeklogo-428041.png', url: 'https://amplitude.com', category: 'Analytics' },
  { name: 'Hotjar', logo: 'https://logowik.com/content/uploads/images/hotjar-new-20214667.jpg', url: 'https://hotjar.com', category: 'Analytics' },
  
  // Advertising
  { name: 'Google Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg', url: 'https://ads.google.com', category: 'Advertising' },
  { name: 'Meta Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1599px-Meta_Platforms_Inc._logo.svg.png', url: 'https://www.facebook.com/business/ads', category: 'Advertising' },
  
  // Marketing Automation
  { name: 'HubSpot', logo: 'https://brandfetch.com/hubs.ly?view=library&library=default&collection=logos&asset=idUw_2QApK&utm_source=https%253A%252F%252Fbrandfetch.com%252Fhubs.ly', url: 'https://hubspot.com', category: 'Marketing Automation' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', url: 'https://salesforce.com', category: 'CRM' },
  { name: 'MoEngage', logo: 'https://www.moengage.com/wp-content/uploads/2021/06/moengage-logo.svg', url: 'https://www.moengage.com', category: 'Marketing Automation' },
  { name: 'Marketo', logo: 'https://cdn.worldvectorlogo.com/logos/marketo-1.svg', url: 'https://business.adobe.com/products/marketo/marketo.html', category: 'Marketing Automation' },
  
  // Development & Tools
  { name: 'Webflow', logo: 'https://cdn.worldvectorlogo.com/logos/webflow-logo.svg', url: 'https://webflow.com', category: 'Development' },
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', url: 'https://zapier.com', category: 'Automation' },
  { name: 'GTM', logo: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_tag_manager.svg', url: 'https://tagmanager.google.com', category: 'Analytics' },
  
  // AI Tools
  { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', url: 'https://chat.openai.com', category: 'AI' },
  { name: 'Notion', logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg', url: 'https://notion.so', category: 'Productivity' },
];

const categories = ['All', 'Analytics', 'Advertising', 'Marketing Automation', 'CRM', 'Development', 'Automation', 'AI', 'Productivity'];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        Skills & <span className="text-netflix-red">Technologies</span>
      </h2>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-netflix-red text-white'
                : 'bg-netflix-gray text-gray-300 hover:bg-netflix-light-gray'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="netflix-card p-4 text-center cursor-pointer group"
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <img 
                src={skill.logo} 
                alt={skill.name}
                className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
              />
            </div>
            <p className="text-sm font-medium text-white group-hover:text-netflix-red transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      
      {/* Floating Skills Carousel */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Continue Exploring</h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left hide-scrollbar">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 cursor-pointer"
                onClick={() => window.open(skill.url, '_blank')}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-netflix-gray rounded-lg hover:bg-netflix-light-gray transition-all duration-300">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Skill Modal */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="bg-netflix-gray rounded-lg p-6 max-w-md w-full netflix-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-4">
              <img 
                src={selectedSkill.logo} 
                alt={selectedSkill.name}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{selectedSkill.name}</h3>
              <p className="text-netflix-red font-semibold">{selectedSkill.category}</p>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => window.open(selectedSkill.url, '_blank')}
                className="flex-1 bg-netflix-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Visit Website
              </button>
              <button
                onClick={() => setSelectedSkill(null)}
                className="flex-1 bg-netflix-light-gray hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
