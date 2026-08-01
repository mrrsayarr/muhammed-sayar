import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaInstagram, 
  FaEnvelope,
  FaCheckCircle,
  FaGraduationCap,
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
  FaBriefcase,
  FaExternalLinkAlt,
  FaCode
} from 'react-icons/fa'
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiPython, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiMicrosoftsqlserver, 
  SiCsharp, 
  SiDotnet, 
  SiGit, 
  SiGithub, 
  SiJupyter,
  SiLinux,
  SiDocker
} from 'react-icons/si'
import { Link } from 'react-router-dom'

// Data
const name = "Muhammed Sayar"
const title = "Bilgisayar Mühendisi"
const email = "mrsayarr@protonmail.com"
const deneyim_wguard_time = 'Temmuz 2023 - Ocak 2024'
const deneyim_bordo_time = 'Haziran 2022 - Eylül 2022'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Container */}
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
                Aktif İş Arayışında
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                {name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-blue-400/90">
                {title}
              </p>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              GNU/Linux sistem yönetimi, Siber Güvenlik ve Ağ (Network) teknolojilerine odaklanmış Bilgisayar Mühendisiyim. Askerlik hizmetimi tamamladım; Sistem, Network veya Siber Güvenlik pozisyonlarında sorumluluk almaya hazırım.
            </p>

            {/* Quick Status Badges */}
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

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 text-sm flex items-center gap-2"
              >
                <FaEnvelope className="w-4 h-4" />
                İletişime Geç
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammed-sayar/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white font-medium px-6 py-2.5 rounded-xl border border-gray-700 transition-all duration-200 text-sm flex items-center gap-2"
              >
                <FaLinkedin className="w-4 h-4 text-blue-400" />
                LinkedIn Profilim
              </a>
              <Link 
                to="/useful-links"
                className="bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white font-medium px-5 py-2.5 rounded-xl border border-gray-700/80 transition-all duration-200 text-sm flex items-center gap-2"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5 text-cyan-400" />
                Faydalı Linkler
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
            <span className="w-2 h-6 bg-blue-500 rounded-full" />
            Hakkımda
          </h2>
          
          <div className="space-y-4 text-gray-300 text-base leading-relaxed">
            <p>
              Amasya Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. Öğrenim hayatım boyunca ve sonrasında GNU/Linux sistemler, Siber Güvenlik, Ağ Yapılandırmaları ve Yazılım Geliştirme konularında kendimi sürekli yeniledim.
            </p>
            <p>
              C#, ASP.NET MVC ve Python ile geliştirme deneyimimin yanı sıra sistem güvenliği, ağ altyapıları ve sunucu yönetimi alanlarında pratik tecrübelere sahibim. Askerlik görevimi tamamlamış olup, analitik düşünce yapımla ekibinize değer katacak bir pozisyonda çalışmayı hedefliyorum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-800/80">
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-950/50 border border-gray-800/60">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Eğitim Durumu</p>
                <p className="text-sm font-semibold text-white">Lisans Mezunu</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-950/50 border border-gray-800/60">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Konum</p>
                <p className="text-sm font-semibold text-white">İstanbul, Türkiye</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-950/50 border border-gray-800/60">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">E-Posta</p>
                <p className="text-sm font-semibold text-white truncate max-w-[160px]">{email}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Areas & Technologies Section */}
        <motion.section
          id="technologies"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl shadow-black/40 hover:border-gray-700/80 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 rounded-full" />
            Teknolojiler & Araçlar
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3.5">
            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiLinux className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">Linux</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiPython className="w-8 h-8 text-yellow-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">Python</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiCsharp className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">C#</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiDotnet className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">.NET</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiMicrosoftsqlserver className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">MSSQL</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiGit className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">Git</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiGithub className="w-8 h-8 text-gray-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">GitHub</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiReact className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">React</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiTypescript className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">TypeScript</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiTailwindcss className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">Tailwind</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiJavascript className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">JavaScript</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiHtml5 className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">HTML5</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiCss3 className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">CSS3</span>
            </div>

            <div className="group flex flex-col items-center justify-center p-3 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-200">
              <SiJupyter className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-400 mt-2 font-medium">Jupyter</span>
            </div>
          </div>
        </motion.section>

        {/* Skills & Focus Areas */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl shadow-black/40 hover:border-gray-700/80 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-cyan-500 rounded-full" />
            Yetenekler & Odak Alanları
          </h2>
          
          <div className="flex flex-wrap gap-2.5">
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">GNU/Linux Sistem Yönetimi</span>
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">Siber Güvenlik Temelleri</span>
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">Network & Ağ Yapılandırması</span>
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">Python Scripting</span>
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">Windows Server</span>
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">Veri Tabanı Yönetimi (SQL)</span>
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">C# / ASP.NET MVC</span>
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">Web Geliştirme</span>
            <span className="px-3.5 py-1.5 bg-gray-950 text-gray-200 rounded-xl border border-gray-800 text-sm font-medium hover:border-blue-500/40 hover:text-blue-400 transition-all">Teknik Araştırma & Problem Çözme</span>
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
            <span className="w-2 h-6 bg-emerald-500 rounded-full" />
            İş & Staj Deneyimleri
          </h2>
          
          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-gray-700/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="font-semibold text-lg text-white">WGuard - Sistem Mühendisi Stajyeri</h3>
                <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20 w-fit">
                  {deneyim_wguard_time}
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Sistem mühendisliği, Linux sunucu yapılandırmaları ve sistem operasyonları üzerine staj deneyimi.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-gray-700/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="font-semibold text-lg text-white">Bordo - Frontend Developer Stajyeri</h3>
                <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 w-fit">
                  {deneyim_bordo_time}
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Web kullanıcı arayüzü geliştirme, responsive tasarım ve dinamik web bileşenleri üzerine staj çalışması.
              </p>
            </div>
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
            <span className="w-2 h-6 bg-purple-500 rounded-full" />
            Eğitim
          </h2>
          
          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-gray-700/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="font-semibold text-lg text-white">Amasya Üniversitesi</h3>
                <span className="text-xs text-purple-400 font-medium bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 w-fit">
                  2020 - 2025 • Mezun
                </span>
              </div>
              <p className="text-gray-300 text-sm font-medium">Bilgisayar Mühendisliği (Lisans)</p>
            </div>

            <div className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-gray-700/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="font-semibold text-lg text-white">Hüseyin Kalkavan Lisesi</h3>
                <span className="text-xs text-gray-400 font-medium bg-gray-800 px-2.5 py-1 rounded-md border border-gray-700/50 w-fit">
                  2014 - 2019
                </span>
              </div>
              <p className="text-gray-300 text-sm">Sağlık Meslek Lisesi</p>
            </div>
          </div>
        </motion.section>

        {/* Contact & Social Links */}
        <section id="contact" className="pt-4">
          <div className="flex justify-center items-center gap-4">
            <a 
              href="https://github.com/mrrsayarr" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-800 transition-all duration-200 hover:scale-105"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammed-sayar/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-800 transition-all duration-200 hover:scale-105"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-blue-400" />
            </a>
            <a 
              href="https://instagram.com/mrrsayarr" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-800 transition-all duration-200 hover:scale-105"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-pink-400" />
            </a>
            <a 
              href={`mailto:${email}`}
              className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl border border-gray-800 transition-all duration-200 hover:scale-105"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6 text-purple-400" />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/80 bg-gray-950 py-8 px-4 mt-12 text-center sm:text-left">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Muhammed Sayar. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/mrrsayarr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaGithub className="w-4 h-4" />
              mrrsayarr
            </a>
            <span className="text-gray-700">•</span>
            <img 
              src="https://visitor-badge.laobi.icu/badge?page_id=mrrsayarr.portfolio"
              alt="Ziyaretçi Sayısı"
              className="dark:invert opacity-80"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App