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
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        scrolled || !isHome ? 'py-4' : 'py-5'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-300 ${
          scrolled || !isHome ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <div className="flex items-center justify-between gap-4 rounded-[1.85rem] border border-brand-navy/10 bg-white/94 px-4 py-3 shadow-[0_14px_40px_rgba(19,40,81,0.08)] backdrop-blur-md">
          <Link
            to="/"
            className="flex items-center gap-4 rounded-[1.3rem] border border-brand-navy/8 bg-[#faf7ef] px-3 py-2 group"
          >
            <Logo size="sm" className="group-hover:scale-[1.03] transition-transform" />
            <div className="hidden sm:block">
              <p className="font-display text-2xl leading-none text-brand-navy">POWIIS</p>
              <p className="text-[8px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mt-1">
                Prince of Wales Island International School
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`rounded-[1rem] border px-4 py-3 text-[10px] uppercase tracking-[0.24em] font-bold transition-colors ${
                    isActive
                      ? 'border-brand-gold/40 bg-[#fffaf0] text-brand-gold'
                      : 'border-transparent text-brand-navy/68 hover:border-brand-navy/10 hover:bg-[#faf7ef] hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="https://forms.gle/your-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-[1rem] bg-brand-navy px-5 py-3 text-[10px] uppercase tracking-[0.22em] font-black text-white transition-colors hover:bg-brand-gold hover:text-brand-navy"
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
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 mt-2 overflow-hidden"
          >
            <div className="rounded-[1.85rem] border border-brand-navy/10 bg-white px-5 py-6 shadow-[0_14px_40px_rgba(19,40,81,0.08)]">
              <div className="grid gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`rounded-[1rem] border px-4 py-4 text-center text-sm uppercase tracking-[0.2em] font-bold ${
                      location.pathname === link.path
                        ? 'border-brand-gold/40 bg-[#fffaf0] text-brand-gold'
                        : 'border-brand-navy/8 text-brand-navy'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://forms.gle/your-form-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-[1rem] bg-brand-navy px-6 py-4 text-center text-sm uppercase tracking-[0.2em] font-bold text-white"
                >
                  Register Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
