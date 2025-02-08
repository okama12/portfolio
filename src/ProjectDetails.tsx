import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Code, Layout, Target, Users, Lightbulb, CheckCircle } from 'lucide-react';

const ProjectDetails = () => {
  // This would typically come from an API or database
  // Using sample project for demonstration
  const project = {
    title: "Real-time Chat App",
    description: "WebSocket-based chat application with user authentication",
    longDescription: "A full-featured real-time chat application that enables instant messaging between users. The application supports multiple chat rooms, direct messaging, and file sharing capabilities.",
    tags: ["Socket.io", "Express", "JWT", "PostgreSQL"],
    github: "#",
    demo: "#",
    image: "/images/projects/real-time-chat-app.jpg",
    role: "Lead Developer",
    duration: "3 months",
    year: "2023",
    challenge: "The main challenge was implementing real-time functionality while maintaining low latency and handling multiple concurrent connections. Another significant challenge was ensuring message delivery reliability and handling offline message storage.",
    solution: "Implemented WebSocket connections using Socket.io for real-time communication. Used Redis for message queuing and PostgreSQL for persistent storage. Implemented JWT for secure authentication and authorization.",
    features: [
      "Real-time messaging with typing indicators",
      "User authentication and authorization",
      "File sharing and image preview",
      "Message history and search",
      "Multiple chat room support",
      "Offline message storage",
    ],
    techStack: {
      "Frontend": ["React", "TailwindCSS", "Socket.io-client", "Redux"],
      "Backend": ["Node.js", "Express", "Socket.io", "JWT"],
      "Database": ["PostgreSQL", "Redis"],
      "DevOps": ["Docker", "AWS", "Nginx"]
    },
    impact: [
      "Reduced message delivery latency by 60%",
      "Achieved 99.9% uptime",
      "Supported 10,000+ concurrent users",
      "Processed 1M+ messages daily"
    ],
    learnings: [
      "Deepened understanding of WebSocket protocol",
      "Improved knowledge of scaling real-time applications",
      "Learned effective error handling in distributed systems",
      "Gained experience with caching strategies"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-black font-mono">
      {/* Navigation (reuse from main page) */}
      
      {/* Hero Section */}
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
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <p className="text-lg text-gray-600">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-medium">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center px-6 py-3 bg-black text-white rounded hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" /> View Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center px-6 py-3 border border-black rounded hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Details */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenge & Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Target className="w-6 h-6 mr-2 text-yellow-400" /> The Challenge
                </h2>
                <p className="text-gray-600">{project.challenge}</p>
              </div>
              
              <div>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Lightbulb className="w-6 h-6 mr-2 text-yellow-400" /> The Solution
                </h2>
                <p className="text-gray-600">{project.solution}</p>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="flex items-center text-2xl font-bold mb-6">
                <Layout className="w-6 h-6 mr-2 text-yellow-400" /> Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="flex items-center text-2xl font-bold mb-8">
            <Code className="w-6 h-6 mr-2 text-yellow-400" /> Technical Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(project.techStack).map(([category, technologies]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-white/5 p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {technologies.map((tech, index) => (
                    <li key={index} className="text-gray-300">{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Learnings */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="flex items-center text-2xl font-bold mb-6">
                <Target className="w-6 h-6 mr-2 text-yellow-400" /> Impact
              </h2>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="flex items-center text-2xl font-bold mb-6">
                <Users className="w-6 h-6 mr-2 text-yellow-400" /> Key Learnings
              </h2>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-1" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer (reuse from main page) */}
    </div>
  );
};

export default ProjectDetails; 