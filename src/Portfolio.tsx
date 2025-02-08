import React, { useState, useEffect } from 'react';
import './index.css';
import { Youtube, Github, Menu, X, ArrowRight, Briefcase, Code, BookOpen, Mail, User, ExternalLink } from 'lucide-react';
import fallbackImage from '/images/project-placeholder.png';
import { motion } from 'framer-motion';

// Update the scrollPaddingStyle to include scrollbar styling
const scrollPaddingStyle = `
  html {
    scroll-padding-top: 100px;
  }

  /* Webkit browsers (Chrome, Safari, newer versions of Edge) */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #facc15;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #eab308;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #facc15 transparent;
  }
`;

// Add these animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  // Sample project data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application built with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Image Generator",
      description: "Image generation tool using OpenAI's API and Next.js",
      tags: ["Next.js", "OpenAI", "TailwindCSS", "TypeScript"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with user authentication",
      tags: ["Socket.io", "Express", "JWT", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates",
      tags: ["Vue.js", "Firebase", "Vuex", "Material UI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Forecast App",
      description: "Dynamic weather application with location-based forecasting",
      tags: ["React Native", "Weather API", "Geolocation", "Redux Saga"],
      github: "#",
      demo: "#"
    },
    {
      title: "Blog Platform",
      description: "Full-featured blogging platform with markdown support",
      tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts and nutrition goals",
      tags: ["Flutter", "Firebase", "Google Fit API", "BLoC"],
      github: "#",
      demo: "#"
    },
    {
      title: "Recipe Finder",
      description: "AI-powered recipe recommendation engine with meal planning",
      tags: ["Python", "Django", "TensorFlow", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Virtual Event Platform",
      description: "Live streaming platform for hosting virtual conferences",
      tags: ["React", "WebRTC", "Node.js", "Redis"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling smart devices",
      tags: ["Vue.js", "MQTT", "Node-RED", "InfluxDB"],
      github: "#",
      demo: "#"
    }
  ];

  // Sample skills data
  const skills = {
    "Frontend": ["HTML/CSS", "TailwindCSS", "Bootstrap", "Javascript", "React", "React Native", "Flutter"],
    "Backend": ["Node.js", "Python", "Flask", "Django", "Fastapi"],
    "DevOps": ["Docker", "AWS", "CI/CD"],
    "Database": ["Postgres", "Mysql", "Mongodb"],
    "Tools": ["Git", "VS Code", "Postman", "Jira"]
  };

  // Sample experience data
  const experience = [
    {
      company: "Tech Corp",
      position: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Led development of microservices architecture, improving system scalability by 200%"
    },
    {
      company: "StartupX",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built and maintained multiple client-facing applications using React and Node.js"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update the Projects section with error handling
  const ProjectCard = React.memo(({ project, index }: { project: any, index: number }) => {
    const [imageState, setImageState] = useState({
      isLoading: true,
      src: ''
    });

    useEffect(() => {
      const projectImage = `/images/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      let isMounted = true;

      const loadImage = async () => {
        try {
          const img = new Image();
          img.src = projectImage;
          
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });

          if (isMounted) {
            setImageState({
              isLoading: false,
              src: projectImage
            });
          }
        } catch (error) {
          if (isMounted) {
            setImageState({
              isLoading: false,
              src: fallbackImage
            });
          }
        }
      };

      loadImage();

      return () => {
        isMounted = false;
      };
    }, [project.title]);

    return (
      <div
        className={`group backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-gray-200 hover:border-yellow-400 transition-all duration-300 ${
          index >= 4 ? 'hidden md:block' : ''
        }`}
      >
        {/* Project Thumbnail */}
        <div className="relative mb-4 h-48 overflow-hidden">
          {imageState.isLoading ? (
            <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse" />
          ) : (
            <img
              src={imageState.src}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg transition-opacity duration-300"
              width="600"
              height="300"
            />
          )}
        </div>

        {/* Rest of the project card content */}
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center text-sm hover:text-yellow-400 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center text-sm hover:text-yellow-400 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          )}
         
        </div>
      </div>
    );
  });

  // Add display name for debugging
  ProjectCard.displayName = 'ProjectCard';

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Add navigation click handler
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-white to-black font-mono overflow-hidden">
      {/* Add style tag for scroll padding */}
      <style>{scrollPaddingStyle}</style>

      {/* Add skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Mouse follower */}
      <div 
        className="fixed w-64 h-64 rounded-full bg-yellow-400 opacity-10 pointer-events-none blur-3xl transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="font-bold text-xl hover:text-yellow-400 transition-all duration-300">RO</a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-yellow-400 transition-all duration-300">About</a>
              <a href="#skills" className="hover:text-yellow-400 transition-all duration-300">Skills</a>
              <a href="#projects" className="hover:text-yellow-400 transition-all duration-300">Projects</a>
              <a href="#experience" className="hover:text-yellow-400 transition-all duration-300">Experience</a>
              <a href="#contact" className="hover:text-yellow-400 transition-all duration-300">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-b border-gray-200`}>
          <div className="px-8 py-4 space-y-4">
            <a href="#about" onClick={handleNavClick} className="block hover:text-yellow-400 transition-all duration-300">About</a>
            <a href="#skills" onClick={handleNavClick} className="block hover:text-yellow-400 transition-all duration-300">Skills</a>
            <a href="#projects" onClick={handleNavClick} className="block hover:text-yellow-400 transition-all duration-300">Projects</a>
            <a href="#experience" onClick={handleNavClick} className="block hover:text-yellow-400 transition-all duration-300">Experience</a>
            <a href="#contact" onClick={handleNavClick} className="block hover:text-yellow-400 transition-all duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with subtle animation */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-20 md:pt-24 px-8 pb-16 max-w-4xl mx-auto min-h-screen flex items-center"
      >
        <div className="space-y-6 md:space-y-8">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 md:space-y-4"
          >
            <div className="bg-yellow-400 inline-block px-3 md:px-4 py-2 transform -rotate-1">
              <h1 className="text-3xl md:text-6xl font-bold">Hey, I'm<br />Rashid Okama.</h1>
            </div>
            
            <div className="bg-yellow-400 inline-block px-3 md:px-4 py-2 transform rotate-1">
              <p className="text-xl md:text-4xl font-bold">
                Empowering Businesses with Cutting-Edge Tech Solutions  
              </p>
            </div>
          </motion.div>

          <div className="space-y-3 md:space-y-4 text-base md:text-lg">
            <p>I'm a <span className="underline decoration-yellow-400">Software Developer</span> and <span className="underline decoration-yellow-400">IoT Enthusiast</span> based in Tanzania 🇹.</p>
            
            <p>
            I specialize in creating impactful solutions for <span className="underline decoration-yellow-400">businesses</span>  and <span className="underline decoration-yellow-400">individuals</span>.
            </p>
            
            <p>
            My expertise spans <span className="underline decoration-yellow-400">web</span>  and <span className="underline decoration-yellow-400">mobile development</span>,
            <span className="underline decoration-yellow-400">backend systems</span>,<span className="underline decoration-yellow-400">IoT solutions</span>, and more.
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="bg-black text-white px-6 py-3 rounded flex items-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              View My Work <ArrowRight className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="border border-black px-6 py-3 rounded flex items-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </motion.section>

     {/* About Section */}
     <section className="px-8 py-16 max-w-4xl mx-auto" id="about">
        <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform-gpu -rotate-1 hover:rotate-2 transition-all duration-300 rounded-sm">
          <User className="inline-block mr-2" /> About Me
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Software Developer with a passion for building scalable applications</h2>
            <p className="text-lg">Tech enthusiast with expertise in mobile development, IoT, web development, and API integration. Dedicated to delivering scalable, secure, and user-focused applications using modern tools.</p>
            <p className="text-lg"><span className="underline decoration-yellow-400">You can read more about me here</span></p>
            <div className="flex space-x-4">
              <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Download CV
              </a>
              <a href="#contact" className="border border-black px-4 py-2 rounded hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300">
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/images/okama.jpg" 
              alt="Profile" 
              className="rounded-lg shadow-xl transform hover:rotate-3 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Skills Section with progressive reveal */}
      <section className="px-8 py-16 bg-black text-white" id="skills">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform-gpu -rotate-1 hover:rotate-2 transition-all duration-300 rounded-sm"
          >
            <Code className="inline-block mr-2" /> Technical Skills
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/20 hover:border-[#facc15] transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map(skill => (
                    <span
                      key={skill}
                      className="bg-yellow-400 text-black px-3 py-1 rounded text-sm hover:scale-110 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>


      {/* Projects Section with progressive reveal */}
      <section className="px-8 py-16" id="projects">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform-gpu -rotate-1 hover:rotate-2 transition-all duration-300 rounded-sm"
          >
            <Briefcase className="inline-block mr-2" /> Featured Projects
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`group backdrop-blur-sm bg-white/5 p-6 rounded-lg hover:border-yellow-400 transition-all duration-300 ${
                  index >= 4 ? 'hidden md:block' : ''
                }`}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* View More Projects Button */}
          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="bg-black text-white px-6 py-3 rounded inline-flex items-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              View More Projects <ArrowRight className="ml-2" />
            </a>
          </div>
        </motion.div>
      </section>


      {/* Experience Section with progressive reveal */}
      <section className="px-8 py-16 bg-black text-white" id="experience">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform-gpu -rotate-1 hover:rotate-2 transition-all duration-300 rounded-sm"
          >
            <BookOpen className="inline-block mr-2" /> Work Experience
          </motion.div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-1">{job.position}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-yellow-400">{job.company}</span>
                  <span className="text-sm text-gray-400">{job.period}</span>
                </div>
                <p className="text-gray-300">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section with progressive reveal */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="px-8 py-16" 
        id="contact"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform-gpu -rotate-1 hover:rotate-2 transition-all duration-300 rounded-sm">
            <Mail className="inline-block mr-2" /> Get In Touch
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Let's Work Together</h2>
              <p className="text-lg">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" /> rashidokama@gmail.com
                </p>
                <p className="flex items-center">
                  <Github className="w-5 h-5 mr-2" /> github.com/okama12
                </p>
              </div>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-2 border border-gray-300 rounded focus:border-yellow-400 focus:outline-none transition-all duration-300"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-2 border border-gray-300 rounded focus:border-yellow-400 focus:outline-none transition-all duration-300"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full p-2 border border-gray-300 rounded focus:border-yellow-400 focus:outline-none transition-all duration-300"
              />
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer remains the same... */}
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

export default Portfolio;
