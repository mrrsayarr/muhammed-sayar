import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaCalendar, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { SiReact, SiTypescript, SiTailwindcss, SiPython, SiJavascript, SiHtml5, SiCss3, SiMicrosoftsqlserver, SiCsharp, SiDotnet, SiGit, SiGithub, SiJupyter } from 'react-icons/si'
import { Link } from 'react-router-dom'

// Data
const name = "Muhammed Sayar"
const title = "Intern Cyber Security Analyst"
const email = "mrsayarr@protonmail.com"
const deneyim_wguard_time = 'July, 2023 - January, 2024'
const deneyim_bordo_time = 'June, 2022 - September, 2022'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="backdrop-blur-md bg-gray-800/75 shadow-lg fixed w-full top-0 z-50 border-b border-gray-700/50 m-2 rounded-lg">
        <div className="max-w-7xl mx-auto py-4 px-6 rounded-lg">
          <nav className="flex justify-between items-center">
            <div className="w-40 h-10 flex items-center justify-center">
              <img src="https://i.imgur.com/YourLogoURL.png" alt="" className="h-full" />
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105">Hakkımda</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105">İş Deneyimi</a>
              <a href="#education" className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105">Eğitim</a>
              <a href="#technologies" className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105">Teknolojiler</a>
              <Link to="/useful-links" className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105">Faydalı Linkler</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 mt-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-8 border border-gray-700/50 hover:bg-gray-800/95 transition-colors duration-300"
        >
          <div className="text-left">
            <h1 className="text-4xl font-bold text-white mb-2">Merhaba, Ben</h1>
            <h2 className="text-3xl font-bold text-blue-500 mb-4">{name}</h2>
            <p className="text-xl text-gray-300 mb-6">{title}</p>
          </div>
          <div className="flex text-left gap-4">
            <a href="#contact" className="bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20">
              İletişime Geç
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammed-sayar/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600/80 text-blue-500 hover:bg-blue-600/90 hover:text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20"
            >
              CV'mi İncele
            </a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-8 border border-gray-700/50 hover:bg-gray-800/95 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Hakkımda</h2>
          <div className="prose text-gray-300">
            <p>Amasya Üniversitesinde Bilgisayar Mühendisliği okumaktayım. GNU/Linux sistemlere ve Siber Güvenlik alanlarında kendimi geliştiriyorum.</p>
            <p className="mt-4">Daha önce C#, ASP.NET MVC, Python ile projelerde bulundum. Öğrenmek için gereken tutkuya sahibim.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaCalendar className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Yaş</p>
                <p className="font-medium text-white">23</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Konum</p>
                <p className="font-medium text-white">İstanbul, Türkiye</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FaEnvelope className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-white">{email}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          id="technologies"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-8 border border-gray-700/50 hover:bg-gray-800/95 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Teknolojiler</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-4">
            {/* MSSQL */}
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* MSSQL */}
              <SiMicrosoftsqlserver className="w-10 h-10 text-red-500 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* C# */}
              <SiCsharp className="w-10 h-10 text-purple-500 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* ASP.NET MVC */}
              <SiDotnet className="w-10 h-10 text-blue-500 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* Git */}
              <SiGit className="w-10 h-10 text-orange-500 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* GitHub */}
              <SiGithub className="w-10 h-10 text-gray-300 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* Jupyter */}
              <SiJupyter className="w-10 h-10 text-orange-600 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* React */}
              <SiReact className="w-10 h-10 text-blue-500 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* TypeScript */}
              <SiTypescript className="w-10 h-10 text-blue-400 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* Tailwind */}
              <SiTailwindcss className="w-10 h-10 text-cyan-400 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* Python */}
              <SiPython className="w-10 h-10 text-yellow-300 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* JavaScript */}
              <SiJavascript className="w-10 h-10 text-yellow-400 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* HTML5 */}
              <SiHtml5 className="w-10 h-10 text-orange-500 group-hover:animate-pulse" />
            </div>
            <div className="group flex flex-col items-center justify-center p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              {/* CSS3 */}
              <SiCss3 className="w-10 h-10 text-blue-500 group-hover:animate-pulse" />
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-8 border border-gray-700/50 hover:bg-gray-800/95 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Yetenekler</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-400 hover:bg-yellow-500/30 transition-colors">Python</span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/30 transition-colors">Django</span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full text-green-400 hover:bg-green-500/30 transition-colors">Node.js</span>
            <span className="px-4 py-2 bg-teal-500/20 rounded-full text-teal-400 hover:bg-teal-500/30 transition-colors">Tailwind CSS</span>
            <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 hover:bg-orange-500/30 transition-colors">Veri Tabanı</span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/30 transition-colors">Temel Network</span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 hover:bg-purple-500/30 transition-colors">Araştırma</span>
            <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-400 hover:bg-indigo-500/30 transition-colors">İngilizce</span>
            <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-colors">Windows Server</span>
            <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-400 hover:bg-pink-500/30 transition-colors">Web Geliştirme</span>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-8 border border-gray-700/50 hover:bg-gray-800/95 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6">İş Deneyimi</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg text-white">WGuard - Sistem Mühendisi Stajyeri</h3>
              <p className="text-gray-400 text-sm mb-2">{deneyim_wguard_time}</p>
              <p className="text-gray-300">Sistem mühendisliği alanında staj deneyimi</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg text-white">Bordo - Frontend Developer Stajyeri</h3>
              <p className="text-gray-400 text-sm mb-2">{deneyim_bordo_time}</p>
              <p className="text-gray-300">Frontend geliştirme alanında staj deneyimi</p>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md p-8 border border-gray-700/50 hover:bg-gray-800/95 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Eğitim</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg text-white">Amasya Üniversitesi (2020 - 2025)</h3>
              <p className="text-gray-300">Bilgisayar Mühendisliği</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg text-white">Hüseyin Kalkavan Lisesi (2014 - 2019)</h3>
              <p className="text-gray-300">Sağlık Meslek Lisesi</p>
            </div>
          </div>
        </motion.section>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/mrrsayarr" className="text-gray-400 hover:text-white">
            <FaGithub className="w-8 h-8 transition-transform hover:scale-110 duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/muhammed-sayar/" className="text-gray-400 hover:text-white">
            <FaLinkedin className="w-8 h-8 transition-transform hover:scale-110 duration-200" />
          </a>
          <a href="https://instagram.com/mrrsayarr" className="text-gray-400 hover:text-white">
            <FaInstagram className="w-8 h-8 transition-transform hover:scale-110 duration-200" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-gray-800/75 border-t border-gray-700/50 mt-12 m-2 rounded-lg">
        <div className="max-w-7xl mx-auto py-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
              <p className="text-gray-400">Email: {email}</p>
              <p className="text-gray-400">Konum: İstanbul, Türkiye</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Hakkımda</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Yetenekler</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Deneyim</a></li>
                <li><a href="#useful-links" className="text-gray-400 hover:text-white transition-colors">Faydalı Linkler</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Sosyal Medya</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/mrrsayarr" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/muhammed-sayar/" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/mrrsayarr" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Muhammed Sayar. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="https://github.com/mrrsayarr" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <FaGithub className="w-5 h-5" />
                GitHub Profilim
                <img 
                  src="https://visitor-badge.laobi.icu/badge?page_id=mrrsayarr.portfolio"
                  alt="Ziyaretçi Sayısı"
                  className="ml-2 dark:invert"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App