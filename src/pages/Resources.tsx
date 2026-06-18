import React from 'react';
import { motion } from 'motion/react';
import { Construction, Mail } from 'lucide-react';

export default function Resources() {
  return (
    <div className="pt-36 pb-24 px-6 bg-[#f8f3e8] min-h-screen text-brand-navy">
      <div className="max-w-4xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[12px] uppercase tracking-[0.38em] font-bold text-brand-navy/45 mb-4">
            Resources
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold uppercase leading-[0.9] mb-5">
            Under construction
          </h1>
          <p className="text-[17px] leading-8 text-brand-navy/68 max-w-2xl mx-auto">
            Delegate materials — study guides, rules of procedure, country
            matrix, and handbook — are being prepared and will be published
            here soon.
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
            Coming soon
          </p>
          <p className="text-brand-navy/66 leading-8 max-w-xl mx-auto mb-8">
            Our academics team is finalising conference resources. Check back
            closer to the conference for updated materials.
          </p>
          <a
            href="mailto:powiismun@powiis.edu.my"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-gold hover:text-brand-navy transition-colors"
          >
            <Mail size={16} />
            Email academics
          </a>
        </motion.div>
      </div>
    </div>
  );
}