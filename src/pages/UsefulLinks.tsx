import React from 'react';
import { motion } from 'framer-motion';
import { usefulLinks } from '../data/usefulLinks';
import { Link } from 'react-router-dom';

function UsefulLinks() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="backdrop-blur-md bg-gray-800/75 shadow-lg fixed w-full top-0 z-50 border-b border-gray-700/50 m-2 rounded-lg">
        <div className="max-w-7xl mx-auto py-4 px-6 rounded-lg">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              Ana Sayfa
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 mt-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md p-8 mb-8 border border-gray-700/50"
        >
          
          {/* <h1 className="text-3xl font-bold text-white mb-8">Faydalı Linkler</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usefulLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-700/30 rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{link.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{link.description}</p>
                    <span className="inline-block mt-3 text-sm px-3 py-1 rounded-full bg-gray-600/50 text-gray-300">
                      {link.category}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default UsefulLinks;