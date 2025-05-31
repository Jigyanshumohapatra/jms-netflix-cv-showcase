
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate email sending (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        Get In <span className="text-netflix-red">Touch</span>
      </h2>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="netflix-card p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Me</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
                required
                className="w-full px-4 py-3 bg-netflix-dark border border-netflix-light-gray rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors duration-300"
                placeholder="Your Name"
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
                required
                className="w-full px-4 py-3 bg-netflix-dark border border-netflix-light-gray rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-netflix-dark border border-netflix-light-gray rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors duration-300"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-netflix-red hover:bg-red-700 disabled:bg-red-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="netflix-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">Direct Contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-netflix-red p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:mohapatra3739@gmail.com"
                    className="text-white hover:text-netflix-red transition-colors duration-300"
                  >
                    mohapatra3739@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-netflix-red p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href="tel:+917089894989"
                    className="text-white hover:text-netflix-red transition-colors duration-300"
                  >
                    +91-7089894989
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-netflix-red p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Hyderabad/Pune, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="netflix-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <a
                href="https://calendly.com/jigyanshu3739/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-netflix-red hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 text-center"
              >
                Book a Meeting
              </a>
              
              <button className="block w-full bg-netflix-light-gray hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300">
                Download CV
              </button>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="netflix-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jigyanshu-m-05443412b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
