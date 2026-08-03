import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaCheckCircle,
  FaGraduationCap,
  FaShieldAlt,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import {
  SiReact, SiTypescript, SiTailwindcss, SiPython,
  SiJavascript, SiHtml5, SiCss3, SiMicrosoftsqlserver,
  SiCsharp, SiDotnet, SiGit, SiGithub, SiJupyter, SiLinux,
} from 'react-icons/si'
import { Link } from 'react-router-dom'
import {
  personal, about, skills,
  experiences, educations, technologies,
} from './data/portfolioData'

const iconMap: Record<string, React.ElementType> = {
  linux: SiLinux, python: SiPython, csharp: SiCsharp,
  dotnet: SiDotnet, mssql: SiMicrosoftsqlserver, git: SiGit,
  github: SiGithub, react: SiReact, typescript: SiTypescript,
  tailwind: SiTailwindcss, javascript: SiJavascript,
  html5: SiHtml5, css3: SiCss3, jupyter: SiJupyter,
}

const expColorMap = {
  blue:    { text: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/20'    },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
}

const eduColorMap = {
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  gray:   { text: 'text-gray-400',   bg: 'bg-gray-800',      border: 'border-gray-700/50'   },
}

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-gray-800 shadow-xl shadow-black/40 hover:border-gray-700/80 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {personal.statusBadge}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">{personal.name}</h1>
              <p className="text-xl sm:text-2xl font-medium text-blue-400/90">{personal.title}</p>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">{personal.bio}</p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/90 text-gray-200 text-xs font-medium border border-gray-700/60">
                <FaGraduationCap className="text-purple-400" /> Bilgisayar Mühendisliği (Mezun)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/90 text-gray-200 text-xs font-medium border border-gray-700/60">
                <FaCheckCircle className="text-emerald-400" /> Askerlik Tamamlandı
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/90 text-gray-200 text-xs font-medium border border-gray-700/60">
                <FaShieldAlt className="text-blue-400" /> Sistem & Siber Güvenlik
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 text-sm flex items-center gap-2">
                <FaEnvelope className="w-4 h-4" /> İletişime Geç
              </a>
              <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white font-medium px-6 py-2.5 rounded-xl border border-gray-700 transition-all duration-200 text-sm flex items-center gap-2">
                <FaLinkedin className="w-4 h-4 text-blue-400" /> LinkedIn Profilim
              </a>
              <Link to="/useful-links" className="bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white font-medium px-5 py-2.5 rounded-xl border border-gray-700/80 transition-all duration-200 text-sm flex items-center gap-2">
                <FaExternalLinkAlt className="w-3.5 h-3.5 text-cyan-400" /> Faydalı Linkler
              </Link>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl shadow-black/40 hover:border-gray-700/80 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-500 rounded-full" /> Hakkımda
          </h2>
          <div className="space-y-4 text-gray-300 text-base leading-relaxed">
            {about.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-800/80">
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-950/50 border border-gray-800/60">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400"><FaGraduationCap className="w-5 h-5" /></div>
              <div><p className="text-xs text-gray-400 font-medium">Eğitim Durumu</p><p className="text-sm font-semibold text-white">Lisans Mezunu</p></div>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-950/50 border border-gray-800/60">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400"><FaMapMarkerAlt className="w-5 h-5" /></div>
              <div><p className="text-xs text-gray-400 font-medium">Konum</p><p className="text-sm font-semibold text-white">{personal.location}</p></div>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-950/50 border border-gray-800/60">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400"><FaEnvelope className="w-5 h-5" /></div>
              <div><p className="text-xs text-gray-400 font-medium">E-Posta</p><p className="text-sm font-semibold text-white truncate max-w-[160px]">{personal.email}</p></div>
            </div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          id="technologies"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl shadow-black/40 hover:border-gray-700/80 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 rounded-full" /> Teknolojiler & Araçlar
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3.5">
            {technologies.map((tech) => {
              const Icon = iconMap[tech.iconKey]
              return (
                <div key={tech.iconKey} className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
                  {Icon && <Icon className={`w-8 h-8 ${tech.colorClass} group-hover:scale-110 transition-transform`} />}
                  <span className="text-xs text-gray-400 mt-2 font-medium">{tech.name}</span>
                </div>
              )
            })}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl shadow-black/40 hover:border-gray-700/80 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-cyan-500 rounded-full" /> Yetenekler & Odak Alanları
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span key={skill} className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl shadow-black/40 hover:border-gray-700/80 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-emerald-500 rounded-full" /> İş & Staj Deneyimleri
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => {
              const colors = expColorMap[exp.color]
              return (
                <div key={exp.title} className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-gray-700/80 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-lg text-white">{exp.title}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-md border w-fit ${colors.text} ${colors.bg} ${colors.border}`}>{exp.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              )
            })}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl shadow-black/40 hover:border-gray-700/80 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-purple-500 rounded-full" /> Eğitim
          </h2>
          <div className="space-y-6">
            {educations.map((edu) => {
              const colors = eduColorMap[edu.color]
              return (
                <div key={edu.school} className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-gray-700/80 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-lg text-white">{edu.school}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-md border w-fit ${colors.text} ${colors.bg} ${colors.border}`}>{edu.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{edu.department}</p>
                </div>
              )
            })}
          </div>
        </motion.section>

        {/* Contact Section */}
        <section id="contact" className="pt-4">
          <div className="flex justify-center items-center gap-4">
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-800 transition-all duration-200 hover:scale-105" aria-label="GitHub">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-800 transition-all duration-200 hover:scale-105" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6 text-blue-400" />
            </a>
            <a href={personal.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-800 transition-all duration-200 hover:scale-105" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 text-pink-400" />
            </a>
            <a href={`mailto:${personal.email}`} className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-800 transition-all duration-200 hover:scale-105" aria-label="Email">
              <FaEnvelope className="w-6 h-6 text-purple-400" />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/80 bg-gray-950 py-8 px-4 mt-12 text-center sm:text-left">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {personal.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-3">
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FaGithub className="w-4 h-4" /> {personal.githubUsername}
            </a>
            <span className="text-gray-700">•</span>
            <img src={`https://visitor-badge.laobi.icu/badge?page_id=${personal.githubUsername}.portfolio`} alt="Ziyaretçi Sayısı" className="dark:invert opacity-80" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
