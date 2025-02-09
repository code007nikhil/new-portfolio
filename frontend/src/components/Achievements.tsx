import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaAward } from 'react-icons/fa';

interface Milestone {
  year: number;
  quarter: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'award' | 'certification' | 'project' | 'recognition';
}

const Achievements = () => {
  const milestones: Milestone[] = [
    {
      year: 2023,
      quarter: 2,
      title: "Full Stack Development Certification",
      description: "Completed advanced certification in MERN stack development",
      icon: <FaCertificate className="text-yellow-400" />,
      category: 'certification'
    },
    {
      year: 2023,
      quarter: 4,
      title: "Best Developer Award",
      description: "Recognized as the top performer in web development projects",
      icon: <FaTrophy className="text-yellow-400" />,
      category: 'award'
    },
    {
      year: 2024,
      quarter: 1,
      title: "AI Integration Expert",
      description: "Mastered implementation of AI tools in web applications",
      icon: <FaMedal className="text-yellow-400" />,
      category: 'certification'
    },
    {
      year: 2024,
      quarter: 3,
      title: "100+ Projects Milestone",
      description: "Successfully completed and delivered over 100 client projects",
      icon: <FaAward className="text-yellow-400" />,
      category: 'project'
    },
    {
      year: 2025,
      quarter: 1,
      title: "Digital Marketing Excellence",
      description: "Achieved expertise in comprehensive digital marketing strategies",
      icon: <FaTrophy className="text-yellow-400" />,
      category: 'recognition'
    }
  ];

  const sortedMilestones = [...milestones].sort((a, b) => {
    return (a.year * 4 + a.quarter) - (b.year * 4 + b.quarter);
  });

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                      bg-gradient-to-r from-cyan-400 to-purple-400 
                      drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]">
          Achievement Timeline
        </h2>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500" />

          {/* Milestones */}
          <div className="space-y-12">
            {sortedMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 
                              shadow-lg shadow-cyan-500/50 z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-5/12 bg-black/40 backdrop-blur-sm rounded-lg border border-cyan-500/30 
                             p-6 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm">
                      {milestone.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 
                                     bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(0,243,255,0.3)]">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-2">{milestone.description}</p>
                      <div className="flex items-center gap-2 text-sm text-cyan-300">
                        <span className="px-3 py-1 rounded-full bg-cyan-900/50 border border-cyan-500/30">
                          Q{milestone.quarter} {milestone.year}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-900/50 border border-cyan-500/30">
                          {milestone.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 