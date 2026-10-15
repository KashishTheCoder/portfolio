"use client";

import React, { useEffect, useState } from "react";
import { Mail, ExternalLink, Download, Menu, X, ChevronDown, ChevronUp, FileText, Send, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { skills, experience, volunteership, projects, academicCerts, aiSpecializations, webCerts, type Cert } from "./data";

const EMAIL = "kashishbasreja.fss22@gmail.com";
const NAV = [
  ["home", "Home"], ["about", "About"], ["research", "Research"], ["skills", "Skills"], ["experience", "Experience"],
  ["projects", "Projects"], ["credentials", "Credentials"], ["achievements", "Achievements"], ["contact", "Contact"],
];
const TITLES = ["AI Engineer", "AI Researcher", "ML Engineer", "Software Developer", "Deep Learning Engineer"];

const H = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mb-10 max-w-2xl">
    <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">{children}</h2>
    {sub && <p className="mt-3 text-muted">{sub}</p>}
  </div>
);

const Pill = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <span className={`text-xs px-2.5 py-1 rounded-full border ${dark ? "border-white/25 text-white/80" : "border-line bg-white/60"}`}>{children}</span>
);

const CertCard = ({ c, label }: { c: Cert; label: string }) => (
  <article className={`flex flex-col rounded-2xl bg-white p-4 border ${c.highlight ? "border-ink shadow-[6px_6px_0_var(--lime)]" : "border-line"}`}>
    <div className="h-44 rounded-lg bg-paper flex items-center justify-center p-2 mb-4 overflow-hidden">
      <img src={c.image} alt={c.title} className="max-w-full max-h-full object-contain" />
    </div>
    <h4 className="font-display font-bold leading-snug">{c.title}</h4>
    <p className="text-sm text-violet mt-1">{c.issuer}</p>
    <p className="text-xs text-muted mb-3">{c.date}</p>
    <div className="flex flex-wrap gap-1.5 mb-5">{c.skills.map((s) => <Pill key={s}>{s}</Pill>)}</div>
    <div className="grid grid-cols-2 gap-2 mt-auto text-sm font-medium">
      <a href={c.verifyUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 py-2 rounded-lg border border-ink hover:bg-ink hover:text-white transition"><ExternalLink size={14} /> Verify</a>
      <a href={c.pdf} download className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-ink text-white hover:bg-violet transition"><Download size={14} /> {label}</a>
    </div>
  </article>
);

const Timeline = ({ items }: { items: typeof experience }) => (
  <div className="space-y-8">
    {items.map((e, i) => (
      <div key={i} className="grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-1 border-t border-line pt-5">
        <p className="text-sm text-muted">{e.date}</p>
        <div>
          <h4 className="font-display text-xl font-bold">{e.role}</h4>
          <p className="text-violet font-medium mb-2">{e.company}</p>
          <ul className="space-y-1.5 text-[15px] leading-relaxed list-disc pl-4 marker:text-lime">{e.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
        </div>
      </div>
    ))}
  </div>
);

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [tIdx, setTIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const [tab, setTab] = useState<"research" | "ai" | "web">("ai");
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const full = TITLES[tIdx];
    const t = setTimeout(() => {
      if (!del && text === full) setTimeout(() => setDel(true), 1500);
      else if (del && text === "") { setDel(false); setTIdx((p) => (p + 1) % TITLES.length); }
      else setText(full.substring(0, text.length + (del ? -1 : 1)));
    }, del ? 50 : 100);
    return () => clearTimeout(t);
  }, [text, del, tIdx]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const link = (id: string, label: string, mobile?: boolean) => (
    <a key={id} href={`#${id}`} onClick={() => setMenu(false)}
      className={`block py-1 transition ${active === id ? "font-semibold text-ink" : "text-muted hover:text-ink"} ${mobile ? "text-lg" : "text-sm"}`}>
      <span className={`inline-block h-2 w-2 mr-2 rounded-full ${active === id ? "bg-violet" : "bg-transparent"}`} />{label}
    </a>
  );

  const tabBtn = (k: typeof tab, label: string) => (
    <button key={k} onClick={() => setTab(k)}
      className={`px-4 py-2 text-sm font-medium rounded-full border transition whitespace-nowrap ${tab === k ? "bg-ink text-white border-ink" : "border-line hover:border-ink"}`}>{label}</button>
  );

  return (
    <div className="lg:grid lg:grid-cols-[13rem_1fr] min-h-screen">
      {/* Side rail (desktop) */}
      <aside className="hidden lg:flex sticky top-0 h-screen flex-col justify-between border-r border-line p-7">
        <div>
          <a href="#home" className="font-display text-2xl font-extrabold">Kashish<span className="text-violet">.</span></a>
          <nav className="mt-10 space-y-1">{NAV.map(([id, l]) => link(id, l))}</nav>
        </div>
        <div className="flex gap-3 text-ink">
          <a href="https://github.com/KashishTheCoder" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-violet"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/kashish-aienthusiast" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-violet"><FaLinkedin size={20} /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-violet"><Mail size={20} /></a>
        </div>
      </aside>

      {/* Top bar (mobile) */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#home" className="font-display text-xl font-extrabold">Kashish<span className="text-violet">.</span></a>
          <button onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X size={26} /> : <Menu size={26} />}</button>
        </div>
        {menu && <nav className="px-6 pb-5 space-y-1 bg-paper">{NAV.map(([id, l]) => link(id, l, true))}</nav>}
      </header>

      <main className="min-w-0">
        {/* HERO */}
        <section id="home" className="grid-paper relative overflow-hidden px-6 md:px-12 pt-28 lg:pt-20 pb-10 min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-[1fr_18rem] gap-10 items-center max-w-6xl">
            <div>
              <p className="text-lg text-muted">Hello, this is</p>
              <h1 className="font-display font-extrabold leading-[0.85] tracking-tighter text-[22vw] lg:text-[11rem] -ml-1">Kashish</h1>
              <p className="font-display text-3xl md:text-5xl font-bold mt-6 min-h-[1.3em]">
                And I&apos;m a{/^[AEIOU]/.test(text) ? "n" : ""}{" "}
                <span className="bg-lime px-2 -mx-1">{text}</span><span className="caret text-violet">|</span>
              </p>
              <p className="text-lg md:text-xl text-muted max-w-xl mt-6 leading-relaxed">
                Building at the intersection of Deep Learning, Explainable AI, and real-world software architecture.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a href="/cv.pdf" download="Kashish_CV.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-semibold hover:bg-violet transition"><Download size={18} /> Download CV</a>
                {[[FaGithub, "https://github.com/KashishTheCoder"], [FaLinkedin, "https://www.linkedin.com/in/kashish-aienthusiast"]].map(([Ic, href]: any) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-ink hover:bg-ink hover:text-white transition"><Ic size={20} /></a>
                ))}
                <a href={`mailto:${EMAIL}`} className="p-3 rounded-full border border-ink hover:bg-ink hover:text-white transition"><Mail size={20} /></a>
              </div>
            </div>
            <div className="relative w-56 lg:w-full mx-auto">
              <div className="absolute inset-0 bg-lime rounded-[2rem] translate-x-4 translate-y-4 rotate-3" />
              <img src="/me.jpg" alt="Kashish" className="relative w-full aspect-[4/5] object-cover rounded-[2rem] border-2 border-ink bg-white -rotate-2" />
            </div>
          </div>
          {/* Loss curve: draws itself once on load */}
          <svg viewBox="0 0 1200 140" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-28 md:h-36 pointer-events-none" aria-hidden>
            <path className="draw" d="M0 10 C 90 12, 140 120, 260 100 S 420 60, 520 98 S 700 112, 800 104 S 1000 112, 1200 108" fill="none" stroke="#4f3bff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-6 md:px-12 py-24 scroll-mt-8 max-w-6xl">
          <H>About me</H>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
            <div className="space-y-5 leading-relaxed text-[17px] max-w-[68ch]">
              <p>I’m a recent Computer Science graduate from Sukkur IBA University, specializing in AI, machine learning, and software development. For me, tech isn&apos;t just about writing code; it’s about finding smart ways to solve real-world problems.</p>
              <p>During my time at university, I focused heavily on building practical systems and diving into AI research. Some of my defining work includes:</p>
              <ul className="space-y-4 border-l-2 border-lime pl-5">
                <li><strong>NeuroEmotion:</strong> For my Final Year Project, I developed a bimodal emotion recognition system featuring two distinct modules: one that analyzes human emotional states using EEG brainwave signals, and another that processes facial expressions.</li>
                <li><strong>AI Research:</strong> I recently presented my paper, <em>&quot;Reducing Unsafe Mental Health Advice in LLMs Using Safety-Aware Prompting,&quot;</em> at the <strong>iCoMET 2026</strong> conference, focusing on making large language models safer and more reliable.</li>
                <li><strong>Software &amp; Mobile Development:</strong> Alongside AI, I love building complete products. I developed <em>Bespoke Threads</em>, a Kotlin-based mobile marketplace for customized clothing, and built deep learning models (using PyTorch and ResNet) for multi-label medical image classification.</li>
                <li><strong>Industry Experience:</strong> I gained hands-on development experience through internships at SEPCO and Students Empowered Oasis, which taught me how to deliver real solutions on a timeline.</li>
              </ul>
              <p>Outside of classes, I spent a lot of time giving back to the campus community. Serving as an executive member of the Computer Science Society and being part of the SIBA Tech Club allowed me to organize events, mentor peers, and help build a strong tech culture on campus.</p>
              <p>Now that I&apos;ve wrapped up my final exams, I am actively looking for full-time opportunities as an <strong>AI Engineer, Machine Learning Engineer, or Software Developer</strong>. I&apos;m eager to join a team where I can keep learning, writing clean code, and building intelligent systems.</p>
              <p className="font-medium">Let’s connect! Feel free to reach out here on LinkedIn or drop me a line via email at <a href={`mailto:${EMAIL}`} className="text-violet underline underline-offset-4">{EMAIL}</a> to talk about open roles, collaborations, or anything tech-related.</p>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-ink text-white p-7">
                <h3 className="font-display text-2xl font-bold">Education</h3>
                <h4 className="mt-4 text-lg font-semibold">BS Computer Science</h4>
                <p className="text-white/70">Sukkur IBA University | 2022 — 2026</p>
                <p className="inline-block mt-4 px-3 py-1 rounded-full bg-lime text-ink font-bold text-sm">CGPA: 3.67</p>
                <p className="mt-5 text-sm font-semibold">Key Coursework:</p>
                <p className="text-sm text-white/70 leading-relaxed">Design &amp; Analysis of Algorithms, Deep Learning, Natural Language Processing, Web Engineering, Data Structures, Object Oriented Programming.</p>
              </div>
              <div id="research" className="rounded-2xl border-2 border-ink bg-white p-7 scroll-mt-8 shadow-[6px_6px_0_var(--violet)]">
                <h3 className="font-display text-2xl font-bold">Research Publication</h3>
                <p className="inline-block mt-3 px-3 py-1 rounded-full bg-violet text-white text-sm font-medium">Published - iCoMET 2026</p>
                <h4 className="mt-4 font-display text-lg font-bold leading-snug">
                  <a href="https://ieeexplore.ieee.org/document/11591507" target="_blank" rel="noreferrer" className="hover:text-violet inline-flex gap-2 items-start">
                    &quot;Reducing Unsafe Mental Health Advice in Large Language Models Using Safety-Aware Prompting&quot; <ExternalLink size={18} className="shrink-0 mt-1" />
                  </a>
                </h4>
                <p className="mt-3 text-sm text-muted leading-relaxed">Focuses on enhancing the safety constraints of LLMs to prevent the generation of harmful or inappropriate mental health advice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="px-6 md:px-12 py-20 scroll-mt-8 max-w-6xl">
          <H>Tech stack</H>
          <div className="grid md:grid-cols-3 gap-10">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat}>
                <h3 className="font-display text-xl font-bold border-b-2 border-ink pb-2 mb-4">{cat}</h3>
                <div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} className="px-3 py-1.5 rounded-lg bg-white border border-line text-sm hover:bg-lime hover:border-ink transition">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-6 md:px-12 py-20 scroll-mt-8 max-w-6xl grid xl:grid-cols-2 gap-14">
          <div><H>Experience</H><Timeline items={experience} /></div>
          <div><H>Volunteership</H><Timeline items={volunteership} /></div>
        </section>

        {/* PROJECTS — the one dark band */}
        <section id="projects" className="bg-ink text-white px-6 md:px-12 py-24 scroll-mt-8">
          <div className="max-w-6xl">
            <H>Featured projects</H>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {projects.map((p, i) => (
                <a key={i} href={p.link} target="_blank" rel="noreferrer" className="group grid md:grid-cols-[1fr_16rem] gap-6 py-8 items-center hover:bg-white/[0.03] transition px-2">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-bold flex items-center gap-3 group-hover:text-lime transition">{p.title}<ArrowUpRight size={28} className="opacity-60 group-hover:opacity-100" /></h3>
                    <p className="mt-3 text-white/70 leading-relaxed max-w-[62ch]">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">{p.tech.map((t) => <Pill key={t} dark>{t}</Pill>)}</div>
                  </div>
                  <div className="h-44 rounded-xl bg-white/[0.06] flex items-center justify-center p-3 overflow-hidden">
                    <img src={p.src} alt={p.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials" className="px-6 md:px-12 py-24 scroll-mt-8 max-w-6xl">
          <H sub="Verified courses, engineering tracks, and academic conference accomplishments.">Professional credentials</H>
          <div className="flex gap-2 overflow-x-auto mb-8 pb-1">
            {tabBtn("research", "Research & Honors")}{tabBtn("ai", "AI & Machine Learning")}{tabBtn("web", "Web Engineering")}
          </div>

          {tab === "research" && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{academicCerts.map((c, i) => <CertCard key={i} c={c} label="Certificate" />)}</div>}
          {tab === "web" && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{webCerts.map((c, i) => <CertCard key={i} c={c} label="PDF" />)}</div>}

          {tab === "ai" && (
            <div className="space-y-5 max-w-4xl">
              {aiSpecializations.map((s, idx) => (
                <div key={s.id} className={`rounded-2xl bg-white p-6 border ${idx === 0 ? "border-ink shadow-[6px_6px_0_var(--lime)]" : "border-line"}`}>
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                      <h4 className="font-display text-xl font-bold flex flex-wrap items-center gap-2">
                        {s.title}
                        {s.isSpecialization && <span className="text-xs font-medium bg-violet text-white px-2.5 py-0.5 rounded-full">Specialization</span>}
                      </h4>
                      <p className="text-sm text-violet mt-1">{s.issuer}</p>
                      <p className="text-xs text-muted mt-0.5">{s.date}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">{s.skills.map((k) => <Pill key={k}>{k}</Pill>)}</div>
                    </div>
                    <div className="flex gap-2 shrink-0 text-sm font-medium sm:self-start flex-wrap">
                      <a href={s.verifyUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-ink hover:bg-ink hover:text-white transition"><ExternalLink size={14} /> Verify</a>
                      <a href={s.pdf} download className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-ink text-white hover:bg-violet transition"><Download size={14} /> Full PDF</a>
                      {s.isSpecialization && (
                        <button onClick={() => setOpen(open === s.id ? null : s.id)} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-lime text-ink hover:brightness-95 transition">
                          {open === s.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />} Courses ({s.courses?.length})
                        </button>
                      )}
                    </div>
                  </div>
                  {s.isSpecialization && open === s.id && (
                    <div className="mt-5 pt-5 border-t border-line">
                      <p className="text-sm font-semibold mb-3">Curriculum certificates included:</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {s.courses?.map((c, i) => (
                          <div key={i} className="flex justify-between items-center gap-2 bg-paper rounded-lg p-3 border border-line">
                            <span className="flex items-center gap-2 text-sm min-w-0"><FileText size={15} className="shrink-0 text-muted" /><span className="truncate" title={c.title}>{c.title}</span></span>
                            <span className="flex gap-1 shrink-0">
                              <a href={c.url} target="_blank" rel="noreferrer" title="Verify online" className="p-1.5 hover:text-violet"><ExternalLink size={14} /></a>
                              <a href={`/certificates/pdfs/${c.file}`} download title="Download certificate" className="p-1.5 hover:text-violet"><Download size={14} /></a>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="px-6 md:px-12 py-20 scroll-mt-8 max-w-6xl">
          <H>Awards &amp; achievements</H>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["/laptop-award.jpg", "Laptop Scheme", "PM Youth Laptop Scheme 2023", "Secured a laptop based on academic excellence with an incredible CGPA of 3.79."],
              ["/best-dev-award.jpg", "Best Developer", "Best Web Developer of the Year", "Awarded at Students Empowered Oasis after a year of dedicated volunteering and platform management."],
            ].map(([src, alt, t, d]) => (
              <div key={t} className="rounded-2xl bg-white border border-line p-5 flex flex-col">
                <div className="h-48 rounded-lg bg-paper flex items-center justify-center p-2 mb-5 overflow-hidden"><img src={src} alt={alt} className="max-w-full max-h-full object-contain rounded" /></div>
                <h4 className="font-display text-lg font-bold">{t}</h4>
                <p className="text-sm text-muted mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-lime border-2 border-ink p-7 flex flex-col justify-center">
              <h4 className="font-display text-2xl font-extrabold leading-tight">Fully Funded Scholarship</h4>
              <p className="mt-3 leading-relaxed">Secured for a 4-year Bachelor&apos;s degree under the prestigious Sindh Talent Hunt Program (STHP) - 2022.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 md:px-12 py-20 scroll-mt-8">
          <div className="max-w-6xl rounded-3xl bg-violet text-white p-8 md:p-12 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[0.95]">Let&apos;s connect.</h2>
              <p className="mt-6 text-white/85 text-lg leading-relaxed">I&apos;m currently open to new opportunities, AI research collaborations, and full-stack development roles. Whether you have a project in mind or just want to say hi, my inbox is always open!</p>
              <div className="mt-8 space-y-4">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-lime transition break-all"><Mail size={22} /> {EMAIL}</a>
                <a href="https://www.linkedin.com/in/kashish-aienthusiast" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-lime transition"><FaLinkedin size={22} /> LinkedIn Profile</a>
              </div>
            </div>
            <form action="https://formspree.io/f/xbdqgqgl" method="POST" className="space-y-5 bg-paper text-ink rounded-2xl p-6">
              {[["name", "Your Name", "text", "John Doe"], ["email", "Your Email", "email", "john@example.com"]].map(([n, l, t, ph]) => (
                <div key={n}>
                  <label htmlFor={n} className="block text-sm font-medium mb-1.5">{l}</label>
                  <input id={n} name={n} type={t} required placeholder={ph} className="w-full px-4 py-3 rounded-xl bg-white border border-line focus:border-violet outline-none" />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Your Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="How can we work together?" className="w-full px-4 py-3 rounded-xl bg-white border border-line focus:border-violet outline-none resize-none" />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-ink text-white font-semibold flex items-center justify-center gap-2 hover:bg-violet transition">Send message <Send size={18} /></button>
            </form>
          </div>
        </section>

        <footer className="px-6 md:px-12 py-10 border-t border-line text-sm text-muted">
          <p className="mb-3">Built with Next.js &amp; Tailwind CSS</p>
          <div className="flex gap-5">
            <a href="https://github.com/KashishTheCoder" className="hover:text-ink">GitHub</a>
            <a href="https://www.linkedin.com/in/kashish-aienthusiast" className="hover:text-ink">LinkedIn</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-ink">Email</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
