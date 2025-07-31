import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Palette, Users, Award, GraduationCap, Briefcase, ChevronDown, Menu, X } from 'lucide-react';
import Image from './portfolio.jpeg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    programming: ['Python', 'SQL'],
    web: ['HTML', 'CSS', 'React.js'],
    design: ['UI/UX Design', 'Tableau'],
    tools: ['Git', 'GitHub', 'MS Excel', 'MS Word', 'PowerPoint', 'Visual Studio Code', 'Figma']
  };

  const projects = [
    {
      title: "Food Court Website",
      period: "May 2024 – June 2024",
      type: "UI/UX Design and Front-End Project",
      technologies: ["Figma", "HTML", "CSS", "React.js"],
      description: [
        "Designed user-friendly and responsive UI prototypes for a food ordering system using Figma",
        "Collaborated in front-end development using React.js and implemented the designed UI",
        "Developed admin panel screens for menu management and order tracking"
      ],
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Student Performance Data Visualization",
      period: "Oct 2024 – Nov 2024",
      type: "Data Analytics Project",
      technologies: ["Tableau", "Excel"],
      description: [
        "Cleaned and prepared student performance datasets using Excel for analysis",
        "Built interactive dashboards and visualizations in Tableau",
        "Enabled academic insights through charts and visual themes"
      ],
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Smart Crop Advisor Front-End",
      period: "Feb 2024 – April 2024",
      type: "Agri-Tech Web Application",
      technologies: ["HTML", "CSS", "React.js"],
      description: [
        "Designed and developed the front-end for a Smart Crop Advisor tool using React.js",
        "Created user input interface to collect state and season selections",
        "Displayed top 5 high-yield crops dynamically with an intuitive and responsive UI"
      ],
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Rajiv Gandhi University of Knowledge Technologies (IIIT Nuzvid)",
      location: "Nuzvid, Andhra Pradesh",
      period: "Aug 2021 – May 2025"
    },
    {
      degree: "Pre-University Course (Maths, Physics, Chemistry)",
      institution: "Rajiv Gandhi University of Knowledge Technologies (PUC Campus)",
      location: "Nuzvid, Andhra Pradesh",
      period: "Aug 2019 – May 2021"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "MZPHS Velangi",
      location: "Kakinada, Andhra Pradesh",
      period: "June 2018 – May 2019"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vijayadurga
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg ${
                    activeSection === section 
                      ? 'text-blue-600 font-semibold bg-blue-50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white/95">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-4 capitalize text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-8 mt-20 p-3 bg-white rounded-full shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-100">
                <img 
                  src={Image} 
                  alt="Vijayadurga Pothallanka" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Vijayadurga
              </span>
              <br />
              <span className="text-gray-800">Pothallanka</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Computer Science Student & Aspiring Developer passionate about creating innovative solutions through technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="mailto:pvijayadurga2003@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/vijayadurga"
                  className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} className="text-blue-600 group-hover:text-blue-700" />
                </a>
                <a
                  href="https://github.com/Pvijayadurga"
                  className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} className="text-gray-800 group-hover:text-gray-900" />
                </a>
              </div>
            </div>
            
            <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
              <ChevronDown size={32} className="text-gray-400 mx-auto hover:text-gray-600 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-10 rounded-3xl shadow-lg border border-blue-100/50">
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                    I am adaptable, attentive, and eager to acquire new skills. I value combining different knowledge areas and am looking for an exciting role in a company that's always moving forward.
                  </p>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                    I want to use my creativity and ability to come up with new ideas. I'm ready to work hard, be reliable, motivate others, and contribute to the company's success.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="p-2 bg-blue-100 rounded-xl">
                        <Phone size={20} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-semibold text-lg">9652481106</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="p-2 bg-blue-100 rounded-xl">
                        <Mail size={20} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-semibold text-lg">pvijayadurga2003@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500 rounded-2xl shadow-lg">
                      <Users className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800">Leadership Experience</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">UG Admissions Coordinator at IIIT Nuzvid, managing teams and overseeing admission processes.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-500 rounded-2xl shadow-lg">
                      <Award className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800">NCC Training</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">Completed NCC training with focus on discipline, leadership, and national service (2020-2023).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
                    <Code className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800">Programming</h3>
                </div>
                <div className="space-y-3">
                  {skills.programming.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-3 rounded-2xl text-sm font-semibold hover:from-blue-100 hover:to-blue-200 transition-all cursor-default shadow-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300 shadow-lg">
                    <ExternalLink className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800">Web Technologies</h3>
                </div>
                <div className="space-y-3">
                  {skills.web.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-4 py-3 rounded-2xl text-sm font-semibold hover:from-green-100 hover:to-green-200 transition-all cursor-default shadow-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300 shadow-lg">
                    <Palette className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800">Design & Analytics</h3>
                </div>
                <div className="space-y-3">
                  {skills.design.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 px-4 py-3 rounded-2xl text-sm font-semibold hover:from-purple-100 hover:to-purple-200 transition-all cursor-default shadow-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 shadow-lg">
                    <Database className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800">Tools</h3>
                </div>
                <div className="space-y-3">
                  {skills.tools.slice(0, 4).map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 px-4 py-3 rounded-2xl text-sm font-semibold hover:from-orange-100 hover:to-orange-200 transition-all cursor-default shadow-sm">
                      {skill}
                    </div>
                  ))}
                  <div className="text-gray-500 text-sm font-semibold bg-gray-50 px-4 py-3 rounded-2xl">+{skills.tools.length - 4} more tools</div>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 bg-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-100">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-lg">
                  <Award className="text-white" size={28} />
                </div>
                <span className="font-bold text-gray-800 text-lg lg:text-xl">SQL (Basic) Certified - HackerRank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="space-y-8 lg:space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 group border border-gray-100">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:h-3 transition-all duration-300`}></div>
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-0 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <span className="text-gray-500 font-semibold bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                          {project.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {project.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-2xl text-sm font-semibold hover:from-gray-200 hover:to-gray-300 transition-all cursor-default border border-gray-300 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid gap-4">
                      {project.description.map((desc, descIndex) => (
                        <div key={descIndex} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <p className="text-gray-700 leading-relaxed font-medium">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${isVisible.education ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-200 transition-colors">
                      <GraduationCap className="text-blue-600" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2 text-lg">{edu.institution}</p>
                      <p className="text-gray-600 mb-2 font-medium">{edu.location}</p>
                      <p className="text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-full inline-block">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl lg:text-2xl mb-16 opacity-90 max-w-3xl mx-auto font-medium leading-relaxed">
              Ready to work hard, be reliable, and contribute to your company's success
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              <a
                href="tel:9652481106"
                className="flex flex-col items-center gap-6 bg-white/10 backdrop-blur-md p-8 lg:p-10 rounded-3xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-3 group border border-white/20 shadow-2xl"
              >
                <div className="p-4 bg-white/20 rounded-3xl group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                  <Phone size={32} />
                </div>
                <span className="font-bold text-lg lg:text-xl">9652481106</span>
              </a>
              
              <a
                href="mailto:pvijayadurga2003@gmail.com"
                className="flex flex-col items-center gap-6 bg-white/10 backdrop-blur-md p-8 lg:p-10 rounded-3xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-3 group border border-white/20 shadow-2xl"
              >
                <div className="p-4 bg-white/20 rounded-3xl group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                  <Mail size={32} />
                </div>
                <span className="font-bold text-lg lg:text-xl">pvijayadurga2003@gmail.com</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/vijayadurga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-6 bg-white/10 backdrop-blur-md p-8 lg:p-10 rounded-3xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-3 group border border-white/20 shadow-2xl sm:col-span-2 lg:col-span-1"
              >
                <div className="p-4 bg-white/20 rounded-3xl group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                  <Linkedin size={32} />
                </div>
                <span className="font-bold text-lg lg:text-xl">LinkedIn Profile</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://github.com/Pvijayadurga"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg"
              >
                <Github size={24} />
                View GitHub
              </a>
              <a
                href="mailto:pvijayadurga2003@gmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Vijayadurga Pothallanka. Built with React and passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;