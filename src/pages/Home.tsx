import React from 'react';
import { motion } from 'motion/react';
import { Construction, Mail, Instagram, Globe } from 'lucide-react';
import { Logo } from '../components/Logo';

export default function Home() {
  return (
    <div className="pt-36 pb-24 px-6 bg-[#f8f3e8] min-h-screen text-brand-navy flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <div className="mb-6">
            <Logo size="lg" className="shadow-md" />
          </div>
          <p className="text-[12px] uppercase tracking-[0.38em] font-bold text-brand-navy/45 mb-4">
            POWIIS MUN 2027
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold uppercase leading-[0.9] mb-6">
            Under construction
          </h1>
          <p className="text-[17px] leading-8 text-brand-navy/68 max-w-2xl mx-auto">
            Our official website is currently being updated by the secretariat. The final site featuring full registration details, committee pages, and delegate guides is coming soon.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[2.5rem] bg-white border border-brand-navy/8 shadow-sm p-10 md:p-14 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/18">
            <Construction size={28} className="text-brand-navy" />
          </div>
          
          <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-4">
            Official Launch Coming Soon
          </p>
          
          <p className="text-brand-navy/66 leading-8 max-w-xl mx-auto mb-8">
            For enquiries regarding delegate registrations, school delegations, or academic affairs, please reach out to our team.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:powiismun@powiis.edu.my"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
            >
              <Mail size={16} />
              Email Secretariat
            </a>
            <a
              href="https://www.instagram.com/powiismunc27?igsh=MTVmMDJpMjcxYThhdQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-brand-navy/12 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <a
              href="https://www.powiis.edu.my"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-brand-navy/12 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              <Globe size={16} />
              POWIIS Site
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
