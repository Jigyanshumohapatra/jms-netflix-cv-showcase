
import { useState } from 'react';

interface Skill {
  name: string;
  logo: string;
  url: string;
}

const skills: Skill[] = [
  { name: 'Google Ads', logo: 'https://cdn.worldvectorlogo.com/logos/google-ads.svg', url: 'https://ads.google.com' },
  { name: 'Meta Ads', logo: 'https://cdn.worldvectorlogo.com/logos/facebook.svg', url: 'https://www.facebook.com/business/ads' },
  { name: 'Google Analytics', logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics.svg', url: 'https://marketingplatform.google.com/about/analytics/' },
  { name: 'UTM.io', logo: 'https://utm.io/static/images/utm-io-logo.svg', url: 'https://utm.io' },
  { name: 'Mixpanel', logo: 'https://cdn.worldvectorlogo.com/logos/mixpanel.svg', url: 'https://mixpanel.com' },
  { name: 'Amplitude', logo: 'https://amplitude.com/static/img/logos/amplitude-logo.svg', url: 'https://amplitude.com' },
  { name: 'Segment', logo: 'https://cdn.worldvectorlogo.com/logos/segment-1.svg', url: 'https://segment.com' },
  { name: 'Hotjar', logo: 'https://cdn.worldvectorlogo.com/logos/hotjar.svg', url: 'https://hotjar.com' },
  { name: 'Fullstory', logo: 'https://www.fullstory.com/static/images/fullstory-logo.svg', url: 'https://www.fullstory.com' },
  { name: 'Looker Studio', logo: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg', url: 'https://lookerstudio.google.com' },
  { name: 'Tableau', logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg', url: 'https://www.tableau.com' },
  { name: 'Power BI', logo: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg', url: 'https://powerbi.microsoft.com' },
  { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg', url: 'https://hubspot.com' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', url: 'https://salesforce.com' },
  { name: 'Leadsquared', logo: 'https://www.leadsquared.com/wp-content/uploads/2021/08/LeadSquared-Logo.svg', url: 'https://www.leadsquared.com' },
  { name: 'MoEngage', logo: 'https://www.moengage.com/wp-content/uploads/2020/12/moengage-logo.svg', url: 'https://www.moengage.com' },
  { name: 'Marketo', logo: 'https://cdn.worldvectorlogo.com/logos/marketo.svg', url: 'https://business.adobe.com/products/marketo/marketo.html' },
  { name: 'Mailchimp', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp.svg', url: 'https://mailchimp.com' },
  { name: 'Gallabox', logo: 'https://gallabox.com/wp-content/uploads/2022/01/gallabox-logo.svg', url: 'https://gallabox.com' },
  { name: 'Gupshup', logo: 'https://www.gupshup.io/hubfs/Website_2022/Images/Logo-Blue.svg', url: 'https://www.gupshup.io' },
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', url: 'https://zapier.com' },
  { name: 'n8n', logo: 'https://docs.n8n.io/assets/images/n8n-logo.svg', url: 'https://n8n.io' },
  { name: 'Make (Integromat)', logo: 'https://www.make.com/en/help/image/uuid-a1b7a079-7c8a-e811-f4b9-b4ad82cd7aef.png', url: 'https://www.make.com' },
  { name: 'Bardeen', logo: 'https://www.bardeen.ai/static/logo.svg', url: 'https://www.bardeen.ai' },
  { name: 'Webflow', logo: 'https://cdn.worldvectorlogo.com/logos/webflow.svg', url: 'https://webflow.com' },
  { name: 'SQL', logo: 'https://cdn.worldvectorlogo.com/logos/mysql.svg', url: 'https://www.w3schools.com/sql/' },
  { name: 'Bootstrap', logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg', url: 'https://getbootstrap.com' },
  { name: 'PHP', logo: 'https://cdn.worldvectorlogo.com/logos/php.svg', url: 'https://www.php.net' },
  { name: 'Customer.io', logo: 'https://customer.io/static/logos/customer-io-logo.svg', url: 'https://customer.io' },
  { name: 'Klaviyo', logo: 'https://cdn.worldvectorlogo.com/logos/klaviyo.svg', url: 'https://www.klaviyo.com' },
  { name: 'Vero', logo: 'https://www.getvero.com/static/images/vero-logo.svg', url: 'https://www.getvero.com' },
  { name: 'Ortto', logo: 'https://ortto.com/static/images/ortto-logo.svg', url: 'https://ortto.com' },
  { name: 'GTM (Google Tag Manager)', logo: 'https://www.gstatic.com/tagmanager/logo.svg', url: 'https://tagmanager.google.com' },
  { name: 'Jasper.ai', logo: 'https://www.jasper.ai/static/images/jasper-logo.svg', url: 'https://www.jasper.ai' },
  { name: 'Copy.ai', logo: 'https://www.copy.ai/static/images/copy-ai-logo.svg', url: 'https://www.copy.ai' },
  { name: 'Anyword', logo: 'https://anyword.com/static/images/anyword-logo.svg', url: 'https://anyword.com' },
  { name: 'Surfer SEO', logo: 'https://surferseo.com/static/images/surfer-logo.svg', url: 'https://surferseo.com' },
  { name: 'Midjourney', logo: 'https://cdn.worldvectorlogo.com/logos/midjourney.svg', url: 'https://www.midjourney.com' },
  { name: 'DALL·E', logo: 'https://openai.com/static/images/openai-logo.svg', url: 'https://openai.com/dall-e' },
  { name: 'Runway', logo: 'https://runwayml.com/static/images/runway-logo.svg', url: 'https://runwayml.com' },
  { name: 'Pika', logo: 'https://pika.art/static/images/pika-logo.svg', url: 'https://pika.art' },
  { name: 'Descript', logo: 'https://www.descript.com/static/images/descript-logo.svg', url: 'https://www.descript.com' },
  { name: 'Apollo.io', logo: 'https://www.apollo.io/static/images/apollo-logo.svg', url: 'https://www.apollo.io' },
  { name: 'Clay', logo: 'https://www.clay.com/static/images/clay-logo.svg', url: 'https://www.clay.com' },
  { name: 'Cognism', logo: 'https://www.cognism.com/static/images/cognism-logo.svg', url: 'https://www.cognism.com' },
  { name: 'Lusha', logo: 'https://www.lusha.com/static/images/lusha-logo.svg', url: 'https://www.lusha.com' },
  { name: 'Lavender.ai', logo: 'https://www.lavender.ai/static/images/lavender-logo.svg', url: 'https://www.lavender.ai' },
  { name: 'Perplexity AI', logo: 'https://www.perplexity.ai/static/images/perplexity-logo.svg', url: 'https://www.perplexity.ai' },
  { name: 'ChatGPT', logo: 'https://openai.com/static/images/openai-logo.svg', url: 'https://chat.openai.com' },
  { name: 'Claude', logo: 'https://claude.ai/static/images/claude-logo.svg', url: 'https://claude.ai' },
  { name: 'Napkin', logo: 'https://napkin.one/static/images/napkin-logo.svg', url: 'https://napkin.one' },
  { name: 'Clarity', logo: 'https://www.clarity.so/static/images/clarity-logo.svg', url: 'https://www.clarity.so' },
  { name: 'Notion', logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg', url: 'https://notion.so' },
  { name: 'Notion AI', logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg', url: 'https://www.notion.so/product/ai' },
  { name: 'Fermat', logo: 'https://www.fermat.ws/static/images/fermat-logo.svg', url: 'https://www.fermat.ws' },
  { name: 'Mutiny', logo: 'https://www.mutinyhq.com/static/images/mutiny-logo.svg', url: 'https://www.mutinyhq.com' },
  { name: 'Replo', logo: 'https://www.replo.app/static/images/replo-logo.svg', url: 'https://www.replo.app' },
  { name: 'Marktag', logo: 'https://www.marktag.io/static/images/marktag-logo.svg', url: 'https://www.marktag.io' },
  { name: 'Novacene', logo: 'https://novacene.ai/static/images/novacene-logo.svg', url: 'https://novacene.ai' },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Duplicate the skills array for seamless infinite scrolling
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        My <span className="text-netflix-red">Core Skills</span>
      </h2>
      
      {/* Auto-scrolling Skills Strip */}
      <div className="relative overflow-hidden py-8">
        <div className="flex animate-scroll-left gap-8">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="relative flex-shrink-0"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-netflix-gray rounded-lg hover:bg-netflix-light-gray transition-colors duration-300 cursor-pointer"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 object-contain filter-none"
                  style={{ filter: 'none' }}
                />
              </a>
              
              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded whitespace-nowrap z-10">
                  {skill.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
