import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaCode, FaPaintBrush, FaVideo, FaBullhorn, FaSpinner, FaUser, FaEnvelope, FaPhone, FaBuilding, FaCalendar, FaDollarSign } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  projectType: string;
  description: string;
  deadline: string;
  budget: string;
  features: string[];
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectType: '',
    description: '',
    deadline: '',
    budget: '',
    features: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiSuggesting, setAiSuggesting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const serviceTypes = [
    { id: 'web', title: 'Web Development', icon: <FaCode /> },
    { id: 'design', title: 'Graphic Design', icon: <FaPaintBrush /> },
    { id: 'video', title: 'Video Editing', icon: <FaVideo /> },
    { id: 'marketing', title: 'Digital Marketing', icon: <FaBullhorn /> }
  ];

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, serviceType: serviceId });
    setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const getAISuggestions = async () => {
    setAiSuggesting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setAiSuggesting(false);
  };

  const handleBack = () => {
    setCurrentStep(1);
    setFormData({ ...formData, serviceType: '' });
  };

  return (
    <section className="py-20 theme-bg-primary">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="text-left max-w-2xl mx-auto mb-12">
          <h2 className="gradient-text text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="theme-text-secondary text-lg">
            Have a project in mind? Fill out the form below, and I'll get back to you within 24 hours.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto"
        >
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-8">
            <motion.button
              type="button"
              onClick={handleBack}
              className={`flex items-center gap-2 theme-text-primary hover:text-[var(--neon-blue)] transition-colors
                         ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`}
              whileHover={{ x: -4 }}
            >
              ← Back
            </motion.button>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full transition-colors duration-300 
                ${currentStep === 1 ? 'bg-[var(--primary-color)]' : 'bg-[var(--text-secondary)]'}`}></span>
              <span className={`w-3 h-3 rounded-full transition-colors duration-300 
                ${currentStep === 2 ? 'bg-[var(--primary-color)]' : 'bg-[var(--text-secondary)]'}`}></span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <h3 className="text-2xl font-semibold theme-text-primary col-span-full text-left mb-2">
                  What type of service are you looking for?
                </h3>
                {serviceTypes.map((service) => (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceSelect(service.id)}
                    className="p-8 theme-bg-secondary theme-border hover:neon-border
                             transition-all duration-300 rounded-lg text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl theme-text-primary">{service.icon}</div>
                      <div>
                        <span className="text-xl font-semibold theme-text-primary block mb-2">{service.title}</span>
                        <span className="theme-text-secondary text-sm">Professional {service.title.toLowerCase()} services</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6 theme-bg-secondary p-8 rounded-lg theme-border"
              >
                <h3 className="text-2xl font-semibold theme-text-primary text-left mb-6">
                  Tell us about your project
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="block theme-text-primary mb-2 text-left flex items-center gap-2">
                      <FaUser className="text-sm" /> Name
                    </label>
                    <input
                      type="text"
                      className="w-full theme-bg-primary theme-border theme-text-primary
                               p-3 rounded-lg focus:neon-border outline-none"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="block theme-text-primary mb-2 text-left flex items-center gap-2">
                      <FaEnvelope className="text-sm" /> Email
                    </label>
                    <input
                      type="email"
                      className="w-full theme-bg-primary theme-border theme-text-primary
                               p-3 rounded-lg focus:neon-border outline-none"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="block theme-text-primary mb-2 text-left flex items-center gap-2">
                      <FaPhone className="text-sm" /> Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full theme-bg-primary theme-border theme-text-primary
                               p-3 rounded-lg focus:neon-border outline-none"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block theme-text-primary mb-2 text-left flex items-center gap-2">
                      <FaBuilding className="text-sm" /> Company
                    </label>
                    <input
                      type="text"
                      className="w-full theme-bg-primary theme-border theme-text-primary
                               p-3 rounded-lg focus:neon-border outline-none"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="block theme-text-primary mb-2 text-left">Project Description</label>
                  <div className="relative">
                    <textarea
                      className="w-full theme-bg-primary theme-border theme-text-primary
                               p-4 rounded-lg focus:neon-border outline-none min-h-[150px]"
                      placeholder="Tell us about your project requirements..."
                      required
                    ></textarea>
                    <button
                      type="button"
                      onClick={getAISuggestions}
                      className="absolute bottom-4 right-4 theme-text-primary hover:text-[var(--neon-blue)]
                               transition-colors flex items-center gap-2 bg-[var(--bg-secondary)] 
                               px-3 py-1.5 rounded-full theme-border"
                    >
                      {aiSuggesting ? (
                        <FaSpinner className="animate-spin" />
                      ) : (
                        <FaRobot />
                      )}
                      <span className="text-sm">AI Assist</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="block theme-text-primary mb-2 text-left flex items-center gap-2">
                      <FaCalendar className="text-sm" /> Deadline
                    </label>
                    <input
                      type="date"
                      className="w-full theme-bg-primary theme-border theme-text-primary
                               p-3 rounded-lg focus:neon-border outline-none"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block theme-text-primary mb-2 text-left flex items-center gap-2">
                      <FaDollarSign className="text-sm" /> Budget Range
                    </label>
                    <select
                      className="w-full theme-bg-primary theme-border theme-text-primary
                               p-3 rounded-lg focus:neon-border outline-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="small">$1,000 - $5,000</option>
                      <option value="medium">$5,000 - $10,000</option>
                      <option value="large">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <motion.button
                    type="submit"
                    className="px-8 py-3 theme-gradient text-white rounded-lg hover:neon-border
                             transition-all duration-300 disabled:opacity-50 font-semibold"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm; 