import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Committees', path: '/committees' },
    { name: 'Secretariat', path: '/team' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'py-4'
          : 'py-6'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center rounded-full border shadow-sm transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/96 border-brand-navy/10 text-brand-navy backdrop-blur-md px-6 py-3'
            : 'bg-white/88 border-brand-navy/8 text-brand-navy backdrop-blur-md px-6 py-3'
        }`}
      >
        <Link to="/" className="flex items-center gap-4 group">
          <Logo size="sm" className="group-hover:scale-110 transition-transform" />
          <div className="hidden sm:block">
            <p className="font-display font-black tracking-wider leading-none mb-1">POWIIS MUN</p>
            <p className="text-[8px] uppercase tracking-[0.3em] opacity-50 font-bold">Penang 2027</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.24em] font-bold transition-colors relative group ${
                location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy/70 hover:text-brand-gold'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gold transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
          <a 
            href="https://forms.gle/your-form-id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-3 bg-brand-navy text-white rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:bg-brand-gold hover:text-brand-navy transition-colors"
          >
            Register
          </a>
        </div>

        <button 
          className="md:hidden text-brand-navy p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 mt-2 overflow-hidden"
          >
            <div className="bg-white border border-brand-navy/10 rounded-[2rem] px-6 py-8 flex flex-col gap-6 text-center shadow-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-lg font-display font-black uppercase tracking-[0.2em] ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://forms.gle/your-form-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 px-8 py-4 bg-brand-navy text-white rounded-full font-bold uppercase tracking-[0.2em]"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
