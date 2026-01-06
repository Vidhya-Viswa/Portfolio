import { useState } from 'react';
  import { motion } from 'framer-motion';

  export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50"
      >
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-white">Vidhya V</h1>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
          
          <ul className="hidden sm:flex space-x-6">
            <li><a href="#hero" className="text-white hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#about" className="text-white hover:text-yellow-400 transition">About</a></li>
            <li><a href="#skills" className="text-white hover:text-yellow-400 transition">Skills</a></li>
            <li><a href="#projects" className="text-white hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="#certifications" className="text-white hover:text-yellow-400 transition">Certifications</a></li>
            <li><a href="#contact" className="text-white hover:text-yellow-400 transition">Contact</a></li>
          </ul>
          
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md shadow-lg sm:hidden flex flex-col space-y-4 p-4">
              <li><a href="#hero" className="text-white hover:text-yellow-400 transition block" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-400 transition block" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#skills" className="text-white hover:text-yellow-400 transition block" onClick={() => setIsOpen(false)}>Skills</a></li>
              <li><a href="#projects" className="text-white hover:text-yellow-400 transition block" onClick={() => setIsOpen(false)}>Projects</a></li>
              <li><a href="#certifications" className="text-white hover:text-yellow-400 transition block" onClick={() => setIsOpen(false)}>Certifications</a></li>
              <li><a href="#contact" className="text-white hover:text-yellow-400 transition block" onClick={() => setIsOpen(false)}>Contact</a></li>
            </motion.ul>
          )}
        </nav>
      </motion.header>
    );
  }
