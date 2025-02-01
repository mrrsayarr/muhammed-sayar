'use client'
import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { useTheme } from '@/components/ThemeProvider'
import { profileData } from '@/data/profile'
import Loader from '@/components/Loader'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1.5 saniyelik yükleme animasyonu
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-section">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-4">
              Merhaba, Ben
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-pulse">
              {profileData.name}
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-400 font-light mb-8">
              {profileData.title}
            </h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="mailto:mrsayarr@protonmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 flex items-center space-x-2"
              >
                <span>İletişime Geç</span>
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-full transition-colors duration-300 text-gray-800 dark:text-white"
              >
                CV'mi İncele
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-6xl hover:scale-110 transition-transform duration-300">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Strip */}
        <div className="w-full bg-white dark:bg-gray-800 py-12 mb-section rounded-2xl shadow-lg">
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
            Teknolojiler
          </h3>
          <div className="tech-grid">
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/react.svg`} alt="React" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/nextjs.svg`} alt="Next.js" width={48} height={48} className="dark:invert hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/typescript.svg`} alt="TypeScript" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/tailwind.svg`} alt="Tailwind CSS" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/python.svg`} alt="Python" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/git.svg`} alt="Git" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/github.svg`} alt="GitHub" width={48} height={48} className="dark:invert hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/html.svg`} alt="HTML5" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/css.svg`} alt="CSS3" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/javascript.svg`} alt="JavaScript" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/csharp.svg`} alt="C#" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/dotnet.svg`} alt="ASP.NET Core" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
            <Image src={`${process.env.NODE_ENV === 'production' ? '/muhammed-sayar' : ''}/icons/django.svg`} alt="Django" width={48} height={48} className="hover:scale-125 transition-transform duration-300" />
          </div>
        </div>

        {/* Quick Skills Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-section">
          {profileData.skills.slice(0, 4).map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {skill.name}
              </h3>
              <div className={`text-sm text-${skill.color}-600 dark:text-${skill.color}-400`}>
                {skill.type}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-section">
          <a href={profileData.socialLinks.linkedin}
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-2xl text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href={profileData.socialLinks.instagram}
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-2xl text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href={profileData.socialLinks.github}
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-300">
            <FaGithub />
          </a>
        </div>

        {/* About Section */}
        <section id="about" className="mb-section">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Hakkımda</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {profileData.about}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-section">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Yetenekler</h3>
            <div className="space-y-4">
              {profileData.skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className={`px-3 py-1 bg-${skill.color}-100 dark:bg-${skill.color}-900 text-${skill.color}-600 dark:text-${skill.color}-300 rounded-full text-sm font-medium`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="grid grid-cols-1 gap-section">
          {/* İş Deneyimi */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">İş Deneyimi</h3>
            <div className="space-y-6">
              {profileData.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2">
                    {exp.company} - {exp.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eğitim */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Eğitim</h3>
            <div className="space-y-6">
              {profileData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2">
                    {edu.school} ({edu.period})
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.degree}
                    {edu.description && ` - ${edu.description}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-section pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">İletişim</h4>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Email:</span> mrsayarr@protonmail.com
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Konum:</span> İstanbul, Türkiye
                </p>
                <div className="w-full h-32 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.5897809314!2d28.731994799999998!3d41.0082376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1710164548621!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter dark:invert dark:contrast-75 dark:hue-rotate-180"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Hızlı Bağlantılar</h4>
              <div className="space-y-2">
                <Link href="/#about" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Hakkımda
                </Link>
                <Link href="/#skills" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Yetenekler
                </Link>
                <Link href="/#experience" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Deneyim
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                  <FaGithub className="text-2xl" />
                </a>
                <a href={profileData.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} {profileData.name}. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    </main>
  )
} 