
import { useState } from 'react';

interface Skill {
  name: string;
  logo: string;
  url: string;
  category: string;
}

const skills: Skill[] = [
  // Marketing Automation
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', url: 'https://zapier.com', category: 'Marketing Automation' },
  { name: 'n8n', logo: 'https://docs.n8n.io/assets/images/n8n-logo.svg', url: 'https://n8n.io', category: 'Marketing Automation' },
  { name: 'Make (Integromat)', logo: 'https://www.make.com/en/help/image/uuid-a1b7a079-7c8a-e811-f4b9-b4ad82cd7aef.png', url: 'https://www.make.com', category: 'Marketing Automation' },
  { name: 'Bardeen', logo: 'https://www.bardeen.ai/static/logo.svg', url: 'https://www.bardeen.ai', category: 'Marketing Automation' },
  
  // CRM
  { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg', url: 'https://hubspot.com', category: 'CRM' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', url: 'https://salesforce.com', category: 'CRM' },
  { name: 'Leadsquared', logo: 'https://www.leadsquared.com/wp-content/uploads/2021/08/LeadSquared-Logo.svg', url: 'https://www.leadsquared.com', category: 'CRM' },
  
  // Analytics
  { name: 'Google Analytics', logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics.svg', url: 'https://marketingplatform.google.com/about/analytics/', category: 'Analytics' },
  { name: 'Mixpanel', logo: 'https://cdn.worldvectorlogo.com/logos/mixpanel.svg', url: 'https://mixpanel.com', category: 'Analytics' },
  { name: 'Amplitude', logo: 'https://amplitude.com/static/img/logos/amplitude-logo.svg', url: 'https://amplitude.com', category: 'Analytics' },
  { name: 'Segment', logo: 'https://cdn.worldvectorlogo.com/logos/segment-1.svg', url: 'https://segment.com', category: 'Analytics' },
  { name: 'Hotjar', logo: 'https://cdn.worldvectorlogo.com/logos/hotjar.svg', url: 'https://hotjar.com', category: 'Analytics' },
  { name: 'Fullstory', logo: 'https://www.fullstory.com/static/images/fullstory-logo.svg', url: 'https://www.fullstory.com', category: 'Analytics' },
  { name: 'UTM.io', logo: 'https://utm.io/static/images/utm-io-logo.svg', url: 'https://utm.io', category: 'Analytics' },
  
  // Advertising
  { name: 'Google Ads', logo: 'https://cdn.worldvectorlogo.com/logos/google-ads.svg', url: 'https://ads.google.com', category: 'Advertising' },
  { name: 'Meta Ads', logo: 'https://cdn.worldvectorlogo.com/logos/facebook.svg', url: 'https://www.facebook.com/business/ads', category: 'Advertising' },
  
  // Marketing Automation
  { name: 'Mailchimp', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp.svg', url: 'https://mailchimp.com', category: 'Marketing Automation' },
  { name: 'Customer.io', logo: 'https://customer.io/static/logos/customer-io-logo.svg', url: 'https://customer.io', category: 'Marketing Automation' },
  { name: 'Klaviyo', logo: 'https://cdn.worldvectorlogo.com/logos/klaviyo.svg', url: 'https://www.klaviyo.com', category: 'Marketing Automation' },
  { name: 'Vero', logo: 'https://www.getvero.com/static/images/vero-logo.svg', url: 'https://www.getvero.com', category: 'Marketing Automation' },
  { name: 'Ortto', logo: 'https://ortto.com/static/images/ortto-logo.svg', url: 'https://ortto.com', category: 'Marketing Automation' },
  { name: 'MoEngage', logo: 'https://www.moengage.com/wp-content/uploads/2020/12/moengage-logo.svg', url: 'https://www.moengage.com', category: 'Marketing Automation' },
  { name: 'Marketo', logo: 'https://cdn.worldvectorlogo.com/logos/marketo.svg', url: 'https://business.adobe.com/products/marketo/marketo.html', category: 'Marketing Automation' },
  
  // CMS
  { name: 'Webflow', logo: 'https://cdn.worldvectorlogo.com/logos/webflow.svg', url: 'https://webflow.com', category: 'CMS' },
  { name: 'Notion', logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg', url: 'https://notion.so', category: 'CMS' },
  
  // Marketing Automation
  { name: 'Gallabox', logo: 'https://gallabox.com/wp-content/uploads/2022/01/gallabox-logo.svg', url: 'https://gallabox.com', category: 'Marketing Automation' },
  { name: 'Gupshup', logo: 'https://www.gupshup.io/hubfs/Website_2022/Images/Logo-Blue.svg', url: 'https://www.gupshup.io', category: 'Marketing Automation' },
  { name: 'Replo', logo: 'https://www.replo.app/static/images/replo-logo.svg', url: 'https://www.replo.app', category: 'Marketing Automation' },
  
  // Data Visualization
  { name: 'Looker Studio', logo: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg', url: 'https://lookerstudio.google.com', category: 'Data Visualization' },
  { name: 'Tableau', logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg', url: 'https://www.tableau.com', category: 'Data Visualization' },
  { name: 'Power BI', logo: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg', url: 'https://powerbi.microsoft.com', category: 'Data Visualization' },
  
  // Design
  { name: 'Midjourney', logo: 'https://cdn.worldvectorlogo.com/logos/midjourney.svg', url: 'https://www.midjourney.com', category: 'Design' },
  { name: 'DALL·E', logo: 'https://openai.com/static/images/openai-logo.svg', url: 'https://openai.com/dall-e', category: 'Design' },
  { name: 'Runway', logo: 'https://runwayml.com/static/images/runway-logo.svg', url: 'https://runwayml.com', category: 'Design' },
  { name: 'Pika', logo: 'https://pika.art/static/images/pika-logo.svg', url: 'https://pika.art', category: 'Design' },
  { name: 'Descript', logo: 'https://www.descript.com/static/images/descript-logo.svg', url: 'https://www.descript.com', category: 'Design' },
  { name: 'Napkin', logo: 'https://napkin.one/static/images/napkin-logo.svg', url: 'https://napkin.one', category: 'Design' },
  
  // Automation
  { name: 'GTM (Google Tag Manager)', logo: 'https://www.gstatic.com/tagmanager/logo.svg', url: 'https://tagmanager.google.com', category: 'AI' },
  { name: 'Jasper.ai', logo: 'https://www.jasper.ai/static/images/jasper-logo.svg', url: 'https://www.jasper.ai', category: 'AI' },
  { name: 'Copy.ai', logo: 'https://www.copy.ai/static/images/copy-ai-logo.svg', url: 'https://www.copy.ai', category: 'AI' },
  { name: 'Anyword', logo: 'https://anyword.com/static/images/anyword-logo.svg', url: 'https://anyword.com', category: 'AI' },
  { name: 'Surfer SEO', logo: 'https://surferseo.com/static/images/surfer-logo.svg', url: 'https://surferseo.com', category: 'AI' },
  { name: 'Apollo.io', logo: 'https://www.apollo.io/static/images/apollo-logo.svg', url: 'https://www.apollo.io', category: 'AI' },
  { name: 'Clay', logo: 'https://www.clay.com/static/images/clay-logo.svg', url: 'https://www.clay.com', category: 'AI' },
  { name: 'Cognism', logo: 'https://www.cognism.com/static/images/cognism-logo.svg', url: 'https://www.cognism.com', category: 'AI' },
  { name: 'Lusha', logo: 'https://www.lusha.com/static/images/lusha-logo.svg', url: 'https://www.lusha.com', category: 'AI' },
  { name: 'Lavender.ai', logo: 'https://www.lavender.ai/static/images/lavender-logo.svg', url: 'https://www.lavender.ai', category: 'AI' },
  { name: 'Perplexity AI', logo: 'https://www.perplexity.ai/static/images/perplexity-logo.svg', url: 'https://www.perplexity.ai', category: 'AI' },
  { name: 'ChatGPT', logo: 'https://openai.com/static/images/openai-logo.svg', url: 'https://chat.openai.com', category: 'AI' },
  { name: 'Claude', logo: 'https://claude.ai/static/images/claude-logo.svg', url: 'https://claude.ai', category: 'AI' },
  { name: 'Clarity', logo: 'https://www.clarity.so/static/images/clarity-logo.svg', url: 'https://www.clarity.so', category: 'AI' },
  { name: 'Fermat', logo: 'https://www.fermat.ws/static/images/fermat-logo.svg', url: 'https://www.fermat.ws', category: 'AI' },
  { name: 'Mutiny', logo: 'https://www.mutinyhq.com/static/images/mutiny-logo.svg', url: 'https://www.mutinyhq.com', category: 'AI' },
  { name: 'Marktag', logo: 'https://www.marktag.io/static/images/marktag-logo.svg', url: 'https://www.marktag.io', category: 'AI' },
  { name: 'Novacene', logo: 'https://novacene.ai/static/images/novacene-logo.svg', url: 'https://novacene.ai', category: 'AI' },
  
  // Additional tools
  { name: 'SQL', logo: 'https://cdn.worldvectorlogo.com/logos/mysql.svg', url: 'https://www.w3schools.com/sql/', category: 'Data Visualization' },
  { name: 'Bootstrap', logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg', url: 'https://getbootstrap.com', category: 'Design' },
  { name: 'PHP', logo: 'https://cdn.worldvectorlogo.com/logos/php.svg', url: 'https://www.php.net', category: 'Productivity' },
  { name: 'Jira', logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg', url: 'https://www.atlassian.com/software/jira', category: 'Productivity' },
  { name: 'ClickUp', logo: 'https://cdn.worldvectorlogo.com/logos/clickup.svg', url: 'https://clickup.com', category: 'Productivity' },
  { name: 'Notion AI', logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg', url: 'https://www.notion.so/product/ai', category: 'Productivity' },
];

const categories = [
  'Marketing Automation',
  'CRM',
  'Analytics',
  'Advertising',
  'CMS',
  'Productivity',
  'Data Visualization',
  'Design',
  'AI'
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Marketing Automation');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        My <span className="text-netflix-red">Skills</span>
      </h2>
      
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-netflix-red text-white shadow-lg transform scale-105'
                : 'bg-netflix-gray text-gray-300 hover:bg-netflix-light-gray hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="relative group"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-netflix-gray rounded-lg hover:bg-netflix-light-gray transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-12 h-12 mx-auto object-contain"
                onError={(e) => {
                  console.error(`Failed to load logo for ${skill.name}:`, skill.logo);
                  // Fallback to a placeholder or hide the image
                  e.currentTarget.style.display = 'none';
                }}
              />
            </a>
            
            {/* Tooltip */}
            {hoveredSkill === skill.name && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
