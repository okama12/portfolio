import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Search,Youtube } from 'lucide-react';

// Define Project type
interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

// Import or define your projects data
const projects: Project[] = [
  // Your existing projects array here
  {
    title: "E-Commerce Platform",
    description: "Full-stack application built with React, Node.js, and MongoDB",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    github: "#",
    demo: "#"
  },
  // ... other projects
];

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Get unique tags from all projects
  const allTags: string[] = ['All', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on search and tag
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-black font-mono">
      {/* Navigation (reuse from main page) */}

      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm hover:text-yellow-400 transition-all duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>

          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              All Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Explore all my projects and see what I've been working on
            </motion.p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:outline-none transition-all duration-300"
              />
            </motion.div>

            {/* Tags Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {allTags.map((tag: string) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group backdrop-blur-sm bg-white/5 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={`/images/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      className="p-2 bg-white rounded-full hover:bg-yellow-400 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-white rounded-full hover:bg-yellow-400 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <Link to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-yellow-400 transition-all duration-300">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer (reuse from main page) */}
      <footer className="px-8 py-12 text-center bg-black text-white">
        <div className="flex justify-center space-x-4 mb-4">
          <Youtube className="w-8 h-8 hover:text-yellow-400 transform hover:scale-125 transition-all duration-300 cursor-pointer" />
          <Github className="w-8 h-8 hover:text-yellow-400 transform hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>
        <p className="mb-4">© 2024 - Rashid Okama</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-400 transition-all duration-300">Terms</a>
          <span>×</span>
          <a href="#" className="hover:text-yellow-400 transition-all duration-300">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default AllProjects; 