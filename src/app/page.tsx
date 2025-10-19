"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import me from '@/images/me.jpg';
import NavbarOverlay from '@/components/NavBar';

const SkillBar = ({ skill, level, delay = 0 }: { skill: string; level: number; delay?: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill}</span>
        <span className="text-primary-400 font-bold">{level}%</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) => {
  return (
    <div className={`card-modern p-6 text-center group cursor-pointer hover:${color} transition-all`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-gray-100 mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="mt-2 h-1 w-0 group-hover:w-full bg-primary-500 transition-all duration-500 mx-auto rounded"></div>
    </div>
  );
};

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [selectedTool, setSelectedTool] = useState('docker');

  const languages = {
    python: {
      name: 'Python',
      level: 'Expert',
      levelNum: 95,
      xp: '3500 XP',
      experience: '3+ years professional',
      badge: '⭐⭐⭐',
      description: 'This is by far the language I\'m most proficient and have been coding in the longest. I have coded professionally in this language for over 3 years and contributed to mostly internal repositories with some Open Source contributions. I helped build automation frameworks, automated test cases, and set up automated frameworks using Python and am very experienced with its features and functions. Most of my coding projects are in this language.'
    },
    carrion: {
      name: 'Carrion',
      level: 'Creator',
      levelNum: 95,
      xp: '3200 XP',
      experience: 'Language Design',
      badge: '👑',
      description: 'My custom programming language built from scratch. Designing and implementing the compiler, including lexical analysis, parsing, semantic analysis, and code generation. This project showcases my deep understanding of language design, compiler construction, and low-level programming concepts.'
    },
    go: {
      name: 'Go',
      level: 'Proficient',
      levelNum: 85,
      xp: '2800 XP',
      experience: 'Backend Development',
      badge: '⭐⭐',
      description: 'I use Go extensively for backend development and microservices. I really like the go routines for multithreading and the language\'s performance characteristics. Currently using it in production environments. I build most of my personal projects in Go.'
    },
    rust: {
      name: 'Rust',
      level: 'Intermediate',
      levelNum: 65,
      xp: '1500 XP',
      experience: 'Systems Programming',
      badge: '⭐',
      description: 'Learned Rust for its memory safety guarantees and performance. Appreciate its ownership model and modern tooling. Building projects to strengthen my understanding of systems-level programming with safety in mind. It\'s my current latest obsession.'
    },
    java: {
      name: 'Java',
      level: 'Proficient',
      levelNum: 80,
      xp: '2400 XP',
      experience: 'Academic & Professional',
      badge: '⭐',
      description: 'It\'s Java.'
    },
    javascript: {
      name: 'JavaScript',
      level: 'Novice',
      levelNum: 85,
      xp: '2600 XP',
      experience: 'Web Development',
      badge: '⭐',
      description: 'I used this language to build this webpage. I\'m familiar with Next.js, Node.js and React. I have helped build webapps with this.'
    },
    html: {
      name: 'HTML',
      level: 'Proficient',
      levelNum: 80,
      xp: '2200 XP',
      experience: 'Web Development',
      badge: '⭐',
      description: 'I can use it. I suppose easy to implement, hard to master would be the term here.'
    },
    css: {
      name: 'CSS',
      level: 'Proficient',
      levelNum: 75,
      xp: '2000 XP',
      experience: 'Web Design',
      badge: '⭐',
      description: 'I can use it. Not hard to do but dealing with divs is not my favorite thing. I really just got creative with this page. Although i\'m not really all that familar with it '
    }
  };

  const tools = {
    docker: {
      name: 'Docker',
      category: 'Containerization',
      level: 'Expert',
      description: 'Extensive experience with containerization, building multi-stage Dockerfiles, and optimizing container images for production deployments.'
    },
    kubernetes: {
      name: 'Kubernetes',
      category: 'Orchestration',
      level: 'Proficient',
      description: 'Experience with container orchestration, deployments, services, and managing scalable applications in Kubernetes clusters.'
    },
    aws: {
      name: 'AWS',
      category: 'Cloud Platform',
      level: 'Proficient',
      description: 'Working knowledge of AWS services including EC2, S3, Lambda, and other cloud infrastructure components.'
    },
    podman: {
      name: 'Podman',
      category: 'Containerization',
      level: 'Proficient',
      description: 'Experience with rootless container management and Podman as a Docker alternative for secure container operations.'
    },
    git: {
      name: 'Git',
      category: 'Version Control',
      level: 'Expert',
      description: 'Advanced Git workflows, branching strategies, rebasing, and managing complex repository histories. Daily use in professional environments.'
    },
    github: {
      name: 'GitHub',
      category: 'DevOps',
      level: 'Expert',
      description: 'Proficient with GitHub Actions, CI/CD pipelines, pull request workflows, and collaborative development practices.'
    },
    linux: {
      name: 'Linux',
      category: 'Operating System',
      level: 'Expert',
      description: 'Deep knowledge of Linux systems administration, shell scripting, system configuration, and troubleshooting. Daily driver for development work.'
    },
    posix: {
      name: 'POSIX',
      category: 'Standards',
      level: 'Proficient',
      description: 'Understanding of POSIX standards, portable shell scripting, and cross-platform Unix compatibility.'
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <NavbarOverlay />

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-primary-900/10 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-800/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-primary-400 via-primary-600 to-primary-800 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                  Javan Hutchinson
                </span>
                <div className="absolute -inset-4 bg-primary-600/20 blur-2xl -z-10 opacity-0 hover:opacity-100 transition-opacity"></div>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Software Engineer II | Systems Developer | Software Tool Developer Hobbyist
              </p>
              <p className="text-lg text-gray-400 italic animate-fade-in" style={{animationDelay: '0.3s'}}>
                (Pronounced like Jay-vin)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card-modern p-8 animate-slide-in-left relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4 relative">Professional Background</h2>
                <p className="text-gray-300 leading-relaxed mb-3 relative">
                  Software Engineer II at Nike with a strong foundation in electrical and software engineering. Former Intel Engineer.
                </p>
                <p className="text-gray-300 leading-relaxed relative">
                  Master&apos;s degree in Computer Science from Kennesaw State University (GPA: 3.75).
                </p>
                <p className="text-gray-300 leading-relaxed relative">
                  Bachelor&apos;s degree in Electrical Engineering from Kennesaw State University (GPA: 3.54).
                  </p>
              </div>

              <div className="card-modern p-8 animate-slide-in-right flex items-center justify-center relative group" style={{animationDelay: '0.1s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="text-center relative">
                  <div className="text-4xl mb-4 animate-float">&#x1F4A1;</div>
                  <p className="text-lg font-semibold text-gray-100 mb-2">Personal Philosophy</p>
                  <p className="text-gray-300 italic">
                    Embrace learning. If unknown, discover it. If challenging, master it. For everything else google it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Stats & Achievements</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <StatCard icon="🎓" label="Education Level" value="Master's" color="scale-110" />
            <StatCard icon="💼" label="Years Experience" value="3+" color="scale-110" />
            <StatCard icon="🏆" label="Companies" value="2" color="scale-110" />
            <StatCard icon="⚡" label="Tech Stack" value="15+" color="scale-110" />
          </div>

          <div className="card-modern p-8">
            <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <span className="text-3xl"></span>
              Core Skills Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <SkillBar skill="Python Development" level={95} delay={100} />
                <SkillBar skill="Backend Engineering" level={90} delay={200} />
                <SkillBar skill="Go Programming" level={85} delay={300} />
                <SkillBar skill="Cloud Infrastructure" level={80} delay={400} />
              </div>
              <div>
                <SkillBar skill="Docker & Containers" level={95} delay={500} />
                <SkillBar skill="Kubernetes" level={80} delay={600} />
                <SkillBar skill="System Design" level={85} delay={700} />
                <SkillBar skill="CI/CD Pipelines" level={90} delay={800} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Experience</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="card-modern p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-600 to-primary-800"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Software Engineer II</h3>
                <p className="text-xl text-primary-400 font-semibold mb-3">Nike</p>
                <p className="text-gray-400 mb-4">July 2024 - Present</p>
                <div className="space-y-2 text-gray-300">
                  <p>Building scalable backend services and microservices</p>
                  <p>Working with containerization and cloud infrastructure</p>
                  <p>Implementing CI/CD pipelines and automated testing</p>
                </div>
              </div>
            </div>

            <div className="card-modern p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-600 to-primary-800"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Software Engineer</h3>
                <p className="text-xl text-primary-400 font-semibold mb-3">Intel Corporation</p>
                <p className="text-gray-400 mb-4">June 2022 - April 2024</p>
                <div className="space-y-2 text-gray-300">
                  <p>Developed automation frameworks and test cases</p>
                  <p>Contributed to internal repositories and open source projects</p>
                  <p>Specialized in Python-based testing infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Education</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="card-modern p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700"></div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-100 mb-2">Master of Science - Computer Science</h3>
                <p className="text-primary-400 font-semibold mb-2">Kennesaw State University</p>
                <p className="text-gray-400 mb-3">Marietta, Georgia</p>
                <p className="text-gray-400 mb-3">Graduated: July 2025</p>
                <p className="text-primary-300 font-bold">GPA: 3.75</p>
              </div>
            </div>

            <div className="card-modern p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700"></div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-100 mb-2">Bachelor of Science - Electrical Engineering</h3>
                <p className="text-primary-400 font-semibold mb-2">Kennesaw State University</p>
                <p className="text-gray-400">Marietta, Georgia</p>
                <p className="text-gray-400 mb-3">Graduated: May 2022</p>
                <p className="text-primary-300 font-bold">GPA: 3.54</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="languages" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Programming Languages</h2>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {Object.entries(languages).map(([key, lang], index) => (
              <button
                key={key}
                onClick={() => setSelectedLanguage(key)}
                className={`card-modern p-6 text-left transition-all duration-500 relative overflow-hidden group ${
                  selectedLanguage === key
                    ? 'ring-2 ring-primary-500 scale-105 animate-glow'
                    : 'hover:scale-105'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex justify-between items-start mb-3 relative z-10">
                  <h3 className="text-xl font-bold text-gray-100">{lang.name}</h3>
                  <span className="text-2xl">{lang.badge}</span>
                </div>

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="px-3 py-1 bg-primary-600/30 text-primary-300 rounded-full text-xs font-bold border border-primary-500/50">
                    Lvl {lang.levelNum}
                  </span>
                  <span className="text-xs text-primary-400 font-bold">{lang.xp}</span>
                </div>

                <div className="mb-3 relative z-10">
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.levelNum}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-xs text-gray-400 relative z-10">{lang.experience}</p>
              </button>
            ))}
          </div>

          <div className="card-modern p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-bold text-gray-100">
                  {languages[selectedLanguage as keyof typeof languages].name}
                </h3>
                <span className="text-3xl">{languages[selectedLanguage as keyof typeof languages].badge}</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-400">
                  {languages[selectedLanguage as keyof typeof languages].xp}
                </div>
                <div className="text-sm text-gray-400">Experience Points</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Proficiency Level</span>
                <span className="text-sm font-bold text-primary-400">
                  {languages[selectedLanguage as keyof typeof languages].levelNum}%
                </span>
              </div>
              <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full transition-all duration-1000 relative overflow-hidden"
                  style={{ width: `${languages[selectedLanguage as keyof typeof languages].levelNum}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <span className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full text-sm font-semibold border border-primary-500/30">
                {languages[selectedLanguage as keyof typeof languages].level}
              </span>
              <span className="px-4 py-2 bg-accent-700/20 text-accent-300 rounded-full text-sm font-semibold border border-accent-600/30">
                {languages[selectedLanguage as keyof typeof languages].experience}
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {languages[selectedLanguage as keyof typeof languages].description}
            </p>
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Tools & Technologies</h2>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(tools).map(([key, tool], index) => (
              <button
                key={key}
                onClick={() => setSelectedTool(key)}
                className={`card-modern p-6 text-left transition-all duration-500 relative overflow-hidden group ${
                  selectedTool === key
                    ? 'ring-2 ring-primary-500 scale-105 animate-glow'
                    : 'hover:scale-105'
                }`}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 via-primary-600/10 to-primary-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold text-gray-100 mb-2 relative z-10">{tool.name}</h3>
                <p className="text-xs text-primary-400 font-semibold mb-1 relative z-10">{tool.category}</p>
                <div className="flex items-center gap-2 relative z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                  <p className="text-sm text-gray-400">{tool.level}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="card-modern p-8">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              {tools[selectedTool as keyof typeof tools].name}
            </h3>
            <div className="flex gap-4 mb-4">
              <span className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full text-sm font-semibold border border-primary-500/30">
                {tools[selectedTool as keyof typeof tools].level}
              </span>
              <span className="px-4 py-2 bg-accent-700/20 text-accent-300 rounded-full text-sm font-semibold border border-accent-600/30">
                {tools[selectedTool as keyof typeof tools].category}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {tools[selectedTool as keyof typeof tools].description}
            </p>
          </div>
        </div>
      </section>

      <section id="current-projects" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">Current Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-modern p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-600/20 transition-all duration-500"></div>

              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="text-primary-400 text-sm font-semibold">Active Development</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-100 mb-3 relative z-10 group-hover:text-primary-400 transition-colors duration-300">The Carrion Language</h3>

              <div className="mb-4 relative z-10">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Project Progress</span>
                  <span className="text-primary-400 font-bold">65%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 relative z-10">
                A custom programming language built from scratch. Exploring compiler design, lexical analysis, parsing, and code generation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-600/30 transition-colors">Compiler Design</span>
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-600/30 transition-colors">Language Development</span>
              </div>
              <a
                href="https://github.com/javanhut/TheCarrionLanguage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-all duration-300 relative z-10 group/link"
              >
                <svg className="w-5 h-5 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="group-hover/link:translate-x-1 transition-transform">View on GitHub</span>
              </a>
            </div>

            <div className="card-modern p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-600/20 transition-all duration-500"></div>

              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="text-primary-400 text-sm font-semibold">Active Development</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-600">⭐</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-100 mb-3 relative z-10 group-hover:text-primary-400 transition-colors duration-300">Ivaldi VCS</h3>

              <div className="mb-4 relative z-10">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Project Progress</span>
                  <span className="text-primary-400 font-bold">55%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full" style={{width: '55%'}}></div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 relative z-10">
                A version control system built to understand the internals of Git. Implementing core VCS features like commits, branches, and merging.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-600/30 transition-colors">Version Control</span>
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-600/30 transition-colors">Systems Programming</span>
              </div>
              <a
                href="https://github.com/javanhut/IvaldiVCS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-all duration-300 relative z-10 group/link"
              >
                <svg className="w-5 h-5 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="group-hover/link:translate-x-1 transition-transform">View on GitHub</span>
              </a>
            </div>

            <div className="card-modern p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-600/20 transition-all duration-500"></div>

              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="text-primary-400 text-sm font-semibold">Active Development</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-100 mb-3 relative z-10 group-hover:text-primary-400 transition-colors duration-300">Carrier</h3>

              <div className="mb-4 relative z-10">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Project Progress</span>
                  <span className="text-primary-400 font-bold">70%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 relative z-10">
                A project management and task tracking system. Building efficient workflows and collaboration tools for development teams.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-600/30 transition-colors">Project Management</span>
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-600/30 transition-colors">Web Development</span>
              </div>
              <a
                href="https://github.com/javanhut/Carrier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-all duration-300 relative z-10 group/link"
              >
                <svg className="w-5 h-5 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="group-hover/link:translate-x-1 transition-transform">View on GitHub</span>
              </a>
            </div>

            <div className="card-modern p-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-600/20 transition-all duration-500"></div>

              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="text-primary-400 text-sm font-semibold">Active Development</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-600">⭐</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-100 mb-3 relative z-10 group-hover:text-primary-400 transition-colors duration-300">Genesys</h3>

              <div className="mb-4 relative z-10">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Project Progress</span>
                  <span className="text-primary-400 font-bold">45%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 relative z-10">
                A systems-level project exploring low-level programming concepts and operating system fundamentals.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-600/30 transition-colors">Systems Programming</span>
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-600/30 transition-colors">Low-Level Development</span>
              </div>
              <a
                href="https://github.com/javanhut/genesys"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-all duration-300 relative z-10 group/link"
              >
                <svg className="w-5 h-5 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="group-hover/link:translate-x-1 transition-transform">View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-center mb-12">About Me</h2>

          <div className="card-modern p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-2xl ring-4 ring-primary-600 shadow-2xl shadow-primary-600/20 w-48 h-48 object-cover"
                  src={me}
                  alt='Javan Hutchinson'
                  width={192}
                  height={192}
                />
              </div>
              <div className="flex-1 space-y-4 text-gray-300">
                <p className="text-lg">
                  I have 2 dogs: a labradoodle named Mugsie and a goldendoodle named Bella.
                </p>
                <p className="text-lg">
                  I have sage level autism. My special interest happens to be Technology.
                </p>
                <p className="text-lg">
                  I&apos;m a big fan of DC comics, Anime, and Manga.
                </p>
                <p className="text-lg">
                  I love to volunteer and give back when I can.
                </p>
                <p className="text-lg">
                Although i utilize AI tooling i&apos;m not the biggest fan. I prefer writing the code myself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
