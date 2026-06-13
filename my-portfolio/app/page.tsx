"use client";

import React, { useEffect, useState } from 'react';
import {
  Mail, ExternalLink, GraduationCap, Award, BookOpen,
  Briefcase, HeartHandshake, Code, Layout, Send, Download,
  Menu, X, Layers, User, ChevronDown, ChevronUp, FileText, CheckCircle
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- TYPING EFFECT STATES ---
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // --- CERTIFICATES STATES ---
  const [activeTab, setActiveTab] = useState('research'); // research | ai | web
  const [expandedSpecialization, setExpandedSpecialization] = useState<string | null>(null);

  // --- TYPING EFFECT LOGIC ---
  useEffect(() => {
    const titles = ["AI Engineer", "AI Researcher", "ML Engineer", "Software Developer", "Deep Learning Engineer"];
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  useEffect(() => setMounted(true), []);

  const skills = {
    Languages: ["C++", "Java", "Python", "SQL", "JavaScript", "HTML", "CSS", "Kotlin"],
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
      role: "WordPress Developer Intern",
      company: "Students Empowered Oasis",
      date: "Jul 2024 – Sep 2024",
      points: [
        "Built and managed WordPress websites using pre-built themes and standard tools.",
        "Customized pages, layouts, and content, ensuring responsive design and user-friendly interfaces.",
        "Utilized existing plugins to implement features and gained hands-on experience in practical workflows."
      ]
    }
  ];

  const volunteership = [
    {
      role: "Executive Committee Member",
      company: "Computer Science Society, Sukkur IBA",
      date: "Oct 2025 – May 2026",
      points: ["Participated in planning academic events, managing logistics, and collaborating to increase student engagement in computing activities."]
    },
    {
      role: "Web Developer",
      company: "Students Empowered Oasis",
      date: "Sep 2024 – Apr 2026",
      points: [
        "Managed platforms for event content, created quizzes, and published newsletters.",
        "Designed registration forms and ensured smooth content management across platforms."
      ]
    },
    {
      role: "Active Member",
      company: "SIBA Tech Club, Sukkur IBA",
      date: "Dec 2024 – May 2026",
      points: ["Contributed to organizing technical events, hackathons, and volunteered for TechThon operations."]
    }
  ];

  const projects = [
    {
      title: "NeuroEmotion",
      desc: "An EEG-based affective computing platform for real-time emotion prediction featuring two distinct modules: one for processing EEG brainwave signals and another for analyzing facial expressions.",
      tech: ["Deep Learning", "Flutter", "Flask"],
      src: "/neuroemotion.png",
      link: "https://github.com/NeuroEmotion"
    },
    {
      title: "Ocular Disease Detection",
      desc: "Multi-label image classification platform evaluating ResNet50, VGG16, and EfficientNet-B3 architectures on the ODIR dataset to accurately screen retinal fundus samples for 8 pathologies simultaneously.",
      tech: ["PyTorch", "Computer Vision", "ResNet", "EfficientNet"],
      src: "/ocular.png",
      link: "https://github.com/KashishTheCoder/ocular-disease-detection.git"
    },
    {
      title: "Bespoke Threads",
      desc: "A sleek mobile application marketplace tailored for custom handcrafted clothing and styling accessories.",
      tech: ["Kotlin", "Android SDK", "Firebase"],
      src: "/bespoke.png",
      link: "https://github.com/KashishTheCoder/bespoke-threads-android.git"
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
      link: "https://github.com/KaranTejwani/GestureDetection.git"
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

  // --- CERTIFICATE DATA STRUCTURES ---
  const academicCerts = [
    {
      title: "Certificate of Authorship - 5th iCoMET 2026",
      issuer: "International Conference on Computing, Mathematics, Engineering, and Technology",
      date: "May 2026",
      image: "/certificates/images/iCoMETAuthor.png",
      pdf: "/certificates/pdfs/iCoMETAuthor.pdf", // If you decide to map PDF later
      verifyUrl: "https://www.linkedin.com/posts/kashish-aienthusiast_research-academicconference-icomet2026-ugcPost-7470600511277387776-Xy_h/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4",
      skills: ["Academic Writing", "AI Research", "Explainable AI"]
    },
    {
      title: "Certificate of Presenter - 5th iCoMET 2026",
      issuer: "International Conference on Computing, Mathematics, Engineering, and Technology",
      date: "May 2026",
      image: "/certificates/images/iCoMETPresenter.png",
      pdf: "/certificates/pdfs/iCoMETPresenter.pdf",
      verifyUrl: "https://www.linkedin.com/posts/kashish-aienthusiast_research-academicconference-icomet2026-ugcPost-7470600511277387776-Xy_h/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4",
      skills: ["Public Speaking", "Research Presentation", "Safety-Aware Prompting"]
    },
    {
      title: "SibaFest Speed Programming Winner",
      issuer: "Sukkur IBA University",
      date: "September 2024",
      image: "/certificates/images/sibafest.jpg",
      pdf: "/certificates/pdfs/sibafest.pdf",
      verifyUrl: "https://www.linkedin.com/posts/kashish-aienthusiast_sibafest-techinnovation-codingchallenge-activity-7237497602684973058-bT7r?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4",
      skills: ["Competitive Programming", "Data Structures", "Algorithms"],
      highlight: true
    }
  ];

  const aiSpecializations = [
    {
      id: "google-ai",
      title: "Google AI Essentials Specialization",
      issuer: "Google (via Coursera)",
      date: "May 2026",
      pdf: "/certificates/pdfs/GoogleAIEssentialsSpecializationKashish.pdf",
      verifyUrl: "https://coursera.org/share/eebe4939edfdbd15099f77847d86705d",
      skills: ["Generative AI", "AI Productivity Tools", "Responsible AI"],
      isSpecialization: true,
      courses: [
        { title: "Introduction to AI", file: "KashishAICourse1.pdf", url: "https://coursera.org/share/8db6391450264901c2e8d31423daad89" },
        { title: "Maximize Productivity with AI Tools", file: "KashishAICourse2.pdf", url: "https://coursera.org/share/8bc47af7d1dedf18c81daa0cd8a44cb4" },
        { title: "Discover the Art of Prompting", file: "KashishAICourse3.pdf", url: "https://coursera.org/share/4d71abd5bee98964830b36dac1b4f3b7" },
        { title: "Use AI Responsibly", file: "KashishAICourse4.pdf", url: "https://coursera.org/share/fda1d4c688e28f9598f224a6e6bd9082" },
        { title: "Stay Ahead of the AI Curve", file: "KashishAICourse5.pdf", url: "https://coursera.org/share/f36b04deebca0732393888952b0c3ce5" }
      ]
    },
    {
      id: "google-prompting",
      title: "Google Prompting Essentials Specialization",
      issuer: "Google (via Coursera)",
      date: "June 2026",
      pdf: "/certificates/pdfs/GooglePromptingEssentialsSpecializationKashish.pdf",
      verifyUrl: "https://coursera.org/share/e4688e9df6561c8ea3298a51d95f3fdc",
      skills: ["Advanced Prompt Engineering", "Data Analysis Automation", "Workflow Optimization"],
      isSpecialization: true,
      courses: [
        { title: "Start Writing Prompts like a Pro", file: "KashishPromptingCourse1.pdf", url: "https://coursera.org/share/e834d4abd7b0737cca08936bab40c295" },
        { title: "Use AI as a Creative or Expert Partner", file: "KashishPromptingCourse2.pdf", url: "https://coursera.org/share/7ed38e61974ad59ee3b9b99e8eaa863c" },
        { title: "Design Prompts for Everyday Work Tasks", file: "KashishPromptingCourse3.pdf", url: "https://coursera.org/share/56ae90a197adb4b5a9785320f2608cc3" },
        { title: "Speed Up Data Analysis and Presentation Building", file: "KashishPromptingCourse4.pdf", url: "https://coursera.org/share/1f4f7815ed6085b444e8ac41fd0865ef" }
      ]
    },
    {
      id: "ai-for-everyone",
      title: "AI for Everyone",
      issuer: "DeepLearning.AI (Coursera) — Taught by Andrew Ng",
      date: "January 2025",
      pdf: "/certificates/pdfs/KashishAIForEveryoneAndrewNg.pdf",
      verifyUrl: "https://coursera.org/share/4eedcff9b22a012a3e7031c9b6233855",
      skills: ["AI Strategy", "Machine Learning Workflows", "Organizational Transformation"],
      isSpecialization: false
    },
    {
      id: "meta-python",
      title: "Programming in Python",
      issuer: "Meta (via Coursera)",
      date: "April 2025",
      pdf: "/certificates/pdfs/KashishMetaPython.pdf",
      verifyUrl: "https://coursera.org/share/223f9b993131beb941e7f6637b3ac605",
      skills: ["Object-Oriented Python", "Data Processing", "Scripting & Testing"],
      isSpecialization: false
    }
  ];

  const webEngineeringCerts = [
    {
      title: "JavaScript Essential Training",
      issuer: "LinkedIn Learning",
      date: "June 2024",
      image: "/certificates/images/js-essential-training.jpg",
      pdf: "/certificates/pdfs/js-essential-training.pdf",
      verifyUrl: "https://www.linkedin.com/learning/certificates/6024ed474429b1fba8c910073021d91a510de17ea671e8115e84c05112c14f8b",
      skills: ["ES6+", "DOM Manipulation", "Asynchronous JavaScript"]
    },
    {
      title: "JavaScript Practice: Object-Oriented Programming",
      issuer: "LinkedIn Learning",
      date: "June 2024",
      image: "/certificates/images/js-oop.jpg",
      pdf: "/certificates/pdfs/js-oop.pdf",
      verifyUrl: "https://www.linkedin.com/learning/certificates/3a534547b6d05dbd363f610762013528e9a7a0d554df005ce55bf223fa69a061?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BUeIaBuHtSpC7k%2FYtR7E7Yw%3D%3D",
      skills: ["OOP Design Patterns", "Classes", "Prototypal Inheritance"]
    },
    {
      title: "JavaScript as a Second Language",
      issuer: "LinkedIn Learning",
      date: "July 2024",
      image: "/certificates/images/js-second-language.jpg",
      pdf: "/certificates/pdfs/js-second-language.pdf",
      verifyUrl: "https://www.linkedin.com/learning/certificates/3f4e91dfeb9ad7a59a69439a461bfb2bc7fce558f3a6979639f4311e7ab6da51?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BEisz5lELTWqjZc0WdwPDzA%3D%3D",
      skills: ["Problem Solving", "Logic Optimization", "Clean Code Architecture"]
    },
    {
      title: "Level Up: JavaScript",
      issuer: "LinkedIn Learning",
      date: "July 2024",
      image: "/certificates/images/level-up-js.jpg",
      pdf: "/certificates/pdfs/level-up-js.pdf",
      verifyUrl: "https://www.linkedin.com/learning/certificates/9680b936c99a5cfee22ea553a7ad26f94c405335b82915fdecf6e91c9590458c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BUeIaBuHtSpC7k%2FYtR7E7Yw%3D%3D",
      skills: ["Advanced Paradigms", "Performance Tuning", "Functional JS"]
    },
    {
      title: "Web Development with WordPress",
      issuer: "Educate Sindh",
      date: "September 2024",
      image: "/certificates/images/wordpress.jpg",
      pdf: "/certificates/pdfs/wordpress.pdf",
      verifyUrl: "https://www.linkedin.com/posts/kashish-aienthusiast_wordpress-webdevelopment-educatesindh-activity-7237525211988819969-vLzt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4",
      skills: ["CMS Design", "Theme Engineering", "Platform Deployment"]
    },
    {
      title: "Web Development with HTML & CSS",
      issuer: "Educate Sindh",
      date: "September 2024",
      image: "/certificates/images/html-css.jpg",
      pdf: "/certificates/pdfs/html-css.pdf",
      verifyUrl: "https://www.linkedin.com/posts/kashish-aienthusiast_webdevelopment-html-css-activity-7237521336808439808-6tsc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4",
      skills: ["Responsive UI Layouts", "CSS Grid/Flexbox", "Semantic Coding"]
    }
  ];

  const toggleSpecialization = (id: string) => {
    setExpandedSpecialization(expandedSpecialization === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1128] via-slate-950 to-[#0a1128] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">

      <style dangerouslySetInnerHTML={{
        __html: `
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
            <a href="#credentials" className="hover:text-blue-400 transition">Credentials</a>
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
            <a href="#credentials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Credentials</a>
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
              <a href="mailto:kashishbasreja.fss22@gmail.com" className="p-3 bg-transparent rounded-xl border border-white/20 transition text-white hover:border-blue-500 hover:text-blue-400"><Mail size={22} /></a>
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

          {/* About Me Title */}
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
            <User size={32} className="text-blue-500" /> About Me
          </h3>

          {/* Narrative Copy */}
          <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed relative z-10">
            <p>
              I’m a recent Computer Science graduate from Sukkur IBA University, specializing in AI, machine learning, and software development. For me, tech isn't just about writing code; it’s about finding smart ways to solve real-world problems.
            </p>
            <p>
              During my time at university, I focused heavily on building practical systems and diving into AI research. Some of my defining work includes:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-2 items-start">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>NeuroEmotion:</strong> For my Final Year Project, I developed a bimodal emotion recognition system featuring two distinct modules: one that analyzes human emotional states using EEG brainwave signals, and another that processes facial expressions.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>AI Research:</strong> I recently presented my paper, <em>"Reducing Unsafe Mental Health Advice in LLMs Using Safety-Aware Prompting,"</em> at the <strong>iCoMET 2026</strong> conference, focusing on making large language models safer and more reliable.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Software & Mobile Development:</strong> Alongside AI, I love building complete products. I developed <em>Bespoke Threads</em>, a Kotlin-based mobile marketplace for customized clothing, and built deep learning models (using PyTorch and ResNet) for multi-label medical image classification.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Industry Experience:</strong> I gained hands-on development experience through internships at SEPCO and Students Empowered Oasis, which taught me how to deliver real solutions on a timeline.</span>
              </li>
            </ul>
            <p>
              Outside of classes, I spent a lot of time giving back to the campus community. Serving as an executive member of the Computer Science Society and being part of the SIBA Tech Club allowed me to organize events, mentor peers, and help build a strong tech culture on campus.
            </p>
            <p>
              Now that I've wrapped up my final exams, I am actively looking for full-time opportunities as an <strong>AI Engineer, Machine Learning Engineer, or Software Developer</strong>. I'm eager to join a team where I can keep learning, writing clean code, and building intelligent systems.
            </p>
            <p className="font-medium text-slate-200 pt-2">
              Let’s connect! Feel free to reach out here on LinkedIn or drop me a line via email at <a href="mailto:kashishbasreja.fss22@gmail.com" className="text-blue-400 hover:underline">kashishbasreja.fss22@gmail.com</a> to talk about open roles, collaborations, or anything tech-related.
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
            Presented - iCoMET 2026
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
        <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Layers size={32} className="text-blue-500" /> Tech Stack</h3>
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
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Briefcase size={32} className="text-blue-500" /> Experience</h3>
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
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><HeartHandshake size={32} className="text-emerald-500" /> Volunteership</h3>
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
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3"><Layout size={32} className="text-blue-500" /> Featured Projects</h3>
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

      {/* --- NEW CREDENTIALS & CERTIFICATIONS SECTION --- */}
      <section id="credentials" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <CheckCircle size={32} className="text-blue-500" /> Professional Credentials
            </h3>
            <p className="text-sm text-slate-400 mt-2">Verified courses, engineering tracks, and academic conference accomplishments.</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-slate-900 p-1 rounded-xl border border-white/10 w-full md:w-auto overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => setActiveTab('research')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'research' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Research & Honors
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'ai' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              AI & Machine Learning
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'web' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Web Engineering
            </button>
          </div>
        </div>

        {/* Tab 1: Research & Honors */}
        {activeTab === 'research' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {academicCerts.map((cert, index) => (
              <div key={index} className={`rounded-2xl border bg-white/[0.02] p-5 flex flex-col justify-between transition-all hover:-translate-y-1 ${cert.highlight ? 'border-yellow-500/40 shadow-[0_0_20px_rgba(234,179,8,0.05)]' : 'border-white/10 hover:border-blue-500/40'}`}>
                <div>
                  <div className="h-44 bg-slate-950/60 rounded-xl mb-4 flex items-center justify-center p-2 overflow-hidden border border-white/5">
                    <img src={cert.image} alt={cert.title} className="max-w-full max-h-full object-contain rounded" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base font-bold text-white leading-snug">{cert.title}</h4>
                  </div>
                  <p className="text-xs text-blue-400 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-[11px] text-slate-500 mb-4">{cert.date}</p>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {cert.skills.map(s => <span key={s} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded">{s}</span>)}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a href={cert.verifyUrl} target="_blank" rel="noreferrer" className="px-3 py-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition">
                    <ExternalLink size={12} /> Verify
                  </a>
                  <a href={cert.pdf} download className="px-3 py-2 bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition border border-blue-500/30">
                    <Download size={12} /> PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: AI & Machine Learning Tracks */}
        {activeTab === 'ai' && (
          <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
            {aiSpecializations.map((spec) => (
              <div key={spec.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-blue-500/30">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex gap-3 items-start">
                    <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl mt-1 shrink-0">
                      {spec.isSpecialization ? <Layers size={24} /> : <Code size={24} />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white flex items-center gap-2 flex-wrap">
                        {spec.title}
                        {spec.isSpecialization && <span className="text-[10px] uppercase tracking-widest bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">Specialization</span>}
                      </h4>
                      <p className="text-xs text-blue-400 font-medium mt-0.5">{spec.issuer}</p>
                      <p className="text-[11px] text-slate-500 mt-1">{spec.date}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {spec.skills.map(s => <span key={s} className="text-[10px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">{s}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto shrink-0 sm:mt-1">
                    <a href={spec.verifyUrl} target="_blank" rel="noreferrer" className="flex-1 sm:flex-initial px-3 py-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition">
                      <ExternalLink size={12} /> Verify
                    </a>
                    <a href={spec.pdf} download className="flex-1 sm:flex-initial px-3 py-2 bg-blue-600 text-white hover:bg-blue-500 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition shadow-lg shadow-blue-600/10">
                      <Download size={12} /> Full PDF
                    </a>
                    {spec.isSpecialization && (
                      <button
                        onClick={() => toggleSpecialization(spec.id)}
                        className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition"
                      >
                        {expandedSpecialization === spec.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        Courses ({spec.courses?.length})
                      </button>
                    )}
                  </div>
                </div>

                {/* Sub-courses Nested Drawer */}
                {spec.isSpecialization && expandedSpecialization === spec.id && (
                  <div className="mt-6 pt-6 border-t border-white/5 bg-black/20 rounded-xl p-4 space-y-3 animate-slideDown">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Curriculum Certificates Included:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {spec.courses?.map((course, cIdx) => (
                        <div key={cIdx} className="flex justify-between items-center bg-slate-900/80 p-3 rounded-lg border border-white/5 hover:border-slate-700 transition">
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <FileText size={14} className="text-slate-500 shrink-0" />
                            <span className="text-xs text-slate-300 font-medium truncate pr-2">{course.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <a href={course.url} target="_blank" rel="noreferrer" className="p-1.5 text-slate-400 hover:text-blue-400 transition" title="Verify Online"><ExternalLink size={12} /></a>
                            <a href={`/certificates/pdfs/${course.file}`} download className="p-1.5 text-slate-400 hover:text-white transition" title="Download Certificate"><Download size={12} /></a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Web Engineering & Core Skills */}
        {activeTab === 'web' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {webEngineeringCerts.map((cert, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-blue-500/40">
                <div>
                  <div className="h-44 bg-slate-950/60 rounded-xl mb-4 flex items-center justify-center p-2 overflow-hidden border border-white/5">
                    <img src={cert.image} alt={cert.title} className="max-w-full max-h-full object-contain rounded" />
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug mb-1">{cert.title}</h4>
                  <p className="text-xs text-blue-400 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-[11px] text-slate-500 mb-4">{cert.date}</p>
                  <div className="flex flex-wrap gap-1 mb-6">
                    {cert.skills.map(s => <span key={s} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded">{s}</span>)}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a href={cert.verifyUrl} target="_blank" rel="noreferrer" className="px-3 py-2 bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition">
                    <ExternalLink size={12} /> Verify
                  </a>
                  <a href={cert.pdf} download className="px-3 py-2 bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 transition border border-blue-500/30">
                    <Download size={12} /> PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3"><Award size={32} className="text-yellow-500" /> Awards & Achievements</h3>
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
                    <Mail size={20} />
                  </div>
                  kashishbasreja.fss22@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/kashish-aienthusiast" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition">
                    <FaLinkedin size={20} />
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