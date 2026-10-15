export type Course = { title: string; file: string; url: string };
export type Spec = {
  id: string; title: string; issuer: string; date: string; pdf: string; verifyUrl: string;
  skills: string[]; isSpecialization: boolean; courses?: Course[];
};
export type Cert = {
  title: string; issuer: string; date: string; image: string; pdf: string; verifyUrl: string;
  skills: string[]; highlight?: boolean;
};

export const skills: Record<string, string[]> = {
  Languages: ["C++", "Java", "Python", "SQL", "JavaScript", "HTML", "CSS", "Kotlin"],
  Frameworks: ["React", "Node.js", "Express.js", "Flask", "Flutter", "NumPy", "Pandas", "Keras", "OpenCV", "TensorFlow", "PyTorch"],
  Tools: ["Git", "GitHub", "Linux", "MongoDB", "VS Code", "IntelliJ IDEA", "PyCharm", "Canva", "WordPress"],
};

export const experience = [
  { role: "Research Collaborator", company: "Deep-NLP.ai Research Group", date: "Aug 2026 – Present", points: [
    "Conducting comprehensive literature reviews, rigorous experiments, and academic writing for AI, ML, Deep Learning, and NLP research papers.",
    "Currently authoring and contributing to an in-progress research paper targeted at an academic journal.",
    "Participating in weekly progress syncs and collaborative discussions to evaluate experimental findings and refine methodologies."] },
  { role: "Web Development Intern", company: "Sukkur Electric Power Company (SEPCO)", date: "Jun 2025 – Jul 2025", points: [
    "Developed and maintained responsive web pages to improve user accessibility and experience.",
    "Collaborated with team members to implement website features and optimize performance.",
    "Assisted in troubleshooting, debugging, and resolving technical issues in a real-world organizational environment."] },
  { role: "WordPress Developer Intern", company: "Students Empowered Oasis", date: "Jul 2024 – Sep 2024", points: [
    "Built and managed WordPress websites using pre-built themes and standard tools.",
    "Customized pages, layouts, and content, ensuring responsive design and user-friendly interfaces.",
    "Utilized existing plugins to implement features and gained hands-on experience in practical workflows."] },
];

export const volunteership = [
  { role: "Executive Committee Member", company: "Computer Science Society, Sukkur IBA", date: "Oct 2025 – May 2026", points: [
    "Participated in planning academic events, managing logistics, and collaborating to increase student engagement in computing activities."] },
  { role: "Web Developer", company: "Students Empowered Oasis", date: "Sep 2024 – Apr 2026", points: [
    "Managed platforms for event content, created quizzes, and published newsletters.",
    "Designed registration forms and ensured smooth content management across platforms."] },
  { role: "Active Member", company: "SIBA Tech Club, Sukkur IBA", date: "Dec 2024 – May 2026", points: [
    "Contributed to organizing technical events, hackathons, and volunteered for TechThon operations."] },
];

export const projects = [
  { title: "NeuroEmotion", desc: "An EEG-based affective computing platform for real-time emotion prediction featuring two distinct modules: one for processing EEG brainwave signals and another for analyzing facial expressions.", tech: ["Deep Learning", "Flutter", "Flask"], src: "/neuroemotion.png", link: "https://github.com/NeuroEmotion" },
  { title: "Ocular Disease Detection", desc: "Multi-label image classification platform evaluating ResNet50, VGG16, and EfficientNet-B3 architectures on the ODIR dataset to accurately screen retinal fundus samples for 8 pathologies simultaneously.", tech: ["PyTorch", "Computer Vision", "ResNet", "EfficientNet"], src: "/ocular.png", link: "https://github.com/KashishTheCoder/ocular-disease-detection.git" },
  { title: "Bespoke Threads", desc: "A sleek mobile application marketplace tailored for custom handcrafted clothing and styling accessories.", tech: ["Kotlin", "Android SDK", "Firebase"], src: "/bespoke.png", link: "https://github.com/KashishTheCoder/bespoke-threads-android.git" },
  { title: "MathTutor AI", desc: "AI system designed for step-by-step mathematical reasoning using LLM fine-tuning (LoRA) and custom evaluation metrics.", tech: ["Python", "LLMs", "NLP", "Regex"], src: "/mathtutor-ai.png", link: "https://github.com/umarprivit/math-tutor" },
  { title: "Healr", desc: "Full-stack MERN healthcare platform streamlining communication between Doctors, Patients, and Admins with secure routing.", tech: ["MongoDB", "Express", "React", "Node.js"], src: "/healr.png", link: "https://github.com/KaranTejwani/Healr" },
  { title: "AI Sign Language Interpreter", desc: "Real-time gesture recognition (ASL, BSL, ISL) using computer vision and 5 custom-trained CNN models with 90%+ accuracy.", tech: ["OpenCV", "MediaPipe", "CNN", "gTTS"], src: "/gesture.png", link: "https://github.com/KaranTejwani/GestureDetection.git" },
  { title: "Content Management System", desc: "University CMS with role-based access for students, instructors, and admins.", tech: ["Java", "MySQL"], src: "/cms.png", link: "https://github.com/KashishTheCoder/ContentManagementSystem" },
  { title: "Snake Safari", desc: "Desktop version of the classic Nokia snake game with rich graphics and database integration.", tech: ["Java Swing", "Java AWT", "MySQL"], src: "/snakesafari.png", link: "https://github.com/KashishTheCoder/SnakeSafari" },
];

const ICOMET = "https://www.linkedin.com/posts/kashish-aienthusiast_research-academicconference-icomet2026-ugcPost-7470600511277387776-Xy_h/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4";
const ICOMET_FULL = "International Conference on Computing, Mathematics, Engineering, and Technology";

export const academicCerts: Cert[] = [
  { title: "Certificate of Authorship - 5th iCoMET 2026", issuer: ICOMET_FULL, date: "May 2026", image: "/certificates/images/iCoMETAuthor.png", pdf: "/certificates/images/iCoMETAuthor.png", verifyUrl: ICOMET, skills: ["Academic Writing", "AI Research", "Explainable AI"] },
  { title: "Certificate of Presenter - 5th iCoMET 2026", issuer: ICOMET_FULL, date: "May 2026", image: "/certificates/images/iCoMETPresenter.png", pdf: "/certificates/images/iCoMETPresenter.png", verifyUrl: ICOMET, skills: ["Public Speaking", "Research Presentation", "Safety-Aware Prompting"] },
  { title: "SibaFest Speed Programming Winner", issuer: "Sukkur IBA University", date: "September 2024", image: "/certificates/images/sibafest.jpg", pdf: "/certificates/images/sibafest.jpg", verifyUrl: "https://www.linkedin.com/posts/kashish-aienthusiast_sibafest-techinnovation-codingchallenge-activity-7237497602684973058-bT7r?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4", skills: ["Competitive Programming", "Data Structures", "Algorithms"], highlight: true },
];

const P = "/certificates/pdfs/";
export const aiSpecializations: Spec[] = [
  { id: "ml-specialization", title: "Machine Learning Specialization", issuer: "DeepLearning.AI & Stanford Online (via Coursera) — Taught by Andrew Ng", date: "September 2026",
    pdf: P + "KashishMLSpecializationAndrewNg.pdf", verifyUrl: "https://coursera.org/verify/specialization/3YQFSDFTC4KO",
    skills: ["Supervised Learning", "Neural Networks", "Unsupervised Learning", "Recommender Systems", "Reinforcement Learning"], isSpecialization: true,
    courses: [
      { title: "Supervised Machine Learning: Regression and Classification", file: "KashishMLCourse1.pdf", url: "https://coursera.org/verify/74C9PNRBNHY1" },
      { title: "Advanced Learning Algorithms", file: "KashishMLCourse2.pdf", url: "https://coursera.org/verify/PIBDB13XFHTS" },
      { title: "Unsupervised Learning, Recommenders, Reinforcement Learning", file: "KashishMLCourse3.pdf", url: "https://coursera.org/verify/78EE9M6LBICA" },
    ] },
  { id: "google-ai", title: "Google AI Essentials Specialization", issuer: "Google (via Coursera)", date: "May 2026", pdf: P + "GoogleAIEssentialsSpecializationKashish.pdf", verifyUrl: "https://coursera.org/share/eebe4939edfdbd15099f77847d86705d", skills: ["Generative AI", "AI Productivity Tools", "Responsible AI"], isSpecialization: true,
    courses: [
      { title: "Introduction to AI", file: "KashishAICourse1.pdf", url: "https://coursera.org/share/8db6391450264901c2e8d31423daad89" },
      { title: "Maximize Productivity with AI Tools", file: "KashishAICourse2.pdf", url: "https://coursera.org/share/8bc47af7d1dedf18c81daa0cd8a44cb4" },
      { title: "Discover the Art of Prompting", file: "KashishAICourse3.pdf", url: "https://coursera.org/share/4d71abd5bee98964830b36dac1b4f3b7" },
      { title: "Use AI Responsibly", file: "KashishAICourse4.pdf", url: "https://coursera.org/share/fda1d4c688e28f9598f224a6e6bd9082" },
      { title: "Stay Ahead of the AI Curve", file: "KashishAICourse5.pdf", url: "https://coursera.org/share/f36b04deebca0732393888952b0c3ce5" },
    ] },
  { id: "google-prompting", title: "Google Prompting Essentials Specialization", issuer: "Google (via Coursera)", date: "June 2026", pdf: P + "GooglePromptingEssentialsSpecializationKashish.pdf", verifyUrl: "https://coursera.org/share/e4688e9df6561c8ea3298a51d95f3fdc", skills: ["Advanced Prompt Engineering", "Data Analysis Automation", "Workflow Optimization"], isSpecialization: true,
    courses: [
      { title: "Start Writing Prompts like a Pro", file: "KashishPromptingCourse1.pdf", url: "https://coursera.org/share/e834d4abd7b0737cca08936bab40c295" },
      { title: "Use AI as a Creative or Expert Partner", file: "KashishPromptingCourse2.pdf", url: "https://coursera.org/share/7ed38e61974ad59ee3b9b99e8eaa863c" },
      { title: "Design Prompts for Everyday Work Tasks", file: "KashishPromptingCourse3.pdf", url: "https://coursera.org/share/56ae90a197adb4b5a9785320f2608cc3" },
      { title: "Speed Up Data Analysis and Presentation Building", file: "KashishPromptingCourse4.pdf", url: "https://coursera.org/share/1f4f7815ed6085b444e8ac41fd0865ef" },
    ] },
  { id: "ai-for-everyone", title: "AI for Everyone", issuer: "DeepLearning.AI (Coursera) — Taught by Andrew Ng", date: "January 2025", pdf: P + "KashishAIForEveryoneAndrewNg.pdf", verifyUrl: "https://coursera.org/share/4eedcff9b22a012a3e7031c9b6233855", skills: ["AI Strategy", "Machine Learning Workflows", "Organizational Transformation"], isSpecialization: false },
  { id: "meta-python", title: "Programming in Python", issuer: "Meta (via Coursera)", date: "April 2025", pdf: P + "KashishMetaPython.pdf", verifyUrl: "https://coursera.org/share/223f9b993131beb941e7f6637b3ac605", skills: ["Object-Oriented Python", "Data Processing", "Scripting & Testing"], isSpecialization: false },
];

const L = "/certificates/images/";
export const webCerts: Cert[] = [
  { title: "JavaScript Essential Training", issuer: "LinkedIn Learning", date: "June 2024", image: L + "js-essential-training.jpg", pdf: L + "js-essential-training.jpg", verifyUrl: "https://www.linkedin.com/learning/certificates/6024ed474429b1fba8c910073021d91a510de17ea671e8115e84c05112c14f8b", skills: ["ES6+", "DOM Manipulation", "Asynchronous JavaScript"] },
  { title: "JavaScript Practice: Object-Oriented Programming", issuer: "LinkedIn Learning", date: "June 2024", image: L + "js-oop.jpg", pdf: L + "js-oop.jpg", verifyUrl: "https://www.linkedin.com/learning/certificates/3a534547b6d05dbd363f610762013528e9a7a0d554df005ce55bf223fa69a061?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BUeIaBuHtSpC7k%2FYtR7E7Yw%3D%3D", skills: ["OOP Design Patterns", "Classes", "Prototypal Inheritance"] },
  { title: "JavaScript as a Second Language", issuer: "LinkedIn Learning", date: "July 2024", image: L + "js-second-language.jpg", pdf: L + "js-second-language.jpg", verifyUrl: "https://www.linkedin.com/learning/certificates/3f4e91dfeb9ad7a59a69439a461bfb2bc7fce558f3a6979639f4311e7ab6da51?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BEisz5lELTWqjZc0WdwPDzA%3D%3D", skills: ["Problem Solving", "Logic Optimization", "Clean Code Architecture"] },
  { title: "Level Up: JavaScript", issuer: "LinkedIn Learning", date: "July 2024", image: L + "level-up-js.jpg", pdf: L + "level-up-js.jpg", verifyUrl: "https://www.linkedin.com/learning/certificates/9680b936c99a5cfee22ea553a7ad26f94c405335b82915fdecf6e91c9590458c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BUeIaBuHtSpC7k%2FYtR7E7Yw%3D%3D", skills: ["Advanced Paradigms", "Performance Tuning", "Functional JS"] },
  { title: "Web Development with WordPress", issuer: "Educate Sindh", date: "September 2024", image: L + "wordpress.jpg", pdf: L + "wordpress.jpg", verifyUrl: "https://www.linkedin.com/posts/kashish-aienthusiast_wordpress-webdevelopment-educatesindh-activity-7237525211988819969-vLzt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4", skills: ["CMS Design", "Theme Engineering", "Platform Deployment"] },
  { title: "Web Development with HTML & CSS", issuer: "Educate Sindh", date: "September 2024", image: L + "html-css.jpg", pdf: L + "html-css.jpg", verifyUrl: "https://www.linkedin.com/posts/kashish-aienthusiast_webdevelopment-html-css-activity-7237521336808439808-6tsc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpqDdkBvZRRd0nkgXH9MSVXKsL_VYXpOj4", skills: ["Responsive UI Layouts", "CSS Grid/Flexbox", "Semantic Coding"] },
];
