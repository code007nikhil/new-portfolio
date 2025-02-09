import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const HeroSection = () => {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter size={24} />, url: "https://twitter.com/yourusername" }
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full px-6 py-32 relative z-10"
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg text-cyan-400 mb-4 font-mono">Hello, I'm</h2>
              <h1 className="text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 
                               drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                  Nikhil Thakur
                </span>
              </h1>
              <p className="text-3xl text-cyan-400 mb-8 font-light">
                Shaping the Future of Digital Creativity & Innovation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="holographic p-6 rounded-lg mb-8 backdrop-blur-md border border-cyan-500/20"
            >
              <p className="text-lg text-cyan-300">
                Digital Entrepreneur | Web Developer | Graphic Designer | Video Editor
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="px-8 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 
                         transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, 'projects')}
                className="px-8 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 
                         transition-all duration-300 transform hover:scale-105"
              >
                View Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 mt-8"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transform hover:scale-110 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 
                            rounded-full blur-3xl animate-pulse"></div>
              
              {/* Image */}
              <img
                src="https://i.ibb.co/nsw4dNVK/Whats-App-Image-2024-07-10-at-18-03-09-f49dcef7.jpg"
                alt="Nikhil Thakur"
                className="relative z-10 w-full h-auto aspect-square object-cover rounded-2xl 
                         border-2 border-cyan-500/30 hover:border-cyan-400 
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg shadow-cyan-500/20"
              />

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection 