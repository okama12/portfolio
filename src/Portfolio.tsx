import { useState, useEffect } from 'react';
import './index.css';
import WhatsAppButton from './WhatsAppButton';
import { Youtube, Github, Menu, X, ArrowRight, Briefcase, Code, BookOpen, Mail, User, ExternalLink } from 'lucide-react';

const Portfolio = () => {
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
            <a href="#about" className="block hover:text-yellow-400 transition-all duration-300">About</a>
            <a href="#skills" className="block hover:text-yellow-400 transition-all duration-300">Skills</a>
            <a href="#projects" className="block hover:text-yellow-400 transition-all duration-300">Projects</a>
            <a href="#experience" className="block hover:text-yellow-400 transition-all duration-300">Experience</a>
            <a href="#contact" className="block hover:text-yellow-400 transition-all duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-8 pb-16 max-w-4xl mx-auto min-h-screen flex items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="bg-yellow-400 inline-block px-4 py-2 transform -rotate-1">
              <h1 className="text-4xl md:text-6xl font-bold">Hey, I'm<br />Rashid Okama.</h1>
            </div>
            
            <div className="bg-yellow-400 inline-block px-4 py-2 transform rotate-1">
              <p className="text-2xl md:text-4xl font-bold">
              Empowering Businesses with Cutting-Edge Tech Solutions  
              </p>
            </div>
          </div>

          <div className="space-y-4 text-lg">
            <p>I’m a <span className="underline decoration-yellow-400">Software Developer</span> and <span className="underline decoration-yellow-400">IoT Enthusiast</span> based in Tanzania 🇹🇿.</p>
            
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
      </section>

     {/* About Section */}
     <section className="px-8 py-16 max-w-4xl mx-auto" id="about">
        <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform -rotate-1 hover:rotate-2 transition-all duration-300">
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

      {/* Skills Section */}
      <section className="px-8 py-16 bg-black text-white" id="skills">
  <div className="max-w-4xl mx-auto">
    <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform -rotate-1 hover:rotate-2 transition-all duration-300">
      <Code className="inline-block mr-2" /> Technical Skills
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(skills).map(([category, skillList]) => (
        <div
          key={category}
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
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Section */}
<section className="px-8 py-16" id="projects">
  <div className="max-w-4xl mx-auto">
    <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform -rotate-1 hover:rotate-2 transition-all duration-300">
      <Briefcase className="inline-block mr-2" /> Featured Projects
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Render up to 4 projects for mobile and up to 6 for desktop */}
      {projects.slice(0, 6).map((project, index) => (
        <div
          key={index}
          className={`group backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-gray-200 hover:border-yellow-400 transition-all duration-300 ${
            index >= 4 ? 'hidden md:block' : ''
          }`}
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

          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
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

    {/* View More Projects Button */}
    <div className="mt-8 text-center">
      <a
        href="/projects"
        className="bg-black text-white px-6 py-3 rounded flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
      >
        View More Projects
      </a>
    </div>
  </div>
</section>


      {/* Experience Section */}
      <section className="px-8 py-16 bg-black text-white" id="experience">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform -rotate-1 hover:rotate-2 transition-all duration-300">
            <BookOpen className="inline-block mr-2" /> Work Experience
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-1">{job.position}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-yellow-400">{job.company}</span>
                  <span className="text-sm text-gray-400">{job.period}</span>
                </div>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-8 text-xl font-bold transform -rotate-1 hover:rotate-2 transition-all duration-300">
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
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber="+1234567890" message="Hi, I need more information!" />

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
