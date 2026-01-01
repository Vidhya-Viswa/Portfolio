
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-800 to-pink-600 relative overflow-hidden"
    >
      
      <div
        className="absolute inset-0 animate-pulse opacity-50"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Hi, I'm Vidhya!
        </h1>

        <p className="text-lg md:text-xl mb-8 text-white/90">
          <Typewriter
            words={[
              'Web Developer',
              'Full Stack Developer',
              'Creative Designer',
              'Problem Solver',
              'Tech Enthusiast',
              'Lifelong Learner',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        <motion.a
          href="#about"
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore My Work ↓
        </motion.a>
      </motion.div>
    </section>
  );
}
