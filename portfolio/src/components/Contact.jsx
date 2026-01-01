import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    
    const serviceID = 'service_an36j5h'; 
    const templateID = 'template_6n1nkdf'; 
    const publicKey = '1LYo9tGXBA_qofdrN'; 

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, publicKey)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message. Try again.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <div className="flex items-center space-x-4">
              <MailIcon className="w-6 h-6 text-blue-400" />
              <p>vidhyaviswa20@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="w-6 h-6 text-green-400" />
              <p>+91 9080923917</p>
            </div>
            <div className="flex items-center space-x-4">
              <LocationMarkerIcon className="w-6 h-6 text-red-400" />
              <p>TamilNadu, India</p>
            </div>
            <p className="text-gray-300 mt-6">
              I'm always open to discussing new opportunities, collaborations, or just chatting about tech!
            </p>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
            className="bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur-sm space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300 resize-none"
                placeholder="Sprinkle some magic — type your message here!"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="text-center text-sm">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}