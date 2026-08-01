import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaCode, FaUser, FaBriefcase, FaGraduationCap, FaLink, FaTools } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Hakkımda', href: '/#about', isAnchor: true, icon: FaUser },
    { name: 'Teknolojiler', href: '/#technologies', isAnchor: true, icon: FaTools },
    { name: 'Yetenekler', href: '/#skills', isAnchor: true, icon: FaCode },
    { name: 'İş Deneyimi', href: '/#experience', isAnchor: true, icon: FaBriefcase },
    { name: 'Eğitim', href: '/#education', isAnchor: true, icon: FaGraduationCap },
    { name: 'Faydalı Linkler', href: '/useful-links', isAnchor: false, icon: FaLink },
  ]

  const handleLinkClick = (href: string, isAnchor: boolean) => {
    setIsOpen(false)
    if (isAnchor) {
      if (location.pathname !== '/') {
        window.location.href = href
      } else {
        const id = href.replace('/#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50">
      <div 
        className={`px-4 sm:px-6 py-3 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
          scrolled 
            ? 'bg-gray-900/90 border-gray-700/80 shadow-2xl shadow-blue-500/5' 
            : 'bg-gray-800/80 border-gray-700/50 shadow-lg'
        }`}
      >
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              MS
            </div>
            <span className="font-bold text-white text-lg tracking-wide group-hover:text-blue-400 transition-colors duration-200 hidden sm:inline-block">
              Muhammed Sayar
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault()
                      handleLinkClick(link.href, true)
                    }
                  }}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-200 flex items-center gap-2 hover:scale-105"
                >
                  <link.icon className="w-4 h-4 text-blue-400" />
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-2 hover:scale-105 ${
                    location.pathname === link.href
                      ? 'bg-blue-600/30 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <link.icon className="w-4 h-4 text-blue-400" />
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/60 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6 text-blue-400" /> : <FaBars className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-gray-700/50 mt-3 pt-3"
            >
              <div className="flex flex-col gap-2 pb-2">
                {navLinks.map((link) => (
                  link.isAnchor ? (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        if (location.pathname === '/') {
                          e.preventDefault()
                        }
                        handleLinkClick(link.href, true)
                      }}
                      className="px-4 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-colors flex items-center gap-3"
                    >
                      <link.icon className="w-5 h-5 text-blue-400" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2.5 text-base font-medium rounded-xl transition-colors flex items-center gap-3 ${
                        location.pathname === link.href
                          ? 'bg-blue-600/30 text-blue-400 border border-blue-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      <link.icon className="w-5 h-5 text-blue-400" />
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
