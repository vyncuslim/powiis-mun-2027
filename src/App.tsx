import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Logo } from './components/Logo';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Committees from './pages/Committees';
import Resources from './pages/Resources';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8f3e8] text-brand-navy selection:bg-brand-gold selection:text-brand-navy flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-16 px-6 bg-[#fcfaf4] text-brand-navy/50 border-t border-brand-navy/8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <Logo size="sm" />
                  <div>
                    <p className="font-display font-semibold text-brand-navy tracking-wide text-2xl leading-none">POWIIS</p>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-brand-navy/45 mt-1">Prince of Wales Island International School</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed max-w-xs">
                  Prince of Wales Island International School Model United Nations (POWIIS MUN) is a student-led conference fostering global diplomacy and academic excellence.
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                <h4 className="font-display font-semibold uppercase text-brand-navy text-sm tracking-[0.24em]">Contact</h4>
                <div className="space-y-4">
                  <a href="mailto:powiismun@powiis.edu.my" className="flex items-center gap-3 hover:text-brand-gold transition-colors text-xs">
                    <Mail size={16} />
                    <span>powiismun@powiis.edu.my</span>
                  </a>
              <a href="https://www.instagram.com/powiismunc27?igsh=MTVmMDJpMjcxYThhdQ%3D%3D&utm_source=qr" className="flex items-center gap-3 hover:text-brand-gold transition-colors text-xs">
                    <Instagram size={16} />
                    <span>@powiismun</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="font-display font-semibold uppercase text-brand-navy text-sm tracking-[0.24em]">Quick Links</h4>
                <div className="flex flex-col gap-3 text-xs">
                  <Link to="/about-us" className="hover:text-brand-gold transition-colors">About POWIIS MUN</Link>
                  <Link to="/committees" className="hover:text-brand-gold transition-colors">Academic Committees</Link>
                  <Link to="/team" className="hover:text-brand-gold transition-colors">The Secretariat</Link>
                  <Link to="/resources" className="hover:text-brand-gold transition-colors">Delegate Resources</Link>
                  <a href="https://www.powiis.edu.my" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">POWIIS Official Site</a>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-brand-navy/8 mb-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-navy/45">
                &copy; 2027 POWIIS MUNC. All rights reserved.
              </p>
              <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-brand-navy/55">
                <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
                <Link to="/about-us" className="hover:text-brand-gold transition-colors">About</Link>
                <Link to="/committees" className="hover:text-brand-gold transition-colors">Committees</Link>
                <Link to="/team" className="hover:text-brand-gold transition-colors">Secretariat</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
