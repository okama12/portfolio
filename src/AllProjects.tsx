import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Youtube, Github, ExternalLink, Briefcase, Menu, X} from 'lucide-react';

const AllProjectsPage = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 }); // Type annotation for mousePosition
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sample project data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application built with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      github: "#",
      demo: "#",
      video: "/path-to-video-clip.mp4", // Add video path for preview
    },
    {
      title: "AI Image Generator",
      description: "Image generation tool using OpenAI's API and Next.js",
      tags: ["Next.js", "OpenAI", "TailwindCSS", "TypeScript"],
      github: "#",
      demo: "#",
      video: "/path-to-video-clip.mp4",
    },
    {
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with user authentication",
      tags: ["Socket.io", "Express", "JWT", "PostgreSQL"],
      github: "#",
      demo: "#",
      video: "/path-to-video-clip.mp4",
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  
    const handleMouseMove = (e: MouseEvent) => {  // Fixed the event type here
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
  
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-white to-black font-mono overflow-hidden">
    {/* Mouse follower */}
    <div 
      className="fixed w-64 h-64 rounded-full bg-yellow-400 opacity-10 pointer-events-none blur-3xl transition-transform duration-500 ease-out"
      style={{
        transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
      }}
    />

    {/* Scroll Progress */}
    <div 
      className="fixed top-0 left-0 h-1 bg-yellow-400 z-50 transition-all duration-300"
      style={{ width: `${scrollProgress}%` }}
    />

     {/* Navigation */}
     <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="font-bold text-xl hover:text-yellow-400 transition-all duration-300">RO</a>
            
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
          <Link to="#about" className="block hover:text-yellow-400 transition-all duration-300">About</Link>
    <Link to="#skills" className="block hover:text-yellow-400 transition-all duration-300">Skills</Link>
    <Link to="#projects" className="block hover:text-yellow-400 transition-all duration-300">Projects</Link>
    <Link to="#experience" className="block hover:text-yellow-400 transition-all duration-300">Experience</Link>
    <Link to="#contact" className="block hover:text-yellow-400 transition-all duration-300">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Project Section */}
      <section className="px-8 py-16" id="projects">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform -rotate-1 hover:rotate-2 transition-all duration-300">
            <Briefcase className="inline-block mr-2" /> All Projects
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-gray-200 hover:border-yellow-400 transition-all duration-300"
              >
               {/* Project Thumbnail */}
          <div className="relative mb-4">
            <img
              src={`/images/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}.jpg`}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <video
              src={`/videos/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}.mp4`}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-sm hover:text-yellow-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-sm hover:text-yellow-400 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
}

export default AllProjectsPage;
