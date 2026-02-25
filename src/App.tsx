/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Terminal,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Download,
  User
} from 'lucide-react';

const MichaelPortfolio = () => {
  const skills = [
    { name: 'Node.js', icon: <Terminal className="w-4 h-4" />, category: 'Backend' },
    { name: 'JavaScript', icon: <Code2 className="w-4 h-4" />, category: 'Language' },
    { name: 'Python', icon: <Code2 className="w-4 h-4" />, category: 'Language' },
    { name: 'MongoDB', icon: <Database className="w-4 h-4" />, category: 'Database' },
    { name: 'AWS', icon: <Cloud className="w-4 h-4" />, category: 'Cloud' },
    { name: 'React JS', icon: <Code2 className="w-4 h-4" />, category: 'Frontend' },
    { name: 'Git', icon: <Github className="w-4 h-4" />, category: 'Tools' },
    { name: 'RESTful APIs', icon: <Terminal className="w-4 h-4" />, category: 'Backend' },
  ];

  const experience = [
    {
      role: 'Backend Developer',
      company: 'Taramsys Private Limited',
      location: 'Tuticorin',
      period: 'June 2023 - Current',
      description: 'Dynamic Node.js backend developer specializing in building scalable and high-performance server-side applications. Focused on developing efficient APIs and cloud-based solutions using MongoDB and AWS.',
      achievements: [
        'Optimizing backend architectures for reliability and scalability.',
        'Developing and maintaining RESTful APIs.',
        'Managing cloud-based deployments on AWS (Lightsail, Lambda, S3).',
        'Implementing CI/CD automation for efficient delivery.'
      ]
    },
    {
      role: 'Work Preparator (CAD)',
      company: 'ASRY (ISS)',
      location: 'Bahrain',
      period: 'April 2022 - April 2023',
      description: 'Experienced in planning and coordinating ship repair and maintenance activities in dry dock. Skilled in preparing job scopes and material planning.',
      achievements: [
        'Collaborated with cross-functional teams for efficient execution.',
        'Ensured compliance with safety and quality standards.',
        'Managed material planning and method statements.'
      ]
    },
    {
      role: 'Supervisor of Operations',
      company: 'IOCL (SSK Engineering)',
      location: 'Tuticorin',
      period: 'Sept 2016 - March 2022',
      description: 'Maintenance Supervisor at IOCL Tuticorin with expertise in pipeline operations and Marine Loading Arm (MLA) handling.',
      achievements: [
        'Responsible for overseeing pipeline maintenance, inspections, and troubleshooting.',
        'Managed MLA operations ensuring safe and efficient cargo transfer.',
        'Conducted routine equipment checks and emergency response handling.',
        'Maintained detailed logs and reports on pipeline performance.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl tracking-tight text-emerald-600"
          >
            MDB.
          </motion.span>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-emerald-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
              Available for new opportunities
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Michael <br />
              <span className="text-emerald-600">Don Bosco</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Backend Developer specializing in building scalable, high-performance server-side applications with Node.js, MongoDB, and AWS.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:donfdo5@gmail.com"
                className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/michael-don-bosco-k-14745a120"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-white border border-slate-100 shadow-2xl relative z-10 flex items-center justify-center group">
              <User className="w-48 h-48 text-slate-200 group-hover:text-emerald-500 transition-colors duration-500" strokeWidth={1} />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-full -z-0 blur-3xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-0 blur-2xl opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Quick Info */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">2+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Exp.</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">10+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">AWS</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">Node.js</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Specialist</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <User className="w-4 h-4" />
                About Me
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A brief overview of my professional journey and core values.
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Dynamic Backend Developer with nearly two years of experience specializing in Node.js, MongoDB, AWS, and Git. Skilled in building scalable and high-performance server-side applications, developing RESTful APIs, and managing cloud-based deployments.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Proficient in database design, version control, and CI/CD automation, ensuring efficient and reliable backend solutions. A strong problem-solver and team player, committed to delivering robust architectures and continuously adapting to evolving technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-12 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-slate-200"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 ring-4 ring-emerald-50"></div>
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="text-emerald-600 font-medium flex items-center gap-2 mt-1">
                      {exp.company} <span className="text-slate-300">•</span> {exp.location}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 shadow-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600 mb-6 max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                      <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Technical Toolkit
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                Specialized in Backend <br />Systems & Cloud
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors mb-4">
                  {skill.icon}
                </div>
                <div className="font-bold text-slate-900 mb-1">{skill.name}</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{skill.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-12 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Diploma in Mechatronics</h3>
              <p className="text-emerald-400 font-medium text-lg mb-6">Nettur Technical Training Foundation - Tuticorin</p>
              <div className="flex items-center gap-4 text-slate-400">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold">2013 - 2016</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <h4 className="font-bold mb-4 text-emerald-400 uppercase text-xs tracking-widest">Languages</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">English</span>
                  <span className="text-xs text-slate-400">Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Tamil</span>
                  <span className="text-xs text-slate-400">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-6">Get in Touch</h2>
          <h3 className="text-5xl font-bold text-slate-900 mb-12 tracking-tight">Let's build something <br />extraordinary together.</h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a 
              href="mailto:donfdo5@gmail.com"
              className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-emerald-500 transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="font-bold text-slate-900 mb-2">Email</div>
              <div className="text-slate-500 text-sm">donfdo5@gmail.com</div>
            </a>
            
            <a 
              href="tel:+919597808572"
              className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-emerald-500 transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="font-bold text-slate-900 mb-2">Phone</div>
              <div className="text-slate-500 text-sm">+91 9597808572</div>
            </a>

            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="font-bold text-slate-900 mb-2">Location</div>
              <div className="text-slate-500 text-sm">Tuticorin, TN, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Michael Don Bosco. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/MichaelDonBosco" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/michael-don-bosco-k-14745a120" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MichaelPortfolio;
