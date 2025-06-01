
import { useState } from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Anti-spam field
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Basic input length validation
    if (value.length > 1000) return;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic spam protection
    if (formData.honeypot) return;
    
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = "https://docs.google.com/document/d/1VTE5A8nGhrh_PodMNd7DmtvsT1cFfS6b2_ri0Wm9lIo/export?format=pdf";
    link.download = "Jigyanshu_Mohapatra_CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        Get In <span className="text-netflix-red">Touch</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="netflix-card p-8">
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-netflix-red p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a 
                  href="mailto:mohapatra3739@gmail.com" 
                  className="text-white hover:text-netflix-red transition-colors"
                >
                  mohapatra3739@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-netflix-red p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a 
                  href="tel:+917089894989" 
                  className="text-white hover:text-netflix-red transition-colors"
                >
                  +91-7089894989
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-netflix-red p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Bhubaneswar, Odisha, India</p>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-netflix-light-gray">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Actions</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={downloadCV}
                className="bg-netflix-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <button 
                onClick={() => window.open("https://wa.link/tbhda7", "_blank")}
                className="bg-transparent border-2 border-netflix-red text-netflix-red hover:bg-netflix-red hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
        
        <div className="netflix-card p-8">
          <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                maxLength={100}
                className="w-full px-4 py-3 bg-netflix-darker border border-netflix-light-gray rounded-md text-white focus:outline-none focus:border-netflix-red transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                maxLength={100}
                className="w-full px-4 py-3 bg-netflix-darker border border-netflix-light-gray rounded-md text-white focus:outline-none focus:border-netflix-red transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={500}
                rows={5}
                className="w-full px-4 py-3 bg-netflix-darker border border-netflix-light-gray rounded-md text-white focus:outline-none focus:border-netflix-red transition-colors resize-none"
                required
              ></textarea>
              <p className="text-sm text-gray-400 mt-1">{formData.message.length}/500 characters</p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-netflix-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
