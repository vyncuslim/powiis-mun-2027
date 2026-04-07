import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <Logo size="sm" className="group-hover:scale-110 transition-transform" />
          <div className="hidden sm:block">
            <p className="font-display font-black text-brand-cream tracking-wider leading-none mb-1">POWIIS MUN</p>
            <p className="text-[8px] uppercase tracking-[0.3em] opacity-60 font-bold">Penang 2027</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-xs uppercase tracking-[0.3em] font-bold transition-all hover:text-brand-gold relative group ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-cream/70'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-brand-gold transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
          <a 
            href="https://forms.gle/your-form-id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand-gold text-brand-navy rounded-full text-[10px] uppercase tracking-widest font-black hover:scale-105 transition-all shadow-lg"
          >
            Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-cream p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-navy border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-xl font-display font-black uppercase tracking-widest ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-cream'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://forms.gle/your-form-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 px-8 py-4 bg-brand-gold text-brand-navy rounded-xl font-bold uppercase tracking-widest"
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
