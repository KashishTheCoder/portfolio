import React from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, GraduationCap, Award, BookOpen, 
  Briefcase, HeartHandshake, Code, Database, Layout, Terminal, Image as ImageIcon 
} from 'lucide-react';

const Portfolio = () => {
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
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wider text-white">KASHISH<span className="text-blue-500">.DEV</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#achievements" className="hover:text-blue-400 transition">Achievements</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <Code size={16} /> AI Researcher & Full-Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
            Bridging <span className="text-blue-500">AI</span> & <br/> Web Technologies.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Dedicated AI Researcher and Software Engineer specializing in Deep Learning and Affective Computing. 
            Passionate about building intelligent, safe systems—from researching LLM behavior to developing full-stack 
            MERN applications and mobile experiences.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/KashishTheCoder" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-white/10 transition text-white"><Github /></a>
            <a href="https://www.linkedin.com/ai-enthusiast" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-white/10 transition text-white"><Linkedin /></a>
            <a href="mailto:kashishbasreja.fss22@gmail.com" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 border border-white/10 transition text-white"><Mail /></a>
          </div>
        </div>
        <div className="w-64 h-80 md:w-80 md:h-[400px] shrink-0">
          {/* PROFILE IMAGE PLACEHOLDER (Portrait/Rounded Square) */}
          <div className="w-full h-full bg-slate-800 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-slate-500 shadow-2xl shadow-blue-500/10 overflow-hidden">
            <ImageIcon size={48} className="mb-2 opacity-50" />
            <span className="text-sm font-medium">Profile Picture</span>
            <span className="text-xs opacity-50">Portrait Size</span>
            <img src="/me.png" alt="Kashish" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Education & Research */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition">
          <div className="flex items-center gap-3 mb-6 text-blue-400">
            <GraduationCap size={28} />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <h4 className="text-xl font-bold text-white">BS Computer Science</h4>
          <p className="text-slate-400 mb-4">Sukkur IBA University | 2022 — 2026</p>
          <p className="text-blue-400 font-semibold mb-4">CGPA: 3.66</p>
          <div className="space-y-2">
            <p className="text-sm text-slate-300 font-medium">Key Coursework:</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Design & Analysis of Algorithms, Deep Learning, Natural Language Processing, Web Engineering, Data Structures, Object Oriented Programming.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition">
          <div className="flex items-center gap-3 mb-6 text-purple-400">
            <BookOpen size={28} />
            <h3 className="text-2xl font-bold text-white">Research Publication</h3>
          </div>
          <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider rounded-md mb-4 border border-purple-500/30">
            Accepted - iCoMET 2026
          </div>
          <h4 className="text-lg font-bold text-white leading-snug mb-4">
            "Reducing Unsafe Mental Health Advice in Large Language Models Using Safety-Aware Prompting"
          </h4>
          <p className="text-slate-400 text-sm">
            Focuses on enhancing the safety constraints of LLMs to prevent the generation of harmful or inappropriate mental health advice.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Terminal size={32} className="text-blue-500"/> Technical Stack</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Volunteership */}
      <section id="experience" className="py-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><Briefcase size={32} className="text-blue-500"/> Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-slate-800">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-[#050505]"></div>
                <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                <p className="text-blue-400 font-medium text-sm mb-3">{exp.company} <span className="text-slate-500 mx-2">|</span> {exp.date}</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  {exp.points.map((pt, j) => <li key={j}>• {pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteership */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3"><HeartHandshake size={32} className="text-emerald-500"/> Volunteership</h3>
          <div className="space-y-8">
            {volunteership.map((vol, i) => (
              <div key={i} className="relative pl-8 border-l border-slate-800">
                <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 border-4 border-[#050505]"></div>
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

      {/* Projects Grid */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3"><Layout size={32} className="text-blue-500"/> Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all overflow-hidden flex flex-col">
              {/* PROJECT IMAGE PLACEHOLDER */}
              <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 relative">
                <ImageIcon size={32} className="opacity-50" />
                <span className="absolute bottom-2 right-2 text-xs opacity-50 bg-black/50 px-2 py-1 rounded">Image Placeholder</span>
                <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{p.title}</h4>
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition"><ExternalLink size={20} /></a>
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

      {/* Achievements Showcase */}
      <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3"><Award size={32} className="text-yellow-500"/> Awards & Achievements</h3>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Achievement 1 */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col">
            <div className="h-40 bg-slate-800 rounded-xl mb-6 flex items-center justify-center text-slate-500 border border-white/5">
              <ImageIcon size={32} className="mb-2 opacity-50" />
              <span className="text-xs">Laptop Award Image</span>
              <img src="/laptop-award.jpg" alt="Laptop Scheme" className="w-full h-full object-cover rounded-xl" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">PM Youth Laptop Scheme 2023</h4>
            <p className="text-slate-400 text-sm">Secured a laptop based on academic excellence with an incredible CGPA of 3.79.</p>
          </div>

          {/* Achievement 2 */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col">
            <div className="h-40 bg-slate-800 rounded-xl mb-6 flex items-center justify-center text-slate-500 border border-white/5">
              <ImageIcon size={32} className="mb-2 opacity-50" />
              <span className="text-xs">Best Dev Award Image</span>
              <img src="/best-dev-award.jpg" alt="Best Developer" className="w-full h-full object-cover rounded-xl" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Best Web Developer of the Year</h4>
            <p className="text-slate-400 text-sm">Awarded at Students Empowered Oasis after a year of dedicated volunteering and platform management.</p>
          </div>

          {/* Achievement 3 (No specific image requested, styled differently) */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 p-6 flex flex-col justify-center text-center">
            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Fully Funded Scholarship</h4>
            <p className="text-slate-400 text-sm">Secured for a 4-year Bachelor's degree under the prestigious Sindh Talent Hunt Program (STHP) - 2022.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/10 mt-10">
        <p className="text-slate-500 font-medium mb-4">Built with Next.js & Tailwind CSS</p>
        <div className="flex justify-center items-center gap-6 text-sm text-slate-400">
          <a href="https://github.com/KashishTheCoder" className="hover:text-white transition">GitHub</a>
          <span>|</span>
          <a href="https://www.linkedin.com/ai-enthusiast" className="hover:text-white transition">LinkedIn</a>
          <span>|</span>
          <a href="mailto:kashishbasreja.fss22@gmail.com" className="hover:text-white transition">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;