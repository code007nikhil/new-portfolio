import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPaintBrush, FaVideo, FaBullhorn, FaRobot, FaChevronDown, FaPen } from 'react-icons/fa';

const SkillChart = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const skills = [
    {
      id: 'web',
      title: 'Web Development',
      icon: <FaCode className="text-2xl" />,
      color: 'from-cyan-500 to-blue-500',
      subSkills: [
        { name: 'React.js', proficiency: 90 },
        { name: 'Node.js', proficiency: 85 },
        { name: 'TypeScript', proficiency: 88 },
        { name: 'Next.js', proficiency: 82 },
        { name: 'TailwindCSS', proficiency: 95 },
      ]
    },
    {
      id: 'graphic',
      title: 'Graphic Design',
      icon: <FaPaintBrush className="text-2xl" />,
      color: 'from-purple-500 to-pink-500',
      subSkills: [
        { name: 'Photoshop', proficiency: 92 },
        { name: 'Illustrator', proficiency: 88 },
        { name: 'Figma', proficiency: 85 },
        { name: 'Canva Pro', proficiency: 95 },
      ]
    },
    {
      id: 'video',
      title: 'Video Editing',
      icon: <FaVideo className="text-2xl" />,
      color: 'from-red-500 to-orange-500',
      subSkills: [
        { name: 'Premiere Pro', proficiency: 88 },
        { name: 'After Effects', proficiency: 82 },
        { name: 'DaVinci Resolve', proficiency: 85 },
        { name: 'CapCut', proficiency: 90 },
      ]
    },
    {
      id: 'content',
      title: 'Content Creation',
      icon: <FaPen className="text-2xl" />,
      color: 'from-yellow-500 to-orange-500',
      subSkills: [
        { name: 'Blog Writing', proficiency: 92 },
        { name: 'Copywriting', proficiency: 88 },
        { name: 'Script Writing', proficiency: 85 },
        { name: 'Social Media Content', proficiency: 95 },
        { name: 'Technical Writing', proficiency: 87 },
      ]
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: <FaBullhorn className="text-2xl" />,
      color: 'from-green-500 to-emerald-500',
      subSkills: [
        { name: 'SEO', proficiency: 85 },
        { name: 'Social Media Marketing', proficiency: 90 },
        { name: 'Content Strategy', proficiency: 88 },
        { name: 'Email Marketing', proficiency: 85 },
      ]
    },
    {
      id: 'ai',
      title: 'AI Tools Expert',
      icon: <FaRobot className="text-2xl" />,
      color: 'from-indigo-500 to-purple-500',
      subSkills: [
        { name: 'ChatGPT', proficiency: 95 },
        { name: 'Midjourney', proficiency: 88 },
        { name: 'Stable Diffusion', proficiency: 85 },
        { name: 'AutoGPT', proficiency: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                      bg-gradient-to-r from-cyan-400 to-purple-400 
                      drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="relative">
              <motion.div
                className={`p-6 rounded-lg backdrop-blur-md bg-black/40 border border-cyan-500/30 
                           hover:border-cyan-400 cursor-pointer transition-all duration-300
                           ${expandedSkill === skill.id ? 'shadow-lg shadow-cyan-500/20' : ''}`}
                onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                  </div>
                  <FaChevronDown 
                    className={`transition-transform duration-300 
                              ${expandedSkill === skill.id ? 'rotate-180' : ''}`}
                  />
                </div>

                <AnimatePresence>
                  {expandedSkill === skill.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 mt-4"
                    >
                      {skill.subSkills.map((subSkill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-cyan-400">{subSkill.name}</span>
                            <span className="text-sm text-cyan-400">{subSkill.proficiency}%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${subSkill.proficiency}%` }}
                              transition={{ duration: 1, delay: 0.1 * index }}
                              className={`h-full rounded bg-gradient-to-r ${skill.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillChart; 