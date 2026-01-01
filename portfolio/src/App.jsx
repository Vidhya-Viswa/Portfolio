import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Add this
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from './components/Header';
import Hero from './components/Hero'; // New component
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [skills, setSkills] = useState([]);
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const querySnapshot = await getDocs(collection(db, 'skills'));
      setSkills(querySnapshot.docs.map(doc => doc.data()));
      
    };
    const fetchCerts = async () => {
      const querySnapshot = await getDocs(collection(db, 'certifications'));
      setCerts(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchSkills();
    fetchCerts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-x-hidden">
      <Header />
      <Hero /> {/* New hero section */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <About />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Skills skills={skills} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Certifications certs={certs} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;