import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <img src="/assets/profile.png" alt="Profile" className="w-64 h-64 rounded-full mx-auto shadow-2xl border-4 border-white/20 hover:scale-110 transition transform" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m Vidhya, a passionate Full Stack Developer ready to turn ideas into reality! 🚀
            I love building interactive websites, solving challenging problems, and learning new technologies every day. 💻
            From front-end magic with React & Tailwind to robust back-end solutions with Node.js, I enjoy creating projects that are both beautiful and functional. ✨
            I’m a fast learner, highly motivated, and always eager to take on new challenges.
            My goal is to deliver high-quality products on time and make every project a success story! 🎯
            Let’s collaborate and build something amazing together! 🔥
          </p>
        </motion.div>
      </div>
    </section>
  );
}