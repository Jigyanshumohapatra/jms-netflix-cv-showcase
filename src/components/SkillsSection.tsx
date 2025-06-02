import { useState } from 'react';

interface Skill {
  name: string;
  logo: string;
  category: string;
  url: string;
}

const skills: Skill[] = [
  { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg', category: 'Marketing Automation', url: 'https://hubspot.com' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', category: 'CRM', url: 'https://salesforce.com' },
  { name: 'Google Analytics', logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics.svg', category: 'Analytics', url: 'https://analytics.google.com' },
  { name: 'Meta Ads', logo: 'https://cdn.worldvectorlogo.com/logos/facebook.svg', category: 'Advertising', url: 'https://business.facebook.com' },
  { name: 'Google Ads', logo: 'https://cdn.worldvectorlogo.com/logos/google-ads.svg', category: 'Advertising', url: 'https://ads.google.com' },
  { name: 'Mailchimp', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp.svg', category: 'Email Marketing', url: 'https://mailchimp.com' },
  { name: 'WordPress', logo: 'https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg', category: 'CMS', url: 'https://wordpress.com' },
  { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg', category: 'E-commerce', url: 'https://shopify.com' },
  { name: 'Tableau', logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg', category: 'Data Visualization', url: 'https://tableau.com' },
  { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg', category: 'Design', url: 'https://figma.com' },
  { name: 'Canva', logo: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg', category: 'Design', url: 'https://canva.com' },
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', category: 'Automation', url: 'https://zapier.com' }
];

const categories = [...new Set(skills.map(skill => skill.category))];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        My <span className="text-netflix-red">Skills</span>
      </h2>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-netflix-red text-white hover:bg-red-700'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSkills.map(skill => (
          <a href={skill.url} target="_blank" rel="noopener noreferrer" key={skill.name} className="netflix-card p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16 mb-4 object-contain" />
            <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-center">{skill.category}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
