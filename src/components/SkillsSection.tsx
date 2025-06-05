
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
  { name: 'n8n', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/N8n-logo-new.svg/1000px-N8n-logo-new.svg.png?20230204003316', url: 'https://n8n.io', category: 'Marketing Automation' },
  { name: 'Make (Integromat)', logo: 'https://bytebricks.ai/wp-content/uploads/2023/10/logo-make.png', url: 'https://www.make.com', category: 'Marketing Automation' },
  { name: 'Bardeen', logo: 'https://www.insightpartners.com/wp-content/uploads/2022/06/Bardeen.png', url: 'https://www.bardeen.ai', category: 'Marketing Automation' },
  { name: 'Mailchimp', logo: 'https://static-00.iconduck.com/assets.00/mailchimp-icon-1811x2048-u8tnp53p.png', url: 'https://mailchimp.com', category: 'Marketing Automation' },
  { name: 'Customer.io', logo: 'https://e7.pngegg.com/pngimages/443/936/png-clipart-customer-io-full-logo-tech-companies.png', url: 'https://customer.io', category: 'Marketing Automation' },
  { name: 'Klaviyo', logo: 'https://signalpartners.com/wp-content/uploads/2021/04/klaviyo_logo-1-wpp1629401786301.png', url: 'https://www.klaviyo.com', category: 'Marketing Automation' },
  { name: 'Vero', logo: 'https://framerusercontent.com/assets/1uTthSsVjFOCLUkn6ejs9EkpF8.png', url: 'https://www.getvero.com', category: 'Marketing Automation' },
  { name: 'Ortto', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS064WKCTogmP3WI6cx_MnglsJr34xz277shw&s', url: 'https://ortto.com', category: 'Marketing Automation' },
  { name: 'MoEngage', logo: 'https://cdn.prod.website-files.com/663df3b8d87f6d37e73ce768/67e7df71dd2c9090c02f4bb4_Moengage.svg', url: 'https://www.moengage.com', category: 'Marketing Automation' },
  { name: 'Marketo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Marketo_logo.svg/2560px-Marketo_logo.svg.png', url: 'https://business.adobe.com/products/marketo/marketo.html', category: 'Marketing Automation' },
  { name: 'Gallabox', logo: 'https://gallabox.com/gallabox-logo.png', url: 'https://gallabox.com', category: 'Marketing Automation' },
  { name: 'Gupshup', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo_Gupshup.png', url: 'https://www.gupshup.io', category: 'Marketing Automation' },
  { name: 'Replo', logo: 'https://fb-usercontent.fra1.cdn.digitaloceanspaces.com/1714489184063..png', url: 'https://www.replo.app', category: 'Marketing Automation' },

  // CRM
  { name: 'HubSpot', logo: 'https://tl.vhv.rs/dpng/s/445-4455307_hubspot-logo-svg-hd-png-download.png', url: 'https://hubspot.com', category: 'CRM' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', url: 'https://salesforce.com', category: 'CRM' },
  { name: 'Leadsquared', logo: 'https://e7.pngegg.com/pngimages/454/311/png-clipart-leadsquared-logo-landscape-tech-companies-thumbnail.png', url: 'https://www.leadsquared.com', category: 'CRM' },

  // Analytics
  { name: 'Google Analytics', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0W1flzDxX3S2rZNMiUXFSvbQu2LosW61IwA&s', url: 'https://marketingplatform.google.com/about/analytics/', category: 'Analytics' },
  { name: 'Mixpanel', logo: 'https://e7.pngegg.com/pngimages/272/883/png-clipart-mixpanel-icon-mixpanel-logo-icons-logos-emojis-tech-companies.png', url: 'https://mixpanel.com', category: 'Analytics' },
  { name: 'Amplitude', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Amplitude_logo.svg', url: 'https://amplitude.com', category: 'Analytics' },
  { name: 'Segment', logo: 'https://cdn.worldvectorlogo.com/logos/segment-1.svg', url: 'https://segment.com', category: 'Analytics' },
  { name: 'Hotjar', logo: 'https://w7.pngwing.com/pngs/376/663/png-transparent-hotjar-logo-tech-companies-thumbnail.png', url: 'https://hotjar.com', category: 'Analytics' },
  { name: 'Fullstory', logo: 'https://mms.businesswire.com/media/20240422506260/en/2104021/22/fs-logo-2024-blk.jpg', url: 'https://www.fullstory.com', category: 'Analytics' },
  { name: 'UTM.io', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfp8j-319Vu8_Mscra-hJTypYfJOSzRt6Ug&s', url: 'https://utm.io', category: 'Analytics' },

  // Advertising
  { name: 'Google Ads', logo: 'https://toppng.com/uploads/preview/google-ads-logo-vector-115738525038dma6lhprs.png', url: 'https://ads.google.com', category: 'Advertising' },
  { name: 'Meta Ads', logo: 'https://w7.pngwing.com/pngs/606/802/png-transparent-meta-meta-logo-facebook-fb-logo-meta-icon-meta-symbol-facebook-logo-thumbnail.png', url: 'https://www.facebook.com/business/ads', category: 'Advertising' },

  // CMS
  { name: 'Webflow', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Webflow_logo_2023.svg', url: 'https://webflow.com', category: 'CMS' },
  { name: 'Notion', logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/notionlogo-freelogovectors.net_.png', url: 'https://notion.so', category: 'CMS' },

  // Data Visualization
  { name: 'Looker Studio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Looker.svg/2560px-Looker.svg.png', url: 'https://lookerstudio.google.com', category: 'Data Visualization' },
  { name: 'Tableau', logo: 'https://cdn.worldvectorlogo.com/logos/tableau-logo.svg', url: 'https://www.tableau.com', category: 'Data Visualization' },
  { name: 'Power BI', logo: 'https://images.seeklogo.com/logo-png/50/2/power-bi-logo-png_seeklogo-507714.png', url: 'https://powerbi.microsoft.com', category: 'Data Visualization' },
  { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png', url: 'https://www.w3schools.com/sql/', category: 'Data Visualization' },

  // Design
  { name: 'Midjourney', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoksB8_x5uyLs0WyJlDYHzEjj2-3FJp0I2Y0SxiK3bFEArE_QfOFa5CIrhE633CzZBN4&usqp=CAU', url: 'https://www.midjourney.com', category: 'Design' },
  { name: 'DALL·E', logo: 'https://i.pinimg.com/736x/7e/ee/2f/7eee2fc41654561afbe2ded749b06b29.jpg', url: 'https://openai.com/dall-e', category: 'Design' },
  { name: 'Runway', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Runway_Logo.png', url: 'https://runwayml.com', category: 'Design' },
  { name: 'Pika', logo: 'https://letmecook.io/wp-content/uploads/2024/05/Pika-Review.png', url: 'https://pika.art', category: 'Design' },
  { name: 'Descript', logo: 'https://toppng.com/uploads/preview/descript-logo-11609359182ne9b6uus6g.png', url: 'https://www.descript.com', category: 'Design' },
  { name: 'Napkin', logo: 'https://static.wixstatic.com/media/863c21_cf81fc62b52e44a480d34878e15d226f~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80/Logo%20for%20EMA%20-%202025-02-18T144306.862.jpg', url: 'https://napkin.one', category: 'Design' },
  { name: 'Bootstrap', logo: 'https://w7.pngwing.com/pngs/392/984/png-transparent-responsive-web-design-web-development-bootstrap-web-framework-web-design-purple-template-web-design.png', url: 'https://getbootstrap.com', category: 'Design' },

  // AI & Automation
  { name: 'GTM (Google Tag Manager)', logo: 'https://s3.amazonaws.com/appforest_uf/f1591196313405x729989262823764100/tag-manager-google-tag-manager-logo-11562938788z1xj4xxirj.png', url: 'https://tagmanager.google.com', category: 'AI' },
  { name: 'Jasper.ai', logo: 'https://www.wpcrafter.com/wp-content/uploads/2023/10/jasperai.png', url: 'https://www.jasper.ai', category: 'AI' },
  { name: 'Copy.ai', logo: 'https://w7.pngwing.com/pngs/947/558/png-transparent-copy-ai-logo-tech-companies.png', url: 'https://www.copy.ai', category: 'AI' },
  { name: 'Anyword', logo: 'https://banner2.cleanpng.com/lnd/20250227/j/7e23e0e26adef354178cf43dc9c18e.webp', url: 'https://anyword.com', category: 'AI' },
  { name: 'Surfer SEO', logo: 'https://p9n2c8y2.delivery.rocketcdn.me/wp-content/uploads/2021/12/Surfer-SEO-Logo-Transparent.png.webp', url: 'https://surferseo.com', category: 'AI' },
  { name: 'Apollo.io', logo: 'https://e7.pngegg.com/pngimages/496/622/png-clipart-apollo-io-new-logo-tech-companies.png', url: 'https://www.apollo.io', category: 'AI' },
  { name: 'Clay', logo: 'https://freeappsai.com/wp-content/uploads/2024/09/Clay.jpg', url: 'https://www.clay.com', category: 'AI' },
  { name: 'Cognism', logo: 'https://cdn.worldvectorlogo.com/logos/cognism.svg', url: 'https://www.cognism.com', category: 'AI' },
  { name: 'Lusha', logo: 'https://nubela.co/proxycurl/media/dist/lusha.c887b0a6.svg', url: 'https://www.lusha.com', category: 'AI' },
  { name: 'Lavender.ai', logo: 'https://assets.website-files.com/623f85ea6dc3f0f82506706e/623fcb4af5a8f449ea3d7cee_Lavender%20Logo%20Stamp%20-%20Purple.svg', url: 'https://www.lavender.ai', category: 'AI' },
  { name: 'Perplexity AI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Perplexity_AI_logo.svg/2560px-Perplexity_AI_logo.svg.png', url: 'https://www.perplexity.ai', category: 'AI' },
  { name: 'ChatGPT', logo: 'https://i.pinimg.com/736x/34/77/40/3477407d041b9be4da3ec611007468a5.jpg', url: 'https://chat.openai.com', category: 'AI' },
  { name: 'Claude', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg', url: 'https://claude.ai', category: 'AI' },
  { name: 'Clarity', logo: 'https://wpmedia.tealium.com/wp-content/uploads/2022/02/logo_microsoft_microsoftclarity.svg', url: 'https://www.clarity.so', category: 'AI' },
  { name: 'Fermat', logo: 'https://cdn.prod.website-files.com/654e7810e7a3694a66b6323e/67e2923169ac40b3f8cfb88b_Logo%20frame.png', url: 'https://www.fermat.ws', category: 'AI' },
  { name: 'Mutiny', logo: 'https://5.imimg.com/data5/SELLER/Default/2023/10/351277194/HR/EN/IY/18624834/mutiny-personalization-software-500x500.png', url: 'https://www.mutinyhq.com', category: 'AI' },
  { name: 'Marktag', logo: 'https://static.vecteezy.com/system/resources/previews/007/818/914/non_2x/hash-tag-icon-logo-design-template-free-vector.jpg', url: 'https://www.marktag.io', category: 'AI' },
  { name: 'Novacene', logo: 'https://novacene.ai/wp-content/uploads/2024/09/novacene_logo.png', url: 'https://novacene.ai', category: 'AI' },

  // Productivity
  { name: 'PHP', logo: 'https://toppng.com/uploads/preview/php-logo-transparent-1166094641771wmqwcrxc.png', url: 'https://www.php.net', category: 'Productivity' },
  { name: 'Jira', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/2560px-Jira_Logo.svg.png', url: 'https://www.atlassian.com/software/jira', category: 'Productivity' },
  { name: 'ClickUp', logo: 'https://e7.pngegg.com/pngimages/672/224/png-clipart-clickup-logo-landscape-tech-companies.png', url: 'https://clickup.com', category: 'Productivity' },
  { name: 'Notion AI', logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/notionlogo-freelogovectors.net_.png', url: 'https://www.notion.so/product/ai', category: 'Productivity' },
];

const categories = [
  'All',
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
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

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
              className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    console.log(`Failed to load logo for ${skill.name}:`, skill.logo);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </a>
            
            {/* Tooltip */}
            {hoveredSkill === skill.name && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded whitespace-nowrap z-10 opacity-100 transition-opacity duration-300">
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
