import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPaintBrush, FaVideo, FaBullhorn, FaPen, FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    video?: string;
    pdf?: string;
  };
  mediaType: 'image' | 'video' | 'pdf';
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  projects: Project[];
}

const ProjectGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('web');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'web',
      title: 'Web Development',
      icon: <FaCode className="text-2xl" />,
      color: 'from-cyan-500 to-blue-500',
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'Modern e-commerce platform with Next.js, TypeScript, and Stripe integration.',
          image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800',
          tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
          links: {
            github: 'https://github.com/yourusername/ecommerce',
            live: 'https://demo-ecommerce.com'
          },
          mediaType: 'image'
        },
        {
          title: 'AI Dashboard',
          description: 'Analytics dashboard with AI-powered insights and real-time data visualization.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
          tags: ['React', 'D3.js', 'Node.js', 'Machine Learning'],
          links: {
            github: 'https://github.com/yourusername/ai-dashboard',
            live: 'https://ai-dashboard-demo.com'
          },
          mediaType: 'image'
        },
        {
          title: 'Portfolio Platform',
          description: 'Modern portfolio platform for creative professionals with custom CMS.',
          image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
          tags: ['React', 'GraphQL', 'Tailwind', 'Firebase'],
          links: {
            github: 'https://github.com/yourusername/portfolio-platform',
            live: 'https://portfolio-platform.com'
          },
          mediaType: 'image'
        },
        {
          title: 'Task Management App',
          description: 'Real-time collaborative task management application with team features.',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
          tags: ['Vue.js', 'Socket.io', 'Express', 'MongoDB'],
          links: {
            github: 'https://github.com/yourusername/task-app',
            live: 'https://task-app-demo.com'
          },
          mediaType: 'image'
        }
      ]
    },
    {
      id: 'graphic',
      title: 'Graphic Design',
      icon: <FaPaintBrush className="text-2xl" />,
      color: 'from-purple-500 to-pink-500',
      projects: [
        {
          title: 'Tech Brand Identity',
          description: 'Complete brand identity design for a tech startup including logo and guidelines.',
          image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
          tags: ['Branding', 'Logo Design', 'Typography'],
          links: {
            pdf: '/projects/brand-guidelines.pdf'
          },
          mediaType: 'image'
        },
        {
          title: 'Social Media Kit',
          description: 'Comprehensive social media design package with templates and assets.',
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
          tags: ['Social Media', 'Templates', 'Photoshop'],
          mediaType: 'image'
        },
        {
          title: 'Mobile App UI Kit',
          description: 'Comprehensive UI kit for modern mobile applications with dark mode support.',
          image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800',
          tags: ['UI Design', 'Mobile', 'Figma'],
          mediaType: 'image'
        },
        {
          title: 'NFT Collection',
          description: 'Collection of unique digital art pieces for NFT marketplace.',
          image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800',
          tags: ['Digital Art', 'NFT', 'Illustration'],
          mediaType: 'image'
        }
      ]
    },
    {
      id: 'video',
      title: 'Video Production',
      icon: <FaVideo className="text-2xl" />,
      color: 'from-red-500 to-orange-500',
      projects: [
        {
          title: 'Product Launch Video',
          description: 'Dynamic product launch video with motion graphics and 3D elements.',
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
          tags: ['After Effects', 'Cinema 4D', 'Motion Graphics'],
          links: {
            video: 'https://vimeo.com/123456789'
          },
          mediaType: 'video'
        },
        {
          title: 'Corporate Overview',
          description: 'Professional corporate video showcasing company culture and values.',
          image: 'https://images.unsplash.com/photo-1585939268339-0d07217e6eb9?w=800',
          tags: ['Premiere Pro', 'Color Grading', 'Cinematography'],
          links: {
            video: 'https://vimeo.com/987654321'
          },
          mediaType: 'video'
        },
        {
          title: 'App Promo Video',
          description: 'Engaging promotional video for mobile app launch campaign.',
          image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800',
          tags: ['After Effects', 'Animation', '3D'],
          links: {
            video: 'https://vimeo.com/234567890'
          },
          mediaType: 'video'
        },
        {
          title: 'Event Highlights',
          description: 'Dynamic highlight reel from tech conference with interviews.',
          image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
          tags: ['Event', 'Documentary', 'Editing'],
          links: {
            video: 'https://vimeo.com/345678901'
          },
          mediaType: 'video'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: <FaBullhorn className="text-2xl" />,
      color: 'from-green-500 to-teal-500',
      projects: [
        {
          title: 'SaaS Growth Campaign',
          description: 'Comprehensive digital marketing campaign that increased user acquisition by 200%.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
          tags: ['SEO', 'PPC', 'Content Strategy', 'Analytics'],
          links: {
            pdf: '/projects/case-study.pdf'
          },
          mediaType: 'image'
        },
        {
          title: 'E-commerce Marketing',
          description: 'Multi-channel marketing strategy that generated $1M+ in revenue.',
          image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
          tags: ['Email Marketing', 'Social Ads', 'CRO'],
          mediaType: 'image'
        },
        {
          title: 'Social Media Campaign',
          description: 'Viral social media campaign that reached 1M+ impressions.',
          image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800',
          tags: ['Social Media', 'Viral', 'Analytics'],
          mediaType: 'image'
        },
        {
          title: 'Email Marketing',
          description: 'Automated email marketing campaign with 45% open rate.',
          image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
          tags: ['Email', 'Automation', 'CRM'],
          mediaType: 'image'
        }
      ]
    },
    {
      id: 'content',
      title: 'Content Creation',
      icon: <FaPen className="text-2xl" />,
      color: 'from-yellow-500 to-orange-500',
      projects: [
        {
          title: 'Tech Blog Series',
          description: 'Series of in-depth technical articles on emerging technologies.',
          image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
          tags: ['Technical Writing', 'SEO Content', 'Research'],
          links: {
            live: 'https://blog.example.com/tech-series'
          },
          mediaType: 'image'
        },
        {
          title: 'Social Media Content',
          description: 'Engaging social media content strategy with viral success.',
          image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800',
          tags: ['Social Media', 'Copywriting', 'Visual Content'],
          mediaType: 'image'
        },
        {
          title: 'Industry Insights',
          description: 'Series of expert interviews and industry analysis articles.',
          image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800',
          tags: ['Research', 'Interviews', 'Analysis'],
          links: {
            live: 'https://blog.example.com/insights'
          },
          mediaType: 'image'
        },
        {
          title: 'Tutorial Series',
          description: 'Comprehensive tutorial series on emerging technologies.',
          image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
          tags: ['Education', 'Tutorial', 'Tech'],
          links: {
            live: 'https://tutorials.example.com'
          },
          mediaType: 'image'
        }
      ]
    }
  ];

  const handleVideoClick = (videoUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedVideo(videoUrl);
    setIsVideoPlaying(true);
  };

  const getCategoryTitle = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.title : '';
  };

  return (
    <section id="projects" className="py-20 theme-bg-primary">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="gradient-text text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="theme-text-secondary text-lg">
            Explore my latest work across different domains
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md
                         transition-all duration-300 ${
                           selectedCategory === category.id
                             ? `bg-gradient-to-r ${category.color} text-white neon-border`
                             : 'theme-bg-secondary theme-border hover:neon-border'
                         }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories
              .find((cat) => cat.id === selectedCategory)
              ?.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group theme-bg-secondary theme-border hover:neon-border
                           transition-all duration-300 rounded-lg overflow-hidden text-left"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300
                               group-hover:scale-110"
                    />
                    {project.mediaType === 'video' && (
                      <button
                        onClick={(e) => project.links?.video && handleVideoClick(project.links.video, e)}
                        className="absolute inset-0 flex items-center justify-center bg-black/50
                                 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FaPlay className="text-4xl text-white hover:scale-110 transition-transform" />
                      </button>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="gradient-text text-xl font-bold mb-2">{project.title}</h3>
                    <p className="theme-text-secondary mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs theme-bg-primary theme-text-primary
                                   rounded-full theme-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-text-primary hover:text-[var(--accent-color)] transition-colors"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-text-primary hover:text-[var(--accent-color)] transition-colors"
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 theme-bg-secondary theme-border
                     hover:neon-border rounded-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="theme-text-primary">
              See More {getCategoryTitle(selectedCategory || 'web')} Projects
            </span>
            <motion.span
              className="theme-text-primary"
              initial={{ x: 0 }}
              animate={{ x: 5 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.6
              }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isVideoPlaying && selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => {
                setIsVideoPlaying(false);
                setSelectedVideo(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl aspect-video"
                onClick={e => e.stopPropagation()}
              >
                <iframe
                  src={selectedVideo}
                  className="w-full h-full rounded-lg"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => {
                    setIsVideoPlaying(false);
                    setSelectedVideo(null);
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full
                           flex items-center justify-center text-white hover:bg-red-600"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGrid; 