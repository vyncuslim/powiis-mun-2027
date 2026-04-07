import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Download, BookOpen } from 'lucide-react';
import { RESOURCES } from '../constants';

export default function Resources() {
  return (
    <div className="pt-36 pb-24 px-6 bg-[#f8f3e8] min-h-screen text-brand-navy">
      <div className="max-w-6xl mx-auto">
        <section className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-[12px] uppercase tracking-[0.38em] font-bold text-brand-navy/45 mb-4">
            Resources
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold uppercase leading-[0.9] mb-5">
            Prepare with clarity
            <br />
            and confidence
          </h1>
          <p className="text-[17px] leading-8 text-brand-navy/68">
            This page is designed to hold the essential materials delegates need
            before the conference, from committee study guides to rules of
            procedure and writing references.
          </p>
        </section>

        <section className="grid lg:grid-cols-[0.88fr_1.12fr] gap-8 mb-20">
          <div className="bg-white rounded-[2rem] border border-brand-navy/8 shadow-sm p-9">
            <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-4">
              How to prepare
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase leading-[0.95] mb-4">
              Build a strong delegate foundation
            </h2>
            <div className="space-y-5 text-brand-navy/66 leading-8">
              <p>
                Strong preparation begins with understanding your assigned
                country, your committee topic, and the structure of formal
                debate.
              </p>
              <p>
                The resources below are meant to help both first-time and
                experienced delegates prepare in a focused, practical way.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Research your country’s background and foreign policy.',
              'Read the committee topic before writing your position paper.',
              'Study the rules of procedure so you can speak with confidence.',
              'Practise drafting clauses and responding to points of information.',
            ].map((tip, index) => (
              <div
                key={tip}
                className={`rounded-[1.75rem] p-6 border shadow-sm ${
                  index % 2 === 0
                    ? 'bg-white border-brand-navy/8'
                    : 'bg-[#fffaf0] border-brand-navy/8'
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-gold mb-3">
                  Tip 0{index + 1}
                </p>
                <p className="text-brand-navy/72 leading-7">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-20">
          {RESOURCES.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[2rem] border border-brand-navy/8 shadow-sm p-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/18 flex items-center justify-center shrink-0">
                  <BookOpen size={24} className="text-brand-navy" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-navy/40 mb-2">
                    Delegate Material
                  </p>
                  <h2 className="text-3xl font-display font-semibold uppercase leading-[0.95] mb-3">
                    {resource.title}
                  </h2>
                  <p className="text-brand-navy/66 leading-7 mb-6">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-5 text-[11px] uppercase tracking-[0.18em] font-bold">
                    <span className="inline-flex items-center gap-2 text-brand-navy/45">
                      <Download size={14} />
                      PDF coming soon
                    </span>
                    <span className="inline-flex items-center gap-2 text-brand-navy/45">
                      <ExternalLink size={14} />
                      Online version coming soon
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="rounded-[2.5rem] bg-brand-navy text-white px-8 py-14 md:px-14 md:py-16 shadow-sm">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-white/50 mb-4">
              Need help?
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold uppercase leading-[0.95] mb-5">
              Contact the academics team
            </h2>
            <p className="text-white/75 text-[17px] leading-8 mb-8 max-w-2xl">
              If you have questions about research, committee expectations, or
              how to prepare, the academic team can point you in the right
              direction.
            </p>
            <a
              href="mailto:powiismun@powiis.edu.my"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-[0.2em]"
            >
              Email academics
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
