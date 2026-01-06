import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Apple Clone',
    description: 'A sleek web clone mimicking Apple\'s design with interactive elements and responsive layouts.',
    tools: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: '/Pictures/Picture-1.png',
    github: 'https://github.com/Vidhya-Viswa/Apple-Clone',
    demo: 'https://apple-clone-yr65.vercel.app/',
  },
  {
    name: 'Nostra E-commerce Website',
    description: 'Full-featured e-commerce site with product listings, cart, and user auth for seamless shopping.',
    tools: ['HTML 5', 'CSS', 'JavaScript'],
    image: '/Pictures/Picture-4.png',
    github: 'https://github.com/Vidhya-Viswa/Nostra',
    demo: 'https://nostra-tau.vercel.app/',
  },
  {
    name: 'Netflix Clone',
    description: 'Responsive clone of Netflix with dynamic content and smooth user interactions.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    image: '/Pictures/Picture-3.png',
    github: 'https://github.com/Vidhya-Viswa/Netflix_Clone',
    demo: 'https://netflix-clone-7xyx.vercel.app/',
  },
  {
    name: 'Bulk Mail Creation App',
    description: 'App for bulk email management with templates, lists, and scheduling features.',
    tools: ['React', 'Node.js', 'Express', 'Vercel'],
    image: '/Pictures/Picture-2.png',
    github: 'https://github.com/Vidhya-Viswa/BulkMail_Creation',
    demo: 'https://bulk-mail-creation.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-indigo-800 to-purple-600">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-sm text-center overflow-hidden relative group"
            >
              
              <div className="relative mb-6">
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="w-full h-48 object-cover rounded-xl transition-all duration-300 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
              
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-sm text-gray-200 mb-4 leading-relaxed">{project.description}</p>
              
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-purple-900 to-rose-900 text-white text-xs font-semibold rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 hover:shadow-lg transition-all duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold rounded-full hover:from-teal-500 hover:to-cyan-400 hover:shadow-lg transition-all duration-300"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;