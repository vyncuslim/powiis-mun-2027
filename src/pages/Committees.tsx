import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { COMMITTEES } from '../constants';

export default function Committees() {
  return (
    <div className="pt-36 pb-24 px-6 bg-[#f8f3e8] min-h-screen text-brand-navy">
      <div className="max-w-6xl mx-auto">
        <section className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-[12px] uppercase tracking-[0.38em] font-bold text-brand-navy/45 mb-4">
            Committees
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold uppercase leading-[0.9] mb-5">
            Explore the academic
            <br />
            heart of the conference
          </h1>
          <p className="text-[17px] leading-8 text-brand-navy/68">
            POWIIS MUN committees are designed to give delegates a structured,
            serious, and engaging debate experience across a range of global
            issues.
          </p>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-20">
          {COMMITTEES.map((committee, index) => (
            <motion.article
              key={committee.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="bg-white rounded-[2rem] border border-brand-navy/8 shadow-sm overflow-hidden"
            >
              <img
                src={committee.image}
                alt={committee.name}
                className="w-full aspect-[16/9] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-gold">
                    {committee.name}
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-navy/40">
                    Open Committee
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold uppercase leading-[0.95] mb-4">
                  {committee.topic}
                </h2>
                <p className="text-brand-navy/66 leading-8 mb-6">
                  {committee.description}
                </p>
                {committee.chairs && (
                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-navy/40 mb-3">
                      Chairs
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {committee.chairs.map((chair) => (
                        <span
                          key={chair}
                          className="rounded-full bg-[#faf6ee] border border-brand-navy/8 px-4 py-2 text-[11px] uppercase tracking-[0.16em] font-bold"
                        >
                          {chair}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-brand-navy/8 pt-5">
                  <span className="text-sm text-brand-navy/55">
                    Study guide and topic details will be released ahead of the conference.
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white rounded-[2rem] border border-brand-navy/8 shadow-sm p-9">
            <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-brand-navy/45 mb-4">
              Choosing a committee
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase leading-[0.95] mb-4">
              How to decide where you fit best
            </h2>
            <p className="text-brand-navy/66 leading-8 mb-5">
              Start with your interests, then think about the type of debate you
              enjoy. Some committees are broad and policy-driven, while others
              focus on urgent crises and sharper negotiation.
            </p>
            <div className="space-y-4">
              {[
                'Choose a topic you genuinely want to research.',
                'Consider whether you want a larger or more specialised committee.',
                'Read the study materials when released before finalising your choice.',
              ].map((tip) => (
                <div key={tip} className="flex gap-3 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                  <p className="text-brand-navy/66 leading-7">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-navy rounded-[2rem] text-white p-9 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-white/45 mb-4">
              Ready to debate?
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase leading-[0.95] mb-4">
              Start your MUN journey with POWIIS
            </h2>
            <p className="text-white/75 leading-8 mb-8">
              Explore the conference, choose the committee that suits you best,
              and register your interest for the next edition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-[0.2em]"
              >
                Register now
              </a>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                View resources
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
