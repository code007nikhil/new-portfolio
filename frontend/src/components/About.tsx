import { motion } from 'framer-motion';
import { FaInstagram, FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-20 theme-bg-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="gradient-text text-4xl font-bold mb-12">About Me</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="theme-bg-primary theme-border neon-border p-8 rounded-lg"
          >
            <p className="theme-text-secondary text-lg leading-relaxed mb-6">
              Hi, I'm Nikhil Thakur, a versatile digital creator passionate about transforming ideas into impactful digital experiences. 
              With expertise spanning web development, graphic design, video editing, and digital marketing, I bring a comprehensive 
              approach to every project. My journey in the digital space has been driven by a constant desire to learn and innovate, 
              whether it's crafting responsive websites, creating engaging visual content, or developing effective marketing strategies. 
              I believe in the power of technology to create meaningful connections and drive positive change.
            </p>
            <p className="theme-text-secondary text-lg leading-relaxed">
              When I'm not coding or designing, you can find me exploring new technologies, sharing insights on digital trends, 
              or collaborating with fellow creators. I'm always open to new challenges and opportunities to create something amazing.
            </p>
          </motion.div>

          {/* Instagram Link */}
          <motion.a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                     rounded-full text-white font-semibold hover:from-purple-400 hover:to-pink-400
                     transition-all duration-300 group mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram className="text-xl" />
            Follow me on Instagram
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 