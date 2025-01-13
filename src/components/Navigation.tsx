'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaSun, FaMoon, FaLanguage } from 'react-icons/fa'
import { useTheme } from '@/components/ThemeProvider'

export default function Navigation() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const isEnglish = pathname === '/en'

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href={isEnglish ? "/en" : "/"} 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
          >
            Muhammed Sayar
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href={isEnglish ? "/en" : "/"} 
              className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${isActive(isEnglish ? '/en' : '/')}`}
            >
              {isEnglish ? "Home" : "Ana Sayfa"}
            </Link>
            <Link 
              href={isEnglish ? "/en#about" : "/#about"} 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {isEnglish ? "About" : "Hakkımda"}
            </Link>
            <Link 
              href={isEnglish ? "/en#skills" : "/#skills"} 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {isEnglish ? "Skills" : "Yetenekler"}
            </Link>
            <Link 
              href={isEnglish ? "/en#experience" : "/#experience"} 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {isEnglish ? "Experience" : "Deneyim"}
            </Link>
            <Link
              href={isEnglish ? "/" : "/en"}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1"
            >
              <FaLanguage className="text-xl" />
              <span className="text-sm">{isEnglish ? "TR" : "EN"}</span>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
              aria-label={theme === 'dark' ? 'Açık Tema' : 'Koyu Tema'}
            >
              {theme === 'dark' ? (
                <FaSun className="w-5 h-5 animate-spin-slow" />
              ) : (
                <FaMoon className="w-5 h-5 animate-bounce-slow" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 