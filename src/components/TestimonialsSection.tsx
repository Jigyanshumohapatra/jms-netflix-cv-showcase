
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
  linkedinUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Nithya Iyer ',
    role: 'General Manager',
    company: 'Vakilsearch',
    message: 'Working with Jigyanshu was a game-changer for our SaaS platform. His understanding of customer acquisition funnels and conversion optimization is unmatched.',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHWPPhiH_dS9A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732299756549?e=1754524800&v=beta&t=1r5VlUaAxDABnXfXOQRQOOyxrgjS_P0okB0Oqo1mkuw',
    linkedinUrl: 'https://www.linkedin.com/in/ramanithyaiyer/'
  },
  {
    name: 'Pratiksha M',
    role: 'Associate Director, Marketing ',
    company: 'Clear',
    message: 'Jigyanshu\'s strategic approach to marketing automation and his proficiency with tools like HubSpot and Salesforce delivered measurable results for our team.',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFzrvREC2Uu8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725487289731?e=1754524800&v=beta&t=Xq0Pe2Zqbp-nZklpi3kBrxViyUb2-sWcwwkOLIXdDhc',
    linkedinUrl: 'https://www.linkedin.com/in/pratiksha-m-990b059a'
  },
  {
    name: 'Divnay Bhutra S',
    role: 'Associate Director Digital Marketing',
    company: 'Clear',
    message: 'His ability to manage cross-functional teams while delivering consistent ROI improvements makes Jigyanshu an invaluable asset to any growth-focused organisation.',
    avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQGxd2wtSZejPQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516896008710?e=1754524800&v=beta&t=D9-XiyjJzVMaAyTCRjsXnLyyTsZmcQ1K0SAw8SxIJZo',
    linkedinUrl: 'https://www.linkedin.com/in/divnay-bhutra-s-92b34699'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        What People <span className="text-netflix-red">Say</span>
      </h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Cards Carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="netflix-card p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                    <p className="text-netflix-red font-semibold mb-1">{testimonial.role}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                  
                  <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.message}"
                  </blockquote>
                  
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-netflix-red hover:text-red-400 transition-colors duration-300 font-semibold"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-netflix-red hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-netflix-red hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-netflix-red' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
