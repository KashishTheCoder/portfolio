"use client";

import React, { useEffect, useState } from 'react';
import { 
  Mail, ExternalLink, GraduationCap, Award, BookOpen, 
  Briefcase, HeartHandshake, Code, Layout, Send, Download, 
  Menu, X, Layers, User 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- TYPING EFFECT STATES ---
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // --- TYPING EFFECT LOGIC ---
  useEffect(() => {
    const titles = ["AI Researcher", "Web Developer", "AI/ML Engineer", "WordPress Developer", "Deep Learning Engineer"];
    const typeSpeed = isDeleting ? 50 : 100; // 50ms for deleting, 100ms for typing
    const currentFullText = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        // Pause at the end of the word before starting to delete
        setTimeout(() => setIsDeleting(true), 1500); 
      } else if (isDeleting && currentText === '') {
        // Move to the next word once fully deleted
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        // Add or remove a character
        setCurrentText(currentFullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  useEffect(() => setMounted(true), []);

  const skills = {
    Languages: ["C++", "Java", "Python", "SQL", "JavaScript", "HTML", "CSS"],
    Frameworks: ["React", "Node.js", "Express.js", "Flask", "Flutter", "NumPy", "Pandas", "Keras", "OpenCV", "TensorFlow", "PyTorch"],
    Tools: ["Git", "GitHub", "Linux", "MongoDB", "VS Code", "IntelliJ IDEA", "PyCharm", "Canva", "WordPress"]
  };

  const experience = [
    {
      role: "Web Development Intern",
      company: "Sukkur Electric Power Company (SEPCO)",
      date: "Jun 2025 – Jul 2025",
      points: [
        "Developed and maintained responsive web pages to improve user accessibility and experience.",
        "Collaborated with team members to implement website features and optimize performance.",
        "Assisted in troubleshooting, debugging, and resolving technical issues in a real-world organizational environment."
      ]
    },
    {
      role: "WordPress Developer",
      company: "Students Empowered Oasis",
      date: "Jul 2024 – Aug 2024",
      points: [
        "Built and managed WordPress websites using pre-built themes and standard tools.",
        "Customized pages, layouts, and content, ensuring responsive design and user-friendly interfaces.",
        "Utilized existing plugins to implement features and gained hands-on experience in practical workflows."
      ]
    }
  ];

  const volunteership = [
    {
      role: "Executive Member",
      company: "Computer Science Society, Sukkur IBA",
      date: "Oct 2025 – Present",
      points: ["Participating in planning academic events and collaborating to increase student engagement in computing activities."]
    },
    {
      role: "Web Developer",
      company: "Students Empowered Oasis",
      date: "Sep 2024 – Present",
      points: [
        "Managed platforms for event content, created quizzes, and published newsletters.",
        "Designed registration forms and ensured smooth content management across platforms."
      ]
    },
    {
      role: "Active Member",
      company: "SIBA Tech Club, Sukkur IBA",
      date: "Dec 2024 – Aug 2025",
      points: ["Contributed to organizing technical events, hackathons, and volunteered for TechThon operations."]
    }
  ];

  const projects = [
    {
      title: "NeuroEmotion",
      desc: "EEG-based affective computing platform for real-time multi-user emotion prediction.",
      tech: ["Deep Learning", "Flutter", "Flask"],
      src: "/neuroemotion.png",
      link: "https://github.com/NeuroEmotion"
    },
    {
      title: "MathTutor AI",
      desc: "AI system designed for step-by-step mathematical reasoning using LLM fine-tuning (LoRA) and custom evaluation metrics.",
      tech: ["Python", "LLMs", "NLP", "Regex"],
      src: "/mathtutor-ai.png",
      link: "https://github.com/umarprivit/math-tutor"
    },
    {
      title: "Healr",
      desc: "Full-stack MERN healthcare platform streamlining communication between Doctors, Patients, and Admins with secure routing.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      src: "/healr.png",
      link: "https://github.com/KaranTejwani/Healr"
    },
    {
      title: "AI Sign Language Interpreter",
      desc: "Real-time gesture recognition (ASL, BSL, ISL) using computer vision and 5 custom-trained CNN models with 90%+ accuracy.",
      tech: ["OpenCV", "MediaPipe", "CNN", "gTTS"],
      src: "/gesture.png",
      link: "https://github.com/KashishTheCoder"
    },
    {
      title: "Content Management System",
      desc: "University CMS with role-based access for students, instructors, and admins.",
      tech: ["Java", "MySQL"],
      src: "/cms.png",
      link: "https://github.com/KashishTheCoder/ContentManagementSystem"
    },
    {
      title: "Snake Safari",
      desc: "Desktop version of the classic Nokia snake game with rich graphics and database integration.",
      tech: ["Java Swing", "Java AWT", "MySQL"],
      src: "/snakesafari.png",
      link: "https://github.com/KashishTheCoder/SnakeSafari"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1128] via-slate-950 to-[#0a1128] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        .particle {
          position: absolute;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.25);
          animation: float linear infinite;
          filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.3));
        }
        .triangle {
          width: 0; height: 0;
          background: transparent;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 25px solid rgba(14, 165, 233, 0.1);
          border-top: none;
        }
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-20vh) rotate(360deg) scale(1.5); opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.5)); }
          50% { opacity: 0.7; filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.2)); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/90 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <a href="#home" className="text-xl font-bold tracking-wider text-white">
            KASHISH<span className="text-blue-500">.DEV</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#research" className="hover:text-blue-400 transition">Research</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#achievements" className="hover:text-blue-400 transition">Achievements</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/10 flex flex-col items-center py-6 space-y-6 shadow-2xl backdrop-blur-lg">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">About</a>
            <a href="#research" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Research</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Skills</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Projects</a>
            <a href="#achievements" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Achievements</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition text-blue-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section (Home) */}
      <section id="home" className="relative pt-24 pb-12 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 min-h-[90vh] lg:min-h-screen">
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
             {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className={i % 2 === 0 ? "particle rounded-sm" : "particle triangle"}
                  style={{
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 30 + 10}px`,
                    height: i % 2 === 0 ? `${Math.random() * 30 + 10}px` : '0',
                    animationDuration: `${Math.random() * 10 + 15}s`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
             ))}
          </div>
        )}

        {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left z-10 max-w-3xl">
            <h2 className="text-xl md:text-3xl text-slate-400 font-medium tracking-wide mt-12 md:mt-0">Hello, This is</h2>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tight text-white leading-none">
              Kashish
            </h1>
            
            {/* Animated Typing Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white pt-2 min-h-[40px] md:min-h-[48px] lg:min-h-[60px]">
              And I&apos;m a{currentText.match(/^[AEIOU]/) ? 'n' : ''} <span className="text-blue-500">{currentText}</span>
              <span className="text-blue-500 animate-pulse font-light ml-1">|</span>
            </h3>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-4">
              Building at the intersection of Deep Learning, Explainable AI, and real-world software architecture.
            </p>
          
          <div className="flex flex-col gap-5 pt-4 items-center lg:items-start">
            <div className="flex gap-4">
              <a href="https://github.com/KashishTheCoder" target="_blank" rel="noreferrer" className="p-3 bg-transparent rounded-xl border border-white/20 transition text-white hover:border-blue-500 hover:text-blue-400"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/kashish-aienthusiast" target="_blank" rel="noreferrer" className="p-3 bg-transparent rounded-xl border border-white/20 transition text-white hover:border-blue-500 hover:text-blue-400"><FaLinkedin size={22} /></a>
              <a href="mailto:kashishbasreja.fss22@gmail.com" className="p-3 bg-transparent rounded-xl border border-white/20 transition text-white hover:border-blue-500 hover:text-blue-400"><Mail size={22}/></a>
            </div>
            <a 
              href="/cv.pdf" 
              download="Kashish_CV.pdf"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 hover:-translate-y-1 w-max"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full max-w-[250px] md:max-w-[320px] shrink-0 z-10 relative flex items-center justify-center mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
          <img 
            src="/me.jpg" 
            alt="Kashish" 
            className="w-full aspect-square object-cover rounded-3xl border border-white/10 shadow-2xl transition-transform hover:scale-105 duration-500 ease-in-out relative z-10 bg-slate-900" 
          />
        </div>
      </section>

      {/* Detailed About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-24">
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
            <User size={32} className="text-blue-500"/> About Me
          </h3>
          
          <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed relative z-10">
            <p>
              I am a Final Year Computer Science student with a strong passion for Artificial Intelligence, Machine Learning, and building intelligent, real-world solutions. Throughout my academic journey, I have developed a solid foundation in programming and problem-solving, working with technologies such as Python, C++, Java, and MySQL. My interest in AI and research has led me to explore advanced domains, and I am currently working on an EEG-based Emotion Recognition system as part of my Final Year Project, focusing on developing models that interpret human emotions from brain signals.
            </p>
            <p>
              I have gained hands-on experience through internships and projects in both AI/ML and Web Development. I have worked as a Web Developer Intern at SEPCO and as a WordPress Developer Intern, where I built and managed responsive websites using industry-standard tools. Alongside this, I have developed multiple projects in Machine Learning and Deep Learning, strengthening my technical expertise as well as soft skills such as teamwork, communication, and adaptability. I have also contributed to research, and one of my papers has been accepted at the iCoMET research conference, marking an important milestone in my academic journey.
            </p>
            <p>
              Beyond technical work, I actively contribute to student communities as an Active Member of the SIBA Tech Club and an Executive Committee Member of the Computer Science Society. Through these roles, I have participated in organizing events, supporting technical initiatives, and fostering collaborative learning environments.
            </p>
            <p>
              I am currently seeking internship and entry-level opportunities in AI, Machine Learning, and Software Development, where I can apply my skills, contribute to impactful projects, and continue growing as a developer and researcher. My goal is to build intelligent and scalable systems that solve real-world problems and create meaningful impact.
            </p>
            <p className="font-medium text-slate-200">
              Feel free to connect with me on LinkedIn or reach out via email at <a href="mailto:kashishbasreja.fss22@gmail.com" className="text-blue-400 hover:underline">kashishbasreja.fss22@gmail.com</a> for collaborations, opportunities, or discussions in AI and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 scroll-mt-24">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition shadow-lg">
          <div className="flex items-center gap-3 mb-6 text-blue-400">
            <GraduationCap size={28} />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <h4 className="text-xl font-bold text-white">BS Computer Science</h4>
          <p className="text-slate-400 mb-4">Sukkur IBA University | 2022 — 2026</p>
          <p className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-bold rounded-md mb-4 border border-blue-500/30">
            CGPA: 3.66
          </p>
          <div className="space-y-2">
            <p className="text-sm text-slate-300 font-medium">Key Coursework:</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Design & Analysis of Algorithms, Deep Learning, Natural Language Processing, Web Engineering, Data Structures, Object Oriented Programming.
            </p>
          </div>
        </div>

        {/* Research Publication */}
        <div id="research" className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition shadow-lg">
          <div className="flex items-center gap-3 mb-6 text-purple-400">
            <BookOpen size={28} />
            <h3 className="text-2xl font-bold text-white">Research Publication</h3>
          </div>
          <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider rounded-md mb-4 border border-purple-500/30">
            Accepted - iCoMET 2026
          </div>
          <h4 className="text-lg md:text-xl font-bold text-white leading-snug mb-4">
            "Reducing Unsafe Mental Health Advice in Large Language Models Using Safety-Aware Prompting"
          </h4>
          <p className="text-slate-400 text-sm md:text-base">
            Focuses on enhancing the safety constraints of LLMs to prevent the generation of harmful or inappropriate mental health advice.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="py-16 px-6 max-w-7xl mx-auto scroll-mt-24">
        <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Layers size={32} className="text-blue-500"/> Tech Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition">
              <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm rounded-lg border border-slate-700 hover:border-blue-500/50 hover:text-white transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Volunteership */}
      <section id="experience" className="py-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 scroll-mt-24">
        <div>
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Briefcase size={32} className="text-blue-500"/> Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-slate-800 hover:border-blue-500 transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-[#0a1128]"></div>
                <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                <p className="text-blue-400 font-medium text-sm mb-3">{exp.company} <span className="text-slate-500 mx-2">|</span> {exp.date}</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  {exp.points.map((pt, j) => <li key={j}>• {pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><HeartHandshake size={32} className="text-emerald-500"/> Volunteership</h3>
          <div className="space-y-8">
            {volunteership.map((vol, i) => (
              <div key={i} className="relative pl-8 border-l border-slate-800 hover:border-emerald-500 transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-[#0a1128]"></div>
                <h4 className="text-xl font-bold text-white">{vol.role}</h4>
                <p className="text-emerald-400 font-medium text-sm mb-3">{vol.company} <span className="text-slate-500 mx-2">|</span> {vol.date}</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  {vol.points.map((pt, j) => <li key={j}>• {pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3"><Layout size={32} className="text-blue-500"/> Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all overflow-hidden flex flex-col shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <div className="h-56 w-full bg-slate-900/50 flex items-center justify-center p-4 overflow-hidden relative">
                <img 
                  src={p.src} 
                  alt={p.title} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out drop-shadow-2xl" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-transparent to-black/20">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{p.title}</h4>
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition"><ExternalLink size={20} /></a>
                </div>
                <p className="text-slate-400 text-sm mb-6 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/10">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3"><Award size={32} className="text-yellow-500"/> Awards & Achievements</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col hover:border-yellow-500/50 transition-all">
            <div className="h-48 w-full bg-black/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden p-2 relative">
              <img src="/laptop-award.jpg" alt="Laptop Scheme" className="max-w-full max-h-full object-contain rounded-lg hover:scale-105 transition-transform duration-500 relative z-10" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">PM Youth Laptop Scheme 2023</h4>
            <p className="text-slate-400 text-sm">Secured a laptop based on academic excellence with an incredible CGPA of 3.79.</p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col hover:border-yellow-500/50 transition-all">
            <div className="h-48 w-full bg-black/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden p-2 relative">
              <img src="/best-dev-award.jpg" alt="Best Developer" className="max-w-full max-h-full object-contain rounded-lg hover:scale-105 transition-transform duration-500 relative z-10" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Best Web Developer of the Year</h4>
            <p className="text-slate-400 text-sm">Awarded at Students Empowered Oasis after a year of dedicated volunteering and platform management.</p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 p-6 flex flex-col justify-center text-center hover:border-blue-400/50 transition-all">
            <div className="w-20 h-20 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={40} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Fully Funded Scholarship</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Secured for a 4-year Bachelor&apos;s degree under the prestigious Sindh Talent Hunt Program (STHP) - 2022.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Let&apos;s <span className="text-blue-500">Connect.</span>
              </h3>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                I&apos;m currently open to new opportunities, AI research collaborations, and full-stack development roles. Whether you have a project in mind or just want to say hi, my inbox is always open!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:kashishbasreja.fss22@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition">
                    <Mail size={20}/>
                  </div>
                  kashishbasreja.fss22@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/kashish-aienthusiast" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition">
                    <FaLinkedin size={20}/>
                  </div>
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <form action="https://formspree.io/f/xbdqgqgl" method="POST" className="space-y-6 bg-[#0a1128]/50 p-6 rounded-2xl border border-white/5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-slate-600" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-slate-600" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Your Message</label>
                <textarea name="message" id="message" rows={4} required className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-slate-600 resize-none" placeholder="How can we work together?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10">
        <p className="text-slate-500 font-medium mb-4">Built with Next.js & Tailwind CSS</p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-slate-400">
          <a href="https://github.com/KashishTheCoder" className="hover:text-blue-400 transition">GitHub</a>
          <span className="hidden md:inline">|</span>
          <a href="https://www.linkedin.com/in/kashish-aienthusiast" className="hover:text-blue-400 transition">LinkedIn</a>
          <span className="hidden md:inline">|</span>
          <a href="mailto:kashishbasreja.fss22@gmail.com" className="hover:text-blue-400 transition">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;