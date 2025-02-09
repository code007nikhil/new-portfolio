import { motion } from 'framer-motion';
import { FaEye, FaComment, FaShare, FaBookmark, FaClock } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  views: number;
  comments: number;
  shares: number;
  author: {
    name: string;
    avatar: string;
  };
}

const BlogHub = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Web Development with AI Integration',
      description: 'Exploring how artificial intelligence is revolutionizing web development practices and workflows.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      category: 'Web Development',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      views: 1240,
      comments: 28,
      shares: 156,
      author: {
        name: 'Nikhil Thakur',
        avatar: 'https://i.ibb.co/nsw4dNVK/Whats-App-Image-2024-07-10-at-18-03-09-f49dcef7.jpg'
      }
    },
    {
      id: '2',
      title: 'Mastering Video Editing: Pro Tips and Tricks',
      description: 'Advanced techniques and shortcuts to enhance your video editing workflow.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
      category: 'Video Editing',
      date: 'Mar 12, 2024',
      readTime: '8 min read',
      views: 2350,
      comments: 45,
      shares: 232,
      author: {
        name: 'Nikhil Thakur',
        avatar: 'https://i.ibb.co/nsw4dNVK/Whats-App-Image-2024-07-10-at-18-03-09-f49dcef7.jpg'
      }
    },
    {
      id: '3',
      title: 'Digital Marketing Trends for 2024',
      description: 'Stay ahead of the curve with these emerging digital marketing strategies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      category: 'Digital Marketing',
      date: 'Mar 10, 2024',
      readTime: '6 min read',
      views: 1890,
      comments: 34,
      shares: 178,
      author: {
        name: 'Nikhil Thakur',
        avatar: 'https://i.ibb.co/nsw4dNVK/Whats-App-Image-2024-07-10-at-18-03-09-f49dcef7.jpg'
      }
    },
    {
      id: '4',
      title: 'Creating Stunning Graphics with AI Tools',
      description: 'Leverage AI-powered design tools to create professional graphics quickly.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
      category: 'Graphic Design',
      date: 'Mar 8, 2024',
      readTime: '7 min read',
      views: 1560,
      comments: 23,
      shares: 145,
      author: {
        name: 'Nikhil Thakur',
        avatar: 'https://i.ibb.co/nsw4dNVK/Whats-App-Image-2024-07-10-at-18-03-09-f49dcef7.jpg'
      }
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                      bg-gradient-to-r from-cyan-400 to-purple-400 
                      drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="theme-bg-secondary theme-border hover:neon-border 
                       transition-all duration-300 rounded-lg overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/80 text-white text-sm rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full border-2 border-cyan-500/30"
                  />
                  <div className="text-left">
                    <h4 className="text-sm text-cyan-400">{post.author.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-cyan-400" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="gradient-text text-xl font-bold mb-3 text-left">
                  {post.title}
                </h3>
                <p className="theme-text-secondary mb-4 line-clamp-2 text-left">{post.description}</p>

                {/* Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaEye className="text-cyan-400" />
                      {post.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment className="text-cyan-400" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaShare className="text-cyan-400" />
                      {post.shares}
                    </span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <FaBookmark />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full
                     text-white font-semibold hover:from-cyan-400 hover:to-purple-400
                     transition-all duration-300"
          >
            View All Posts
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BlogHub; 