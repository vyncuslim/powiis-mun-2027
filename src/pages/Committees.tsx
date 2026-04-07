import React from 'react';
import { motion } from 'motion/react';
import { COMMITTEES } from '../constants';

export default function Committees() {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
            Academic Debate
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 uppercase text-brand-navy">
            OUR <span className="text-brand-gold italic font-serif">COMMITTEES</span>
          </h1>
          <p className="text-xl font-serif italic text-brand-navy/60 max-w-2xl mx-auto">
            Explore the diverse range of committees at POWIIS MUN 2027, each tackling critical global issues.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {COMMITTEES.map((committee, i) => (
            <motion.div 
              key={committee.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-brand-navy/5 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={committee.image} 
                  alt={committee.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/40 transition-colors" />
                <div className="absolute top-6 left-6 bg-brand-gold text-brand-navy px-6 py-2 rounded-full font-display font-black text-xl">
                  {committee.name}
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-display font-black uppercase mb-4 text-brand-navy group-hover:text-brand-gold transition-colors">
                  {committee.topic}
                </h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed mb-8">
                  {committee.description || `Delegates in the ${committee.name} will engage in rigorous debate to address the complexities of ${committee.topic.toLowerCase()}, seeking innovative and sustainable solutions.`}
                </p>
                
                {committee.chairs && (
                  <div className="mb-8">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-3">Chaired By</p>
                    <div className="flex flex-wrap gap-2">
                      {committee.chairs.map((chair, idx) => (
                        <span key={idx} className="px-3 py-1 bg-brand-navy/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-navy">
                          {chair}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto flex justify-between items-center">
                  <button className="text-xs uppercase tracking-widest font-black text-brand-navy hover:text-brand-gold transition-colors flex items-center gap-2">
                    View Study Guide <span>→</span>
                  </button>
                  <div className="h-px flex-grow mx-6 bg-brand-navy/10" />
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Available</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Committee Selection Tip */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-black uppercase mb-8 leading-tight">
              HOW TO CHOOSE YOUR <br/>
              <span className="text-brand-gold italic font-serif">COMMITTEE?</span>
            </h2>
            <div className="space-y-6 text-brand-navy/70 leading-relaxed">
              <p>
                Choosing the right committee is crucial for your MUN experience. Consider your interests, experience level, and the topics being debated.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Interest", desc: "Choose a topic that you are passionate about or want to learn more about." },
                  { title: "Experience", desc: "If you are a beginner, consider a larger committee like UNHRC. For more challenge, try UNSC." },
                  { title: "Research", desc: "Look at the study guides to see which topic resonates with your research style." }
                ].map((tip, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-display font-black uppercase text-sm mb-1">{tip.title}</h4>
                      <p className="text-xs">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000" 
                alt="Committee Session" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-32 p-16 rounded-[4rem] bg-brand-navy text-brand-cream text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black uppercase">MUN</div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase">Ready to Debate?</h2>
            <p className="text-xl font-serif italic mb-12 text-brand-gold/80">Choose your committee and start your journey.</p>
            <button className="px-12 py-6 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
