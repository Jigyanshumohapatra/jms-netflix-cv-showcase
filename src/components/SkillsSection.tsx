
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Skill {
  name: string;
  logo: string;
  category: string;
  url: string;
}

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const skills: Skill[] = [
    // Marketing & Analytics
    { name: 'Google Ads', logo: 'https://developers.google.com/static/adwords/images/gads-icon.svg', category: 'Marketing', url: 'https://ads.google.com' },
    { name: 'Meta Ads', logo: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/faqwjZZzYA_.png', category: 'Marketing', url: 'https://www.facebook.com/business/ads' },
    { name: 'Google Analytics', logo: 'https://www.google.com/analytics/static/img/google-analytics-logo.svg', category: 'Analytics', url: 'https://marketingplatform.google.com/about/analytics/' },
    { name: 'Mixpanel', logo: 'https://cdn.worldvectorlogo.com/logos/mixpanel-2.svg', category: 'Analytics', url: 'https://mixpanel.com' },
    { name: 'Amplitude', logo: 'https://amplitude.com/img/logos/amplitude-logo.svg', category: 'Analytics', url: 'https://amplitude.com' },
    { name: 'Segment', logo: 'https://segment.com/docs/static/img/docs/integrations/segment-logo.svg', category: 'Analytics', url: 'https://segment.com' },
    { name: 'Hotjar', logo: 'https://static.hotjar.com/static/gfx/icon-hotjar.svg', category: 'Analytics', url: 'https://hotjar.com' },
    { name: 'Fullstory', logo: 'https://www.fullstory.com/wp-content/uploads/2019/01/fullstory-logo-red.svg', category: 'Analytics', url: 'https://www.fullstory.com' },
    
    // Business Intelligence
    { name: 'Looker Studio', logo: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg', category: 'BI', url: 'https://lookerstudio.google.com' },
    { name: 'Tableau', logo: 'https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png', category: 'BI', url: 'https://www.tableau.com' },
    { name: 'Power BI', logo: 'https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2020/05/PowerBI-2.png', category: 'BI', url: 'https://powerbi.microsoft.com' },
    
    // CRM & Marketing Automation
    { name: 'HubSpot', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png', category: 'CRM', url: 'https://hubspot.com' },
    { name: 'Salesforce', logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/nav/salesforce-cloud-logo-sm.png', category: 'CRM', url: 'https://salesforce.com' },
    { name: 'MoEngage', logo: 'https://assets.moengage.com/production/moengage-logo.svg', category: 'Automation', url: 'https://www.moengage.com' },
    { name: 'Marketo', logo: 'https://nation.marketo.com/docs/DOC-1245', category: 'Automation', url: 'https://business.adobe.com/products/marketo/marketo.html' },
    { name: 'Mailchimp', logo: 'https://eep.io/images/yzco4xsimv0y/YmaXcWaAGEMmSgcHFKuXh/8ac8f27f4b4e16ef4c1c2332c7635ad5/mc-freddie-pin.svg', category: 'Email', url: 'https://mailchimp.com' },
    
    // Automation & Integration
    { name: 'Zapier', logo: 'https://cdn.zapier.com/storage/photos/9e12758972e7bb4bb7e59a5a39fbab99.png', category: 'Automation', url: 'https://zapier.com' },
    { name: 'Make', logo: 'https://www.make.com/en/help/image/uuid-0f1fc6cb-17ca-eb05-a5c0-ce7c0ecc3fb1.png', category: 'Automation', url: 'https://www.make.com' },
    { name: 'n8n', logo: 'https://docs.n8n.io/favicon.ico', category: 'Automation', url: 'https://n8n.io' },
    
    // AI & Content
    { name: 'ChatGPT', logo: 'https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/l4BtmIzkRhT.png', category: 'AI', url: 'https://chat.openai.com' },
    { name: 'Claude', logo: 'https://claude.ai/favicon.ico', category: 'AI', url: 'https://claude.ai' },
    { name: 'Jasper.ai', logo: 'https://www.jasper.ai/favicon.ico', category: 'AI', url: 'https://www.jasper.ai' },
    { name: 'Copy.ai', logo: 'https://www.copy.ai/favicon.ico', category: 'AI', url: 'https://www.copy.ai' },
    { name: 'Midjourney', logo: 'https://www.midjourney.com/favicon.ico', category: 'AI', url: 'https://www.midjourney.com' },
    
    // Development
    { name: 'Webflow', logo: 'https://assets.website-files.com/5d3e265ac89f6a3e64292efc/5d502691a2e7be7e67ad8354_webflow-black.svg', category: 'Development', url: 'https://webflow.com' },
    { name: 'SQL', logo: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg', category: 'Development', url: 'https://www.w3schools.com/sql/' },
    { name: 'Bootstrap', logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png', category: 'Development', url: 'https://getbootstrap.com' },
    { name: 'PHP', logo: 'https://www.php.net/images/logos/new-php-logo.svg', category: 'Development', url: 'https://www.php.net' }
  ];

  const categories = ['All', 'Marketing', 'Analytics', 'BI', 'CRM', 'Automation', 'Email', 'AI', 'Development'];
  
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 netflix-text-shadow">
          <span className="text-white">Skills & </span>
          <span className="text-netflix-red">Technologies</span>
        </h2>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Expertise across the modern marketing & technology stack
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-netflix-red text-white'
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
          <a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="netflix-card p-4 flex flex-col items-center justify-center h-24 group hover:scale-110 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-8 h-8 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMzMzIiByeD0iNCIvPgo8dGV4dCB4PSIxMiIgeT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNmZmYiPnt7c2tpbGwubmFtZS5zdWJzdHJpbmcoMCwgMil9fTwvdGV4dD4KPHN2Zz4=';
              }}
            />
            <span className="text-xs text-center font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
            <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1" />
          </a>
        ))}
      </div>

      {/* Floating Skills Carousel */}
      <div className="mt-16 overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-8">
          {[...skills, ...skills].map((skill, index) => (
            <a
              key={`${skill.name}-${index}`}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-16 h-16 bg-netflix-gray rounded-lg flex items-center justify-center hover:bg-netflix-red transition-colors duration-300 group"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMzMzIiByeD0iNCIvPgo8dGV4dCB4PSIxMiIgeT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNmZmYiPnt7c2tpbGwubmFtZS5zdWJzdHJpbmcoMCwgMil9fTwvdGV4dD4KPHN2Zz4=';
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
