import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourusername", label: "Instagram" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Graphic Design",
    "Video Editing",
    "Digital Marketing",
    "Content Creation"
  ];

  return (
    <footer className="theme-bg-primary relative overflow-hidden border-t theme-border text-left">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[var(--primary-color)]/5 rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-[var(--secondary-color)]/5 rounded-full blur-3xl -bottom-48 -right-48"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16">
          {/* Brand Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="gradient-text text-xl md:text-2xl font-bold">Nikhil Thakur</h3>
            <p className="theme-text-secondary">
              Transforming ideas into digital reality through creative solutions and innovative technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-text-primary hover:text-[var(--accent-color)] transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="gradient-text text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="theme-text-secondary hover:text-[var(--primary-color)] transition-colors
                             flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]/50"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="gradient-text text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="theme-text-secondary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary-color)]/50"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="gradient-text text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 theme-text-secondary hover:text-[var(--primary-color)] 
                           transition-colors group"
                >
                  <FaEnvelope className="text-[var(--primary-color)] group-hover:animate-pulse" />
                  contact@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 theme-text-secondary hover:text-[var(--primary-color)]
                           transition-colors group"
                >
                  <FaPhone className="text-[var(--primary-color)] group-hover:animate-pulse" />
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3 theme-text-secondary group">
                <FaMapMarkerAlt className="text-[var(--primary-color)] group-hover:animate-pulse" />
                New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t theme-border">
          <div className="flex items-center justify-center gap-2 theme-text-secondary">
            <span>© {currentYear}</span>
            <span>Made with</span>
            <FaHeart className="text-[var(--accent-color)] animate-pulse" />
            <span>by</span>
            <span className="theme-text-primary">Nikhil Thakur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 