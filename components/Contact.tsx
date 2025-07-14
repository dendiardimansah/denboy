import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (value) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 2000); // Reset status after a while
        return;
    }

    setStatus('sending');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
  };

  return (
    <AnimatedSection id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-light-text dark:text-white">Get In Touch</h2>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-2 ${errors.name ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:ring-primary transition-colors`} 
              placeholder="Your Name" 
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-2 ${errors.email ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:ring-primary transition-colors`} 
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-2 ${errors.message ? 'border-red-500' : 'border-transparent'} focus:border-primary focus:ring-primary transition-colors`} 
              placeholder="Tell me about your idea..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {status === 'success' && (
            <p className="mt-4 text-center text-green-600 dark:text-green-400">Thank you! Your message has been sent successfully.</p>
        )}
        {status === 'error' && (
            <p className="mt-4 text-center text-red-600 dark:text-red-400">Please fill out all fields.</p>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Contact;
