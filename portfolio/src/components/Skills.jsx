import { motion } from 'framer-motion';
import { CodeIcon, PencilIcon } from '@heroicons/react/outline'; // Example icons

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-purple-800 to-pink-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <CodeIcon className="w-12 h-12 text-yellow-400 mb-4" /> {/* Customize icon per skill */}
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5 }}
                  className="bg-gradient-to-r from-yellow-400 to-pink-500 h-4 rounded-full"
                ></motion.div>
              </div>
              <p className="text-sm text-white mt-2">{skill.percentage}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}