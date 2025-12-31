import { motion } from 'framer-motion';

export default function Certifications({ certs }) {
  return (
    <section id="certifications" className="py-20 bg-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, rotateY: 5 }}
              className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-2xl transition"
            >
              <img src={cert.imageUrl} alt={cert.name} className="w-full h-32 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
              <p className="text-sm text-gray-300">{cert.issuer} - {cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}