
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
  {
    name: 'Mailchimp',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Mailchimp_Logo.svg',
    url: 'https://mailchimp.com',
    category: 'Advertising'
  },
  {
    name: 'Gallabox',
    logo: 'https://brandfetch.com/gallabox.com/logo.svg',
    url: 'https://gallabox.com',
    category: 'Advertising'
  },
  {
    name: 'Gupshup',
    logo: 'https://seeklogo.com/images/G/gupshup-logo-442227-seeklogo.com.svg',
    url: 'https://www.gupshup.io',
    category: 'Advertising'
  },
  // Marketing Automation
  { name: 'HubSpot', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-1024.png', url: 'https://hubspot.com', category: 'Marketing Automation' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', url: 'https://salesforce.com', category: 'CRM' },
  { name: 'MoEngage', logo: 'https://logowik.com/content/uploads/images/moengage8779.jpg', url: 'https://www.moengage.com', category: 'Marketing Automation' },
  { name: 'Marketo', logo: 'https://www.motiva.ai/wp-content/uploads/2023/01/marketo-an-adobe-company-vector-logo.png', url: 'https://business.adobe.com/products/marketo/marketo.html', category: 'Marketing Automation' },
  {
    name: 'Bardeen',
    logo: 'https://brandfetch.com/bardeen.io/logo.svg',
    url: 'https://www.bardeen.ai',
    category: 'Marketing Automation'
  },
  {
    name: 'n8n',
    logo: 'https://seeklogo.com/images/N/n8n-logo-470809-seeklogo.com.svg',
    url: 'https://n8n.io',
    category: 'Marketing Automation'
  },
    {
    name: 'Make (formerly Integromat)',
    logo: 'https://seeklogo.com/images/M/make-logo-464017-seeklogo.com.svg',
    url: 'https://www.make.com',
    category: 'Marketing Automation'
  },
  // Development & Tools
  { name: 'Webflow', logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2024/03/webflow-logo-freelogovectors.net_.png', url: 'https://webflow.com', category: 'Development' },
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', url: 'https://zapier.com', category: 'Automation' },
  { name: 'GTM', logo: 'https://www.svgrepo.com/show/353827/google-tag-manager.svg', url: 'https://cdn.freelogovectors.net/wp-content/uploads/2024/03/webflow-logo-freelogovectors.net_.png', category: 'Analytics' },
  
  // AI Tools
  { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', url: 'https://chat.openai.com', category: 'AI' },
    {
    name: 'Jasper.ai',
    logo: 'https://seeklogo.com/images/J/jasper-ai-logo-6F5D6D7F4E-seeklogo.com.svg',
    url: 'https://www.jasper.ai',
    category: 'AI'
  },
  {
    name: 'Copy.ai',
    logo: 'https://seeklogo.com/images/C/copy-ai-logo-616579-seeklogo.com.svg',
    url: 'https://www.copy.ai',
    category: 'AI'
  },
  {
    name: 'Anyword',
    logo: 'https://brandfetch.com/anyword.com/logo.svg',
    url: 'https://anyword.com',
    category: 'AI'
  },
  {
    name: 'Surfer SEO',
    logo: 'https://surferseo.com/assets/img/logo.svg',
    url: 'https://surferseo.com',
    category: 'AI'
  },
  {
    name: 'Midjourney',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Midjourney_Emblem.svg',
    url: 'https://www.midjourney.com',
    category: 'AI'
  },
  {
    name: 'DALL·E',
    logo: 'https://commons.wikimedia.org/wiki/File:DALL-E_2_Signature.svg',
    url: 'https://openai.com/dall-e',
    category: 'AI'
  },
  {
    name: 'Runway',
    logo: 'https://seeklogo.com/images/R/runway-logo-496519-seeklogo.com.svg',
    url: 'https://runwayml.com',
    category: 'AI'
  },
  {
    name: 'Pika',
    logo: 'https://seeklogo.com/images/P/pika-logo-47E7D0E0E7-seeklogo.com.svg',
    url: 'https://pika.art',
    category: 'AI'
  },
  {
    name: 'Descript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Descript_Logo.svg',
    url: 'https://www.descript.com',
    category: 'AI'
  },
  {
    name: 'Apollo.io',
    logo: 'https://seeklogo.com/images/A/apollo-io-logo-4D6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.apollo.io',
    category: 'AI'
  },
  {
    name: 'Clay',
    logo: 'https://seeklogo.com/images/C/clay-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.clay.com',
    category: 'AI'
  },
  {
    name: 'Cognism',
    logo: 'https://seeklogo.com/images/C/cognism-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.cognism.com',
    category: 'AI'
  },
  {
    name: 'Lusha',
    logo: 'https://seeklogo.com/images/L/lusha-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.lusha.com',
    category: 'AI'
  },
  {
    name: 'Lavender.ai',
    logo: 'https://seeklogo.com/images/L/lavender-ai-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.lavender.ai',
    category: 'AI'
  },
  {
    name: 'Perplexity AI',
    logo: 'https://seeklogo.com/images/P/perplexity-ai-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.perplexity.ai',
    category: 'AI'
  },
  {
    name: 'ChatGPT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    url: 'https://chat.openai.com',
    category: 'AI'
  },
  {
    name: 'Claude',
    logo: 'https://seeklogo.com/images/C/claude-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://claude.ai',
    category: 'AI'
  },
  {
    name: 'Napkin',
    logo: 'https://seeklogo.com/images/N/napkin-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://napkin.one',
    category: 'AI'
  },
  {
    name: 'Clarity',
    logo: 'https://seeklogo.com/images/C/clarity-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.clarity.so',
    category: 'AI'
  },
  {
    name: 'Fermat',
    logo: 'https://seeklogo.com/images/F/fermat-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.fermat.ws',
    category: 'AI'
  },
  {
    name: 'Mutiny',
    logo: 'https://seeklogo.com/images/M/mutiny-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.mutinyhq.com',
    category: 'AI'
  },
  {
    name: 'Replo',
    logo: 'https://seeklogo.com/images/R/replo-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.replo.app',
    category: 'AI'
  },
  {
    name: 'Marktag',
    logo: 'https://seeklogo.com/images/M/marktag-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://www.marktag.io',
    category: 'AI'
  },
  {
    name: 'Novacene',
    logo: 'https://seeklogo.com/images/N/novacene-logo-6F6F6F6F6F-seeklogo.com.svg',
    url: 'https://novacene.ai',
    category: 'AI'
  },
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
