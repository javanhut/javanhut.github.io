'use client';
import { useState, useEffect } from 'react';
import { Linkedin, Youtube, Github } from 'react-bootstrap-icons';
import logo from '@/images/logo.png';
import Image from 'next/image';

function NavbarOverlay(){
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);

        const sections = ['home', 'experience', 'education', 'languages', 'tools', 'current-projects', 'about'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
      { href: '#experience', label: 'Experience' },
      { href: '#education', label: 'Education' },
      { href: '#languages', label: 'Languages' },
      { href: '#tools', label: 'Tools' },
      { href: '#current-projects', label: 'Projects' },
      { href: '#about', label: 'About' },
    ];

    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-primary-600/20 shadow-lg shadow-primary-600/5'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  className='relative rounded-full ring-2 ring-primary-600/50 group-hover:ring-primary-500 transition-all'
                  src={logo}
                  alt="Personal Logo"
                  width={45}
                  height={45}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Javan Hutchinson
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary-400 bg-primary-600/20'
                      : 'text-gray-300 hover:text-primary-400 hover:bg-primary-600/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-700">
                <a
                  href="https://github.com/javanhut?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-400 hover:bg-primary-600/10 rounded-lg transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/javan-hutchinson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-400 hover:bg-primary-600/10 rounded-lg transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@EngineerSpaceCadet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-400 hover:bg-primary-600/10 rounded-lg transition-all"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-primary-600/10 transition-all"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-primary-600/20">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary-400 bg-primary-600/20'
                      : 'text-gray-300 hover:text-primary-400 hover:bg-primary-600/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <a
                  href="https://github.com/javanhut?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-400 hover:bg-primary-600/10 rounded-lg transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/javan-hutchinson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-400 hover:bg-primary-600/10 rounded-lg transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@EngineerSpaceCadet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-400 hover:bg-primary-600/10 rounded-lg transition-all"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
}

export default NavbarOverlay;