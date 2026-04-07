import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react';
import { RESOURCES } from '../constants';

export default function Resources() {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
            Preparation Material
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 uppercase text-brand-navy">
            DELEGATE <span className="text-brand-gold italic font-serif">RESOURCES</span>
          </h1>
          <p className="text-xl font-serif italic text-brand-navy/60 max-w-2xl mx-auto">
            Everything you need to prepare for a successful conference experience at POWIIS MUN 2027.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESOURCES.map((resource, i) => (
            <motion.div 
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-brand-navy/5 flex items-start gap-6 group hover:border-brand-gold/50 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-navy/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors">
                <FileText className="text-brand-navy" size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-display font-black uppercase mb-2 text-brand-navy">{resource.title}</h3>
                <p className="text-brand-navy/60 text-sm mb-6 leading-relaxed">{resource.description}</p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-brand-navy hover:text-brand-gold transition-colors">
                    <Download size={14} />
                    Download PDF
                  </button>
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-brand-navy hover:text-brand-gold transition-colors">
                    <ExternalLink size={14} />
                    View Online
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preparation Tips */}
        <div className="mt-32 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-display font-black uppercase mb-6 leading-tight">
              HOW TO <br/>
              <span className="text-brand-gold italic font-serif">PREPARE?</span>
            </h2>
            <p className="text-brand-navy/60 text-sm leading-relaxed">
              Success in MUN comes from thorough research and a deep understanding of your assigned country's foreign policy.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Research Your Country",
                desc: "Understand your nation's history, economy, and previous stances on the committee topics."
              },
              {
                title: "Write Position Papers",
                desc: "Clearly articulate your country's perspective and proposed solutions to the issues at hand."
              },
              {
                title: "Study the ROP",
                desc: "Familiarize yourself with the Rules of Procedure to navigate the debate effectively."
              },
              {
                title: "Practice Speaking",
                desc: "Prepare opening statements and practice responding to points of information."
              }
            ].map((tip, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-brand-gold font-display font-black text-2xl">0{i+1}</div>
                <div>
                  <h4 className="font-display font-black uppercase mb-2 text-sm">{tip.title}</h4>
                  <p className="text-xs text-brand-navy/60 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 p-16 rounded-[4rem] bg-brand-navy text-brand-cream text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 text-[20vw] font-black uppercase">PREP</div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase leading-tight">Need <span className="text-brand-gold italic font-serif">Help?</span></h2>
            <p className="text-xl font-serif italic mb-12 text-brand-gold/80">Contact our academic team for guidance on your research.</p>
            <a 
              href="mailto:academics@powiismun.com"
              className="inline-block px-12 py-6 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              Email Academics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
