
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
    logo: 'https://www.svgrepo.com/show/452053/mailchimp.svg',
    url: 'https://mailchimp.com',
    category: 'Advertising'
  },
  {
    name: 'Gallabox',
    logo: 'https://gallabox.com/gallabox-logo.svg',
    url: 'https://gallabox.com',
    category: 'Advertising'
  },
  {
    name: 'Gupshup',
    logo: 'https://gs-upload.gupshup.io/revamp/assets/v3/images/new-home-page/logo-gupshup.svg',
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
    logo: 'https://us1.discourse-cdn.com/flex020/uploads/bardeen/original/1X/9d0d8ecd31ee90f1c8ceaef3a8625be05e0200c7.png',
    url: 'https://www.bardeen.ai',
    category: 'Marketing Automation'
  },
  {
    name: 'n8n',
    logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png',
    url: 'https://n8n.io',
    category: 'Marketing Automation'
  },
    {
    name: 'Make (formerly Integromat)',
    logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/11/make-logo-freelogovectors.net_.png',
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
    logo: 'https://cdn.prod.website-files.com/60e5f2de011b86acebc30db7/665dd9c1792c38c09c7d74ec_Jasper%20Logo%20Lockup%20-%20Dark%20Khaki.svg',
    url: 'https://www.jasper.ai',
    category: 'AI'
  },
  {
    name: 'Copy.ai',
    logo: 'https://cdn.prod.website-files.com/628288c5cd3e8411b90a36a4/6797ee68ae7908e605a9a4d0_copy_logo-all-dark.svg',
    url: 'https://www.copy.ai',
    category: 'AI'
  },
  {
    name: 'Anyword',
    logo: 'https://cdn.prod.website-files.com/65a5365ee6f4219bc2d2f822/65ae548143e3b5eca08c4093_Logo.svg',
    url: 'https://anyword.com',
    category: 'AI'
  },
  {
    name: 'Surfer SEO',
    logo: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_2103ce54defa8ef6ecebbcdbaa66b84e/surfer-surfer.png',
    url: 'https://surferseo.com',
    category: 'AI'
  },
  {
    name: 'Midjourney',
    logo: 'https://freebiehive.com/wp-content/uploads/2023/05/Midjourney-App-Icon-PNG-758x473.jpg',
    url: 'https://www.midjourney.com',
    category: 'AI'
  },
  {
    name: 'DALL·E',
    logo: 'https://i.pinimg.com/736x/7e/ee/2f/7eee2fc41654561afbe2ded749b06b29.jpg',
    url: 'https://openai.com/dall-e',
    category: 'AI'
  },
  {
    name: 'Runway',
    logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/runway-text.png',
    url: 'https://runwayml.com',
    category: 'AI'
  },
  {
    name: 'Pika',
    logo: 'https://images.genai.works/images_5_904aa9c62c.png',
    url: 'https://pika.art',
    category: 'AI'
  },
  {
    name: 'Descript',
    logo: 'https://descript-website.vercel.app/images/descript-logo.svg',
    url: 'https://www.descript.com',
    category: 'AI'
  },
  {
    name: 'Apollo.io',
    logo: 'https://e7.pngegg.com/pngimages/496/622/png-clipart-apollo-io-new-logo-tech-companies.png',
    url: 'https://www.apollo.io',
    category: 'AI'
  },
  {
    name: 'Clay',
    logo: 'https://freeappsai.com/wp-content/uploads/2024/09/Clay.jpg',
    url: 'https://www.clay.com',
    category: 'AI'
  },
  {
    name: 'Cognism',
    logo: 'https://w7.pngwing.com/pngs/172/21/png-transparent-cognism-favicon-logo-tech-companies-thumbnail.png',
    url: 'https://www.cognism.com',
    category: 'AI'
  },
  {
    name: 'Lusha',
    logo: 'https://www.lusha.com/wp-content/uploads/2020/06/logo.svg',
    url: 'https://www.lusha.com',
    category: 'AI'
  },
  {
    name: 'Lavender.ai',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp46_5cOmt9KVblJJgOmRtZM8DrSTa6IjBGA&s',
    url: 'https://www.lavender.ai',
    category: 'AI'
  },
  {
    name: 'Perplexity AI',
    logo: 'https://brandlogo.org/wp-content/uploads/2024/09/Perplexity-AI-App-Icon-2023.png.webp',
    url: 'https://www.perplexity.ai',
    category: 'AI'
  },
  {
    name: 'ChatGPT',
    logo: 'https://img.icons8.com/?size=100&id=TUk7vxvtu6hX&format=png&color=000000',
    url: 'https://chat.openai.com',
    category: 'AI'
  },
  {
    name: 'Claude',
    logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png',
    url: 'https://claude.ai',
    category: 'AI'
  },
  {
    name: 'Napkin',
    logo: 'https://lh3.googleusercontent.com/0dXCJ6DitVnjSV7poSi_bCsGL6kOzNe7aqTqYE1uvIO1NZe2c-kuqJ8AaM1a7gVoVJCwOWDt8tX0BIUcRwQtAxvtmV5NWKG6dRg=w1064',
    url: 'https://napkin.one',
    category: 'AI'
  },
  {
    name: 'Clarity',
    logo: 'https://www.clari.com/Static/img/logo-white.svg',
    url: 'https://www.clari.com',
    category: 'AI'
  },
  {
    name: 'Mutiny',
    logo: 'https://pbs.twimg.com/profile_images/1679212758867275791/cVDndgr5_400x400.jpg',
    url: 'https://www.mutinyhq.com',
    category: 'AI'
  },
  {
    name: 'Novacene',
    logo: 'https://novacene.ai/wp-content/uploads/2024/09/novacene_logo.png',
    url: 'https://novacene.ai',
    category: 'AI'
  },
  { name: 'Notion', logo: 'https://img.icons8.com/ios7/512/notion.png', url: 'https://notion.so', category: 'Productivity' },
  
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
